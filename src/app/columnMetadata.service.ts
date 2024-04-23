import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ColumnMetadata } from './columnMetadata.model';

@Injectable()
export class ColumnMetadataService {
    constructor(private http: HttpClient) { }

    getColumnMetadata() {
        return this.http.get<any>('assets/columnMetadata.json')
        .toPromise()
        .then(res => <ColumnMetadata[]>res.data)
        .then(data => { return data; });
    }

    generateColumnMetadata(): ColumnMetadata {
        let fieldName = faker.lorem.word();
        const product: ColumnMetadata =  {
            id: faker.number.int(),
            header: fieldName[0].toUpperCase() + fieldName.slice(1),
            align: faker.helpers.arrayElement(['left', 'right', 'center']),
            field: fieldName,
            isDefaultSort: faker.datatype.boolean(),
            disableSort: faker.datatype.boolean(),
            frozen: faker.datatype.boolean(),
            alignFrozen: faker.helpers.arrayElement(['left', 'right']),
            // template: TemplateRef<any>,
            // headerTemplate: TemplateRef<any>,
            // sort: any,
            isSelected: faker.datatype.boolean(),
            isLocked: faker.datatype.boolean()
        };
        return product;
    }
}