import React, { useEffect } from "react";
import { useState } from "react";
import { JOB_TEST, NEWTON_LOGO } from "../../../constants/AppImages";
// import AppImage from "../AppImage/AppImage";
import classStyle from "./AppFilePicker.module.css";
// import pdfjsLib from "pdfjs-dist";
import { pdfjs } from "pdfjs-dist/build/pdf";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function AppFilePicker({ handleChange, meta, placeholder }) {
  let accept = meta.accept !== undefined ? meta.accept : ".pdf";
  let label =
    meta.label !== undefined
      ? meta.label
      : `You can attach job description (browse ${accept})`;

  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");
  const [totalPages, setTotalPages] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pdfRendering, setPdfRendering] = React.useState("");
  const [pageRendering, setPageRendering] = React.useState("");
  const [pdf, setPdf] = React.useState("");

  const loadPdf = async (url) => {
    console.log({ pdfjs });

    const pdfDoc = await pdfjs.getDocument(url).promise;
    setPdf(pdfDoc);
  };

  const showPdf = async (event) => {
    setPdfRendering(true);
    const uri = URL.createObjectURL(file);

    // return 0
    var _PDF_DOC = await pdfjs.getDocument({ url: uri });
    setPdf(_PDF_DOC);

    // code to render the PDF
    for (let i = 1; i <= _PDF_DOC.numPages; i++) {
      _PDF_DOC.getPage(i).then((page) => {
        page.getTextContent().then((textContent) => {
          // render the text content of the page

          console.log({ textContent });
        });
      });
    }

    setPdfRendering(false);
    document.getElementById("file-to-upload").value = "";
  };

  function changePage() {
    setCurrentPage();
  }

  const handleInputChange = (event) => {
    // console.log(event.target.files);

    handleChange(event, meta, event.target.files[0]);
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setErrorMsg("");

    // console.log(event.target.files)

    // setImage(URL.createObjectURL(event.target.files[0]));
    // handleChange()
  };

  useEffect(() => {
    // if (file !== "") {
    //   try {
    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //       const arrayBuffer = e.target.result;
    //       const uri = URL.createObjectURL(file);
    //       loadPdf(uri);
    //     };
    //     reader.readAsBinaryString(file);
    //   } catch (e) {
    //     console.log({ e });
    //   }
    // }
  }, [file]);
  return (
    <>
      <div className={classStyle.container}>
        <label className={classStyle.custom_file_upload}>
          <input
            accept={accept}
            onChange={(e) => handleInputChange(e)}
            type="file"
          />
          {label}
        </label>
      </div>
      {errorMsg}
      <span className="text-muted">{fileName}</span>
      <br></br>
    </>
  );
}

export default AppFilePicker;
