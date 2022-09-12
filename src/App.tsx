import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import ChatCard from "./components/ChatList";
import Conversation from "./components/Conversation";
import Protected from "./components/protected";
import UsersCard from "./components/UsersCard";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { isLogout } from "./redux/auth";
import { useAppSelector } from "./redux/hooks";
import { getUserChats, getUserId, getUsers } from "./utils/API";

function App() {
  const isAuthenticated = useAppSelector((state) => state.authentication.authenticated);
  const token = useAppSelector((state) => state.authentication.token)
  const dispatch = useDispatch();
  // const [socket, setSocket] = useState<Socket>()

  const socket = io("http://localhost:5001")


  // const awaitUserId = async () => {
  //   await getUserId(dispatch, token)
  // }

  useEffect(() => {
    getUserId(dispatch, token)
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <Container>
        {isAuthenticated && <Button onClick={() => dispatch(isLogout())}>LogOut</Button>}
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route element={<Protected />} >
            <Route path="/home" element={<Home />} >
              <Route path="chats" element={<ChatCard socket={socket!} />} />
              <Route path="users" element={<UsersCard />} />
              <Route path="conversation/:id" element={<Conversation socket={socket!} />} />
            </Route>
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </div >
  );
}

export default App;
