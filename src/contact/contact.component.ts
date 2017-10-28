/**
 * Created by Zmote on 25.10.2017.
 */

import {Component} from '@angular/core';
import {GalleryConstants} from '../constants/GalleryConstants';
declare let $: any;
declare let jQuery: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  baseHref = GalleryConstants.baseHref;
}

