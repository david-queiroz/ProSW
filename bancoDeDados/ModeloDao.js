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

  module.exports = function(){
      return ModeloDao;
  };