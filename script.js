'use strict';
//hardcoded product data
let resultData;
const ProductData = [
  {
    name: 'Pocket Size Baby Nail Care Set',
    price: '329',
    category: '0-5 Years',
    gender: 'Unisex',
    material: 'steel',
    weightOrQuantity: '110g',
    productDimension: '6cm x 12cm',
    rating: '4.2',
  },
  {
    name: 'Cold Pressed Extra Virgin Coconut Oil',
    price: '349',
    category: 'Babies & Adults',
    gender: 'Unisex',
    material: 'Natural Coconut Oil',
    weightOrQuantity: '200ml',
    productDimension: '15cm x 5cm x 14cm',
    rating: '4.4',
  },
  {
    name: 'Baby Pillow',
    price: '339',
    category: '0-9 Months',
    gender: 'Unisex',
    material: 'Cotton',
    weightOrQuantity: '200ml',
    productDimension: '21cm x 20cm x 5cm',
    rating: '4.0',
  },
  {
    name: 'Squeezy Food Feeder',
    price: '329',
    category: '0-5 Years',
    gender: 'Unisex',
    material: 'steel',
    weightOrQuantity: '110g',
    productDimension: '6cm x 12cm',
    rating: '4.2',
  },
  {
    name: 'Diaper Rash Cream',
    price: '329',
    category: '0-5 Years',
    gender: 'Unisex',
    material: 'steel',
    weightOrQuantity: '110g',
    productDimension: '6cm x 12cm',
    rating: '4.2',
  },
  {
    name: 'Fruit Feeder',
    price: '335',
    category: '6-12 Months',
    gender: 'Unisex',
    material: 'steel',
    weightOrQuantity: '110g',
    productDimension: '13cm x 6.5cm x 13cm',
    rating: '4.1',
  },
  {
    name: 'Cloth Diapers',
    price: '329',
    category: '0-5 Years',
    gender: 'Unisex',
    material: 'steel',
    weightOrQuantity: '110g',
    productDimension: '6cm x 12cm',
    rating: '4.2',
  },
  {
    name: 'Baby Massage Oil',
    price: '329',
    category: '0-5 Years',
    gender: 'Unisex',
    material: 'steel',
    weightOrQuantity: '110g',
    productDimension: '6cm x 12cm',
    rating: '4.2',
  },
  {
    name: 'Bathing Robe / Blanket',
    price: '329',
    category: '0-5 Years',
    gender: 'Unisex',
    material: 'steel',
    weightOrQuantity: '110g',
    productDimension: '6cm x 12cm',
    rating: '4.2',
  },
  {
    name: 'Stretch Marks Cream',
    price: '329',
    category: '0-5 Years',
    gender: 'Unisex',
    material: 'steel',
    weightOrQuantity: '110g',
    productDimension: '6cm x 12cm',
    rating: '4.2',
  },
  {
    name: 'Flexible Digital Thermometer',
    price: '329',
    category: '0-5 Years',
    gender: 'Unisex',
    material: 'steel',
    weightOrQuantity: '110g',
    productDimension: '6cm x 12cm',
    rating: '4.2',
  },
];

//sorting function to sort array of object
function objArrSorter(inputArr) {
  function compare(a, b) {
    const prodA = a.name.toUpperCase();
    const prodB = b.name.toUpperCase();
    let comparison = 0;
    if (prodA > prodB) {
      comparison = 1;
    } else if (prodA < prodB) {
      comparison = -1;
    }
    return comparison;
  }
  inputArr.sort(compare);
}

//Display function to convert object array to table
function arrToTable(rows) {
  var html = "<table border='1|1'>";
  html += '<tr>';
  for (var key in rows[0]) {
    if (rows[0].hasOwnProperty(key)) {
      html += '<td>' + key + '</td>';
    }
  }
  html += '</tr>';
  for (var i = 0; i < rows.length; i++) {
    html += '<tr>';
    for (var key in rows[i]) {
      if (rows[i].hasOwnProperty(key)) {
        html += '<td>' + rows[i][key] + '</td>';
      }
    }
    // html += '<td>' + rows[i].name + '</td>';
    // html += '<td>' + rows[i].price + '</td>';
    // html += '<td>' + rows[i].category + '</td>';
    // html += '<td>' + rows[i].gender + '</td>';
    // html += '<td>' + rows[i].material + '</td>';
    // html += '<td>' + rows[i].weightOrQuantity + '</td>';
    // html += '<td>' + rows[i].productDimension + '</td>';
    // html += '<td>' + rows[i].rating + '</td>';
    html += '</tr>';
  }
  html += '</table>';
  document.querySelector('.message').innerHTML = html;
}

//Debouncing Function
const debouncing = (func, delay) => {
  let eventID;
  return function () {
    clearTimeout(eventID);
    eventID = setTimeout(() => func(), delay);
  };
};

//mySearch() Function for search functionality
function mySearch() {
  const searchString = document.querySelector('.searchbar').value; //was trying to do using regex
  resultData = ProductData.filter(obj => {
    return obj.name.toLowerCase().includes(searchString);
  });
  //sorting of searched objects
  objArrSorter(resultData);
  arrToTable(resultData);
}

//Searchbar using debouncing calling function mySearch()
document.querySelector('.searchbar').addEventListener(
  'keyup',
  debouncing(() => mySearch(), 500)
);

//Search button implementation
document.querySelector('.srcButton').addEventListener(
  'click',
  debouncing(() => mySearch(), 500)
);

objArrSorter(ProductData);
arrToTable(ProductData);
