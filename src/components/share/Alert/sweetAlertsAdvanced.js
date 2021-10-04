import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function sweetAlertsAdvanced(text){
  return MySwal.fire({
    title: "Lưu ý",
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Xác nhận",
    cancelButtonText: "Từ chối",
    reverseButtons: true
  });
}
