
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, instruction: 'Mix flour, water, butter, milk', recipe_id: 1},
        {step_number: 2, instruction: 'Heat in a pan', recipe_id: 1},
        {step_number: 1, instruction: 'Boil water', recipe_id: 2},
        {step_number: 2, instruction: 'Add oats to hot water and stir', recipe_id: 2},
        {step_number: 1, instruction: 'Mix flour, sugar, water', recipe_id: 3},
        {step_number: 2, instruction: 'Partition to several pieces', recipe_id: 3},
        {step_number: 3, instruction: 'Deep fry', recipe_id: 3}
      ]);
    });
};
