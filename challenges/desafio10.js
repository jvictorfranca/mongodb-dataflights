db.voos.find(
  { ano: 2017, "empresa.nome": "GOL" },
   { empresa: { nome: true },
vooId: true,
    aeroportoOrigem: {
       nome: true, 
      },
       aeroportoDestino:
        { nome: true },
mes: true,
ano: true,
_id: false },
).limit(10);