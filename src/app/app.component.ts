import { Component } from '@angular/core';
import { ColumnMetadataService } from './columnMetadata.service';
import { ColumnMetadata } from './columnMetadata.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  frozenCols: ColumnMetadata[];
  orderableCols: ColumnMetadata[];

  constructor(private columnMetadataService: ColumnMetadataService) {}

  ngOnInit() {
    this.columnMetadataService.getColumnMetadata().then(cols => {
      [this.frozenCols, this.orderableCols] = _.partition(cols, 'frozen');
    });
  }

  save() {
    const cols = this.frozenCols.concat(this.orderableCols)
      .filter(x => x.isSelected)
      .map(x => x.id);
    alert(JSON.stringify(cols));
  }

  reorder(event){
    console.log(this.orderableCols.indexOf(event[0]));
    alert(JSON.stringify(event, null, 2));
  }
}
