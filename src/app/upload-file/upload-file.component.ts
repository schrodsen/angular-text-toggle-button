import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs'
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: [ './upload-file.component.css' ]
})

export class UploadFileComponent implements OnInit {
  
  selectedDocType: string;
  options: string[] = [
    'Sonstiges',
    'Kalkulation',
    'Kalkulation Sommer',
    'Kalkulation Winter',
    'Vertrag',
    'Vertrag Sommer',
    'Vertrag Winter' 
  ]

  docTypeControl = new FormControl('');
  docTypeItems: string[];
  filteredDocTypes: Observable<string[]>;

  ngOnInit() {
    this.setTravelTags();
  }

  private setTravelTags() {
    this.filteredDocTypes = this.docTypeControl.valueChanges.pipe(
      startWith(''),
      map(name => (name ? this._filterTravelTags(name) : this.docTypeItems.slice())),
    )
  }

  private _filterTravelTags(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.docTypeItems.filter(option => option.toLowerCase().includes(filterValue));
  }

}
