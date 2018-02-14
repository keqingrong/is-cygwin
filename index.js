'use strict';
const fs = require('fs');

const isCygwin = () => {
  if (process.platform !== 'win32') {
    return false;
  }

  try {
    return fs.readFileSync('/proc/version', 'utf8').toLowerCase.includes('cygwin');
  } catch (err) {
    return false;
  }
};

module.exports = isCygwin();
