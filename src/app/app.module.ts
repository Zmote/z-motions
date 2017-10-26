import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from '../navigation/navigation.component';
import {FooterComponent} from '../footer/footer.component';
import {AppHomeComponent} from '../appHome/appHome.component';
import {SlideShowComponent} from '../slideshow/slideshow.component';
import {RouterModule, Routes} from '@angular/router';
import {InfoCardComponent} from '../infocards/infocards.component';
import {GalleryComponent} from '../gallery-container/gallery-container.component';
import {AboutComponent} from '../about/about.component';
import {ContactComponent} from '../contact/contact.component';
import {CodeComponent} from '../code/code.component';
import {RoutesContainer} from '../constants/RoutesContainer';

// TODO: add go to next/previous image feature in modal view
// TODO: fill out home page cards
// TODO: introducte zoom feature for modal view on images?

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AppHomeComponent,
    SlideShowComponent,
    InfoCardComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    CodeComponent
  ],
  imports: [
    RouterModule.forRoot(
      RoutesContainer.appRoutes
    ),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
