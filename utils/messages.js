const moment = require('moment');

function formatMessage(username, text) {
	
	var utctime = moment.utc().format();

	var localtime =  moment.utc(utctime).utcOffset(330).format('YYYY-MM-DD HH:mm:ss');
  return {
    username,
    text,
    localtime
  };
}

module.exports = formatMessage;
