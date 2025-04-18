db.employees.updateOne({ email: "pavan@gmail.com" }, { $set: { salary: 1600 } });

db.employees.updateOne({}, { $set: { org: "Wipro" } });
db.employees.updateMany({}, { $set: { org: "Wipro" } });

db.employees.updateOne(
  { email: "griet@gmail.com" },
  { $set: { org: "Google" } },
  { upsert: true }
);
db.employees.find(
  { department: { $in: ["CSE", "IT"] } }
);
db.employees.find(
  { department: { $nin: ["CSE", "IT"] } }
);