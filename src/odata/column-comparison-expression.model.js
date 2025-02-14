const { Criterion } = require('./criterion.model');
const { OpType } = require("./op-type");

class ColumnComparisonExpression extends Criterion {

  constructor(propertyNameA, propertyNameB, op) {
    super();
    this.propertyNameA = propertyNameA;
    this.propertyNameB = propertyNameB;
    this._op = op;
  }

  toQueryString() {
    return this.propertyNameA + " " + this._op + " " + this.propertyNameB;
  }
}

module.exports = { ColumnComparisonExpression };
