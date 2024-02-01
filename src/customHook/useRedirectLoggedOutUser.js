import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGGIN } from "../redux/features/Auth/authSlice";
import { getLoginStatus } from "../services/authService";
import { toast } from "react-toastify";
const useRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
   useEffect(()=>{
   const redirectLoggedOutUser = async()=>{
    const isLoggin = await getLoginStatus();
    dispatch(SET_LOGGIN(isLoggin));
    if(!isLoggin){
        toast.info("Session expired, please login to continue.");
        navigate(path);
        return;
    }
   };
   redirectLoggedOutUser();
   }, [navigate, path, dispatch ]);
}

export default useRedirectLoggedOutUser;