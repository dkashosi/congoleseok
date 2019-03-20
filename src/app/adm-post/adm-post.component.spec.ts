import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPostComponent } from './adm-post.component';

describe('AdmPostComponent', () => {
  let component: AdmPostComponent;
  let fixture: ComponentFixture<AdmPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
