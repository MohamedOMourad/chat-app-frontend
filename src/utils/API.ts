import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { isLogin } from "../redux/auth";
import { setUsers } from "../redux/users";
import { Chat, User } from "../type";

const API = axios.create({ baseURL: 'http://localhost:8000/' });
const token = JSON.parse(localStorage.getItem("token")!);


export const SignIn = async (email: string, password: string, dispatch: Dispatch, navigator: NavigateFunction) => {
    try {
        const res = await API.get('/user/login', { headers: { email, password } })
        if (res?.status === 200) {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch(isLogin());
            navigator('/Home/chats');
        }
        else {
            alert(`Error Wrong email or password`);
        }
    } catch (e) {
    }
}

export const signUp = async (body: { firstName: string, lastName: string, email: string, password: string }) => {
    const res = await API.post('/user/signup', body)
}
export const getUsers = async (dispatch: Dispatch) => {
    try {
        const res = await API.get('/user')
        dispatch(setUsers(res.data.data));
    } catch (e) {
        console.log(e)
    }
}
export const getUserId = async (setUserId: Function) => {
    try {
        const res = await API.get('/user/me', { headers: { token } })
        setUserId(res.data.id)
    } catch (e) {
        console.log(e)
    }
}
export const getUserChats = async (setChats: Function) => {
    try {
        const res = await API.get('/chat', { headers: { token } })
        setChats(res.data.data)
    } catch (e) {
        console.log(e)
    }
}


export const createChats = async (name: string, usersList: number[]) => {
    try {
        const data = { name: name, usersList: usersList }
        const res = await API.post('/chat', data, { headers: { token } })
    } catch (e) {
        console.log(e)
    }
}

export const getMessages = async (id: number, setMassage: Function) => {
    try {
        const res = await API.get(`/message/${id}`, { headers: { token } })
        setMassage(res.data.data)
    } catch (e) {
        console.log(e)
    }
}