/**
 * CustomExpression - Represents a custom expression in an OData query.
 * 
 * This class extends Criterion and allows for custom filter expressions to be used 
 * in OData queries, by directly passing the expression as a string.
 * 
 * @author FernandoM
 * @license MIT
 * @version 1.0.1
 */

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
