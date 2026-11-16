import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeCard } from './personaje-card';

describe('PersonajeCard', () => {
  let component: PersonajeCard;
  let fixture: ComponentFixture<PersonajeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonajeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
