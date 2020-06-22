import Knex from 'knex';

export const up = (knex: Knex) => 
knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('image').notNullable();
});

export const down = (knex: Knex) => 
knex.schema.dropTable('items');