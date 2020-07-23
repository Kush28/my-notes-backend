const { OAuth2Client } = require('google-auth-library')

const CLIENT_ID = process.env.CLIENT_ID || '981702897660-ul9nnvobbk5968ra7u08f9mc6l2sos1e.apps.googleusercontent.com'

const client = new OAuth2Client(CLIENT_ID)

export default async function verifyToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID
  })
  const payload = ticket.getPayload()
  const userid = payload.sub
  console.log(payload, userid)
}
