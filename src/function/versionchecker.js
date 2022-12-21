const fetch = require('node-fetch');
const chalk = require('chalk');

async function checker(version) {
    let checkArray = await fetch(`https://registry.npmjs.org/mayu-js`);
    try {
         checkArray = await checkArray.json();
    } catch (error) {
         console.log(`${consolePrefix}Failed to check NPM for updates.`);
    }
    const latestVersion = checkArray["dist-tags"].latest;
    if (version !== latestVersion) throw new Error(`${chalk.magenta('Mayu-JS')} ${chalk.gray('*')} ${chalk.yellow('Your Mayu-Js Version is Outdated please update before using!')}`);
}
module.exports = checker