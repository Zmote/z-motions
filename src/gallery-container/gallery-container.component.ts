/**
 * Created by Zmote on 24.10.2017.
 */

import {Component, OnInit} from '@angular/core';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-gallery[class="container-fluid"]',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.css']
})
export class GalleryComponent implements OnInit {

  imageArray = [
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

  ngOnInit() {
  }

  loadImage(event) {
    $('#exampleModalLong').find('.modal-body').find('img').attr('src', event.target.src);
  }
}
