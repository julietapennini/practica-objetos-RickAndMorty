// const coche = {
//   marca: 'Mustang',
//   color: 'Negro',
//   llantas: 'Nuevas',
//   modelo: 2020,
//   enFuncionamiento: false
// };

// const modeloCoche = coche.modelo;
// const colorCoche = coche.color;

// console.log(modeloCoche, colorCoche);

// const mascota = {
//   nombre: 'Logan',
//   raza: 'Dogo',
//   hogares: ['Lindavista', 'Narvarte', 'Hidalgo', 'Puebla'],
//   pareja: {
//     nombre: 'Deisy',
//     raza: 'Dogo',
//     hogares: ['Puebla']
//   }
// };

// const coches = [
//   {
//     marca: 'Mustang',
//     color: 'Negro',
//     llantas: 'Nuevas',
//     modelo: 2020,
//     enFuncionamiento: false
//   },
//   {
//     marca: 'Honda',
//     color: 'Verde',
//     llantas: 'Semi nuevas',
//     modelo: 2010,
//     enFuncionamiento: true
//   }
// ]

// const coches = [{}, {}];
// console.log(coches[1].color) // verde

//  JSON Javascript Sintax Object Notation
// const coches = {
//   coche1: {
//     marca: 'Mustang',
//     color: 'Negro',
//     llantas: 'Nuevas',
//     modelo: 2020,
//     enFuncionamiento: false
//   },
//   coche2:{
//     marca: 'Honda',
//     color: 'Verde',
//     llantas: 'Semi nuevas',
//     modelo: 2010,
//     enFuncionamiento: true
//   }
// }

// fetch('https/github/jonhks/api')
// console.log(data)

// const coches = {coche1:{}, coche2:{}};
// console.log(coches);
// console.log(coches.coche2.color) // verde

// const coche = {
//   marca: 'Mustang',
//   color: 'Negro',
//   llantas: 'Nuevas',
//   modelo: 2020,
//   enFuncionamiento: false,
//   verificación: true
// };

// // arreglo[4]
// // objeto[llantas]

// for(key in coche){
//   if(coche[key] === 'Nuevas'){
//     console.log(`propiedad:${key}, valor:${coche[key]}`)
//   }
// }

// const coche = {
//   marca: 'Mustang',
//   color: 'Negro',
// };

// coche.marca = 'Bocho';
// coche.velocidad = '200km/hr';
// delete coche.color;



// console.log(coche)

// let nombre = 'null';
// nombre = prompt('Ingrese su nombre')

// document.write(nombre)

// const datos = {
//   descripcion: 'Comida',
//   monto: 150,
//   tipo: 'Gasto',
//   categoria: 'Comida',
//   fecha: '27/03/2021'
// }

// 1 + Number("2") = 3

// console.log(JSON.stringify(datos));

// localStorage.setItem('Nombre', 'Jonh');
// localStorage.setItem('operacion', JSON.stringify(datos));

// const datosRecibidos = JSON.parse(localStorage.getItem('operacion'));

// console.log(datosRecibidos);

// const prueba = localStorage.getItem('Edad');

// console.log(prueba);


// document.body.innerHTML = prueba;


// const telefono = {
//   marca: 'Motorola',
//   color: 'Negro',
//   pantalla: 6
// };

// const {color} = telefono;
// console.log(color);
// const arr = ['Jonh', 'Parra', 'Zavala']

// const [nombre, apellido, segundoApellido] = arr;

// console.log( apellido, segundoApellido);



// let marca = telefono.marca;
// let color = telefono.color;
// let pantalla = telefono.pantalla;

// console.log(marca, color, pantalla);

// console.log(telefono.marca, telefono.color, telefono.pantalla);

// Declarar una variable con el nombre propiedadNombre y asignar el valor nombre
// Declarar una variable con el nombre propiedadEdad y asignar el valor edad
// Crear un objeto persona con las propiedades nombre y edad
// Asignar a las propiedades del objeto persona tu nombre y edad
// Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
// Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedadNombre y propiedadEdad


// const propiedadNombre = 'nombre';
// const propiedadEdad = 'edad';


// const persona = {
//   nombre: propiedadNombre,
//   edad: propiedadEdad
// };

// persona[propiedadNombre] = 'Jonh';
// persona[propiedadEdad] = 34;

// console.log(persona[propiedadNombre]);


// const persona = {
//   nombre: 'Pepe',
//   edad: 25,
//   colores: {
//     rojo: 'rojo',
//     azul: 'azul'
//   }
// };


// const persona2 = {...persona};
// persona2.nombre = 'Juan';
// persona2.colores.verde = 'verde';
// const personas = [persona, persona2]

// console.log(personas);

// spread operator

// Completá el siguiente código para obtener el resultado deseado en el console.log, utilizando el operador de propagación (spread operator).

