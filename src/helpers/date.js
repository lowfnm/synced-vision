const d = new Date();

// Format the date to the format we need, which is day-month-year and the exact time
export const date =
  ('0' + d.getDate()).slice(-2) +
  '-' +
  ('0' + (d.getMonth() + 1)).slice(-2) +
  '-' +
  d.getFullYear() +
  ' ' +
  ('0' + d.getHours()).slice(-2) +
  ':' +
  ('0' + d.getMinutes()).slice(-2);
