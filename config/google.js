const fromBase64 = (value) => Buffer.from(value, "base64").toString("ascii");

export const credentials = {
  private_key: fromBase64(process.env.GOOGLE_CREDENTIALS_PRIVATE_KEY),
  client_email: process.env.GOOGLE_CREDENTIALS_CLIENT_EMAIL,
};

export const sheetId = process.env.GOOGLE_CREDENTIALS_SHEET_ID;
