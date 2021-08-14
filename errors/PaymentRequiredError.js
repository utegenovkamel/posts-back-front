module.exports = class PaymentReuired extends Error {
  constructor(message = 'Payment required') {
    super(message);
    this.name = 'PaymentRequired';
    this.status = 402;
  }
};
