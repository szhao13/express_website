// importing express app we created in app.js
const app = require('./app');

// listen on port 3000 for incoming connections and output message to terminal
// to indicate server is running
const server = app.listen(3000, () => {
	console.log(`Express is running on port ${server.address().port}`);
});