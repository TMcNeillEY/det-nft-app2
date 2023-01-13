export const config = {
    collectionName: "DET Dev",
    collectionDescription: "DET Dev is a collection of developers in crypto",
    image: "../public/cryptodevs",
    attributes: [
      {
        name: Languages, values: [Java, Python, Typescript, PHP, Kotlin],
      },
      {
        name: Technologies, values: [Sass, Script, Angular, Redux],
      },
      {
        name: Degree, values: [Bachelors, Masters, Ph.d],
      },
      {
        name: Local, values: [Americas, Europe, India]
      },
      {
        name: Certifications, values: [Azure, Microsoft, Google, Any]
      } 
    ],
    outputFolder: '../data',
    outputJSON: '../data/generated.json'
}