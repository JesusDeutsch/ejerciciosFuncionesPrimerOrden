import { countriesData } from "./data.js";

console.log(countriesData);

const countriesNortEuw = ["Estoniya","Finlandia","Suecia","Dinamarca2","Noruega", "Islandia"];
const countries2 = ["US", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Joseph", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// //3.Utiliza forEach para mostrar con console.log cada país del array de países.

// countries.forEach(element => console.log(element));

// // 4.Utiliza forEach para mostrar con console.log cada nombre del array de nombres.

// names.forEach(element => console.log(element));

// // 5.Utiliza forEach para mostrar con console.log cada número del array de números.

// numbers.forEach(element => console.log(element));

// // 6.Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.

// const countriesToUpperCase = countries.map((name) => name.toUpperCase())

// console.log(countriesToUpperCase);

// // 7.Utilice map para crear un array de longitudes de países a partir del array de países.

// const longitudes = countries.map((element) => element.length)
// console.log(longitudes);

// // 8.Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.

// const numbersSquare = numbers.map((number) => number**2)
// console.log(numbersSquare);

// // 9.Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.

// const namesUppperCase = names.map((name) => name.toUpperCase())
// console.log(namesUppperCase);

// // 10.Utilice map para asignar el array de productos a sus correspondientes precios.

// const prices = products.map((product) => product.product + " = "+product.price);
//   console.log(prices);

// const prices2 = products.map((product) => product.price);
//   console.log(prices2);

// // 11.Utilice filter para filtrar los países que contienen land.

// const contriesContainingLand = countries.filter((country) => country.includes('Land'));
// console.log(contriesContainingLand);

// // 12.Utilice filter para filtrar los países que tienen seis caracteres.

// const coutriesHaveSixLetters = countries.filter((country) => country.length === 6);
// console.log(coutriesHaveSixLetters);

// // 13.Utilice filter para filtrar los países que contengan seis letras o más en el array de países.

// const coutriesHaveSixLettersOrMore = countries.filter((country) => country.length >= 6);
// console.log(coutriesHaveSixLettersOrMore);

// 14.Utilice filter para filtrar los países que empiezan por "E";

// const countriesBeginningE = countries.filter((country) => {

//   let indexFirstLetter = country.name.charAt(0).toLowerCase();
//   let countrie=[];

//   if (countrie[country]) {
//     countrie[country]
//   } else {
//     countrie[country] = country 
//   }
// })
  
  
  
  // country.toLowerCase().includes('e'))

// // 15.Utilice filter para filtrar sólo los precios con valores.

// const priceProduct = products.filter((item) => {
//   const price = parseFloat(item.price);
//   return price;
// })
// console.log(priceProduct);

// // 16.Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.

// const getStringLists = names.filter((username) => typeof username === "string")
// console.log(getStringLists);  

// // 17.Usa reduce para sumar todos los números del array de números.

// const add = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(add);

// // 18.Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa

// const CountriesEu = countriesNortEuw.reduce((acc, curr, index) => {
//   if (index === countriesNortEuw.length-1) {
//     return `${acc}, y ${curr} son países del norte de Europa`;
//   } else {
//     return `${acc} , ${curr}`;
//   }
//   })
//   console.log(CountriesEu);

// // 19.Explique la diferencia entre some y every

// some se utiliza para comprobar algun elemento del array cumple la condicion, mientras que every comprueba si todos los elementos del array tiene algo similar


// // 20.Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.

// const nameslenght =  names.some((name) => name.length > 7)
// console.log(nameslenght);

// // 21. Utilice every para comprobar si todos los países contienen la palabra land.

// const contriesIncludesLand = countries.every((country) => country.include)
// console.log(contriesIncludesLand);

// // 22.Explique la diferencia entre find y findIndex.

// Find en cuentra el primere elemento que le indiquemos y findIndex nos da de resultado la posicion en el indice del array del elemento que le indiquemos

// // 23.Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.

// const firstContainigSixLetters = countries.find((country) => country.name.length === 6)

// console.log(firstContainigSixLetters);

// // 24.Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.

// const IndexFirstContainigSixLetters = countries.findIndex((country) => country.name.length === 6)
// console.log(IndexFirstContainigSixLetters);

// // 25.Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.

// const searchNorway = countries.findIndex((country) => country.name.toLowerCase() === 'norway')
// console.log(searchNorway);

// // 26.Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.

// const searchRussia = countries.findIndex((country) => country.name.toLowerCase() === 'russia')
// console.log(searchRussia);

// 27.Encuentre la suma del precio de los productos usando sólo reduce(callback)).

// const priceTotalProducts = products.reduce((acc, item) => {
//   if (typeof item.price === 'number') {
//     return acc + item.price;
//   } else {
//     return acc;
//   }
// }, 0);

// console.log(priceTotalProducts);

// 28.Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.

// function firstLetterCountry(countries) {
  
//   let letterCount = {};

//   countries.forEach((countries) => {
    
//     let firstLetter = countries.name.charAt(0).toUpperCase();

//       if (letterCount[firstLetter]) {
//         letterCount[firstLetter]++;
//       } else {
//         letterCount[firstLetter]= 1;
//       }
//     });

//   console.log(letterCount);

//   let result = []

//   for (let letter in letterCount){
//     result.push({
//       letter: letter,
//       count: letterCount[letter]

//     })
//   }
//   return result;

// }
// console.log(firstLetterCountry(countries));

