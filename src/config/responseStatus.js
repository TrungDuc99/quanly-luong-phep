export default function responseStatus(status){
  switch (status) {
    case 501:
      return "Chưa đính kèm hồ sơ định giá";
    case 502:
      return "Không tìm thấy trạng thái hồ sơ";
    case 503:
      return "Không tìm thấy hồ sơ";
    case 504:
      return "Không tìm thấy người phân công";
    case 505:
      return "Không tìm thấy lịch sử vi phạm";
    case 506:
      return "Không tìm thấy thuộc tính hồ sơ";
    default:
      return "Đã xảy ra lỗi";
  }
}

export function thongBaoTaoPYC(status){
  switch (status) {
    case 501:
      return "Tài sản đang có yêu cầu định giá đang xử lý";
    case 502:
      return "Thông tin người khởi tạo không tìm thấy";
    case 503:
      return "Khu vực định giá của tài sản chưa có người phụ trách phân công";
    case 504:
      return "Tài sản không tồn tại";
    default:
      return "Đã xảy ra lỗi";
  }
}

export function thongBaoLoiTaiSanSoSanh(status, legacyType, method){
  const loaiTS = {
    1: "đất trống",
    2: "đất trống",
    3: "chung cư",
    4: "máy móc thiết bị",
    5: "phương tiện vận tải"
  };
  const thongbaoChinhSua = () => {
    switch (parseInt(status, 10)) {
      case 501:
        return `Tài sản so sánh ${loaiTS[
          parseInt(legacyType, 10)
        ]} không tìm thấy`;
      case 502:
        return "Tài sản thông tin không tìm thấy";
      default:
        return "Đã xảy ra lỗi";
    }
  };
  const thongbaoXoa = () => {
    switch (status) {
      case 501:
        return "Tài sản này đã được sử dụng so sánh tài sản. Không thể xóa!";
      default:
        return "Đã xảy ra lỗi";
    }
  };
  const result = {put: thongbaoChinhSua(), delete: thongbaoXoa()};
  return result[method];
}
