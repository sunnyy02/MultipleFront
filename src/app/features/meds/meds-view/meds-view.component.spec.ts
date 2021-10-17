import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsViewComponent } from './meds-view.component';

describe('MedsViewComponent', () => {
  let component: MedsViewComponent;
  let fixture: ComponentFixture<MedsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
