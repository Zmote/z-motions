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
import {AnimationComponent} from '../animation/animation.component';
import {NotFoundComponent} from '../notfound/notfound.component';
import {APP_BASE_HREF} from '@angular/common';
import {environment} from '../environments/environment';

// TODO: Adjust image sizes, make thumbnails for small images and load full size for modal
// TODO: Break up code into more components and directives
// TODO: Gather belonging elements into modules
// TODO: Check navbar scroll issue on some mobiles
// TODO: Form nested components

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
    CodeComponent,
    AnimationComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      RoutesContainer.appRoutes
    ),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: environment.baseHref || '/'  // Fallback to '/' if not set
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
