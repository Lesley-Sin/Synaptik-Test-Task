import { ObjectModel } from "../../Core/models/ObjectModel"

export class ListItemModel extends ObjectModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public county: string;
    public city: string;
    public avatar: string;
    public phone: string;
    public profileColor: string;

    constructor(model: Partial<ListItemModel>) {
        super();
        this.applyModelToCtor(model)
    };

};