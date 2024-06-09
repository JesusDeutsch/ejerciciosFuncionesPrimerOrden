const countries = ["US", "Sweden", "Denmark", "Norway", "IceLand"];
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

// Utiliza forEach para mostrar con console.log cada país del array de países.

// countries.forEach(element => console.log(element));

// Utiliza forEach para mostrar con console.log cada nombre del array de nombres.

// names.forEach(element => console.log(element));

// Utiliza forEach para mostrar con console.log cada número del array de números.

// numbers.forEach(element => console.log(element));

// Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.

// const countriesToUpperCase = countries.map((name) => name.toUpperCase())

// console.log(countriesToUpperCase);

// Utilice map para crear un array de longitudes de países a partir del array de países.

// const longitudes = countries.map((element) => element.length)
// console.log(longitudes);

// Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.

// const numbersSquare = numbers.map((number) => number**2)
// console.log(numbersSquare);

// Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.

// const namesUppperCase = names.map((name) => name.toUpperCase())
// console.log(namesUppperCase);

// Utilice map para asignar el array de productos a sus correspondientes precios.

// const prices = products.map((product) => product.price);
//   console.log(prices);

// Utilice filter para filtrar los países que contienen land.

// const contriesContainingLand = countries.filter((country) => country.includes('Land'));
// console.log(contriesContainingLand);

// Utilice filter para filtrar los países que tienen seis caracteres.

// const coutriesHaveSixLetters = countries.filter((country) => country.length === 6);
// console.log(coutriesHaveSixLetters);

// Utilice filter para filtrar los países que contengan seis letras o más en el array de países.

// const coutriesHaveSixLettersOrMore = countries.filter((country) => country.length >= 6);
// console.log(coutriesHaveSixLettersOrMore);

// Utilice filter para filtrar los países que empiezan por "E";

// const countriesBeginningE = countries.filter((country) => country.includes('E'))
// console.log(countriesBeginningE);

// Utilice filter para filtrar sólo los precios con valores.

const priceProduct = products.filter((item) => {
  const price = parseFloat(item.price);
  return price;
});

console.log(priceProduct);