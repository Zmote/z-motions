/**
 * Created by Zmote on 25.10.2017.
 */


import {Component} from '@angular/core';
import {GalleryConstants} from '../constants/GalleryConstants';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  baseHref = GalleryConstants.baseHref;
}
