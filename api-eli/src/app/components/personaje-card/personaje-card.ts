import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/personaje';

@Component({
  imports: [],
  selector: 'app-personaje-card',
  styleUrl: './personaje-card.css',
  templateUrl: './personaje-card.html',
})
export class PersonajeCard {
  @Input() personaje!: Personaje;
}
