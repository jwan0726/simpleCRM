import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { DownloadPdfComponent } from './leads-listing/leads-tools/download-pdf/download-pdf.component';
import { LeadsToolsComponent } from './leads-listing/leads-tools/leads-tools.component';
import { DownloadExcelComponent } from './leads-listing/leads-tools/download-excel/download-excel.component';
import { LeadsGridComponent } from './leads-listing/leads-grid/leads-grid.component';

@NgModule({
  declarations: [
    LeadsListingComponent,
    DownloadPdfComponent,
    LeadsToolsComponent,
    DownloadExcelComponent,
    LeadsGridComponent,
  ],
  imports: [CommonModule],
})
export class LeadsModule {}
