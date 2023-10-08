import { Container, Row, Col } from "react-bootstrap";
import LoadingImage from "../Images/SometimesLoading.png";
import DA from "../Images/deviantart-2.svg";

const InProgress = () => {
  return (
    <>
      <Container
        className="text-center"
        fluid
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            style={{ maxWidth: "100%" }}
            src={LoadingImage}
            alt="Sometimes Art - Now Loading!"
            className="img-fluid now-loading mb-4"
          />
        </Container>

        <Container fluid style={{ marginTop: "4rem" }}>
          <div className="ani-1">
            <h3>What is Sometimes Art?</h3>
            <p className="text-center">
              Sometimes Art started as a joke within a group chat - and has
              managed to win it's way into the hearts of many through Charity
              Auction donations!
            </p>
          </div>
          <div className="ani-2">
            <h3>What is the purpose of this site?</h3>
            <p>
              Ultimately to be the home of all my various arts and crafts...
              Maybe more. Who knows?
            </p>
          </div>
          <div className="ani-3">
            <h3>Why are you doing this?</h3>
            <p className="text-center">
              I'm a glutton for punishment, I suppose.
            </p>
          </div>
          <div className="ani-4">
            <h3>Can I go home now?</h3>
            <p>No.</p>
          </div>
        </Container>
        <Container fluid className="mb-2 ani-5" style={{ marginTop: "2rem" }}>
          <Row className="text-center p-0 m-0">
            <a target="_blank" href="https://deviantart.com/sketchyPon3">
              Made by Katie
            </a>
          </Row>
          <Row className="text-center p-0 m-0">
            <a
              target="_blank"
              href="https://www.redbubble.com/people/SketchyPon3/"
            >
              Or sometimes merch?
            </a>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default InProgress;
