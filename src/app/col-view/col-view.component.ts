import { Component, Input } from '@angular/core';

@Component({
  selector: 'col-view',
  templateUrl: './col-view.component.html',
  styleUrls: [ './col-view.component.css' ]
})

export class ColViewComponent  {
  @Input() name: string;
}
