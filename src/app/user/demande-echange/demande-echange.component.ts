import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande-echange',
  templateUrl: './demande-echange.component.html',
  styleUrls: ['./demande-echange.component.css']
})
export class DemandeEchangeComponent  {

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

  
}

