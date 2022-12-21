//Change to mayu-js
const MayuApi = require('../src/index');
const mayu = new MayuApi();

(async () => {
	const owo = await mayu.message.Owoify('Hello World')
	console.log(owo)
})();