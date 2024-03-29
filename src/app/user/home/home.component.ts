import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  emailstring = 'mailto:mendili.wejden@gmail.com?Subject=Hello&body=links:  %0D http://link1.com  %0D http://link1.com';

  content: string;

  constructor(private userService: UserService, public tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

  }

}
