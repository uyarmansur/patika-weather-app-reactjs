import React from "react";

export default function BottomComp() {
  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        height: "400px",
        marginTop: "150px",
      }}
    >
      <footer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            height: "35vh",
          }}
        >
          <a
            href="https://www.patika.dev/"
            style={{ textDecoration: "none", color: "black" }}
            target='blank'
          >
            Patika
          </a>
          <a
            href="https://github.com/uyarmansur"
            style={{ textDecoration: "none", color: "black" }}
            target='blank'
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/mansur-uyar-896a291b8/"
            style={{ textDecoration: "none", color: "black" }}
            target='blank'
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
