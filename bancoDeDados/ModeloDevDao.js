function ModeloDevDao(connection) {
    this._connection = connection;
  }

  ModeloDevDao.prototype.salva = function(desenvolvedor,callback) {
      this._connection.query('INSERT INTO desenvolvedor SET ?', desenvolvedor, callback);
  }

  ModeloDevDao.prototype.lista = function(callback) {
      this._connection.query('select * from desenvolvedor',callback);
  }

  ModeloDevDao.prototype.buscaPorId = function (id,callback) {
      this._connection.query("select * from desenvolvedor where id = ?",[id],callback);
  }

  ModeloDevDao.prototype.atualiza = function(desenvolvedor,callback) {
    this._connection.query('UPDATE desenvolvedor SET status = ? where id = ?', [desenvolvedor.status, desenvolvedor.id], callback);
} 

ModeloDevDao.prototype.apaga = function(desenvolvedor,callback) {
    this._connection.query('delete from desenvolvedor where id = ?', [ desenvolvedor.id], callback);
} 
  
  module.exports = function(){
      return ModeloDevDao;
  };