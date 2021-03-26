import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Home} from '../../models/Home';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home-available',
  templateUrl: './home-available.component.html',
  styleUrls: ['./home-available.component.css']
})
export class HomeAvailableComponent implements OnInit {
  homeList: Home[];
  dataLogged = false;
  homeSelected: Home;
  homeSelctedId: number;



  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.getHomeListByRegion(params.region);
      }
    );

  }

  public getHomeListByRegion(region: string): void {
    this.homeService.getHomeListByRegion(region).subscribe(
      data => {
        this.homeList = data;
        this.homeSelected = this.homeList[0];
        this.homeSelctedId = this.homeSelected.id;
        this.dataLogged = true;
        console.log(this.homeList);
      }
    );
  }

  public selectHome(home: Home): void {
    this.homeSelected = home;
    this.homeSelctedId = this.homeSelected.id;
  }
}
