fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => displayCountries(data))


const displayCountries = countries => {

    const countriesDiv = document.getElementById("countries");
    // console.log(countries.name);
    countries.map(function(countries) {

        const countryDiv = document.createElement('div');

        countryDiv.className = 'country';
        // countryDiv.innerText = countries.name;

        // const name = document.createElement('h2');
        // name.innerText = countries.name;
        // const capital = document.createElement('p');
        // capital.innerText = countries.capital;

        // countryDiv.appendChild(name);
        // countryDiv.appendChild(capital);


        countryInfo = `
        
            <h2 class = "country-name">${countries.name}</h2>
            <p>${countries.capital}</p>
            <button onclick = "showCountryDetails('${countries.name}')" > Details </button>
        
        `

        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);





    });
}

const showCountryDetails = name => {

    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    console.log(url);


    fetch(url)
        .then(res => res.json())
        .then(data => randomCountryDetails(data[0]));

}


const randomCountryDetails = countries => {
    // console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${countries.name}</h1>
        <p>${'Population:' + countries.population}</p>
        <p>${'Area:' + countries.area}</p>
        <img src= "${countries.flag}" </img>


    `

}