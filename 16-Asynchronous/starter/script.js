'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
    
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const request=fetch("https://restcountries.com/v2/name/portugal")
console.log(request)

// asynchronous You start a task, but don’t wait for it to finish—you can do other things while it’s still happening.
// Promise:A promise is an object used as a placeholder for the future result of an asynchronous operation. t can be thought of as a container for a value that will be delivered asynchronously in the future. More simply, a promise is a container for a future value.
//The perfect example of a future value is the response from an AJAX call. When the AJAX call starts, no value is available yet, but we know a value will arrive eventually. The promise helps us handle this future value.

const getCountryDate=function(country){
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response=>response.json())
    .then(data=>{
       console.log(data)
       renderCountry(data[0])
    })

}
getCountryDate("us")

//-------------Chaining Promises-------------