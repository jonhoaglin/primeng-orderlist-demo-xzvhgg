import { TemplateRef } from "@angular/core";

export interface ColumnMetadata {
    id:number;
    header?:string;
    align?:'left' | 'right' | 'center';
    field?:string;
    isDefaultSort?:boolean;
    disableSort?:boolean;
    frozen?:boolean;
    alignFrozen?:'left' | 'right';
    template?:TemplateRef<any>;
    headerTemplate?: TemplateRef<any>;
    sort?:any; //SortFunction | SortProperty | TableColumnSort;
    isSelected?:boolean;
    isLocked?:boolean;
}