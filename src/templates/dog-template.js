import React from "react"
import Sidebar from "../Components/Sidebar"
import "./dog-template.css"
import { Link } from "gatsby"

export default ({ pageContext: { dog } }) => {
  return (
    <div style={{ backgroundColor: dog.color }}>
      <Sidebar />
      <section className="dog">
        <h1 className="largeFont">{dog.name}</h1>
        <h2>is a</h2>
        <h1 className="largeFont">{dog.breed}</h1>
        <Link to={`/${dog.id - 1}`}>Previous Dog</Link>
        <Link to="/">Go Home</Link>
        <Link to={`/${dog.id + 1}`}>Next Dog</Link>
      </section>
    </div>
  )
}
