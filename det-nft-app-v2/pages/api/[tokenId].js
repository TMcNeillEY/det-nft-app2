export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
   `https://raw.githubusercontent.com/TMcNeillEY/det-nft-app2/5c879ea67f8da4521251f9a7f4e349d78b4b2fd9/det-nft-app-v2/public/cryptodevs/${Number(tokenId)-1}.svg`
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      name: "DET Dev #" + tokenId,
      description: "DET Dev is a collection of developers in crypto",
      image: image_url,
    });
  }
