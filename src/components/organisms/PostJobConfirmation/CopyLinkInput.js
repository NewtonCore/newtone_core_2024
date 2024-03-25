import { Copy } from "akar-icons";
import React from "react";
import { toast } from "react-toastify";
import "./PostJobSuccess.css"

function CopyLinkInput({ url }) {
  const copyText = () => {
    navigator.clipboard.writeText(url);
    toast.info("Link copied", 1000);
  };
  return (
    <div>
      <div className="input-group">
        <input
          value={url}
          disabled
          type="text"
          className="form-control"
          aria-describedby="basic-addon1"
        />

        <button
          onClick={() => copyText()}
          className="input-group-text"
          id="basic-addon1"
        >
          <Copy />
        </button>
      </div>
    </div>
  );
}

export default CopyLinkInput;
