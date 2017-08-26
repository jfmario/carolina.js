
var EmailInterface = require('./base');

class TerminalEmailInterface extends EmailInterface {

  constructor(obj) {
    super(obj);
  }

  sendMail(obj) {

    if (!obj.hasOwnProperty('from'))
      obj.from = this.from;


    console.log("FROM: " + obj.from);
    console.log("TO: " + obj.to);
    console.log("Subject: " + obj.subject);
    console.log();
    console.log(obj.message);
  }
}

module.exports = TerminalEmailInterface;