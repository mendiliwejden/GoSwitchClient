import {Component, OnInit, TemplateRef} from '@angular/core';
import {Home} from '../../models/Home';
import {HomeService} from '../../services/home.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-validate-home',
  templateUrl: './validate-home.component.html',
  styleUrls: ['./validate-home.component.css']
})
export class ValidateHomeComponent implements OnInit {
  homeList: Home[];
  homeSelected: Home;
  modalRef: BsModalRef;
  stateChanged = false;

  constructor(private homeService: HomeService,
              public modalService: BsModalService) {
  }

  ngOnInit() {
    this.homeService.getAllHomeList().subscribe(
      data => {
        console.log(data);
        this.homeList = data;
      }
    );
    this.modalService.onHide.subscribe((e) => {
      console.log('close', this.modalService.config.initialState);
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    console.log(this.homeSelected.published);
  }
  onItemChange(value) {
    this.homeSelected.published = value;
    this.stateChanged = true;
    console.log(' Value is : ', this.homeSelected.published );
  }

  updatePublished() {
    this.homeService.updateHomePublished(this.homeSelected.id, this.homeSelected.published).subscribe(
      data => {
        this.stateChanged = false;
        console.log(data);
        alert('Edit successfully');
        this.modalRef.hide();
      }
    );

  }
}
