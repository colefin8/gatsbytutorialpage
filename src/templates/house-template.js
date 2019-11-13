import React from "react"

export default ({ pageContext: { house } }) => {
  return (
    <>
      <div>Bedrooms: {house.bed}</div>
      <h1>Bathrooms: {house.bath}</h1>
    </>
  )
}
