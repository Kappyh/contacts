import Knex from "knex";

export async function seed(knex: Knex) {
    await knex('contact').insert([
        { name: 'Gabriela Mendes', phone: '1199998888', address: 'R.das Azaléias,25', email: 'gm@gmail.com' },
        { name: 'Billie Mendes', phone: '1199238888', address: 'R.dos Girassóis,35', email: 'bb@gmail.com' },
        { name: 'Kaka Mendes', phone: '11999934888', address: 'R.dos Alpistes,45', email: 'kk@gmail.com' },
        { name: 'Kira Mendes', phone: '1199954888', address: 'R.dos Mignons,75', email: 'kr@gmail.com' },
    ])
}