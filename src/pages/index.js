import React from "react"
import { Link } from "gatsby"
import Sidebar from "../Components/Sidebar"
import ReactPlayer from "react-player"
import "./index.css"

export default () => (
  <>
    <Sidebar />
    <div className="video">
      <ReactPlayer
        style={{
          boxShadow: "0 14px 28px 0 black",
          marginBottom: "20px",
          borderRadius: "15px",
        }}
        url="https://www.youtube.com/embed/du-TY1GUFGk"
      />
      <Link to="/1">See some dogs!</Link>
    </div>
  </>
)
