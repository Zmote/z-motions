import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from '../navigation/navigation.component';
import {FooterComponent} from '../footer/footer.component';
import {AppBodyComponent} from '../appBody/appBody.component';
import {SlideShowComponent} from '../slideshow/slideshow.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '3d', component: SlideShowComponent},
  {path: '', component: AppBodyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AppBodyComponent,
    SlideShowComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
