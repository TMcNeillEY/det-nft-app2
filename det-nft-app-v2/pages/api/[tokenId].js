export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
   "https://raw.githubusercontent.com/TMcNeillEY/det-nft-app/a5beaecddbc0d48efdedfe16a2bca7fb9a480ce5/public/cryptodevs/"
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    return res.status(200).json({
      name: "DET Dev #" + tokenId,
      description: "DET Dev is a collection of developers in crypto",
      image: image_url + tokenId + ".svg",
    });
  }
