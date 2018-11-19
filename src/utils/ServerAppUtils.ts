const chalk = require('chalk');
import morgan = require('morgan');

/**
 * 
 */
export const morganLogs = () =>
  morgan((tokens, req, res) => {
    return (
      chalk.blue(tokens.method(req, res)) +
      ' ' + chalk.green(tokens.url(req, res)) +
      ' ' + chalk.red(tokens['response-time'](req, res))
    );
  });
