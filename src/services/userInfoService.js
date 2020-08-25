const axios = require("axios");
const config = require("../config");

function getUserInfo(token, cb) {
    axios({
        method: "get",
        url: `${config.apiUrl}/user`,
        headers: {
          Authorization: "bearer " + token,
          Accept: "application/vnd.github.v3+json",
        },
      }).then((response) => {
        // console.log({
        //   error,
        //   user
        // })
        return cb(null, response.data);
      })
      .catch((error) => {
        return cb(error);
      });
  }

module.exports = {
  getUserInfo: getUserInfo,
}
