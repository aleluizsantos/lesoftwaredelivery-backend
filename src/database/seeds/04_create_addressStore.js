exports.seed = async function (knex) {
  await knex("addressStore").insert([
    {
      cep: "15700-000",
      address: "definir",
      number: "deifnir",
      neighborhood: "definir",
      city: "Jales",
      uf: "SP",
      phone: "",
      latitude: "-20.2719212",
      longitude: "-50.5448145",
      active: true,
    },
  ]);
};
