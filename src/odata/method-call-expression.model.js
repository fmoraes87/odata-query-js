/**
 * MethodCallExpression - Represents a method call expression in an OData query.
 * 
 * This class extends Criterion and constructs OData filter expressions 
 * using method calls (e.g., `contains`, `startswith`) with a property and a value.
 * 
 * @author FernandoM
 * @license MIT
 * @version 1.0.1
 */

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
