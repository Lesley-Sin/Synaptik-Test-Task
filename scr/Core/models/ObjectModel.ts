export class ObjectModel {

    protected has(key: string): boolean {
        return key in this;
    };

    protected applyModelToCtor<T extends Object>(model: T) {
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