const dotenvLoad = require('dotenv-load');
const nextEnv = require('next-env');

// grab all env's from .env file
dotenvLoad();

const withEnv = nextEnv(); 
// => this is creating plugin with grabbed env's
/** 
 *  {
 *      env: {
 *              HELP_APP_URL=https://frontendmasters.com
 *          }
 *  }
 */

module.exports = withEnv();


// module.exports = {
//     webpack: {
//         plugins: [new MyWebpackPlugin()],
//     }
// }

// const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

// module.exports =(phase, {defaultConfig}) => {
//     if  (phase === PHASE_DEVELOPMENT_SERVER) {
//         console.log("I'm in dev mode!")

//         return defaultConfig
//     }
//     return defaultConfig
// }

// modules.export = {
//     env: {
//         ENV: "MyEnvironment",
//     }
// }