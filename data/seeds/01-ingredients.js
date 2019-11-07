
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'cup of flour'},
        {ingredient_name: 'gram of butter'},
        {ingredient_name: 'spoon of sugar'},
        {ingredient_name: 'cup of oats'},
        {ingredient_name: 'liters of water'},
        {ingredient_name: 'gram of milk'}
      ]);
    });
};
