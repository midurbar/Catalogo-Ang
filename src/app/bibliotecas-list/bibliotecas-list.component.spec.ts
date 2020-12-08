import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecasListComponent } from './bibliotecas-list.component';

describe('BibliotecasListComponent', () => {
  let component: BibliotecasListComponent;
  let fixture: ComponentFixture<BibliotecasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});