class BaseStorage {
    
    getAll() {
      console.error(
        "\x1b[31m%s\x1b[0m",
        `${this.constructor.name} is missing GetAll method implementation`
      );
      throw new Error(
        `${this.constructor.name} is missing for getAll method implementation`
      );
    }
  
    create() {
      console.error(
        "\x1b[31m%s\x1b[0m",
        `${this.constructor.name} is missing for create method implementation`
      );
      throw new Error(
        `${this.constructor.name} is missing for create method implementation`
      );
    }
  }
  
  module.exports = BaseStorage;
  
 