import { Component, Input } from '@angular/core';

export interface DownloadElement {
  name: string;
  size: number;
  docType: string;
  validTo: Date;
}

const ELEMENT_DATA: DownloadElement[] = [
  {name: 'calc_summer_2020', size: 3.079, docType: 'calc icon', validTo: new Date(2020, 1, 1)},
  {name: 'contract_summer_2020', size: 2.079, docType: 'calc icon', validTo: new Date(2020, 1, 1)},
  {name: 'calc_summer_2021', size: 4.026, docType: 'calc icon', validTo: new Date(2020, 1, 1)},
  {name: 'contact_summer_2021', size: 2.941, docType: 'calc icon', validTo: new Date(2020, 1, 1)},
  {name: 'calc_summer_2022', size: 5.012, docType: 'calc icon', validTo: new Date(2020, 1, 1)},
  {name: 'contract_summer_2022', size: 2.811, docType: 'calc icon', validTo: new Date(2020, 1, 1)},
];

@Component({
  selector: 'file-view',
  templateUrl: './file-view.component.html',
  styleUrls: [ './file-view.component.css' ]
})

export class FileViewComponent  {

  displayedColumns: string[] = ['name', 'size', 'docType', 'validTo'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<DownloadElement>();

  opened: boolean;
}
