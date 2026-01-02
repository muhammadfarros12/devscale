const generatedNameGen = require('sillyname');


function generateUsername() {
    const generatedName = generatedNameGen();
    const username = generatedName.toLowerCase().replace(' ', '_');
    return username;
}


module.exports = generateUsername;