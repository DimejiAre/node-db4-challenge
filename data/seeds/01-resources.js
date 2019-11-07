
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 2.5},
        {recipe_id: 1, ingredient_id: 2, quantity: 2},
        {recipe_id: 1, ingredient_id: 3, quantity: 1},
        {recipe_id: 1, ingredient_id: 5, quantity: 1},
        {recipe_id: 1, ingredient_id: 6, quantity: 2},
        {recipe_id: 2, ingredient_id: 3, quantity: 3.0},
        {recipe_id: 2, ingredient_id: 4, quantity: 1.5},
        {recipe_id: 2, ingredient_id: 5, quantity: 1},
        {recipe_id: 3, ingredient_id: 1, quantity: 3.0},
        {recipe_id: 3, ingredient_id: 2, quantity: 1.5},
        {recipe_id: 3, ingredient_id: 3, quantity: 1},
        {recipe_id: 3, ingredient_id: 5, quantity: 1}
      ]);
    });
};
