import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Home} from '../../models/Home';
import {ActivatedRoute} from '@angular/router';
import {FileService} from '../../services/file.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home-available',
  templateUrl: './home-available.component.html',
  styleUrls: ['./home-available.component.css']
})
export class HomeAvailableComponent implements OnInit {
  homeList: Home[];
  imageHomeList: any[];
  dataLogged = false;
  homeSelected: Home;
  homeSelctedId: number;


  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private fileService: FileService,
              private domSanitizer: DomSanitizer,
              private cdRef: ChangeDetectorRef) {
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
        this.selectHome(this.homeList[0]);
        this.dataLogged = true;
      }
    );
  }

  public selectHome(home: Home): void {
    this.homeSelected = home;
    this.homeSelctedId = this.homeSelected.id;
    this.imageHomeList = home.photos;

  }

}
