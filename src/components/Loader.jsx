import React from "react";
import { ClipLoader } from "react-spinners";

function Loader({ loading }) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <ClipLoader loading={loading} size={50} color="#be773c" />
      </div>
    );
}
export default Loader;