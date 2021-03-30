import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact.service';
import {Message} from '../../models/Message';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  form = new Message();

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService,
              private route: Router) {
  }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields


  onSubmit() {
    console.log(this.form);
    this.form.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
    this.contactService.sendMail(this.form).subscribe(
      data => {
        alert('Merci, votre message a bien été envoyé !');
        this.submitted = true;
        this.route.navigate(['']);
      }
    );
  }

}
