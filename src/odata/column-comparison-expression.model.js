/**
 * ColumnComparisonExpression - Represents a column-to-column comparison in an OData query.
 * 
 * This class extends Criterion and constructs OData filter expressions 
 * comparing two properties using binary operators (e.g., eq, ne, gt, lt).
 * 
 * @author FernandoM
 * @license MIT
 * @version 1.0.1
 */

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
