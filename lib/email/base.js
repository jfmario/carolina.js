
class EmailInterface {

  constructor(obj) {
    this.from = obj.from;
  }

  sendMail(obj) {}
}

module.exports = EmailInterface;