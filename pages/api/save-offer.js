import { GoogleSpreadsheet } from "google-spreadsheet";

import { credentials, sheetId } from "../../config/google";

const doc = new GoogleSpreadsheet(sheetId);

const genCoupon = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const string = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;

  const code = parseInt(string).toString(16).toUpperCase();

  return code.substr(0, 4) + "-" + code.substr(4, 4) + "-" + code.substr(8, 4);
};

const genDateString = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
};

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[1];

    const data = JSON.parse(req.body);

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells("A2:B2");

    const showOfferCell = sheetConfig.getCell(1, 0);
    const textCell = sheetConfig.getCell(1, 1);

    const date = new Date();

    let coupon = "";
    let offer = "";

    if (showOfferCell.value === "VERDADEIRO") {
      coupon = genCoupon(date);
      offer = textCell.value;
    }

    await sheet.addRow({
      ...data,
      coupon,
      offer,
      createdAt: genDateString(date),
    });

    res.end(
      JSON.stringify({
        showCoupon: coupon !== "",
        coupon,
        offer,
      })
    );
  } catch (err) {
    console.error(err.message);
    res.end("error");
  }
};
