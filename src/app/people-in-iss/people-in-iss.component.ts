import { Component, OnInit } from '@angular/core';
import {GetApiIssService} from "../service/get-api-iss.service";
import {interval} from "rxjs/internal/observable/interval";

@Component({
  selector: 'app-people-in-iss',
  templateUrl: './people-in-iss.component.html',
  styleUrls: ['./people-in-iss.component.scss'],
  providers: [GetApiIssService]
})
export class PeopleInISSComponent implements OnInit {

  people: [];
  countPeople: number;
  constructor(private GetApiIssService: GetApiIssService) { }

  ngOnInit() {
    this.getPeople();
    const o = interval(5000);
    o.subscribe(() => this.getPeople())
  }

  getPeople() {
    this.GetApiIssService.getPeopleIss()
      .subscribe((data)=> {
        this.people = data['people'];
        this.countPeople = this.people.length
      })
  }
}
