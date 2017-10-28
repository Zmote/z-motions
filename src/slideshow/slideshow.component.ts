/**
 * Created by Zmote on 21.10.2017.
 */

import {Component} from '@angular/core';
import {GalleryConstants} from '../constants/GalleryConstants';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideShowComponent {
  baseHref = GalleryConstants.baseHref;
}
