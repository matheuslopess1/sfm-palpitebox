const { GoogleSpreadsheet } = require("google-spreadsheet");

const credentials = require("./credentials");

const sheetId = "1Iqp2QSssU1Bhf6I80lp6vowqUmpVR_XWqdkCo1YPBO4";

const doc = new GoogleSpreadsheet(sheetId);

const run = async () => {
  await doc.useServiceAccountAuth(credentials);

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[1];

  await sheet.addRow({
    Nome: "Matheus Inocêncio",
    Email: "matheuslopes1@protonmail.com",
    Whatsapp: "83 9 9821-2648",
    Cupom: "abc123",
    Promocao: "xyz321",
  });
};

run();
