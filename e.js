// marks 10%
// Like the previous question use knex to write a query that:
// selects columns `first_name`, `last_name`, `created_at`
// from a table called `students`
// from records where their `first_name` starts with "po" case insensitive
// ordered by their first_name in desc order

const knex = require('./db/client');
function e() {
  return knex
    .select('first_name', 'last_name', 'created_at')
    .from('students')
    .whereRaw('\"first_name\" ilike ?', 'po%')
    .orderBy('first_name', 'desc')
    .toString(); 
}

e();

module.exports = e;
