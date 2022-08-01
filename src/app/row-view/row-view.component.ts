import { Component, Input } from '@angular/core';

@Component({
  selector: 'row-view',
  templateUrl: './row-view.component.html',
  styleUrls: [ './row-view.component.css' ]
})

export class RowViewComponent  {
  @Input() name: string;
}
