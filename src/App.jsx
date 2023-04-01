import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
import UpdatePost from "./pages/UpdatPost";
import ScrollToTop from "./Components/ScrollToTop";
import Cta from "./Components/Cta";

function App() {
  const { user, setUser } = useUser();

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
        <Route element={<Cta />} path="/cta" />
        <Route element={<CreatePost />} path="/recipe/create" />
        <Route element={<FullPostCard />} path="/recipe/:id" />
        <Route element={<UpdatePost />} path="/recipe/edit/:id" />
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
