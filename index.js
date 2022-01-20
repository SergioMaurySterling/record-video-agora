const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Agora Cloud Recording Server"));

const port = 3005;
app.listen(port, () => console.log(`Agora Cloud Recording Server listening at Port ${port}`));


app.post("/acquire", async (req, res) => {
  const customerKey = "e67047139af94ababea8b13ca866f3d6"
  // Customer secret
  const customerSecret = "b571b9e2e4714cb98e0349d0ff09a2b5"
  // Concatenate customer key and customer secret and use base64 to encode the concatenated string
  const plainCredential = customerKey + ":" + customerSecret
  // Encode with base64
  encodedCredential = Buffer.from(plainCredential).toString('base64')
  authorizationField = "Basic " + encodedCredential

  const acquire = await axios.post(
    `https://api.agora.io/v1/apps/80e7dec98a2a4223aa623a17a30cdba6/cloud_recording/acquire`,
    {
      cname: 'Jo6m9E20E02m9yE5maNk',
      uid: '45687',
      clientRequest: {
        resourceExpiredHour: 24,
      },
    },
    { headers: { authorizationField } }
  );

  res.send(acquire.data);
  console.log(res);
});