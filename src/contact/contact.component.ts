/**
 * Created by Zmote on 25.10.2017.
 */

import {Component} from '@angular/core';
declare let $: any;
declare let jQuery: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  sendMail() {
    const form = $('#contact-form').serialize();
    $.ajax({
      url: 'http://localhost:3000/sendMail',
      data: form,
      success: function (data) {
        console.log(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  }
}

