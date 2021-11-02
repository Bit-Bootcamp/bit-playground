import "./App.css";
import ActionButton from "./components/ActionButton";
import Navbar from "./components/TheNavbar";
import Container from "react-bootstrap/Container";
import UserList from "./components/UserList";

// import Carousel from "./components/HeroCarousel";

function App() {
  return (
    <div>
      <Navbar />
      <Container
        style={{
          backgroundColor: "grey",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActionButton />
        <UserList />
      </Container>
    </div>
  );
}

export default App;
