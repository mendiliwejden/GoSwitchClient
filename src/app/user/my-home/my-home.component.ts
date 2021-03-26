import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';
import {Home} from '../../models/Home';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  userFile;
  public imagePath;
  photo: any;
  public message: string;


  constructor(private formBuilder: FormBuilder, private homeService: HomeService, private route: Router) {
  }

  submitted = false;
  model = new Home();

  ngOnInit() {
    this.fixCheckbox();
  }

  onSubmit() {
    console.log('submit data....');
    const formData = new FormData();
    const user = this.model;
    formData.append('home', JSON.stringify(user));
    formData.append('file', this.userFile);
    console.log(formData);
    this.homeService.addHome(formData).subscribe(
      data => {
        console.log(data);
        alert('home registered successfully');
        this.route.navigate(['']);
      }
    );

  }

  fixCheckbox() {
    this.model.wifi = false;
    this.model.tv = false;
    this.model.animaux = false;
    this.model.bicyclette = false;
    this.model.equipepourenfants = false;
    this.model.escalier = false;
    this.model.fumeurs = false;
    this.model.gazon = false;
    this.model.jacuzzi = false;
    this.model.magazin = false;
    this.model.microondes = false;
    this.model.parking = false;
    this.model.piscine = false;
    this.model.radio = false;
    this.model.refrigrrateur = false;
  }

  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

      const mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        console.log('Only images are supported.');
        return;
      }


    }
  }
}
