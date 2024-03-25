import { Camera, Clock } from "akar-icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { PRIMARY_COLOR } from "../../../constants/AppColors";
import AppButton from "../../atoms/AppButton/AppButton";
import AppImage from "../AppImage/AppImage";
import classStyle from "./TestTile.module.css";
function TestTile({
  label = "Test 1",
  icon = {},
  hasStarted = null,
  percentageComplete,
  recording = false,
  duration,
}) {
  return (
    <NavLink to={`/talent/tests/${label}`} className={classStyle.tile}>
      <div className={classStyle.icon_div}>
        <AppImage image={icon} />
      </div>

      <div className={classStyle.bottom}>
        <span>{label}</span>
        {recording && (
          <>
            <span className="text-muted" style={{ fontSize: 12 }}>
              Screen Recording
              <Camera
                style={{ marginLeft: 4 }}
                color={PRIMARY_COLOR}
                size={12}
              />
            </span>
          </>
        )}
        {hasStarted && <span className="text-muted">{percentageComplete}</span>}
        <AppButton size="small">
          {hasStarted ? "Continue" : `Start Test`} ({duration} mins)
        </AppButton>
      </div>
    </NavLink>
  );
}

export default TestTile;
