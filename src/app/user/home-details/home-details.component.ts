import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {UserService} from '../../services/user.service';
import {Home} from '../../models/Home';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  user: any;
  dataLogged = false;
  home: Home;
  constructor(private homeService: HomeService, private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.getHomeDetails(params.homeId);
          }
        );

  }

  getHomeDetails(id: number): void {
    this.homeService.getHomeById(id).subscribe(
      data => {
        this.home = data;
        this.getUserDetails(data.userId);
        console.log(data);

      }
    );
  }

  getUserDetails(id: number): void {
    this.userService.getUserById(id).subscribe(
      data => {
        this.user = data;
        console.log(data);
        this.dataLogged = true;
      }
    );
  }
}
