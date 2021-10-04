import axiosClient from "services/axiosClient";

export async function getKtTiepNhan(email, rowPerPage, page, search){
  return await axiosClient.get(
    `/khoitao/tiepnhan?email=${email}&rowPerPage=${rowPerPage}&page=${page}&search=${search}`
  );
}
//https://testavm.vietbank.com.vn:9020/api/khoitao/tiepnhan?email=leanhtoan%40vietbank.com.vn&rowPerPage=15&page=
//https://testavm.vietbank.com.vn:9020/api/khoitao/tiepnhan?leanhtoan@vietbank.com.vn&rowPerPage=15&page=0&search=
export async function getKtBoSungHS(email, rowPerPage, page, search){
  return await axiosClient.get(
    `/khoitao/bosung?email=${email}&rowPerPage=${rowPerPage}&page=${page}&search=${search}`
  );
}
export async function getKtTraVe(email, rowPerPage, page, search){
  return await axiosClient.get(
    `/khoitao/trave?email=${email}&rowPerPage=${rowPerPage}&page=${page}&search=${search}`
  );
}
export async function getKtKetQua(email, rowPerPage, page, search){
  return await axiosClient.get(
    `/khoitao/ketqua?email=${email}&rowPerPage=${rowPerPage}&page=${page}&search=${search}`
  );
}
export async function getKtTheoDoi(email, rowPerPage, page, search){
  return await axiosClient.get(
    `/khoitao/theodoi?email=${email}&rowPerPage=${rowPerPage}&page=${page}&search=${search}`
  );
}
export async function getKtDem(email){
  return await axiosClient.get(`/khoitao/dem/${email}`);
}
