const { get } = require('node-superfetch');
const chalk = require('chalk');
const { version } = require('../../package.json');

/**
* @class GIF
*/
class Message {
    constructor(baseURL) {
   

        /**
          * Base URL
          * @type {string}
          * @private
         */
        this.baseURL = baseURL;
    }

    /**
      * Returns the message owoified.
      * @param {string} message -
      * @returns {Promise<string>} The Formatted GIF URL.
      */
    async Owoify(message) {
        if (typeof message !== 'string') throw new Error(`${chalk.magenta('Mayu-JS')} ${chalk.gray('*')} ${chalk.yellow('Make sure the Type is a string!')}`);
        if (!message) throw new Error(`${chalk.magenta('Mayu-JS')} ${chalk.gray('*')} ${chalk.yellow('Message is missing.')}`);

        const { body } = await get(`${this.baseURL}/owo`)
            .set('User-Agent', `Mayu-JS by Eiomi Developers v${version}`)
            .query({ msg: message });

        return body.message;
    }

    /**
      * Returns the message owoified.
      * @param {string} message -
      * @returns {Promise<string>} The Formatted GIF URL.
      */
    async Aesthetic(message) {
        if (typeof message !== 'string') throw new Error(`${chalk.magenta('Mayu-JS')} ${chalk.gray('*')} ${chalk.yellow('Make sure the Type is a string!')}`);
        if (!message) throw new Error(`${chalk.magenta('Mayu-JS')} ${chalk.gray('*')} ${chalk.yellow('Message is missing.')}`);


        const { body } = await get(`${this.baseURL}/aesthetic`)
            .set('User-Agent', `Mayu-JS by Eiomi Developers v${version}`)
            .query({ msg: message });

        return body.message;
    }
}

module.exports = Message;
