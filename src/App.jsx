import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import useUser from "./customHooks/useUser";
import UserContext from "./contexts/userContext";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import LogIn from "./pages/LogIn.jsx";
import About from "./pages/About.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer";
import CreatePost from "./pages/CreatePost";
import FullPostCard from "./Components/FullPostCard";
import ForgetPasswordForm from "./pages/ForgetPasswordForm";
import UserProfile from "./pages/UserProfile";
import UpdatePost from "./pages/UpdatPost";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const { user, setUser } = useUser();

  //console.log({ user });

  // if (!user) {
  //   //console.log("in no user");
  //   return <LogIn setUser={setUser}></LogIn>;
  // }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ToastContainer autoClose={1500} />
      <Header />
      <ScrollToTop />

      <Routes>
        {/* revisit */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route element={<About />} path="/about" />
        <Route element={<CreatePost />} path="/recipe/create" />
        <Route element={<FullPostCard />} path="/recipe/:id" />
        <Route element={<ForgetPasswordForm />} path="/ForgetPasswordForm" />
        <Route element={<UserProfile />} path="/userProfile" />
        <Route element={<UpdatePost />} path="/recipe/edit/:id" />
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
