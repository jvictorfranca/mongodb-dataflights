db.voos.deleteMany(
  { "empresa.nome": "GOL", "passageiros.pagos": { $lt: 5, $gte: 10 } },
  );