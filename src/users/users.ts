import { EntityClass, IdEntity, StringColumn } from "@remult/core";

@EntityClass
export class Users extends IdEntity {
    name = new StringColumn();
    constructor() {
        super({
            name: 'users',
            allowApiCRUD: true
        })
    }
}