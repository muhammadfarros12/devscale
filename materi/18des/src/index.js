const generateUsername = require('./libs/username-generator');
const generatePassword = require('./libs/password-generator');

const usernameGenerated = generateUsername();
const {password, analyzedPassword} = generatePassword();


console.log("====================Generated Credentials======================");

console.log(`Username: ${usernameGenerated}`);
console.log(`Password: ${password}`);
console.log('Password Analysis:', analyzedPassword.crack_times_display.online_throttling_100_per_hour, 'to crack');