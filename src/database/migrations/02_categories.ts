import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("categories",table=>{
        table.increments('id')
        table.string('name')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("categories")
}