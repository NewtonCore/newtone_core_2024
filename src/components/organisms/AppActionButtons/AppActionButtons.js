import { Edit, LockOn, TrashBin } from "akar-icons";
import React from "react";
import {
  CARBON_EDIT_SVG,
  DELETE_SVG,
  UNLOCKED_SVG,
} from "../../../constants/AppSvg";
import AppImage from "../AppImage/AppImage";

function AppActionButtons({
  showLock = false,
  showEdit = false,
  showDelete = false,
  handleEditButton={},
  hanldeDeleteButton={},
  hanldeLockButton={}

}) {
  return (
    <div>
      <div className="btn-group btn-group-sm" role="group" aria-label="...">
        {showLock && (
          <button 
          onClick={()=>hanldeLockButton()}
          className="btn btn-default">
            {/* <LockOn/> */}
            <AppImage height={25} image={UNLOCKED_SVG}></AppImage>
          </button>
        )}

        {showEdit && (
          <button 
          onClick={()=>handleEditButton()}
          
          className="btn btn-default">
            <AppImage height={22} image={CARBON_EDIT_SVG}></AppImage>
          </button>
        )}

        {showDelete && (
          <button 
          onClick={()=>hanldeDeleteButton()}
          
          className="btn btn-default">
            <AppImage height={25} image={DELETE_SVG}></AppImage>
          </button>
        )}
      </div>
    </div>
  );
}

export default AppActionButtons;
