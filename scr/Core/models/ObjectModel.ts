/**
* @ObjectModel
* Provides some functionality for working with object models
* @abstract
*/
export abstract class ObjectModel {

    /**
    * @has
    * Checks if a field exists in an object
    */
    protected has(key: string): boolean {
        return key in this;
    };

    /**
    * @bindModelToCtor
    * Assigns the field data of the passed object to the fields of the object on which the method is called
    */
    protected bindModelToCtor<T extends Object>(model: T) {
        for (const key in model) {
            if (Object.prototype.hasOwnProperty.call(model, key)) {
                const value = model[key];
                if (this.has(key as string)) {
                    this[key as string] = value;
                };
            };
        };
    };

};