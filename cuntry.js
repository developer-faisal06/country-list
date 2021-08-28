console.log('ok')

function loadCuntries(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=> res.json())
    .then(data=>displayCuntries(data));
}
loadCuntries();

// function displayCuntries(){

// }
const displayCuntries= countries=>{
    // for (const country of countries){
    //     console.log(country.name);
    // }
    const countryDiv =document.getElementById('cuntry');
    countries.forEach(country =>{
// console.log(country.flag)
        const div=document.createElement('div');
        div.classList.add('div')
       
        div.innerHTML=` <h4> Name: ${country.name}</h4>
            <p>Top L Domain: ${country.topLevelDomain}</p>
            <p>Capital :${country.capital}</p>
            <button onclick="loadCuntryByName('${country.name}')"> See More </button>
            `;

        countryDiv.appendChild(div);

    });

}
const loadCuntryByName=name=>{
    const url =`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetails(data[0]));
    const button=document.getElementById('btn');
    button.style.display='block';


    
}
const displayCountryDetails=name=>{
    const details = document.getElementById('details');
    details.innerHTML=`<img width=200px src="${name.flag}">
    <h3>Name: ${name.name} </h3>
    <p>Population: ${name.population}</p> <p>Area : ${name.area}</p>
    <p>alpha2Code: ${name.alpha2Code}</p> <p>
    numericCode : ${name.numericCode}</p>
      `;
  
  
}

