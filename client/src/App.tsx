import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Task from "./pages/Task";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import ToasterContext from "./context/ToasterContext";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path={"/"} element={<Profile />} />
        <Route path={"/task"} element={<Task />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToasterContext />
    </Router>
  );
};

export default App;
