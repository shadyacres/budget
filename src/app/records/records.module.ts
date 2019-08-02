import { NgModule } from '@angular/core';
import { RecordsComponent } from './containers/records/records.component';
import { RecordsRoutingModule } from './records-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RecordsTableComponent } from './components/records-table/records-table.component';
import { RecordsService } from './records.service';



@NgModule({
  declarations: [RecordsComponent, RecordsTableComponent],
  imports: [
    RecordsRoutingModule,
    SharedModule,
    CommonModule
  ],
  providers: [RecordsService],
  exports: [RecordsRoutingModule]
})
export class RecordsModule { }
