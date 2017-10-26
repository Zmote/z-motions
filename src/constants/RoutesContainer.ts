/**
 * Created by Zmote on 26.10.2017.
 */

import {Routes} from '@angular/router';
import {AppHomeComponent} from '../appHome/appHome.component';
import {AboutComponent} from '../about/about.component';
import {CodeComponent} from '../code/code.component';
import {ContactComponent} from '../contact/contact.component';
import {GalleryConstants} from './GalleryConstants';
import {GalleryComponent} from '../gallery-container/gallery-container.component';

export class RoutesContainer {
  static readonly appRoutes: Routes = [
    {
      path: '3d',
      component: GalleryComponent,
      data: {
        title: '3D Gallery',
        description: 'Here are some examples of my 3D Work. Click on the image previews to enlarge.',
        links: GalleryConstants.threeDImageArray
      }
    },
    {
      path: '2d',
      component: GalleryComponent,
      data: {
        title: '2D Gallery',
        description: 'Here are some examples of my 2D Work. Click on the image previews to enlarge.',
        links: GalleryConstants.twoDImageArray
      }
    },
    {
      path: 'concept',
      component: GalleryComponent,
      data: {
        title: 'Concept Gallery',
        description: 'Here are some examples of my various conceptual works. Click on the image previews to enlarge.',
        links: GalleryConstants.conceptImageArray
      }
    },
    {
      path: 'design',
      component: GalleryComponent,
      data: {
        title: 'Design Gallery',
        description: 'Here are some examples of my Design and Vector work. Click on the image previews to enlarge.',
        links: GalleryConstants.designImageArray
      }
    },
    {path: 'contact', component: ContactComponent},
    {path: 'code', component: CodeComponent},
    {path: 'about', component: AboutComponent},
    {path: '', component: AppHomeComponent}
  ];
}
