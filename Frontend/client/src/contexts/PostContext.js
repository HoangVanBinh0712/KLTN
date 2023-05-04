import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import { PostReducer } from "../reducers/PostReducer";
import { apiUrl,LOCAL_STORAGE_TOKEN_NAME } from "./Constants";


export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
    
    const [postState, dispatch] = useReducer(PostReducer, {
        postLoading: true,
        posts: [],
        postsAi: [],
        postFollow:[],

    });

    const getAllPost = async () => {
        try {
            
            const responsePost = await axios.get(`${apiUrl}/post`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (responsePost.data.success) {
                dispatch({
                    type: "POSTS_LOADED_SUCCESS",
                    payload: {
                        posts: responsePost.data.data,
                    },
                });
            }
        }
        catch (error) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    }

    const getFollowPost = async () => {
        try {
            const recentToken = localStorage[LOCAL_STORAGE_TOKEN_NAME];
            const responsePost = await axios.get(`${apiUrl}/user/follow`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${recentToken}`,
                },
            })
            if (responsePost.data.success) {
                dispatch({
                    type: "POSTS_FOLLOW",
                    payload: {
                        postFollow: responsePost.data.data,
                    },
                });
            }
        }
        catch (error) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    }


    useEffect(() => {
        getAllPost()
        if(localStorage["user-token"]!==undefined){
            getFollowPost()
        }
        
    }, []);

    const getPostById = async (id) => {
        try {
            const responsePost = await axios.get(`${apiUrl}/post/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    
                },
            })
            console.log(responsePost.data)
            if (responsePost.data.success) {
                return responsePost.data
            }
        }
        catch (error) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    }

    const getPostByIndustry = async (industryId) => {
        try {
            const responsePost = await axios.get(`${apiUrl}/post?industryId=${industryId}`, {
                headers: {
                    "Content-Type": "application/json",
                    
                },
            })
            console.log(responsePost.data)
            if (responsePost.data.success) {
                return responsePost.data
            }
        }
        catch (error) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    }

    //conxtext data
    const authPostData = {
        getPostById,getPostByIndustry,
        postState,
    };

    //return
    return (
        <PostContext.Provider value={authPostData}>
            {children}
        </PostContext.Provider>
    );
};

export default PostContextProvider;
