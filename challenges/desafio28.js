const text = "LATAM AIRLINES BRASIL";
const count = db.voos.count({ "empresa.nome": text, natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: text, totalVoosDomesticos: count });
db.resumoVoos.findOne(
  { empresa: text }, { _id: false, empresa: true, totalVoosDomesticos: true },
  );