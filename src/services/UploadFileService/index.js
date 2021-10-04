import axiosClient from "../axiosClient";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return axiosClient.post(
    "https://vbinfostatic.vietbank.com.vn/api/file/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        user: "nguyentienthanh@vietbank.com.vn",
        file:
          "thamdinhtaisan/" + "0500" + "/" + "2021" + "/" + "05" + "/" + 1234
      },
      onUploadProgress
    }
  );
};

const getFiles = () => {
  return axiosClient.get("/LegacyFiles/files/{legacyId}");
};

const FileUploadService = {
  upload,
  getFiles
};

export default FileUploadService;
