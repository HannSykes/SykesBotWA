const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.cyan(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.cyan(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}
