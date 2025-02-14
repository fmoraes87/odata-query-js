class StringUtils {

    static concat(array, separator) {
      if (array && array.length) {
        return StringUtils.join(array, separator, 0, array.length);
      }
      return undefined;
    }
  
    static join(array, separator, startIndex, endIndex) {
      if (!array || !array.length) {
        return undefined;
      }
  
      let noOfItems = endIndex - startIndex;
      if (noOfItems <= 0) {
        return undefined;
      }
  
      let buf = '';
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          buf += array[i];
          if (i < array.length - 1) {
            buf += separator;
          }
        }
      }
  
      return buf;
    }
  
    static lpad(str, size, pad) {
      if (str) {
        let pads = size - str.length;
        if (pads <= 0) {
          return str;
        }
  
        let s = str;
        while (s.length < size) {
          s = pad + s;
        }
        return s;
      }
      return str;
    }
  }
  
  module.exports = StringUtils;
  