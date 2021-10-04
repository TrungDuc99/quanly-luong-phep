export function taoTenDatTrong({
  mapNo,
  plotNo,
  streetName,
  block,
  wardName,
  districtName,
  cityName
}){
  let legacyName = "";

  if (mapNo !== "") legacyName += "Tờ bản đồ số: " + mapNo + ",";

  if (plotNo !== "") legacyName += "Số thửa: " + plotNo + ",";

  if (streetName !== "") legacyName += streetName + ",";

  if (block !== "") legacyName += "Thôn/ấp/khu phố: " + block + ",";

  if (wardName !== "") legacyName += "" + wardName + ",";

  if (districtName !== "") legacyName += "" + districtName + ",";

  if (cityName !== "") legacyName += "" + cityName;
  return legacyName;
}

export function taoTenNha({
  houseNo,
  mapNo,
  plotNo,
  streetName,
  block,
  wardName,
  districtName,
  cityName
}){
  let legacyName = "";

  if (houseNo !== "") legacyName += "Số nhà: " + houseNo + ",";

  if (streetName !== "") legacyName += "Đường: " + streetName + ",";

  if (block !== "") legacyName += "Thôn/ấp/khu phố: " + block + ",";

  if (wardName !== "") legacyName += "" + wardName + ",";

  if (districtName !== "") legacyName += "" + districtName + ",";

  if (cityName !== "") legacyName += "" + cityName + ",";

  if (mapNo !== "") legacyName += "Tờ bản đồ số: " + mapNo + ",";

  if (plotNo !== "") legacyName += "Số thửa: " + plotNo;
  return legacyName;
}

export function taoTenChungCu({
  houseNo,
  mapNo,
  plotNo,
  streetName,
  wardName,
  districtName,
  cityName
}){
  let legacyName = "";

  if (houseNo !== "") legacyName += "Căn hộ số: " + houseNo + ",";

  if (streetName !== "") legacyName += "Chung cư " + streetName + ",";

  if (wardName !== "") legacyName += "" + wardName + ",";

  if (districtName !== "") legacyName += "" + districtName + ",";

  if (cityName !== "") legacyName += "" + cityName + ",";

  if (plotNo !== "") legacyName += "Số thửa " + plotNo + ",";

  if (mapNo !== "") legacyName += "Tờ bản đồ số " + mapNo + ",";
  return legacyName;
}

export function taoTenMmtb({title, wardName, districtName, cityName}){
  let legacyName = "";

  if (title !== "") legacyName += title + ",";

  if (wardName !== "") legacyName += "" + wardName + ",";

  if (districtName !== "") legacyName += "" + districtName + ",";

  if (cityName !== "") legacyName += "" + cityName;
  return legacyName;
}

export function taoTenPtvt({title, wardName, districtName, cityName}){
  let legacyName = "";

  legacyName += "" + title + " , ";

  if (wardName !== "") legacyName += "" + wardName + " , ";

  if (districtName !== "") legacyName += "" + districtName + " , ";

  if (cityName !== "") legacyName += "" + cityName;
  return legacyName;
}
