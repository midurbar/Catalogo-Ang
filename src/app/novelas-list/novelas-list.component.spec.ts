import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelasListComponent } from './novelas-list.component';

describe('NovelasListComponent', () => {
  let component: NovelasListComponent;
  let fixture: ComponentFixture<NovelasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});