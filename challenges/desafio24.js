db.voos.findOne(
  { $and: [
    { litrosCombustivel: { $lte: 600 } },
     { "empresa.nome": { $nin: ["GOL", "AZUL"] } }, { litrosCombustivel: { $exists: true } },
  ] }, { vooId: true, _id: false, empresa: { nome: true }, litrosCombustivel: true },
);
