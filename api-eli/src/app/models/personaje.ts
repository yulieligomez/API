export interface Personaje {
id: number;
name: string;
status: string;
species: string;
image: string;
}
export interface RespuestaPersonajes {
results: Personaje[];
}
