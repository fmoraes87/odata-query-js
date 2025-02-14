/**
 * Restrictions - OData Filter Factory
 * 
 * This module provides helper functions to create OData-compliant filter expressions.
 * 
 * @author FernandoM
 * @license MIT
 * @version 1.0.1
 */


const { BinaryOperatorExpression } = require("./binary-operator-expression.model");
const { MethodCallExpression } = require("./method-call-expression.model");
const { ColumnComparisonExpression } =  require("./column-comparison-expression.model");

const { OpType } = require("./op-type");

class Restrictions {

  static eq(propertyName, value) {
    return new BinaryOperatorExpression(propertyName, value, OpType.EQUAL);
  }
  static ne(propertyName, value) {
    return new BinaryOperatorExpression(propertyName, value, OpType.NOT_EQUAL);
  }

  static gt(propertyName, value) {
    return new BinaryOperatorExpression(propertyName, value, OpType.GREAT);
  }

  static ge(propertyName, value) {
    return new BinaryOperatorExpression(propertyName, value, OpType.GREAT_EQUAL);
  }

  static lt(propertyName, value) {
    return new BinaryOperatorExpression(propertyName, value, OpType.LESS);
  }

  static le(propertyName, value) {
    return new BinaryOperatorExpression(propertyName, value, OpType.LESS_EQUAL);
  }

  static isNull(propertyName) {
    return new BinaryOperatorExpression(propertyName, null, OpType.EQUAL);
  }

  static isNotNull(propertyName) {
    return new BinaryOperatorExpression(propertyName, null, OpType.NOT_EQUAL);
  }

  static like(propertyName, value) {
    return new MethodCallExpression(propertyName, value, OpType.LIKE);
  }

  static eqProperty(propertyNameA, propertyNameB) {
    return new ColumnComparisonExpression(propertyNameA, propertyNameB, OpType.EQUAL);
  }

  static geProperty(propertyNameA, propertyNameB) {
    return new ColumnComparisonExpression(propertyNameA, propertyNameB, OpType.GREAT_EQUAL);
  }

  static gtProperty(propertyNameA, propertyNameB) {
    return new ColumnComparisonExpression(propertyNameA, propertyNameB, OpType.GREAT);
  }

  static leProperty(propertyNameA, propertyNameB) {
    return new ColumnComparisonExpression(propertyNameA, propertyNameB, OpType.LESS_EQUAL);
  }

  static lt(propertyNameA, propertyNameB) {
    return new ColumnComparisonExpression(propertyNameA, propertyNameB, OpType.LESS);
  }

  static neProperty(propertyNameA, propertyNameB) {
    return new ColumnComparisonExpression(propertyNameA, propertyNameB, OpType.NOT_EQUAL);
  }
}

module.exports = { Restrictions };
