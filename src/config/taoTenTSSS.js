export function taoTenDatTrongNha({
  title,
  streetName,
  wardName,
  districtName,
  cityName
}){
  let legacyName = "";
  if (title !== "") legacyName += title + ",";
  if (streetName !== "") legacyName += "đường " + streetName + ",";
  if (wardName !== "") legacyName += "Phường/xã " + wardName + ",";
  if (districtName !== "") legacyName += "Quận/huyện " + districtName + ",";
  if (cityName !== "") legacyName += "Tỉnh/TP " + cityName;
  return legacyName;
}

export function taoTenChungCu({
  title,
  streetName,
  wardName,
  districtName,
  cityName
}){
  let legacyName = "";
  if (title !== "") legacyName += title + ",";

  if (streetName !== "") legacyName += "đường " + streetName + ",";

  if (wardName !== "") legacyName += "Phường/xã " + wardName + ",";

  if (districtName !== "") legacyName += "Quận/huyện " + districtName + ",";

  if (cityName !== "") legacyName += "Tỉnh/TP " + cityName;
  return legacyName;
}

export function taoTenMmtb({title}){
  let legacyName = "";
  if (title !== "") legacyName += title;
  return legacyName;
}

export function taoTenPtvt({title, nhanHieu, chungLoai, bienSo}){
  let legacyName = "";
  if (title !== "") legacyName += title + ",";

  if (nhanHieu !== "") legacyName += "Nhãn hiệu " + nhanHieu + ",";

  if (chungLoai !== "") legacyName += "Chủng loại " + chungLoai + ",";

  if (bienSo !== "") legacyName += "Biển số " + bienSo + ",";
  return legacyName;
}
