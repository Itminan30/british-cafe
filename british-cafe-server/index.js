const express = require('express');
const cors = require('cors');
const app = express();
const port = 4090;

const chefData = require('./data/chefInfo.json');
const recipeData = require('./data/recipeInfo.json');

app.use(cors());
// Get all chef's info
app.get('/', (req, res) => {
    res.send(chefData);
})
// Get a particular chef's info
app.get('/chef/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefData.find(chef => chef.id === id);
    res.send(selectedChef);
})
// Get all recipes of a chef
app.get('/recipe/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedRecipes = recipeData.filter(recipe => recipe.id === id);
    res.send(selectedRecipes);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})