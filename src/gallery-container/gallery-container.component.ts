/**
 * Created by Zmote on 24.10.2017.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-gallery[class="container-fluid"]',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.css']
})
export class GalleryComponent {
  title = 'Sample Title';
  description = 'Sample description';
  imageArray;

  constructor(route: ActivatedRoute) {
    route.data.subscribe((data) => {
      this.title = data.title;
      this.description = data.description;
      this.imageArray = data.links;
    });
  }

  loadImage(event) {
    $('#exampleModalLong').find('.modal-body').find('img').attr('src', event.target.src);
  }
}
