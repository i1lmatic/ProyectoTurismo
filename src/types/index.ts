export interface Feature {
  nombre: string;
  icono: string;
}

export interface Anfitrion {
  nombre: string;
  fechaUnion: string;
  reseñas: number;
  verificado: boolean;
  superAnfitrion: boolean;
  indiceRespuestas: number;
  tiempoRespuesta: string;
}

export interface Activity {
  id: string;
  titulo: string;
  tipo: 'tour' | 'experiencia' | 'evento';
  precio: number;
  imagenes: string[];
  ubicacion: string;
  caracteristicas: Feature[];
  calificacion?: number;
  fechaDisponible?: string;
  descripcion?: string;
  anfitrion?: Anfitrion;
}