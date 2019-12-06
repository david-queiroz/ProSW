function PagamentoDao(connection) {
    this._connection = connection;
  }

  PagamentoDao.prototype.salva = function(pagamento,callback) {
      this._connection.query('INSERT INTO executivo SET ?', pagamento, callback);
  }

  PagamentoDao.prototype.lista = function(callback) {
      this._connection.query('select * from executivo',callback);
  }

  PagamentoDao.prototype.buscaPorId = function (id,callback) {
      this._connection.query("select * from executivo where id = ?",[id],callback);
  }

  module.exports = function(){
      return PagamentoDao;
  };