db.voos.findOne({ $and: [
{ litrosCombustivel: { $lt: 1000 } },
{ litrosCombustivel: { $exists: true } }] }, 
{ vooId: 1, litrosCombustivel: 1, _id: 0 });
