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

  const loginGoogleUser = async (token) => {
    try {
      const response = await axios.get(`${apiUrl}/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
        localStorage.setItem(USER_ROLE, 'user');
        await loadUser('user');
      }
      return response.data;
    } catch (error) {
      if (error.response) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

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

  // auth user
  const getUser = async (user) => {
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {

        const response = await axios.get(`${apiUrl}/${user}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        if (response.status === 200)
          return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };
  //update info user
  const updateUserInfo = async (userInfo, avatar, cover) => {
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      var bodyFormData = new FormData();
      bodyFormData.append("info", JSON.stringify(userInfo));
      bodyFormData.append("avatar", avatar);
      bodyFormData.append("cover", cover);

      if (recentToken !== undefined) {
        const response = await axios.put(`${apiUrl}/user`, bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  //get achive
  const getUserAchive = async () => {
    try {

      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {

        const response = await axios.get(`${apiUrl}/user/achievements`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        if (response.status === 200) {
          dispatch({
            type: "SET_ACHIVEMENT",
            payload: {
              achivement: response.data,
            },
          });
        }
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };
  //update achive
  const updateUserAchive = async (id, info, image) => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("info", JSON.stringify(info));
      bodyFormData.append("image", image);
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {

        const response = await axios.put(`${apiUrl}/user/achievements/${id}`, bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  //create achive
  const createUserAchive = async (info, image) => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("info", JSON.stringify(info));
      bodyFormData.append("image", image);
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {

        const response = await axios.post(`${apiUrl}/user/achievements`, bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  //delete achive
  const deleteUserAchive = async (id) => {
    try {

      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {

        const response = await axios.delete(`${apiUrl}/user/achievements/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  //chang password
  const changPassword = async (pw) => {
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        const response = await axios.put(`${apiUrl}/user/password`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  //verify email
  const sendVirifyCode = async (email) => {
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        const response = await axios.get(`${apiUrl}/send-user-verify-code?email=${email}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  const verifyEmail = async (email, code) => {
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        const response = await axios.put(`${apiUrl}/send-user-verify-code?email=${email}&code=${code}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  //UploadCV
  const getResume = async () => {
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        const response = await axios.get(`${apiUrl}/user/cv`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        if (response.status === 200) {
          return { success: true, data: response.data };
        }
        else return { success: false };
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  const addResume = async (info, file) => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("name", JSON.stringify(info));
      bodyFormData.append("CV", file);
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        const response = await axios.post(`${apiUrl}/user/cv`, bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  const updateResume = async (cv) => {
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        const response = await axios.put(`${apiUrl}/user/cv/${cv.mediaId}`, cv, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });

        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  const deleteResume = async (id) => {
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        const response = await axios.delete(`${apiUrl}/user/cv/?mediaId=${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });

        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  //Predict Resume
  const predictResume = async (mediaId) => {
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        const response = await axios.get(`${apiUrl}/jobseeker/cvpredict?mediaId=${mediaId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  //Employer
  //get SubmitCV
  const getCvSubmited =async (postId)=>{
    try {
      const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (recentToken !== undefined) {
        const response = await axios.get(`${apiUrl}/employer/submitcv?postId=${postId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${recentToken}`,
          },
        });
        return response.data;
      } else throw new Error("Unauthorized !");
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  }

  //conxtext data
  const authContextData = {
    loginUser,loginGoogleUser, registerUser, registerEmployer, logoutSection,
    getUser, updateUserInfo,
    getUserAchive, updateUserAchive, createUserAchive, deleteUserAchive,
    changPassword, sendVirifyCode, verifyEmail,
    getResume, addResume, updateResume, deleteResume, predictResume,
    getCvSubmited,
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
