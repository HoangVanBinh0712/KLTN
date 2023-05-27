import { useLocation } from "react-router-dom";
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
