/**
 * Created by Zmote on 25.10.2017.
 */

import {Component} from '@angular/core';
import {GalleryConstants} from '../constants/GalleryConstants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  baseHref = GalleryConstants.baseHref;
}
