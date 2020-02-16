import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleInISSComponent } from './people-in-iss.component';

describe('PeopleInISSComponent', () => {
  let component: PeopleInISSComponent;
  let fixture: ComponentFixture<PeopleInISSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleInISSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleInISSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
