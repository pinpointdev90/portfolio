import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pin Point Dev </span>
            <br />
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Curiosity
            </li>
            <li className="about-activity">
              <ImPointRight /> Love of learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Communication skills
            </li>
            <li className="about-activity">
              <ImPointRight /> A positive attitude
            </li>
          </ul>

          <br/>
          <br/>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Curiosity is, in great and generous minds, the first passion and the last"{" "}
          </p>
          <footer className="blockquote-footer">Samuel Johnson</footer>
          <p style={{ color: "rgb(155 126 172)" }}>
            "best developers know when to code and when not to."{" "}
          </p>
          <footer className="blockquote-footer">Paul Haack</footer>
          <p style={{ color: "rgb(155 126 172)" }}>
            "genuine commitment to continuous learning"{" "}
          </p>
          <footer className="blockquote-footer">Me</footer>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
