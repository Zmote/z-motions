/**
 * Created by Zmote on 24.10.2017.
 */

import {Component} from '@angular/core';
import {GalleryConstants} from '../constants/GalleryConstants';

@Component({
  selector: 'app-info-card',
  templateUrl: './infocards.component.html',
  styleUrls: ['./infocards.component.css']
})
export class InfoCardComponent {
  baseHref = GalleryConstants.baseHref;
}
