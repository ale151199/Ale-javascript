let pesosAlumnos = [40, 50, 43, 52, 50, 62, 66, 49, 78];
let menos40 = 0;
let entre40y50 = 0;
let entre50y60 = 0;
let masoIgual60 = 0;
for (let i = 0; i < pesosAlumnos.length; i++) {
  if (pesosAlumnos[i] < 40) {
    menos40++;
  } else if (pesosAlumnos[i] >= 40 && pesosAlumnos[i] < 50) {
    entre40y50++;
  } else if (pesosAlumnos[i] >= 50 && pesosAlumnos[i] < 60) {
    entre50y60++;
  } else {
    masoIgual60++;
  }
}
console.log(' Alumnos con menos de 40kg:'  +{menos40});
console.log(' Alumnos entre 40 y 50kg:'  +{entre40y50});
console.log(' Alumnos entre 50 y 60kg:' +{entre50y60});
console.log(' Alumnos con más o igual de 60kg:'  +{masoIgual60});