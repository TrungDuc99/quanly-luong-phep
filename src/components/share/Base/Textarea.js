import {Box} from "@material-ui/core";
import React from "react";

export default function Textarea(props){
  const {content} = props;
  return (
    <Box
      style={{
        width: "100%",
        padding: 5,
        height: "220px",
        cursor: "default",
        backgroundColor: "#f8f8f8",
        border: "1px solid #d0d0d0",
        overflow: "auto"
      }}
      // disabled={readOnly}
      // // rowsMax={30}
      // rowsMin={15}
      // aria-label="maximum height"
      // placeholder="Nội dung này hiện không có thông tin"
      // defaultValue={ghiChu}
    >
      <div dangerouslySetInnerHTML={{__html: content}} />
    </Box>
  );
}
