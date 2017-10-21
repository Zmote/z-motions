/**
 * Created by Zmote on 21.10.2017.
 */

import {Component} from '@angular/core';
import {SlideShowComponent} from '../slideshow/slideshow.component';
@Component({
  selector: 'app-body',
  templateUrl: './appBody.component.html',
  viewProviders: [SlideShowComponent],
  styleUrls: ['./appBody.component.css']
})
export class AppBodyComponent {
}
