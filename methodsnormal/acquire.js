// HTTP basic authentication example in node.js using the RTC Server RESTful API
const https = require('https')
// Customer ID
const customerKey = "e67047139af94ababea8b13ca866f3d6"
// Customer secret
const customerSecret = "b571b9e2e4714cb98e0349d0ff09a2b5"
// Concatenate customer key and customer secret and use base64 to encode the concatenated string
const plainCredential = customerKey + ":" + customerSecret
// Encode with base64
encodedCredential = Buffer.from(plainCredential).toString('base64')
authorizationField = "Basic " + encodedCredential
const cname = '80e7dec98a2a4223aa623a17a30cdba6a30cdba6'

// Set request parameters
const options = {
  hostname: 'api.agora.io',
  port: 443,
  path: '/v1/apps/80e7dec98a2a4223aa623a17a30cdba6/cloud_recording/acquire',
  method: 'POST',
  headers: {
    'Authorization':authorizationField,
    'Content-Type': 'application/json'
  },
  body: {
    "cname": 'tee435464dfggd',
    "uid": "42784",
    "clientRequest": {
        "region": "NA",
        "resourceExpiredHour": 24,
        "scene": 1
    }
  }
}

// Create request object and send request
const req = https.request(options, res => {
  console.log(`Status code: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()