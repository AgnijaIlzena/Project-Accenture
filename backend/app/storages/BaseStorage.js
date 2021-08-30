class BaseStorage {

    getAll() {
        console.error(
        "\x1b[31m%s\x1b[0m",
         `${this.constructor.name} is missing GetAll method implementation`
         );
         throw new Error (`${this.constructor.name} is missing for getAll method implementation`);
    }

    getById() {
        console.error(
        "\x1b[31m%s\x1b[0m",
         `${this.constructor.name} is missing GetById method implementation`
         );
         throw new Error (`${this.constructor.name} is missing for getById method implementation`);
    }

    create() {
        console.error(
        "\x1b[31m%s\x1b[0m",
         `${this.constructor.name} is missing for create method implementation`
         );
         throw new Error (`${this.constructor.name} is missing for create method implementation`);
    }

    update() {
        console.error(
        "\x1b[31m%s\x1b[0m",
        `${this.constructor.name} is missing for update method implementation`
        );
        throw new Error (`${this.constructor.name} is missing for update method implementation`);
    }

    delete() {
        console.error(
        "\x1b[31m%s\x1b[0m",
         `${this.constructor.name} is missing for delete method implementation`
         ); 
         throw new Error (`${this.constructor.name} is missing for update method implementation`);
    }
}

module.exports = BaseStorage;
 