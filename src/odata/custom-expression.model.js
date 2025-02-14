const { Criterion } = require("./criterion.model");

class CustomExpression extends Criterion {

  constructor(expression) {
    super();
    this._expression = expression;
  }

  toQueryString() {
    return this._expression;
  }
}

module.exports = { CustomExpression };
