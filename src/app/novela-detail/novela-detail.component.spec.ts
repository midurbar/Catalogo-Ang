import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelaDetailComponent } from './novela-detail.component';

describe('NovelaDetailComponent', () => {
  let component: NovelaDetailComponent;
  let fixture: ComponentFixture<NovelaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});