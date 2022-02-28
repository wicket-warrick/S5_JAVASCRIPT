"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

// puntuaciones.forEach((equipo, index) => {
//   const puntosTotalEquipo = equipo.puntos.reduce((acc, puntos) => acc + puntos);
//   puntuaciones[index].puntosTotales = puntosTotalEquipo;
// });
// console.log(puntuaciones);

function ordenarEquipos(clasificacion) {
  for (const equipo of clasificacion) {
    const puntosTotalEquipo = equipo.puntos.reduce(
      (acc, puntos) => acc + puntos
    );
    console.log(puntosTotalEquipo);
    equipo.puntosTotales = puntosTotalEquipo;
  }
  console.log(clasificacion);

  clasificacion.sort((a, b) => {
    if (a.puntosTotales < b.puntosTotales) {
      return -1;
    } else if (b.puntosTotales < a.puntosTotales) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(
    `O equipo que menos puntos ten é ${clasificacion[0].equipo},cun total de ${clasificacion[0].puntosTotales}`
  );
  console.log(
    `O equipo que máis puntos ten é ${
      clasificacion[clasificacion.length - 1].equipo
    },cun total de ${clasificacion[clasificacion.length - 1].puntosTotales}`
  );
}

ordenarEquipos(puntuaciones);
