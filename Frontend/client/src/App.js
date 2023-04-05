import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
    
    <AdminRoute path='/admin/dashboard /admin/account /admin/post /admin/services /admin/form /admin/bar /admin/pie /admin/line /admin/industries /admin/reports /admin/form'/>
    <EmployeeRoute path='/user/login /user/home'/>
    <EmployerRoute path='/employer/login '/>
    </>
  );
}

export default App;
