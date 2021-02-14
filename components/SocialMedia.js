import React from "react";
import { Instagram, Linkedin, GitHub, Mail, Link } from "react-feather";

export default function Socialmedia() {
  return (
    <div className="social-container">
      <a
        href="https://www.instagram.com/shwjdgus_/?hl=en"
        className="instagram social"
      >
        <Instagram size={50} />
      </a>
      <a href="https://www.linkedin.com/in/anoh/" className="linkedin social">
        <Linkedin size={50} />
      </a>
      <a href="https://github.com/a1noh" className="github social">
        <GitHub size={50} />
      </a>
      <a href="mailto: noh1austin@gmail.com" className="mail social">
        <Mail size={50} />
      </a>
    </div>
  );
}
