import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

interface IconGroup {
  new: string,
  marked: string,
  unmarked: string,
}

interface Dictionary<T> {
  [Key: string]: T;
}

interface ImageData {
  url: string,
  title: string,
  shortDescription: string,
}

const demo_images: ImageData[] = [
  {
    url: 'https://cdn.reisenaktuell.com/images/2309880_78d42e6d8d6c7a6688b6d35d45a4a4aa-957x550-nocrop.jpg',
    title: 'A1',
    shortDescription: 'B1',
  },
  {
    url: 'https://cdn.reisenaktuell.com/images/2309880_78d42e6d8d6c7a6688b6d35d45a4a4aa-957x550-nocrop.jpg',
    title: 'A2',
    shortDescription: 'B2',
  },
  {
    url: 'https://cdn.reisenaktuell.com/images/2309880_78d42e6d8d6c7a6688b6d35d45a4a4aa-957x550-nocrop.jpg',
    title: 'A3',
    shortDescription: 'B3',
  },
  {
    url: 'https://cdn.reisenaktuell.com/images/2309880_78d42e6d8d6c7a6688b6d35d45a4a4aa-957x550-nocrop.jpg',
    title: 'A4',
    shortDescription: 'B4',
  },
]

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: [ './image-slider.component.css' ]
})

export class ImageSliderComponent  {
  @Input() IconGroupName: string;

  definedIconGroups: Dictionary<IconGroup> = {
    "default" : {
      new : "fa-circle",
      marked: "fa-check",
      unmarked: "fa-xmark"
    },
    "bookmark" : {
      new: "fa-bookmark-slash",
      marked: "fa-bookmark",
      unmarked: "fa-bookmark-slash"
    },
  }

  images: ImageData[];
  obsImages: Observable<ImageData[]>;

  constructor () {
    this.images = demo_images;
    this.obsImages = of(this.images);
  }

}
