const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
const btnFindDrink = document.querySelector('#find-drink-btn')

btnFindDrink.addEventListener('click', findDrink)

function findDrink() {
    fetch (url)
    .then ( res => res.json())
    .then ( data => {
        console.log(data.drinks)
        const random = Math.floor(Math.random() * data.drinks.length)
    
        document.querySelector('img').src = data.drinks[random].strDrinkThumb
    })
    .catch( err => console.log(err))
}

