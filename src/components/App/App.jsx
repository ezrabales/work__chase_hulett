import "./App.css";
// external library imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// component imports
import Main from "../Main/Main";
import Header from "../Header/Header";
import Cinema from "../Cinema/Cinema";
import Videography from "../Videography/Videography";
import Footer from "../Footer/Footer";
import Admin from "../Admin/Admin";
import ProtectedRoute from "../ProtectedRoute.jsx";
// modal imports
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ContactMeModal from "../ContactMeModal/ContactMeModal";
import LogOutConfirmModal from "../LogOutConfirmModal/LogOutConfirmModal.jsx";
// hooks and utils imports
import usePageViews from "../../hooks/usePageViews";
// api imports
import { register, authorize, checkToken } from "../../utils/auth";

const App = () => {
  const navigate = useNavigate();
  // state declaration station
  //    modals
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [contactMeModalIsOpen, setContactMeModalIsOpen] = useState(false);
  const [logOutConfirmModalIsOpen, setLogOutConfirmModalIsOpen] =
    useState(false);
  //    log in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //    error message
  const [errorMessage, setErrorMessage] = useState();

  // token useEffect
  useEffect(() => {
    const currentToken = localStorage.getItem("jwt");

    if (!currentToken) {
      return;
    }
    checkToken(currentToken)
      .then((userData) => {
        setIsLoggedIn(true);
      })
      .catch(console.error);
  }, []);

  // error handling function
  function handleError(err) {
    setErrorMessage(err?.validation?.body?.message || err?.message);
  }

  // LoginModal functions
  function handleLogIn({ email, password }) {
    authorize({ email, password })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
        }
        setIsLoggedIn(true);
        setLoginModalIsOpen(false);
        navigate("/admin");
      })
      .catch(handleError);
  }

  function closeLoginModal() {
    setErrorMessage(null);
    setLoginModalIsOpen(false);
  }

  // RegisterModal functions
  function handleRegister({ key, email, password }) {
    register({ key, email, password })
      .then((res) => {
        setRegisterModalIsOpen(false);
        return authorize({ email, password });
      })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
        }
        setIsLoggedIn(true);
        navigate("/admin");
      })
      .catch(handleError);
  }

  function closeRegisterModal() {
    setErrorMessage(null);
    setRegisterModalIsOpen(false);
  }

  // ContactMeModal functions
  function handleContact({ name, email, message }) {
    console.log("TODO", name, email, message);
  }
  function closeContactMeModal() {
    setContactMeModalIsOpen(false);
  }

  // LogOutConfirmModal functions
  function handleConfirmLogOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setLogOutConfirmModalIsOpen(false);
  }

  function closeLogOutConfirmModal() {
    setLogOutConfirmModalIsOpen(false);
  }

  // Admin functions
  function handleAdminClick() {
    if (isLoggedIn) {
      navigate("/admin");
    } else {
      setLoginModalIsOpen(true);
    }
  }

  function handleLogOutClick() {
    setLogOutConfirmModalIsOpen(true);
  }

  usePageViews();
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/cinema" element={<Cinema></Cinema>} />
        <Route path="/videography" element={<Videography></Videography>} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer
        adminClick={handleAdminClick}
        onLogOut={handleLogOutClick}
        contactMeClick={setContactMeModalIsOpen}
      />
      <LoginModal
        isOpen={loginModalIsOpen}
        onLogin={handleLogIn}
        onCloseModal={closeLoginModal}
        setRegisterOpen={setRegisterModalIsOpen}
        errMessage={errorMessage}
        setErrMessage={setErrorMessage}
      />
      <RegisterModal
        isOpen={registerModalIsOpen}
        onRegister={handleRegister}
        onCloseModal={closeRegisterModal}
        setLoginOpen={setLoginModalIsOpen}
        errMessage={errorMessage}
        setErrMessage={setErrorMessage}
      />
      <ContactMeModal
        isOpen={contactMeModalIsOpen}
        onCloseModal={closeContactMeModal}
        onContact={handleContact}
      />
      <LogOutConfirmModal
        isOpen={logOutConfirmModalIsOpen}
        onClose={closeLogOutConfirmModal}
        onConfirmLogOut={handleConfirmLogOut}
      />
    </div>
  );
};
export default App;
