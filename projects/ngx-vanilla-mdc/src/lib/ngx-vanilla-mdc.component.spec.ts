import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVanillaMdcComponent } from './ngx-vanilla-mdc.component';

describe('NgxVanillaMdcComponent', () => {
  let component: NgxVanillaMdcComponent;
  let fixture: ComponentFixture<NgxVanillaMdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxVanillaMdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxVanillaMdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
