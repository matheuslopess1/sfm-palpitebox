import { GoogleSpreadsheet } from "google-spreadsheet";

import { credentials, sheetId } from "../../config/google";

const doc = new GoogleSpreadsheet(sheetId);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells("A2:B2");

    const showCoupon = sheet.getCell(1, 0).value === "VERDADEIRO";
    const message = sheet.getCell(1, 1).value;

    res.end(JSON.stringify({ showCoupon, message }));
  } catch (err) {
    res.end(JSON.stringify({ showCoupon: false, message: "" }));
  }
};
