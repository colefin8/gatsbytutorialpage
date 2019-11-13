exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const dogData = [
    {
      color: "#FFB30F",
      id: 1,
      name: "Fido",
      breed: "Sheltie",
    },
    {
      color: "#46ACC2",
      id: 2,
      name: "Sparky",
      breed: "Corgi",
    },
    {
      color: "#F0CEA0",
      id: 3,
      name: "Travis",
      breed: "Australian Shepherd",
    },
    {
      color: "#984447",
      id: 4,
      name: "Derek",
      breed: "Great Dane",
    },
    {
      color: "#29335C",
      id: 5,
      name: "Scott",
      breed: "Beagle",
    },
    {
      color: "#468C98",
      id: 6,
      name: "Cole",
      breed: "Border Collie",
    },
  ]
  const house = { bed: "2", bath: "2" }

  console.log(dogData)
  dogData.forEach(dog => {
    createPage({
      path: `/${dog.id}`,
      component: require.resolve(`./src/templates/dog-template.js`),
      context: { dog },
    })
  })

  createPage({
    path: `/house`,
    component: require.resolve("./src/templates/house-template.js"),
    context: { house },
  })
}
