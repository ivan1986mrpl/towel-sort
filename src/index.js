module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((result, row, index) => {
    if (index % 2 === 0) {
      return result.concat(row);
    }
    return result.concat(row.reverse());
  }, []);
};
