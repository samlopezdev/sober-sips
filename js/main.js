const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const btnFindDrink = document.querySelector('#find-drink-btn')

btnFindDrink.addEventListener('click', findDrink)

function findDrink() {
    fetch (url)
    .then ( res => res.json())
    .then ( data => {
        const random = Math.floor(Math.random() * data.drinks.length)
        const currentDrink = data.drinks[random]

        console.log(currentDrink.strAlcoholic)
        if (currentDrink.strAlcoholic !== "Alcoholic") {
            document.querySelector('img').src = currentDrink.strDrinkThumb

            document.querySelector('p').innerText = currentDrink.strInstructions
    
            document.querySelector('h3').innerText = currentDrink.strDrink
        }
        else {
            findDrink()
        }
    
        
    })
    .catch( err => console.log(err))
}

