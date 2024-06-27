const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const btnFindDrink = document.querySelector('#find-drink-btn')
const result = document.querySelector('#result')

btnFindDrink.addEventListener('click', () => {
    
})
btnFindDrink.addEventListener('click', findDrink)

async function findDrink() {
	try {
		const res = await fetch (url)
		const data = await res.json()

	    const random = Math.floor(Math.random() * data.drinks.length)
        const currentDrink = data.drinks[random]


        if (currentDrink.strAlcoholic !== "Alcoholic") {

            let ingredientsArr = []
            let count = 1

            for (let prop in currentDrink) {
                let ingredient = ""
                let measure = ""


                if (prop.startsWith("strIngredient") && currentDrink[prop]) {
                    ingredient = currentDrink[prop]

                    if (currentDrink[`strMeasure` + count]) {
                        measure = currentDrink[`strMeasure` + count]
                    }
                    else {
                        measure = ""
                    }
                    count += 1
                    ingredientsArr.push(`${measure}${ingredient}`)
                }
            }

            result.innerHTML = `
                <img src='${currentDrink.strDrinkThumb}' />
                
                <h2>${currentDrink.strDrink}</h2>
                
                <h4>Ingredients :</h4>
                <ul class="ingredients"></ul>
                    
                <h4>Instructions :</h4>
                <p>${currentDrink.strInstructions}</p>`
                
                let ingredientsContainer = document.querySelector('.ingredients')
                ingredientsArr.forEach( item => {
                    let listItem = document.createElement('li')
                    listItem.innerText = item

                    ingredientsContainer.appendChild(listItem)
                })

            document.querySelector('header').classList.remove('page-load')
        }
        else {
            findDrink()
        }
	}
	catch (err) {
		console.log(err)
	}
}