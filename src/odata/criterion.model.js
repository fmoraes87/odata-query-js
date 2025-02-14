class Criterion {

    // Método abstrato que deve ser implementado nas subclasses
    toQueryString() {
      throw new Error("You must implement the method toQueryString in the subclass");
    }
  }
  
  module.exports = { Criterion };
  