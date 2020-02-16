import {Component, OnInit,} from '@angular/core';
import {interval} from "rxjs/internal/observable/interval";

@Component({
  selector: 'app-curent-time',
  templateUrl: './curent-time.component.html',
  styleUrls: ['./curent-time.component.scss']
})
export class CurentTimeComponent implements OnInit {
  currentDate = new Date();

  ngOnInit() {
    const o = interval(5000);
    o.subscribe(() => this.getCurentTime())
  }

  getCurentTime() {
    this.currentDate = new Date();
  }
}
