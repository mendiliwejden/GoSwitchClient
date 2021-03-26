import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExchangeRequest} from '../../models/ExchangeRequest';
import {ExchangeRequestService} from "../../services/exchange-request.service";

@Component({
  selector: 'app-demande-echange',
  templateUrl: './demande-echange.component.html',
  styleUrls: ['./demande-echange.component.css']
})
export class DemandeEchangeComponent implements OnInit {

  exchangeRequest = new ExchangeRequest();

  constructor(private activatedRoute: ActivatedRoute, private exchangeRequestService: ExchangeRequestService, private route: Router) {
  }


  ngOnInit(): void {
    this.fixAnnonceNum();
  }

  onSubmit() {

    this.exchangeRequestService.addExchangeRequest(this.exchangeRequest).subscribe(
      data => {
        console.log(data);
        alert('SUCCESS!! :-)\n\n');
        this.route.navigate(['']);
      });
  }

  public fixAnnonceNum(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.exchangeRequest.annonceNum = params.homeId;
      });
  }
}

