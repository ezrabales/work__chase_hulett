import "./App.css";
// external library imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// component imports
import Main from "../Main/Main";
import Header from "../Header/Header";
import Cinema from "../Cinema/Cinema";
import Videography from "../Videography/Videography";
import Footer from "../Footer/Footer";
import Admin from "../Admin/Admin";
import ProtectedRoute from "../ProtectedRoute";
// modal imports
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ContactMeModal from "../ContactMeModal/ContactMeModal";
// hook imports
import usePageViews from "../../hooks/usePageViews";
// api imports
import { ThirdPartyApi } from "../../utils/ThirdPartyApi";

const App = () => {
  console.log(new ThirdPartyApi()._getMovieData());
  // state declaration station
  //    modals
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [contactMeModalIsOpen, setContactMeModalIsOpen] = useState(false);
  //    logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // LoginModal functions
  function logIn({ email, password }) {
    console.log("Login!", email, password);
  }

  function closeLoginModal() {
    setLoginModalIsOpen(false);
  }

  // RegisterModal functions
  function register({ key, email, password }) {
    console.log("Register!", key, email, password);
  }

  function closeRegisterModal() {
    setRegisterModalIsOpen(false);
  }

  // ContactMeModal functions
  function contact({ name, email, message }) {
    console.log("TODO", name, email, message);
  }
  function closeContactMeModal() {
    setContactMeModalIsOpen(false);
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
      <LoginModal
        isOpen={loginModalIsOpen}
        onLogin={logIn}
        onCloseModal={closeLoginModal}
        setRegisterOpen={setRegisterModalIsOpen}
      />
      <RegisterModal
        isOpen={registerModalIsOpen}
        onRegister={register}
        onCloseModal={closeRegisterModal}
        setLoginOpen={setLoginModalIsOpen}
      />
      <ContactMeModal
        isOpen={contactMeModalIsOpen}
        onCloseModal={closeContactMeModal}
        onContact={contact}
      />
      <Footer
        logInClick={setLoginModalIsOpen}
        contactMeClick={setContactMeModalIsOpen}
      />
    </div>
  );
};
export default App;
