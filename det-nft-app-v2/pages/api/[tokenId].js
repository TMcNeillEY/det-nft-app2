export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
   `https://raw.githubusercontent.com/TMcNeillEY/det-nft-app2/5c879ea67f8da4521251f9a7f4e349d78b4b2fd9/det-nft-app-v2/public/cryptodevs/${Number(tokenId)-1}`
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      name: "DET Dev #" + tokenId,
      description: "DET Dev is a collection of developers in crypto",
      image: image_url,
      attributes: [
        {
          "trait_type":"Strength",
          "value":5,
          "max_value":10
      },
      {
          "trait_type":"Speed",
          "value":10,
          "max_value":10
      },
      {
          "trait_type":"Stamina",
          "value":8,
          "max_value":10
      },
      {
          "trait_type":"Damage",
          "value":10,
          "max_value":10
      },
      {
      "display_type":"boost_number",
      "trait_type":"Jump",
      "value":1
      },
      {
          "trait_type":"Jump",
          "value":10,
          "max_value":10
      },
      {
          "display_type":"boost_percentage",
          "trait_type":"Speed",
          "value":20
      },
      {
          "display_type":"number",
          "trait_type":"Generation",
          "value":1
      },
      {
          "trait_type":"Humble",
          "value":"True"
      },
      {
          "trait_type":"Brave",
          "value":"True"
      }
      ]
    });
  }

 // https://testnets-api.opensea.io/asset/0x9F4f7C40FB231a5c787C3E221EA18054c9DeB6A2/1/validate/ 