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

const threeDImageArray = [
  '../assets/img/3dgallery/architecture_exercises_001_by_zmote-d5px5i6.jpg',
  '../assets/img/3dgallery/cargo_ship_by_zmote-d6p1ugd.jpg',
  '../assets/img/3dgallery/caylarrrrr_by_z_mote-d499mx4.png',
  '../assets/img/3dgallery/city_of_winterburg__final_layout_by_zmote-d6pzdzu.jpg',
  '../assets/img/3dgallery/clientwork_cam_model_preview_by_zmote-d5m7yu0.jpg',
  '../assets/img/3dgallery/dat_face_by_zmote-daadprp.jpg',
  '../assets/img/3dgallery/medieval_hostel__with_solar_panels_by_zmote-d79iekf.jpg',
  '../assets/img/3dgallery/rensei_ruin___unknown_nameless___design_001_by_zmote-da8ikxr.jpg',
  '../assets/img/3dgallery/survey_copter_by_zmote-d78gnav.jpg',
  '../assets/img/3dgallery/wacom_intuos5_model_tribute_by_z_mote-d56co5v.jpg',
  '../assets/img/3dgallery/the_barrel_inn_by_zmote-d7g24kx.png'];

const twoDImageArray = [
  '../assets/img/2dgallery/a_purposeful_meeting____by_zmote-d75n3tb.jpg',
  '../assets/img/2dgallery/arriving_in_a_strange_world_by_zmote-d6kl0yj.jpg',
  '../assets/img/2dgallery/color_sketch_004i_by_zmote-d66shah.jpg',
  '../assets/img/2dgallery/cuneyt_arkin_by_z_mote-d5dpyt6.jpg',
  '../assets/img/2dgallery/el_presidente_by_zmote-dbj89t6.png',
  '../assets/img/2dgallery/for_funz_by_zmote-d6kcnld.jpg',
  '../assets/img/2dgallery/material_study_005_by_zmote-d6bpklj.jpg',
  '../assets/img/2dgallery/winterburg_fountain_final_by_zmote-d6rcq79.jpg',
  '../assets/img/2dgallery/winterburg_marketscene_final_by_zmote-d6vurgd.jpg',
  '../assets/img/2dgallery/world_of_seyyare___entire_map__full_resolution_by_zmote-d6qfu09.jpg'];

const appRoutes: Routes = [
  {
    path: '3d',
    component: GalleryComponent,
    data: {title: '3D Gallery', description: 'Here  are some examples of my 3D Work', links: threeDImageArray}
  },
  {
    path: '2d',
    component: GalleryComponent,
    data: {title: '2D Gallery', description: 'Here  are some examples of my 2D Work', links: twoDImageArray}
  },
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
