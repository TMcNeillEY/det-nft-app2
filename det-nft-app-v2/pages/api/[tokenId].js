export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
   `https://ipfs.filebase.io/ipfs/QmcfsZCGdcXyHJP8MupMQwYuSET8TFJCHUhAaoJwe4EJuP${Number(tokenId)-1}`
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
            "trait_type": "Languages",
            "value": "Python"
        },
        {
            "trait_type": "Technologies",
            "value": "Java"
        },
        {
            "trait_type": "Degree",
            "value": "B.S."
        },
        {
            "trait_type": "Location",
            "value": "US"
        },
        {
            "trait_type": "Certifications",
            "value": "Google"
        } 
      ]
    });
  }

 // https://testnets-api.opensea.io/asset/0xB2aF6A1F7474A350811f2AA8dF9ED5ECff992Dcb/1/validate/ 