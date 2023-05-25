import { useContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./admin_scenes/global/Topbar";
import Sidebar from "./admin_scenes/global/Sidebar";
import Dashboard from "./admin_scenes/Dashboard";
import Account from "./admin_scenes/Account";
import Post from "./admin_scenes/Post";
import Bar from "./admin_scenes/Bar";
import Category from "./admin_scenes/Services";
import Form from "./admin_scenes/Form";
import Line from "./admin_scenes/Line";
import Pie from "./admin_scenes/Pie";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import AdminRoute from "./routing/AdminRoute";
import EmployeeRoute from "./routing/EmployeeRoute";
import EmployerRoute from "./routing/EmployerRoute";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import { ToastProvider } from "./contexts/ToastProvider";
import GlobalContextProvider from "./contexts/GlobalContext";
import PostContextProvider from "./contexts/PostContext";
import ChatBox from "./components/global/ChatBox";
import { Login } from "@mui/icons-material";
import ForgotPassword from "./components/page/login/ForgotPassword";
import LoginGG from "./components/page/login/LoginWithGG";
import Register from "./components/page/register/Register";
import HomePage from "./employee_scenes/HomePage";
import HighLightCompany from "./components/global/HighlightCompany";
import PostDetails from "./components/PostDetails";
import SearchPageComponent from "./employee_scenes/components/SearchPageComponent";
import EmployerProfile from "./employer_scenes/components/EmployerProfile";
import PageCustomerServices from "./components/PageCustomerServices";
import PageNotFound from "./components/page/notfound/PageNotFound";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const {
    authState: { user, authloading },
  } = useContext(AuthContext);

  const location = useLocation();
  const currentUrl = location.pathname;

  let body;

  if (currentUrl.includes("/admin")) {
    body = (
      <AdminRoute path="/admin/dashboard /admin/account /admin/post /admin/services /admin/form /admin/bar /admin/pie /admin/line /admin/industries /admin/reports /admin/form  /admin/user-statitics /admin/post-statitics /admin/revenue-statitics /admin/report-statitics " />
    );
  } else if (currentUrl.includes("/employer")) body = <EmployerRoute path="/employer/login" />;
  else if (currentUrl.includes("/user")) {
    body = <EmployeeRoute path="/user/login " />;
  }

  return (
    <>
      <PostContextProvider>
        <ToastProvider>
          <GlobalContextProvider>
            {body}
            <Routes>
              <Route path="/user/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/login/:token" element={<LoginGG />} />
              <Route path="/user/register" element={<Register />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/highlight-company" element={<HighLightCompany />} />
              <Route path="/post/:id" element={<PostDetails />} />
              <Route path="/posts" element={<SearchPageComponent />} />
              <Route path="/posts/:keyword" element={<SearchPageComponent />} />
              <Route path="/recruiter/:id" element={<EmployerProfile />} />
              <Route path="/customer-services" element={<PageCustomerServices />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
            {!authloading && user && <ChatBox />}
          </GlobalContextProvider>
        </ToastProvider>
      </PostContextProvider>
    </>
  );
}

export default App;
