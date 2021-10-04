const formatNumber = number => {
  return number && Intl.NumberFormat("vi-VI").format(number);
};
export default formatNumber;
