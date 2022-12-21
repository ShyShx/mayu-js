const chalk = require('chalk');
const GIF = require('./libr/gif');
const Message = require('./libr/message')
const { version } = require('../package.json');

const checker = require('../src/function/versionchecker')
checker(version)

/**
* Weeby-JS - The official JavaScript wrapper for Weeby API, developed by NTM Development. Click [here](https://weebyapi.xyz/) for the website.
* @class Client
*/
class MayuApi {
     /**
     * @constructor
     */
     constructor() {

          /**
         * The base URL.
         * @type {string}
         */
          this.baseURL = 'https://api.eiomibot.xyz/v1';

          /**
         * The GIF module.
         * @type {GIF}
         */
          this.gif = new GIF(`${this.baseURL}/gif/`);

          /**
           * The Messages Module
           * @type {Message}
           */
          this.message = new Message(`${this.baseURL}/msg/`)

     }
}

module.exports = MayuApi;
