import { Request, Response } from "express";
import knex from '../database/connection';

export class ContactController {

  async index(request: Request, response: Response) {

    const contacts = await knex('contact').select('*');

    return response.json(contacts);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      phone,
      address,
    } = request.body;

    const trx = await knex.transaction();

    const contact = {
      name,
      email,
      phone,
      address,
    };


    await trx('contact').insert(contact);

    await trx.commit();

    return response.json({ contact })
  }

  async update(request: Request, response: Response) {
    const {
      name,
      email,
      phone,
      address,
    } = request.body;

    const { id } = request.params;

    const trx = await knex.transaction();

    const contact = {
      name,
      email,
      phone,
      address,
    };

    await trx('contact').where('id', id).update({
      name: name,
      email: email,
      phone: phone,
      address: address
    });

    await trx.commit();

    return response.json({ contact })
  }

  async delete(request: Request, response: Response) {

    const { id } = request.params;

    const trx = await knex.transaction();

    await trx('contact').where('id', id).del();

    await trx.commit();

    return response.json({ message: 'Deletado com sucesso!' })
  }



}

