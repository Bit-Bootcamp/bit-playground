import "./App.css";
import ActionButton from "./components/ActionButton";
import Navbar from "./components/TheNavbar";
import Container from "react-bootstrap/Container";
import UserList from "./components/UserList";

// import Carousel from "./components/HeroCarousel";

function App() {
  let myStyles = {
    backgroundColor: "red",
    color: "white",
  };
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
        {/* <UserList /> */}
      </Container>

      <p style={myStyles}> slaw</p>
    </div>
  );
}

export default App;
