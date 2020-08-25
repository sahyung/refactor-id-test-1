const dotenv = require("dotenv");
const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
let config = envFound.parsed

if (process.env.NODE_ENV) config.NODE_ENV = process.env.NODE_ENV
if (process.env.PORT) config.PORT = process.env.PORT
if (process.env.CLIENT_ID) config.CLIENT_ID = process.env.CLIENT_ID
if (process.env.CLIENT_SECRET) config.CLIENT_SECRET = process.env.CLIENT_SECRET
if (process.env.OAUTH_URL) config.OAUTH_URL = process.env.OAUTH_URL
if (process.env.API_URL) config.API_URL = process.env.API_URL

module.exports = {
    port: config.PORT,
    clientId: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    oauthUrl: config.OAUTH_URL,
    apiUrl: config.API_URL,
};
