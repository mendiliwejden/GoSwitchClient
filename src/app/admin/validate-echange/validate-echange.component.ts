import {Component, OnInit, TemplateRef} from '@angular/core';
import {ExchangeRequestService} from '../../services/exchange-request.service';
import {ExchangeRequest} from '../../models/ExchangeRequest';
import {HomeService} from '../../services/home.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Home} from '../../models/Home';
import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-validate-echange',
  templateUrl: './validate-echange.component.html',
  styleUrls: ['./validate-echange.component.css']
})
export class ValidateEchangeComponent implements OnInit {
  exchangeRequestList: ExchangeRequest[];
  homeSelected: Home;
  modalRef: BsModalRef;
  stateChanged = false;

  constructor(private exchangeRequestService: ExchangeRequestService,
              private homeService: HomeService,
              public modalService: BsModalService) {
  }

  ngOnInit() {
    this.getAllExchangeRequest();
    this.modalService.onHide.subscribe((e) => {
      console.log('close', this.modalService.config.initialState);
    });
  }

  getHomeDetails(id, template) {
    this.homeService.getHomeById(id).subscribe(
      data => {
        this.homeSelected = data;
        this.openModal(template);
      },
      error => {
        alert(error.message);
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    console.log(this.homeSelected.published);
  }

  openConfirmationDialog(id) {
    this.modalRef = this.modalService.show(ConfirmationDialogComponent);
    this.modalRef.content.onClose.subscribe(
      result => {
        if (result) {
          this.exchangeRequestService.deleteExchangeRequestById(id).subscribe(
            data => {
              alert('Exchange request deleted successfully');
              this.getAllExchangeRequest();
            },
            error => {
              alert('Exchange request could not be deleted');
            }
          );
        }
        console.log('results', result);
      });
  }

  getAllExchangeRequest() {
    this.exchangeRequestService.getAllExchangeRequest().subscribe(
      data => {
        console.log(data);
        this.exchangeRequestList = data;
      }
    );
  }
}
