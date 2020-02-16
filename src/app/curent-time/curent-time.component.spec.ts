import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurentTimeComponent } from './curent-time.component';

describe('CurentTimeComponent', () => {
  let component: CurentTimeComponent;
  let fixture: ComponentFixture<CurentTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurentTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
