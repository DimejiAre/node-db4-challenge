
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
      table.increments()
      table.string('recipe_name', 128).notNullable();
  })
  .createTable('ingredients', table => {
      table.increments()
      table.string('ingredient_name', 128).notNullable();
  })
  .createTable('resources', table => {
      table.increments()
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
      table.float('quantity').notNullable()
  })
  .createTable('steps', table => {
      table.increments()
      table.integer('step_number').notNullable()
      table.text('instruction').notNullable()
      table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('steps')
    .dropTableIfExists('resources')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
