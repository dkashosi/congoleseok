import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPostDetailsComponent } from './adm-post-details.component';

describe('AdmPostDetailsComponent', () => {
  let component: AdmPostDetailsComponent;
  let fixture: ComponentFixture<AdmPostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
