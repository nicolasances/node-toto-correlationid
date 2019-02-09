var moment = require('moment-timezone');

/**
 * This module generates a correlation Id
 */
module.exports.cid = function() {

  let ts = moment().tz('Europe/Rome').format('YYYYMMDDHHmmssSSS');

  let random = (Math.random() * 100000).toFixed(0).padStart(5, '0');

  return ts + '-' + random;

}
