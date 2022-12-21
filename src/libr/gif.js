const { get } = require('node-superfetch');
const chalk = require('chalk');

const { version } = require('../../package.json');
const gifs = require('../../assets/gifs.json');

/**
* @class GIF
*/
class GIF {
	constructor(baseURL) {
		/**
          * Base URL
          * @type {string}
          * @private
         */
		this.baseURL = baseURL;
	}

	/**
      * Returns a random GIF image of the type provided.
      * @param {string} type -
      * @returns {Promise<string>} The Formatted GIF URL.
      */
	async get(type) {
		if (typeof type !== 'string') throw new Error(`${chalk.magenta('Mayu-JS')} ${chalk.gray('*')} ${chalk.yellow('Make sure the Type is a string!')}`);
		if (!type) throw new Error(`${chalk.magenta('Mayu-JS')} ${chalk.gray('*')} ${chalk.yellow('GIF Type is missing.')}`);

		const { body } = await get(`${this.baseURL}/${type}`)
			.set('User-Agent', `Mayu-JS by Eiomi Developers  v${version}`);

		if (gifs.includes(type)) {
			return body.url;
		}
		else {
			throw new Error(`${chalk.magenta('Mayu-JS')} ${chalk.gray('*')} ${chalk.yellow('The GIF you tried to request is INVALID')}`);
		}
	}
}

module.exports = GIF;
