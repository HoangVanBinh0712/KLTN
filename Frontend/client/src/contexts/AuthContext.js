import { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import { AuthReducer } from "../reducers/AuthReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME, USER_ROLE } from "./Constants";
import SetAuthToken from "../utlis/SetAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    authloading: true,
    isAuthenticated: false,
    user: null,
    role: null,
  });

  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
  });
  // auth user
  const loadUser = async (user) => {
    if (user === undefined) user = localStorage[USER_ROLE];
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      SetAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        if (true) {
          const response = await axios.get(`${apiUrl}/${user}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${recentToken}`,
            },
          });
          dispatch({
            type: "SET_AUTH",
            payload: {
              isAuthenticated: true,
              user: response.data,
              role: response.data.role,
            },
          });
        }
      } else throw new Error("Unauthorized !");
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      localStorage.removeItem(USER_ROLE);
      SetAuthToken(null);
      dispatch({
        type: "REMOVE_AUTH",
        payload: {
          isAuthenticated: false,
          user: null,
          role: null,
        },
      });
    }
  };

  useEffect(() => {
    loadUser();
  }, []);


  // Login user
  const loginUser = async (userForm, role) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, userForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      /* console.log(response.data) */
      if (response.status === 200) {
        if (response.data.userInfo.role === role) {
          localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token);
          let u_role = null
          if (role === 'ROLE_USER') {
            u_role = 'user'
          }
          else if (role === 'ROLE_EMPLOYER') {
            u_role = 'employer'
          }
          else if (role === 'ROLE_ADMIN') {
            u_role = 'admin'
          }
          localStorage.setItem(USER_ROLE, u_role);
          await loadUser(localStorage[USER_ROLE]);
        }
        else return { success: false, message: "Username or password is incorrect!" };
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Register user
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/register-jobseeker`, userForm);
      console.log('helo mo do phuc co')
      return response.data;
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  // Register emp
  const registerEmployer = async (EmpForm) => {
    try {
      const response = await axios.post(`${apiUrl}/register-employer`, EmpForm);
      if (response.data.success)
        return response.data;
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  const logoutSection = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    localStorage.removeItem(USER_ROLE);
    dispatch({
      type: "REMOVE_AUTH",
      payload: {
        isAuthenticated: false,
        user: null,
        role: null,
      },
    });
  };

  /* const updateUserProfile = async (updateType, profile, avatar) => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("info", JSON.stringify(profile));
      bodyFormData.append("avatar", avatar);

      const response = await axios.put(
        `${apiUrl}/${updateType}`,
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        dispatch({
          type: "PROFILE_LOAD_SUCCESS",
          payload: { profile: response.data },
        });
      }
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const uploadUserCV = async (CV) => {
    const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
    try {
      const response = await axios.post(`${apiUrl}/user/cv`, CV, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${recentToken}`,
        },
      });
      if (response.data.success) {
        dispatch({
          type: "CV_UPLOAD_SUCCESS",
          payload: { profile: response.data },
        });
      }
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const submitUserCV = async (submitForm) => {
    try {
      const response = await axios.post(
        `${apiUrl}/user/submitcv?postId=${submitForm.postId}&mediaId=${submitForm.mediaId}`
      );
      if (response.data.success) {
        dispatch({
          type: "CV_SUBMIT_SUCCESS",
          payload: { submited: true },
        });
      }
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const changePassword = async (userType, data) => {
    try {
      const response = await axios.put(`${apiUrl}/${userType}/password`, data);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  };

  const postPredict = async (mediaId) => {
    try {
      const response = await axios.get(`http://localhost:8081/user/cvpredict?mediaId=${mediaId}`);
      if (response.data.success) {
        dispatch({ type: "POSTS_PREDICT_SUCCESS", payload: response.data })
      }
      return response.data;
    } catch (err) {
      dispatch({ type: "POSTS_PREDICT_FAIL" })
      return err.response.data;
    }
  } */
  //conxtext data
  const authContextData = {
    loginUser,
    registerUser,
    registerEmployer,
    logoutSection,
    showToast,
    setShowToast,
    authState,
  };

  //return
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
