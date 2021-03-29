import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';
import {Home} from '../../models/Home';
import {FileService} from '../../services/file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {


  fileInfos: any;

  userFiles;
  public imagePath;
  photo: any;
  selectedFiles: FileList;
  progressInfos = [];
  message = '';


  constructor(private formBuilder: FormBuilder, private homeService: HomeService, private route: Router, private fileService: FileService) {
  }

  submitted = false;
  model = new Home();

  ngOnInit() {
    this.fixCheckbox();
  }

  onSubmit() {
    console.log('submit data....');
    const formData = new FormData();
    const home = this.model;
    formData.append('home', JSON.stringify(home));
    // formData.append('files', this.userFiles);
    console.log(formData);
    this.homeService.addHome(formData).subscribe(
      data => {
        this.uploadFiles(data.id);
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
      this.progressInfos = [];
      this.selectedFiles = event.target.files;
      console.log(this.selectedFiles);
    }
  }

  uploadFiles(homeId: number) {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, homeId, this.selectedFiles[i]);
    }
  }

  upload(idx, homeId, file) {
    this.progressInfos[idx] = {value: 0, fileName: file.name};

    this.fileService.upload(homeId, file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          // this.fileInfos = this.fileService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }
}


