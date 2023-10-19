/*const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(ourTour => displayOurTours (ourTour))
}

const displayOurTours = (countries) => {
    const countryDiv = document.getElementById('country');
    countries.forEach((country) =>{
            console.log(country);
            const div = document.createElement("div");
            div.classList.add('country-info')
            div.innerHTML = `
                    <h3>${country.name.common}</h3>
                    <p>${country?.capital}</p>
                    <button onClick=loadCountryByNmae('${country.name.common}'>Show Details</button>
            `

            countryDiv.appendChild(div)
    })
}

loadCountries()

const loadCountryByName = (name) =>{
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => countryShow(data[0]))
}

const countryShow = (country) =>{
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.name.capital}</p>
            <p>Population: ${country.population}</p>
            <img src=${country.flags.png} alt=${country.flags.alt}>
    `;
}*/

// loadCountryByName('Ukraine')
const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(ourTour => displayOurTours (ourTour))
}

const displayOurTours = (countries) => {
    const countryDiv = document.getElementById('country');
    countries.forEach((country) =>{
            console.log(country);

            const div = document.createElement("div");
            div.classList.add('country-info')
            div.innerHTML = `
                    <h3>${country.name.common}</h3>
                    <p>${country?.capital}</p>
                    <button onClick=(loadCountryByName("${country.cca2}"))>Show Details</button>
            `

            countryDiv.appendChild(div)
    })
}

loadCountries()

const loadCountryByName = (name) =>{

    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => countryShow(data[0]))
}

const countryShow = (country) =>{

    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
            <img src=${country.flags.png} alt=${country.flags.alt}>
    `;
}