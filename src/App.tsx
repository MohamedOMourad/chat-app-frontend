import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ChatCard from "./components/ChatCard";
import Conversation from "./components/Conversation";
import Protected from "./components/protected";
import UsersCard from "./components/UsersCard";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { isLogout } from "./redux/auth";
import { useAppSelector } from "./redux/hooks";
import { getUsers } from "./utils/API";

function App() {
  const isAuthenticated = useAppSelector((state) => state.authentication.authenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  });

  return (
    <div className="bg-light min-vh-100">
      <Container>
        {isAuthenticated && <Button onClick={() => dispatch(isLogout())}>LogOut</Button>}
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route element={<Protected />} >
            <Route path="/home" element={<Home />} >
              <Route path="chats" element={<ChatCard />} />
              <Route path="users" element={<UsersCard />} />
              <Route path="conversation/:id" element={<Conversation />} />
            </Route>
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </div >
  );
}

export default App;
