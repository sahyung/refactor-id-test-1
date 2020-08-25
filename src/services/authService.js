const config = require("../config");

function redirectUri() {
    console.log(`${config.oauthUrl}/authorize?client_id=${config.clientId}`)
    return `${config.oauthUrl}/authorize?client_id=${config.clientId}`;
  }

module.exports = {
    redirectUri: redirectUri
}
