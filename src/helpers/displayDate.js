const months = [
  "ene",
  "feb",
  "mar",
  "abr",
  "mar",
  "abr",
  "may",
  "jun",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

const displayDate = (dateObj) => {
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  return `${day} / ${month}`;
};

return displayDate;
