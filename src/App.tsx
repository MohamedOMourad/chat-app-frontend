import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Caht from "./pages/Caht";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <Container>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/chat" element={<Caht /> } />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
