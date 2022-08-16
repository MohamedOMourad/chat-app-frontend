import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { isLogin } from "../redux/auth";
import { setUsers } from "../redux/users";

const API = axios.create({ baseURL: 'http://localhost:8000/' });

export const getUsers = async (dispatch: Dispatch) => {
    try {
        const res = await API.get('/user')
        if (res?.status === 200) {
            dispatch(setUsers(res.data.data));
        }
    } catch (e) {
        console.log(e)
    }
}

export const SignIn = async (email: string, password: string, dispatch: Dispatch, navigator: NavigateFunction) => {
    try {
        const res = await API.get('/user/login', { headers: { email, password } })
        if (res?.status === 200) {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch(isLogin());
            navigator('/chat/users');
        }
        else {
            alert(`Error Wrong email or password`);
        }
    } catch (e) {
    }
}

export const signUp = async (body: { firstName: string, lastName: string, email: string, password: string }) => {
    const res = await API.post('/user/signup', body)
    console.log(res.data.token);
}