// const delUnoAlTres = [1, 2, 3];

// const delUnoAlCinco = [...delUnoAlTres].concat(4,5)// ACA LA SOLUCION
// const delUnoAlCinco = [1, 2, 3,...[4, 5]]// ACA LA SOLUCION
// const arr = [4,5]
// const delUnoAlCinco = [...delUnoAlTres, ...arr]// ACA LA SOLUCION
// const delUnoAlCinco = [...delUnoAlTres, 4, 5]// ACA LA SOLUCION

// console.log( delUnoAlCinco ); // [1, 2, 3, 4, 5]



// A partir del array dado, creá un nuevo array que empiece con el elemento ‘CERO’ y termine con el elemento ‘CUATRO’
// const arrayDado = ['UNO', 'DOS', 'TRES'];

// const nuevoArray = ['CERO',...arrayDado,'CUATRO']// ACA LA SOLUCION

// console.log( nuevoArray ); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']


// Ejercicio 4
// Completá el siguiente código para llegar al resultado esperado (respetar orden).
// Quiero obtener un único objeto final con todas las propiedades
// const reviews = {
//  reviewIMDB: 9,
//  reviewFilmAffinity: 8.1
// };

// const peliInfo = {
//  titulo: 'The Dark Knight',
//  anio: 2008
// };

// const pelicula = {...peliInfo, ...reviews}    // ACA LA SOLUCION

// console.log(pelicula);
// {
//   titulo: 'The Dark Knight',
//   anio: 2008,
//   reviewIMDB: 9,
//   reviewFilmAffinity: 8.1
// }


// Ejercicio 6
// La función Math.max() recibe varios números (distintos parámetros) y retorna el más alto.
// ¿Cómo modificarías el siguiente código para que funcione con distintos arrays sin tener que estar todo el tiempo usando los índices?
// console.log( Math.max(4, 7) ); // 7

// const tresNums = [9, 4, 7];
// console.log( Math.max(tresNums[0], tresNums[1], tresNums[2]) ); // 9
// console.log( Math.max(...tresNums) ); // NaN
// console.log(...tresNums);

// const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];
// console.log( Math.max(...masNums)); // NaN, y debería ser 132


// 01 - persona
// Declarar una variable con el nombre propiedadNombre y asignar el valor nombre
// Declarar una variable con el nombre propiedadEdad y asignar el valor edad
// Crear un objeto persona con las propiedades nombre y edad
// Asignar a las propiedades del objeto persona tu nombre y edad
// Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
// Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedadNombre y propiedadEdad

// const propiedadNombre = 'nombre';
// const propiedadEdad = 'edad';


// const persona = {
//   nombre: propiedadNombre,
//   edad: propiedadEdad
// };

// for (const key in persona) {
//     console.log(key);
//     // console.log(persona[key]);
// }

// persona.OtroNoExiste = 'Pepe';
// persona[propiedadNombre] = 'Jonh';

// console.log(persona);

// persona[propiedadEdad] = 34;

// console.log(persona[propiedadNombre]);


// 02 - keys
// Partiendo de un objeto guardado en la variable producto
// Mostrar en la consola el nombre de todas las propiedades que tiene el producto
// Utilizar el método keys
// const producto = {
//   id: 'ADA-020',
//   title: 'Gubergren sed est amet voluptua',
//   price: 123.75,
//   picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
//   condition: 'nuevo',
//   free_shipping: true,
//   location: 'Capital Federal'
// };


// // // completá acá el código
// var todasLasPropiedades = Object.keys(producto);

// console.log(todasLasPropiedades);
// // // resultado esperado
// // // [ 'id',
// // //   'title',
// // //   'price',
// // //   'picture',
// // //   'condition',
// // //   'free_shipping',
// // //   'location' ]


// // 03 - producto
// // Partiendo de un objeto guardado en la variable producto
// // Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
// // Utilizar el método keys
// // El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]"
// const producto = {
//   id: "ADA-020",
//   title: "Gubergren sed est amet voluptua",
//   price: 123.75,
//   picture:
//     "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
//   condition: "nuevo",
//   free_shipping: true,
//   location: "Capital Federal",
// };

// // completá acá el código

// for (const key in producto) {
//     console.log(`producto['${key}'] -> ${producto[key]}`);
// }

// // console.log(`producto['${Object.keys(producto)[0]}'] -> ${producto.id}`);

// /////
// // RESULTADO ESPERADO
// // producto['id'] -> ADA-020
// // producto['title'] -> Gubergren sed est amet voluptua
// // producto['price'] -> 123.75
// // producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// // producto['condition'] -> nuevo
// // producto['free_shipping'] -> true
// // producto['location'] -> Capital Federal


// console.log('UUID v1:', uuid.v1());
// console.log('UUID v4:', uuid.v4());


