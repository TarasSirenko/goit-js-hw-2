const checkForSpam = function (message) {
    let lowerCase = message.toLowerCase()
    let result = lowerCase.includes('spam') || lowerCase.includes('sale' )
    return console.log(result);
};
checkForSpam('Latest technology news')
checkForSpam('JavaScript weekly newsletter')
checkForSpam('Get best sale offers now!')
checkForSpam('[SPAM] How to earn fast money?')