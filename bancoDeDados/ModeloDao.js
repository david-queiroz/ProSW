function ModeloDao(connection) {
    this._connection = connection;
  }

  ModeloDao.prototype.salva = function(executivo,callback) {
      this._connection.query('INSERT INTO executivo SET ?', executivo, callback);
  }

  ModeloDao.prototype.lista = function(callback) {
      this._connection.query('select * from executivo',callback);
  }

  ModeloDao.prototype.buscaPorId = function (id,callback) {
      this._connection.query("select * from executivo where id = ?",[id],callback);
  }

  ModeloDao.prototype.atualiza = function(executivo,callback) {
    this._connection.query('UPDATE executivo SET status = ? where id = ?', [executivo.status, executivo.id], callback);
} 

ModeloDao.prototype.apaga = function(executivo,callback) {
    this._connection.query('delete from executivo where id = ?', [ executivo.id], callback);
} 
  
  module.exports = function(){
      return ModeloDao;
  };