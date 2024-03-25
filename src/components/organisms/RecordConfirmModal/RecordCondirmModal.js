import { LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Modal } from "react-bootstrap";
import {
  useReactMediaRecorder,
} from "react-media-recorder";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  setRecordBlob,
  TalentRecordSkill,
  toggleIsRecording,
  toggleShowRecordingModal,
} from "../../../app-redux/features/Questions/questionsSlice";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SECONDARY_LIGHT_COLOR,
} from "../../../constants/AppColors";
import { CHANGE_TAB } from "../../../constants/AppImages";
import {
  blobToFile,
  JsonToformData,
} from "../../../constants/utils";
import AppButton from "../../atoms/AppButton/AppButton";
import { useState } from "react";

function RecordCondirmModal({
  message = "Start test",
  message2,
  show,
  onHide,
  actionButtonFn,
  loading,
  confirmText,
  cancelText,
  skill
  //   startRecordingFn
}) {
  const [isMobile,SetIsMobile] = useState(false)
  const questionData = useSelector((state) => state.questions);
  const { postMyAnswersState, testTerminated } = questionData;



  const dispatch = useDispatch();

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      screen: true,
      audio:false,
      onStart: () => {
        dispatch(toggleIsRecording());
        toast.success("Recording started...", 1000);
        dispatch(toggleShowRecordingModal(false));
      },
      onStop: (e) => {
     
        let blob = fetch(e).then((r) => r.blob());
      
        blob.then((res) => {
          let file_name = `file_${uuidv4()}.mp4`
          const myFile = new File([res], file_name, {
            type: res.type,
          });

          // get file size of the blob

          let file = blobToFile(res, `${new Date()}_recording`);
          // console.log({res});
          // var _size = file.size;
          // var fSExt = new Array("Bytes", "KB", "MB", "GB"),
          //   i = 0;
          // while (_size > 900) {
          //   _size /= 1024;
          //   i++;
          // }
          // var exactSize = Math.round(_size * 100) / 100 + " " + fSExt[i];

          // end get file size of the blob


          // POST the file to the backemnd
          let data_to_post = JsonToformData({ video: myFile ,skill:skill.id});
          dispatch(TalentRecordSkill({ data: data_to_post })).unwrap()
          .then((res)=>{
            toast.success("Recording has been saved!")
          })

          dispatch(setRecordBlob(file));
        });
        // console.log(blob)
        toast.info("Recording stopped...", 1000);
      },
    });

  useEffect(() => {
    if (postMyAnswersState.success || testTerminated) {
      stopRecording();
    }
  }, [postMyAnswersState.success, testTerminated]);

  //   console.log(status);

  useEffect(() => {
    if (mediaBlobUrl !== undefined && mediaBlobUrl !== "") {
      // console.log({ mediaBlobUrl });

      dispatch(setRecordBlob(mediaBlobUrl));

      let blob = fetch(mediaBlobUrl).then((r) => r.blob());
      // console.log(blob)

      blob.then((res) => {
        // console.log(res)
      });
    }
  }, [mediaBlobUrl]);

  useEffect(()=>{
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  SetIsMobile(true)
  /* your code here */
}
  },[])

  return (
    <div>
      <Modal
        size="lg"
        scrollable
        contentClassName=""
        show={show}
        onHide={onHide}
        centered
      >
        {loading && <LinearProgress />}
        <Modal.Header closeButton>
          <span className="ms-auto">{message}</span>
        </Modal.Header>

        <Modal.Body>
          {
            isMobile ? <>
            <p className="text-center">
           This module requires you to use a laptop device and not a mobile phone
          </p>
            </> : <>
            <p className="text-center">
            {message2}
          </p>
          <div>
            <center>
              <img
                className="p-3"
                style={{ width: "50%", backgroundColor: SECONDARY_COLOR }}
                src={CHANGE_TAB}
              ></img>
            </center>
          </div>

          <hr></hr>

          <div class="alert alert-warning text-center" role="alert">
            As demonstrated above, kindly note that changing of the browser's
            tab or navigating to another window is not allowed and could lead to
            termination of the test
          </div>

          <hr></hr>
          <p className="text-center">
            This module requires for you to allow the browser to record your
            screen.
          </p>

          <div className="d-flex flex-row mb-3 justify-content-around">
            {/* <p>{status}</p> */}
            <div className="d-flex flex-row mb-3 justify-content-around">
              <div className="p-2">
                <AppButton
                  size="small"
                  loading={loading}
                  backgroundColor={PRIMARY_COLOR}
                  onClick={startRecording}
                  label={
                    confirmText !== undefined
                      ? confirmText
                      : "Start Test With Recording"
                  }
                ></AppButton>
              </div>
              <div className="p-2">
                <AppButton
                  backgroundColor={SECONDARY_LIGHT_COLOR}
                  color="transparent"
                  size="small"
                  loading={loading}
                  onClick={onHide}
                  label={cancelText !== undefined ? cancelText : "Back"}
                ></AppButton>
              </div>
            </div>
          </div>
            </>
          }
          
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RecordCondirmModal;
