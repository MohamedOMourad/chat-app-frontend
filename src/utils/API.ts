import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:8000/' });

export const signIn = async (email: string, password: string) => {
    const res = await API.get('/user/login', { headers: { email, password } })
    console.log(res.data.token);
}