/**
 * OpType - Defines common OData operator types for query expressions.
 * 
 * This module provides a set of operator types used in constructing OData query filters, 
 * including equality, comparison, and string operations.
 * 
 * @author FernandoM
 * @license MIT
 * @version 1.0.1
 */

// op-type.js
const OpType = {
    EQUAL: "eq",
    NOT_EQUAL: "ne",
    GREAT: "gt",
    GREAT_EQUAL: "ge",
    LESS: "lt",
    LESS_EQUAL: "le",
    LIKE: "contains"
  };
  
  module.exports = { OpType };
  