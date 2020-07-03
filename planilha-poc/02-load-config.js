const { GoogleSpreadsheet } = require("google-spreadsheet");

const credentials = require("./credentials");

const sheetId = "1Iqp2QSssU1Bhf6I80lp6vowqUmpVR_XWqdkCo1YPBO4";

const doc = new GoogleSpreadsheet(sheetId);

const run = async () => {
  await doc.useServiceAccountAuth(credentials);

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[2];

  await sheet.loadCells("A2:B2");

  console.log(sheet.title);

  const showOfferCell = sheet.getCell(1, 0);
  console.log(showOfferCell.value);

  const textCell = sheet.getCell(1, 1);
  console.log(textCell.value);
};

run();
