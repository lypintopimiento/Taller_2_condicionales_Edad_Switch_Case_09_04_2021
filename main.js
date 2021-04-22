 let edad= parseInt(prompt ("Ingrese su edad:")); 
 console.warn("La edad ingresada es:");


 console.log(edad);
 console.warn("Respuesta:");
 switch (edad) {
     case 18: 
         console.log(`La persona es mayor de edad`);
         break;

     case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17:    
         console.log(`La edad ingresada no cumple con los parámetros`);
         break;
     default:
        console.log(`La persona es mayor de edad`);
         break;
 }

//if (edad>=18)
  //  {
  //  console.log(`La persona es mayor de edad`);
  //  } else {
  //  console.log(`La edad ingresada no cumple con los parámetros`);
//}