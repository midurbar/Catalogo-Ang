import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasListComponent } from './mangas-list.component';

describe('MangasListComponent', () => {
  let component: MangasListComponent;
  let fixture: ComponentFixture<MangasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});