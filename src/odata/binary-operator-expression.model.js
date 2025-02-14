/**
 * BinaryOperatorExpression - Represents a binary operation in an OData query.
 * 
 * This class extends Criterion and provides a way to construct OData filter expressions
 * using binary operators (e.g., eq, ne, gt, lt).
 * 
 * @author FernandoM
 * @license MIT
 * @version 1.0.1
 */


const { Criterion } = require("./criterion.model");
const { OpType } = require("./op-type");

class BinaryOperatorExpression extends Criterion {
  constructor(propertyName, value, op) {
    super();
    this._propertyName = propertyName;
    this._value = value;
    this._op = op;
  }

  toQueryString() {
    if (typeof this._value === "string") {
      return this._propertyName + " " + this._op + " '" + this._value + "'";
    } else {
      return this._propertyName + " " + this._op + " " + this._value;
    }
  }
}

module.exports = { BinaryOperatorExpression };
