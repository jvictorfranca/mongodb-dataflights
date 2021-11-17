const count = db.voos.count({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: count });
db.resumoVoos.findOne(
  { empresa: "LATAM AIRLINES BRASIL" }, { _id: false, empresa: true, totalVoosDomesticos: true },
  );