import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Caht from "./pages/Caht";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <Container>
        <Routes>
          <Route path="/" element={false ? <Caht /> : <LogIn />} />
        </Routes>
      </Container>
    </div>
  );  
}

export default App;
