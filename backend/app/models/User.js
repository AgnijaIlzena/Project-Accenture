class User {
    constructor(data) {
      this._data = Object.assign({}, data);
    }
  
    getData() {
      return Object.assign({}, this._data);
    }
  
    getDataForStorage() {
      const dataCopy = Object.assign({}, this._data);
      delete dataCopy.username;
      return dataCopy;
    }
  }
  
  module.exports = User;