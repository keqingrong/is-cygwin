'use strict';
const { execSync } = require('child_process');

const isCygwin = () => {
  if (process.platform !== 'win32') {
    return false;
  }

  try {
    return execSync('uname -a', {encoding: 'utf-8'}).toLowerCase().includes('cygwin');
  } catch (err) {
    return false;
  }
};

module.exports = isCygwin();
