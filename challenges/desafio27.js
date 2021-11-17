const count = db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: count });
db.resumoVoos.findOne(
  { empresa: "PASSAREDO" }, { _id: false, empresa: true, totalVoosDomesticos: true },
  );