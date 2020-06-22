import Knex from 'knex';

export const up = (knex: Knex) => 
knex.schema.createTable('point_items', table => {
    table.increments('id').primary();

    table.integer('item_id')
    .notNullable()
    .references('id')
    .inTable('items');

    table.integer('points_id')
    .notNullable()
    .references('id')
    .inTable('points');
});

export const down = (knex: Knex) => 
knex.schema.dropTable('point_items');