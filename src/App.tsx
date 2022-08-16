import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import GroupChat from "./components/GroupChat";
import Protected from "./components/protected";
import Test from "./components/test";
import UsersCard from "./components/UsersCard";
import Caht from "./pages/Caht";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { isLogout } from "./redux/auth";
import { RootState } from "./redux/store";

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.authentication.authenticated);
  const dispatch = useDispatch();
  return (
    <div className="bg-light min-vh-100">
      <Container>
        {isAuthenticated && <Button onClick={() => dispatch(isLogout())}>LogOut</Button>}
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route element={<Protected />} >
            <Route path="/chat" element={<Caht />} >
              <Route path="users" element={<UsersCard />} />
              <Route path="groupchat" element={<GroupChat />} />
            </Route>
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Container>
    </div >
  );
}

export default App;
