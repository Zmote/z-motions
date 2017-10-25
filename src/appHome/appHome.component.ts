/**
 * Created by Zmote on 21.10.2017.
 */

import {Component} from '@angular/core';
import {SlideShowComponent} from '../slideshow/slideshow.component';
import {InfoCardComponent} from "../infocards/infocards.component";
@Component({
  selector: 'app-home [class="container-fluid appHome"]',
  templateUrl: './appHome.component.html',
  viewProviders: [SlideShowComponent, InfoCardComponent],
  styleUrls: ['./appHome.component.css']
})
export class AppHomeComponent {
}
