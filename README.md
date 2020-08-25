# CodeDebugging

Code debugging built with NodeJs

### diff
full diff available on [fix bug](https://github.com/sahyung/refactor-id-test-3/commit/13a004f9025afbad543cf09215721bff96ddca66?branch=13a004f9025afbad543cf09215721bff96ddca66&diff=split) commit
1. `index.js`
    - update the flow, if file `.env` not found, throw error immediately, else store `envFound.parsed` to `config`
    - overide the value from `process` if exists
2. `src/services/authService.js`
    - typo on `module.export` instead of `module.exports`
3. `src/services/authCallbackService.js`
    - typo on `res` instead of `resp`
    - `const user = UserServices.getUserInfo(accessToken);` is using promise `axios.get` so it should wait it finished before assign the result to `user`
4. `src/services/userInfoService.js`
    - typo on `${config.apiUrl}/users` instead of `${config.apiUrl}/user`
    - Authorization using `token` instead of `bearer`
