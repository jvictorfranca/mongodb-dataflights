db.voos.findOne(
  { $and: [{ litrosCombustivel: { $exists: true } },
     { litrosCombustivel: { $lte: 1000 } }] }, { vooId: true, litrosCombustivel: true, _id: false },
  );