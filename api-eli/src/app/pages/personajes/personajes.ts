import { Component } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { PersonajeCard } from '../../components/personaje-card/personaje-card';

@Component({
  imports: [PersonajeCard],
  selector: 'app-personajes',
  styleUrl: './personajes.css',
  templateUrl: './personajes.html',
})
export class Personajes {
  personajeDePrueba: Personaje = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

}
