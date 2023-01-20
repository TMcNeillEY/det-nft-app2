export const config = {
    collectionName: "DET Dev",
    collectionDescription: "DET SBK is a collection of NFTs based on skills, background and knowledge gained",
    image: "../public/cryptodevs",
    attributes: [
      {
        name: Languages, values: [Java, Python, Typescript, PHP, Kotlin],
      },
      {
        name: Technologies, values: [Sass, Script, Angular, Redux],
      },
      {
        name: Degree, values: [Bachelors, Masters, PhD],
      },
      {
        name: Local, values: [Americas, Europe, India, Asia]
      },
      {
        name: Certifications, values: [Azure, Microsoft, Google, Any]
      } 
    ],
    outputFolder: '../data',
    outputJSON: '../data/generated.json'
}