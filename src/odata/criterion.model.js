/**
 * Criterion - Abstract class for creating query expressions in OData queries.
 * 
 * This class serves as a base for building specific query expressions, 
 * enforcing subclasses to implement the `toQueryString` method.
 * 
 * @author FernandoM
 * @license MIT
 * @version 1.0.1
 */

class Criterion {

    // Método abstrato que deve ser implementado nas subclasses
    toQueryString() {
      throw new Error("You must implement the method toQueryString in the subclass");
    }
  }
  
  module.exports = { Criterion };
  