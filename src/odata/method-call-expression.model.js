const { Criterion } = require('./criterion.model');
const { OpType } = require("./op-type");

class MethodCallExpression extends Criterion {

  constructor(propertyName, value, op) {
    super();
    this._propertyName = propertyName;
    this._value = value;
    this._op = op;
  }

  toQueryString() {
    return this._op + '(' + this._propertyName + ', ' + ' \'' + this._value + '\')';
  }
}

module.exports = { MethodCallExpression };
