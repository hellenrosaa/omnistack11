exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
  
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
   
    table.string('ong_id').notNullable();
    //chave estrangeira
    table.foreign('ong_id').references('id').inTable('ongs');
  });
 };
  
 //metodo DOWN = se der algum problema e eu tiver que voltar atras
 exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
 };

 //para voltar atras no ultimo comando migrations
 // npx knex migrate: make create_blabla
 //npx knex migrate_latest
 //pra voltar atras: npx knex migrate:rollback

 /**
  * para saber as migrations q ja foram salvas no banco de dados
  * npx knex migrate:status
  */
 