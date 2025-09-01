export interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  ubicacion: string;
  categoria: 'feria' | 'conferencia' | 'programa';
  zoom?: {
    pais: string;
    scale: number;
    x: number;
    y: number;
  };
  descripcion?: string;
  image?: string;
}

export const eventos: Evento[] = [
  {
    id: 1,
    titulo: 'FEINDEF 2023',
    fecha: '2023-05-17',
    ubicacion: 'Madrid, España',
    categoria: 'feria',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Feria Internacional de Defensa y Seguridad',
    image: '/assets/Eventos/FEINDEF.webp'
  },
  {
    id: 2,
    titulo: 'MWC Shanghai 2023',
    fecha: '2023-06-28',
    ubicacion: 'Shangai, China',
    categoria: 'feria',
    zoom: {
      pais: 'CN',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento tecnológico MWC en Shangai',
    image: '/assets/Eventos/MWC Shangai.webp'
  },
  {
    id: 3,
    titulo: 'Desafia Australia Sidney y Melbourne',
    fecha: '2023-11-23',
    ubicacion: 'Sidney y Melbourne, Australia',
    categoria: 'programa',
    zoom: {
      pais: 'AU',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Programa de internacionalización en Australia',
    image: '/assets/Eventos/Desafía Melbourne.webp'
  },
  {
    id: 4,
    titulo: 'Desafia Singapur',
    fecha: '2023-11-20',
    ubicacion: 'Singapur',
    categoria: 'programa',
    zoom: {
      pais: 'SG',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Programa de internacionalización en Singapur',
    image: '/assets/Eventos/Desafía Singapur.webp'
  },
  {
    id: 5,
    titulo: 'MWC Las Vegas 2023',
    fecha: '2023-11-26',
    ubicacion: 'Las Vegas, EE.UU.',
    categoria: 'feria',
    zoom: {
      pais: 'US',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento tecnológico MWC en Las Vegas',
    image: '/assets/Eventos/MWC Las Vegas.webp'
  },
  {
    id: 6,
    titulo: 'EU Startups Summit',
    fecha: '2024-05-09',
    ubicacion: 'Malta',
    categoria: 'conferencia',
    zoom: {
      pais: 'MT',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Cumbre de startups europeas',
    image: '/assets/Eventos/EU Summit Malta.webp'
  },
  {
    id: 7,
    titulo: 'Next Rise 2024',
    fecha: '2024-06-13',
    ubicacion: 'Seúl, Corea del Sur',
    categoria: 'conferencia',
    zoom: {
      pais: 'KR',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Conferencia de innovación y startups en Seúl',
    image: '/assets/Eventos/NextRise Korea.webp'
  },
  {
    id: 8,
    titulo: 'HLTH Europe en Amsterdam',
    fecha: '2024-06-17',
    ubicacion: 'Ámsterdam, Países Bajos',
    categoria: 'feria',
    zoom: {
      pais: 'NL',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento de innovación en salud digital',
    image: '/assets/Eventos/HLTH Amsterdam.webp'
  },
  {
    id: 9,
    titulo: 'Evento en Washington',
    fecha: '2024-06-22',
    ubicacion: 'Washington, EE.UU.',
    categoria: 'conferencia',
    zoom: {
      pais: 'US',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento internacional en Washington',
    image: '/assets/Eventos/Washington.webp'
  },
  {
    id: 10,
    titulo: 'Desafia Países Nórdicos',
    fecha: '2024-09-23',
    ubicacion: 'Países Nórdicos',
    categoria: 'programa',
    zoom: {
      pais: 'SE',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Programa de internacionalización en Países Nórdicos',
    image: '/assets/Eventos/Desafía Nordics Estocolmo.webp'
  },
  {
    id: 11,
    titulo: 'La Noche de los Investigadores',
    fecha: '2024-09-27',
    ubicacion: 'Madrid, España',
    categoria: 'conferencia',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento de divulgación científica en Madrid',
    image: '/assets/Eventos/Noche Europa de los Investigadores 24.webp'
  },
  {
    id: 12,
    titulo: 'EEN Caso de Éxito',
    fecha: '2024-11-07',
    ubicacion: 'Budapest, Hungría',
    categoria: 'conferencia',
    zoom: {
      pais: 'HU',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Caso de éxito empresarial en Budapest',
    image: '/assets/Eventos/Budapest EEN.webp'
  },
  {
    id: 13,
    titulo: 'MEDICA 2024',
    fecha: '2024-11-11',
    ubicacion: 'Düsseldorf, Alemania',
    categoria: 'feria',
    zoom: {
      pais: 'DE',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Feria internacional de medicina y tecnología sanitaria',
    image: '/assets/Eventos/Medica.webp'
  },
  {
    id: 14,
    titulo: 'Recogida de Sello Madrid Excelente',
    fecha: '2024-12-04',
    ubicacion: 'Madrid, España',
    categoria: 'conferencia',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Ceremonia de reconocimiento Madrid Excelente',
    image: '/assets/Eventos/Madrid Excelente.webp'
  },
  {
    id: 15,
    titulo: 'Fundación Ramón Areces',
    fecha: '2025-01-20',
    ubicacion: 'Madrid, España',
    categoria: 'conferencia',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Jornada en Fundación Ramón Areces',
    image: '/assets/Eventos/HispanIA 2040 4.webp'
  },
  {
    id: 16,
    titulo: 'Civil-Military ATM Cooperation Workshop',
    fecha: '2025-01-23',
    ubicacion: 'Bruselas, Bélgica',
    categoria: 'conferencia',
    zoom: {
      pais: 'BE',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Taller de cooperación civil-militar en Bruselas',
    image: '/assets/Eventos/Civil-Military ATM Cooperation Workshop.webp'
  },
  {
    id: 17,
    titulo: 'Kick-off Asamblea General del nuevo proyecto EISNET',
    fecha: '2025-01-27',
    ubicacion: 'París, Francia',
    categoria: 'conferencia',
    zoom: {
      pais: 'FR',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Inicio de la Asamblea General del proyecto EISNET',
    image: '/assets/Eventos/Kickoff EISNET París.webp'
  },
  {
    id: 18,
    titulo: 'Exposición de proyectos médicos',
    fecha: '2025-02-14',
    ubicacion: 'Madrid, España',
    categoria: 'conferencia',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Exposición organizada por José Ángel Cabrera',
    image: '/assets/Eventos/Evento Cabrera.webp'
  },
  {
    id: 19,
    titulo: 'DESAFÍA DAY',
    fecha: '2025-02-27',
    ubicacion: 'Madrid, España',
    categoria: 'programa',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento de cierre del programa Desafía',
    image: '/assets/Eventos/Desafía Day.webp'
  },
  {
    id: 20,
    titulo: 'MWC Barcelona 2025',
    fecha: '2025-03-03',
    ubicacion: 'Barcelona, España',
    categoria: 'feria',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento tecnológico MWC en Barcelona',
    image: '/assets/Eventos/MWC Barcelona 25.webp'
  },
  {
    id: 21,
    titulo: 'Madrid es Ciencia',
    fecha: '2025-03-27',
    ubicacion: 'Madrid, España',
    categoria: 'conferencia',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Feria de divulgación científica en Madrid',
    image: '/assets/Eventos/Madrid es ciencia.webp'
  },
  {
    id: 22,
    titulo: 'Beyond Innovation Arena. IA Reality Bites',
    fecha: '2025-04-04',
    ubicacion: 'Atenas, Grecia',
    categoria: 'conferencia',
    zoom: {
      pais: 'GR',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Conferencia sobre IA en Atenas',
    image: '/assets/Eventos/Beyond Atenas.webp'
  },
  {
    id: 23,
    titulo: 'Colegio Oficial de Médicos de Madrid',
    fecha: '2025-04-07',
    ubicacion: 'Madrid, España',
    categoria: 'conferencia',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento en el Colegio Oficial de Médicos de Madrid',
    image: '/assets/Eventos/Colegio de Médicos.webp'
  },
  {
    id: 24,
    titulo: 'FEINDEF',
    fecha: '2025-05-12',
    ubicacion: 'Madrid, España',
    categoria: 'feria',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Feria Internacional de Defensa en Madrid',
    image: '/assets/Eventos/FEINDEF 25.webp'
  },
  {
    id: 25,
    titulo: 'GITEX EUROPE',
    fecha: '2025-05-21',
    ubicacion: 'Berlín, Alemania',
    categoria: 'feria',
    zoom: {
      pais: 'DE',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento tecnológico GITEX Europe en Berlín',
    image: '/assets/Eventos/GITEX EU.webp'
  },
  {
    id: 26,
    titulo: '+INDUSTRY Y weAR de Robótica',
    fecha: '2025-06-03',
    ubicacion: 'Bilbao, España',
    categoria: 'feria',
    zoom: {
      pais: 'ES',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Evento de industria y robótica en Bilbao',
    image: '/assets/Eventos/industry y weAR Bilbao.webp'
  },
  {
    id: 27,
    titulo: 'FIME WHX Miami',
    fecha: '2025-06-11',
    ubicacion: 'Miami, EE.UU.',
    categoria: 'feria',
    zoom: {
      pais: 'US',
      scale: 1.5,
      x: 0.3,
      y: 0.4
    },
    descripcion: 'Feria internacional de tecnología médica en Miami',
    image: '/assets/Eventos/WHX Miami.webp'
  }
];

// Función para obtener todos los eventos
export function obtenerTodosLosEventos(): Evento[] {
  return eventos;
}

// Función para obtener eventos próximos (solo eventos reales futuros)
export function obtenerEventosProximos(): Evento[] {
  // Por ahora no hay eventos futuros reales, devolver array vacío
  return [];
}

// Función para obtener eventos pasados
export function obtenerEventosPasados(): Evento[] {
  return obtenerTodosLosEventos();
}

// Función para obtener eventos por categoría
export function obtenerEventosPorCategoria(categoria: string) {
  return eventos.filter(evento => evento.categoria === categoria);
}

// Función para obtener eventos relacionados
export function obtenerEventosRelacionados(eventoActual: any, cantidad: number = 3) {
  // Filtrar eventos de la misma categoría (excluyendo el actual)
  const mismaCategoria = eventos
    .filter(e => e.categoria === eventoActual.categoria && e.id !== eventoActual.id)
    .sort((a, b) => b.fecha.getTime() - a.fecha.getTime());

  // Si no hay suficientes de la misma categoría, agregar los más recientes de cualquier categoría
  const otrasCategorias = eventos
    .filter(e => e.categoria !== eventoActual.categoria && e.id !== eventoActual.id)
    .sort((a, b) => b.fecha.getTime() - a.fecha.getTime());

  // Combinar y limitar a la cantidad solicitada
  const relacionados = [...mismaCategoria, ...otrasCategorias].slice(0, cantidad);

  return relacionados;
}

// Función para formatear fecha
export function formatearFecha(fecha: string): string {
  return new Date(fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Función para obtener tiempo transcurrido
export function obtenerTiempoTranscurrido(fecha: Date): string {
  const ahora = new Date();
  const diffInSeconds = Math.floor((ahora.getTime() - fecha.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'Hace unos segundos';
  } else if (diffInSeconds < 3600) {
    const minutos = Math.floor(diffInSeconds / 60);
    return `Hace ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`;
  } else if (diffInSeconds < 86400) {
    const horas = Math.floor(diffInSeconds / 3600);
    return `Hace ${horas} ${horas === 1 ? 'hora' : 'horas'}`;
  } else if (diffInSeconds < 2592000) {
    const dias = Math.floor(diffInSeconds / 86400);
    return `Hace ${dias} ${dias === 1 ? 'día' : 'días'}`;
  } else {
    const meses = Math.floor(diffInSeconds / 2592000);
    return `Hace ${meses} ${meses === 1 ? 'mes' : 'meses'}`;
  }
} 