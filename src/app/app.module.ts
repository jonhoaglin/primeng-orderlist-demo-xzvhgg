import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ColumnMetadataService } from './columnMetadata.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    OrderListModule,
    ButtonModule,
    FormsModule,
    CheckboxModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ColumnMetadataService],
})
export class AppModule { }
