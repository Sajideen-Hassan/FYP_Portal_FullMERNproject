import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ForgetPassword from "./Pages/ForgetPasswordForm/ForgetPassword";
import ChangePassword from "./Pages/ChangePasswordForm/ChangePassword";
import HomePage from "./Pages/HomePageForm/HomePage";
import Layout from "./Components/Layout/Layout";
import SupervisorPage from "./Pages/SupervisorPage/SupervisorPage";
import ProjectViewPage from "./Pages/ProjectViewPage/ProjectViewPage";
import ProjectListPage from "./Pages/ProjectList/ProjectListPage";
import ApplicationPage from "./Pages/ApplicationPage/ApplicationPage";
import SupervisorRequestForm from "./Pages/SupervisorRequestPage/SupervisorRequestForm";
import TemplatePage from "./Pages/TemplatePage/TemplatePage";
import OtpPage from "./Pages/OtpForm/OtpPage";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<LoginPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SupervisorPage" element={<SupervisorPage />} />
        <Route path="/ProjectViewPage" element={<ProjectViewPage />} />
        <Route path="/ProjectListPage" element={<ProjectListPage />} />
        <Route path="/ApplicationPage" element={<ApplicationPage />} />
        <Route path="/SupervisorRequestForm" element={<SupervisorRequestForm />} />
        <Route path="/TemplatePage" element={<TemplatePage />} />
        <Route path="/OtpPage" element={<OtpPage />} />
        <Route path="/SideBar" element={<SideBar />} />
        <Route path="/NavBar" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
