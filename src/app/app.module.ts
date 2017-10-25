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

const appRoutes: Routes = [
  {path: '3d', component: GalleryComponent},
  {path: '', component: AppHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AppHomeComponent,
    SlideShowComponent,
    InfoCardComponent,
    GalleryComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
