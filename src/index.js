import React from "react";
import ReactDOM from "react-dom";
import Container from "Container";
import Footer from "Footer";
import ControlWrap from "ControlWrap";

const App = () => {
  return (
    <div>
      <div>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </div>
      <ControlWrap></ControlWrap>
      <Container className="center">
        <Footer className="footer"></Footer>
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
