import { Component, OnInit } from '@angular/core';
import {GetApiIssService} from "../service/get-api-iss.service";
import {interval} from "rxjs/internal/observable/interval";

@Component({
  selector: 'app-located',
  templateUrl: './located.component.html',
  styleUrls: ['./located.component.scss'],
  providers: [GetApiIssService]
})
export class LocatedComponent implements OnInit {

  longitude: number;
  latitude: number;
  zoom: number = 3;

  constructor(private GetApiIssService: GetApiIssService) { }

  ngOnInit() {
    this.getPosition();
    const o = interval(5000);
    o.subscribe(() => this.getPosition())
  }

  getPosition() {
    this.GetApiIssService.getLocationIss()
      .subscribe((data)=> {
        this.longitude = data['iss_position'].longitude;
        this.latitude = data['iss_position'].latitude;
      })
  }
}
