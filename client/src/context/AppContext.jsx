import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user); // This gives you user._id
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeBg = async (image) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }
      if (credit === 0) {
        toast.warn("You're out of credits! Please buy more to continue.");
        navigate("/buy");
        return;
      }
      setImage(image);
      setResultImage(false);
      navigate("/result");

      const token = localStorage.getItem("token");

      const formData = new FormData();

      image && formData.append("image", image);
      const { data } = await axios.post(
        backendUrl + "/api/image/remove-bg",
        formData,
        { headers: { token } }
      );
      if (data.success) {
        setResultImage(data.resultImage);
        data.creditBalance && setCredit(data.creditBalance);
      } else {
        toast.error(data.message);
        data.creditBalance && setCredit(data.creditBalance);
      }

      if (data.creditBalance === 0) {
        navigate("/buy");
      }

      console.log(image);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    navigate("/");
  };
  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    token,
    setToken,
    backendUrl,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
