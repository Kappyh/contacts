import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('contact', table => {
    table.increments('id').primary();
    table.string('name').notNullable;
    table.string('email').notNullable;
    table.string('phone').notNullable;
    table.string('address').notNullable;
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('contact')
}