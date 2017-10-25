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

// TODO: extract into own structures
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

const conceptImageArray = [
  '../assets/img/concept/001.jpg',
  '../assets/img/concept/30_30_costume_design_sketches____by_zmote-d6t0wp3.jpg',
  '../assets/img/concept/arriving_at_narufo___scene_concept_by_zmote-da8m9ak.jpg',
  '../assets/img/concept/Bild004.jpg',
  '../assets/img/concept/caricature_sketch_001.jpg',
  '../assets/img/concept/colorSketchv1.jpg',
  '../assets/img/concept/compositional_experiment___pictorial_compsotion_00_by_zmote-da9o4fu.jpg',
  '../assets/img/concept/compositional_experiments_by_zmote-da9639e.jpg',
  '../assets/img/concept/imaginary_piece_019_by_zmote-d681a0m.jpg',
  '../assets/img/concept/imaginary_piece_020_by_zmote-d681sm4.jpg',
  '../assets/img/concept/inktober__010_by_zmote-dbq8bg8.jpg',
  '../assets/img/concept/lineart_for_contest_corkya_by_zmote-d5k1sx9.jpg',
  '../assets/img/concept/logoprototypesheets.jpg',
  '../assets/img/concept/n_waves_logo_design_sketches_by_zmote-dbrbjbj.jpg',
  '../assets/img/concept/quick_scene_sketch_by_zmote-dbl8gox.jpg',
  '../assets/img/concept/scene_sketch_004_by_zmote-dbrdmks.jpg',
  '../assets/img/concept/scene_sketch_007_by_zmote-dblb53y.jpg',
  '../assets/img/concept/scene_wip_001___world_building_course_by_zmote-d6u402d.jpg',
  '../assets/img/concept/some_ship_by_zmote-dbqu6zv.jpg',
  '../assets/img/concept/the_longing___a_quick_concept_by_zmote-da8mz2g.jpg',
  '../assets/img/concept/united_we_stand_divided_we_fall_wip_by_zmote-d6i583a.jpg',
  '../assets/img/concept/Unti3tled-1.jpg',
  '../assets/img/concept/vehicle_final____by_zmote-d6tw8uz.jpg',
  '../assets/img/concept/week_04___clothing_sketches____by_zmote-d6spqr2.jpg',
  '../assets/img/concept/week_10_thumbnail_batches____first_6_out_of_200_xd_by_zmote-d6enp2q.jpg',
  '../assets/img/concept/wip___journey_on_a_whale_by_zmote-da8w8s7.jpg',
  '../assets/img/concept/wip_sketch_001_out_of_the_woods_by_zmote-d98bou0.jpg'];

const designImageArray = ['../assets/img/designs/57a945bb69a58de2c4da952e0ff8af95-d68yzcu.png',
  '../assets/img/designs/alienOnWatch.jpg',
  '../assets/img/designs/bersichtimageware_by_zmote-d5t47tr.png',
  '../assets/img/designs/BestelineLogo.JPG',
  '../assets/img/designs/brotherlogo_by_zmote-d5t47b7.png',
  '../assets/img/designs/cemilabisample-08.png',
  '../assets/img/designs/color_composition_by_zmote-d5s17oj.jpg',
  '../assets/img/designs/computerdesign_by_zmote-d5t4819.png',
  '../assets/img/designs/designwork_002_by_z_mote-d5cgn2y.jpg',
  '../assets/img/designs/designwork_003_by_z_mote-d5cgnb8.jpg',
  '../assets/img/designs/designwork_010_by_z_mote-d5fn5j4.jpg',
  '../assets/img/designs/Ekol_kids_Flyer_a5_front.jpg',
  '../assets/img/designs/ekolFrühanmeldung_frontDEUTSCHCMYKPRINTREADYA4.jpg',
  '../assets/img/designs/EliteFlyer_front_CMYK_mitBescnittzugabe1mm.jpg',
  '../assets/img/designs/erdal_bakkal_by_zmote-d5qijdr.jpg',
  '../assets/img/designs/flyerA4RGB.jpg',
  '../assets/img/designs/geleneksel_tanisma_cayi_2013_by_zmote-d5vu12a.jpg',
  '../assets/img/designs/iftar-flyer-simple-v4.jpg',
  '../assets/img/designs/iftar-flyer-v3.jpg',
  '../assets/img/designs/ITClub_fuer_Damen.jpg',
  '../assets/img/designs/iw3dwithreflection_by_zmote-d5t47ok.png',
  '../assets/img/designs/kermes2013_by_zmote-d608dab.jpg',
  '../assets/img/designs/logofinal.jpg',
  '../assets/img/designs/Mehmet Dogan pm2world Visitenkarte.jpg',
  '../assets/img/designs/MPM GmbH Logo Neu ok.jpg',
  '../assets/img/designs/new_facebook_avatar_by_zmote-dborjiz.jpg',
  '../assets/img/designs/Oberuzwil Pinocchip 4-Seitig PDF-1.jpg',
  '../assets/img/designs/pinochio_back.jpg',
  '../assets/img/designs/pinochio_front.jpg',
  '../assets/img/designs/rejected_logo_desgns____by_zmote-d5xkz9m.jpg',
  '../assets/img/designs/some_icon_designs_by_zmote-dazfkq1.jpg',
  '../assets/img/designs/some_inbetween_design_work_by_zmote-d6oamv8.jpg',
  '../assets/img/designs/säntis.jpg',
  '../assets/img/designs/tomateKurierIcon.jpg',
  '../assets/img/designs/tomateKurierIcon2.jpg',
  '../assets/img/designs/tomateKurierIcon3D.jpg',
  '../assets/img/designs/wanna_be_friends__by_zmote-d5rypzq.jpg'];

const appRoutes: Routes = [
  {
    path: '3d',
    component: GalleryComponent,
    data: {title: '3D Gallery', description: 'Here are some examples of my 3D Work', links: threeDImageArray}
  },
  {
    path: '2d',
    component: GalleryComponent,
    data: {title: '2D Gallery', description: 'Here are some examples of my 2D Work', links: twoDImageArray}
  },
  {
    path: 'concept',
    component: GalleryComponent,
    data: {
      title: 'Concept Gallery',
      description: 'Here are some examples of my various conceptual works',
      links: conceptImageArray
    }
  },
  {
    path: 'design',
    component: GalleryComponent,
    data: {
      title: 'Design Gallery',
      description: 'Here are some examples of my Design and Vector work',
      links: designImageArray
    }
  },
  {path: 'contact', component: ContactComponent},
  {path: 'code', component: CodeComponent},
  {path: 'about', component: AboutComponent},
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
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    CodeComponent
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
