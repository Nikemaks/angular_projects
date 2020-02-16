import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatedComponent } from './located.component';

describe('LocatedComponent', () => {
  let component: LocatedComponent;
  let fixture: ComponentFixture<LocatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
