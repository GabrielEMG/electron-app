const DBMonthFilter = (data, month, year) => {
  return data.filter((doc) => {
    if (
      doc.createdAt.getFullYear() === year &&
      doc.createdAt.getMonth() === month
    )
      return doc;
  });
};

export default DBMonthFilter;
