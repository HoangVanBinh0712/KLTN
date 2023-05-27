// import { useContext, useState } from "react";
// import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import { useMode } from "./theme";
// import AdminRoute from "./routing/AdminRoute";
// import EmployeeRoute from "./routing/EmployeeRoute";
// import EmployerRoute from "./routing/EmployerRoute";
// import { AuthContext } from "./contexts/AuthContext";
// import { ToastProvider } from "./contexts/ToastProvider";
// import GlobalContextProvider from "./contexts/GlobalContext";
// import PostContextProvider from "./contexts/PostContext";
// import ChatBox from "./components/global/ChatBox";
// import ForgotPassword from "./components/page/login/ForgotPassword";
// import LoginGG from "./components/page/login/LoginWithGG";
// import Register from "./components/page/register/Register";
// import HomePage from "./employee_scenes/HomePage";
// import HighLightCompany from "./components/global/HighlightCompany";
// import PostDetails from "./components/PostDetails";
// import SearchPageComponent from "./employee_scenes/components/SearchPageComponent";
// import EmployerProfile from "./employer_scenes/components/EmployerProfile";
// import PageCustomerServices from "./components/PageCustomerServices";
// import PageNotFound from "./components/page/notfound/PageNotFound";
// import Login from "./components/page/login/Login";

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   const {
//     authState: { user, authloading },
//   } = useContext(AuthContext);

//   const location = useLocation();
//   const currentUrl = location.pathname;
//   let body;
//   const freeUrl = ["/user/login", "/forgot-password", "/login", "/user/register", "/home", "/highlight-company", "/post", "/posts", "/recruiter", "/customer-services"];
//   function isInclude() {
//     return freeUrl.some((u) => currentUrl.includes(u));
//   }
//   if (currentUrl === "/") {
//     return <Navigate to="/home" />;
//   }
//   if (isInclude) {
//     console.log(currentUrl);
//     body = (
//       <Routes>
//         <Route path="/user/login" element={<Login />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/login/:token" element={<LoginGG />} />
//         <Route path="/user/register" element={<Register />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/highlight-company" element={<HighLightCompany />} />
//         <Route path="/post/:id" element={<PostDetails />} />
//         <Route path="/posts" element={<SearchPageComponent />} />
//         <Route path="/posts/:keyword" element={<SearchPageComponent />} />
//         <Route path="/recruiter/:id" element={<EmployerProfile />} />
//         <Route path="/customer-services" element={<PageCustomerServices />} />
//         <Route path="/*" element={<PageNotFound />} />
//       </Routes>
//     );
//   } else if (currentUrl.includes("/admin")) {
//     body = (
//       <AdminRoute path="/admin/dashboard /admin/account /admin/post /admin/services /admin/form /admin/bar /admin/pie /admin/line /admin/industries /admin/reports /admin/form  /admin/user-statitics /admin/post-statitics /admin/revenue-statitics /admin/report-statitics " />
//     );
//   } else if (currentUrl.includes("/employer")) body = <EmployerRoute path="/employer/login" />;
//   else if (currentUrl.includes("/user")) {
//     body = <EmployeeRoute path="/user/login " />;
//   }

//   return (
//     <>
//       <PostContextProvider>
//         <ToastProvider>
//           <GlobalContextProvider>
//             {body}

//             {!authloading && user && <ChatBox />}
//           </GlobalContextProvider>
//         </ToastProvider>
//       </PostContextProvider>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMode } from "./theme";
import AdminRoute from "./routing/AdminRoute";
import EmployeeRoute from "./routing/EmployeeRoute";
import EmployerRoute from "./routing/EmployerRoute";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import { ToastProvider } from "./contexts/ToastProvider";
import GlobalContextProvider from "./contexts/GlobalContext";
import PostContextProvider from "./contexts/PostContext";
import { useContext } from "react";
import ChatBox from "./components/global/ChatBox";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const {
    authState: { user, authloading, role },
  } = useContext(AuthContext);
  const location = useLocation();
  const currentUrl = location.pathname;

  let body;

  if (currentUrl.includes("/admin")) {
    body = <AdminRoute path="/admin/dashboard /admin/account /admin/post /admin/services /admin/form /admin/bar /admin/pie /admin/line /admin/industries /admin/reports /admin/form" />;
  } else if (currentUrl.includes("/employer")) body = <EmployerRoute path="/employer/login" />;
  else {
    body = <EmployeeRoute path="/user/login " />;
  }

  return (
    <>
      <AuthContextProvider>
        <PostContextProvider>
          <ToastProvider>
            <GlobalContextProvider>
              {body}
              {!authloading && user && role!=="ROLE_ADMIN" && <ChatBox />}
            </GlobalContextProvider>
          </ToastProvider>
        </PostContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
