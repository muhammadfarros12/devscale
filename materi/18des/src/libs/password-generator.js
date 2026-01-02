const sillyPasswordGen = require('silly-password-generator');

function generatePassword() {
    const password = sillyPasswordGen.generateSillyPassword();
    const analyzedPassword = sillyPasswordGen.analyzePassword(password);
    return { password, analyzedPassword };
}

module.exports = generatePassword;