import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from '../navigation/navigation.component';
import {FooterComponent} from '../footer/footer.component';
import {AppBodyComponent} from '../appBody/appBody.component';
import {SlideShowComponent} from '../slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AppBodyComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
