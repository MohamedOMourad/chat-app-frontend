import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { isLogin } from "../redux/auth";
import { setChats } from "../redux/chats";
import { setMessages } from "../redux/messages";
import { setConvUsers, setUsers } from "../redux/users";
import { User } from "../type";

const API = axios.create({ baseURL: 'http://localhost:8000/' });
// const token = JSON.parse(localStorage.getItem("token")!) || '';


export const SignIn = async (email: string, password: string, dispatch: Dispatch, navigator: NavigateFunction) => {
    try {
        const res = await API.get('/user/login', { headers: { email, password } })
        if (res?.status === 200) {
            dispatch(isLogin({ token: res.data.token }));
            localStorage.setItem('auth', JSON.stringify({ authenticated: true, token: res.data.token }))
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
export const getUserId = async (setUserId: Function, token: string) => {
    try {
        const res = await API.get('/user/me', { headers: { token } })
        setUserId(res.data.id)
    } catch (e) {
        console.log(e)
    }
}

export const getUserChats = async (dispatch: Dispatch, token: string) => {
    try {
        const res = await API.get('/chat', { headers: { token } })
        dispatch(setChats(res.data.data))
    } catch (e) {
        console.log(e)
    }
}

export const getChat = async (id: number, dispatch: Dispatch, token: string) => {
    try {
        const res = await API.get(`/chat/${id}`)
        const userIds = res.data.data.users.map((user: User) => user.id)
        dispatch(setConvUsers(userIds));
    } catch (e) {
        console.log(e)
    }
}

export const createChats = async (name: string, usersList: number[], token: string) => {
    try {
        const data = { name: name, usersList: usersList }
        const res = await API.post('/chat', data, { headers: { token } })
    } catch (e) {
        console.log(e)
    }
}

export const getMessages = async (id: number, dispatch: Dispatch, token: string) => {
    try {
        const res = await API.get(`/message/${id}`, { headers: { token } })
        dispatch(setMessages(res.data.data))
    } catch (e) {
        console.log(e)
    }
}

export const createMessage = async (value: { chatId: string, body: string }, token: string) => {
    try {
        const data = { id: value.chatId, body: value.body };
        const res = await API.post(`/message`, data, { headers: { token } })
        return res.data.message
    } catch (e) {
        console.log(e)
    }
}