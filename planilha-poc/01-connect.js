const { GoogleSpreadsheet } = require("google-spreadsheet");

const credentials = require("./credentials");

const sheetId = "1Iqp2QSssU1Bhf6I80lp6vowqUmpVR_XWqdkCo1YPBO4";

const doc = new GoogleSpreadsheet(sheetId);

const run = async () => {
  await doc.useServiceAccountAuth(credentials);

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[2];

  console.log(sheet.title);
};

run();
