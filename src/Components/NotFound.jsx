import { Container, Row } from "react-bootstrap";
import { useState } from "react";

const NotFound = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Container fluid className="main-page text-center">
        <h1>That's a 404.</h1>
        <h3>There is currently no art.</h3>
      </Container>

      <Container fluid className="hoers-container">
        <img
          onClick={() => setClicked(true)}
          className={!clicked ? "img-fluid" : "img-fluid rotate"}
          src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1687103871/uh_oh_fxwa4n.png"
          alt="oh no"
        />
      </Container>

      <Row className="text-center p-0 m-0">
        <a target="_blank" href="https://deviantart.com/sketchyPon3">
          Made by Katie
        </a>
      </Row>
    </>
  );
};

export default NotFound;
