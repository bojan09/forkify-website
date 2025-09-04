const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const showRecipe = async ()=>{
    try {
        const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e8433');
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        console.log(data, res);
        let { recipe } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingridients: recipe.ingridients
        };
        console.log(recipe);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=forkify-restaurant.62406edb.js.map
