import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeComponent } from './personaje.component';

describe('PersonajeComponent', () => {
  let component: PersonajeComponent;
  let fixture: ComponentFixture<PersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
