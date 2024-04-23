import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ColumnMetadataService } from './columnMetadata.service';

import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OrderListModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CheckboxModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ColumnMetadataService],
})
export class AppModule {}
