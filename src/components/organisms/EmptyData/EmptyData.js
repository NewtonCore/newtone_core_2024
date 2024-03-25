import React from "react";
import {
  PRIMARY_COLOR,
  SECONDARY_LIGHT_COLOR,
} from "../../../constants/AppColors";
import { EMPTY_IMG } from "../../../constants/AppImages";
import AppButton from "../../atoms/AppButton/AppButton";
import SecondaryButton from "../../atoms/AppButton/SecondaryButton";
import AppImage from "../AppImage/AppImage";

function EmptyData({
  message = "",
  hasAction = false,
  actionLabel,
  linkPath,
  title="",
  image,
  component,
}) {
  return (
    <>
      {component !== undefined ? (
        <div
          // style={{  }}
          className="border p-5 rounded"
        >
          {component}

          {hasAction && (
            <SecondaryButton
              size="small"
              isLink
              linkPath={linkPath}
              style={{
                backgroundColor: SECONDARY_LIGHT_COLOR,
                color: "black",
              }}
            >
              {actionLabel}
            </SecondaryButton>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="border p-5 rounded"
        >
          <AppImage
            className="animate__animated animate__pulse mb-3"
            style={{ height: 70, opacity: image === undefined ? ".4" : "1" }}
            image={image === undefined ? EMPTY_IMG : image}
          />
          <p className="fs-5 text-center" style={{ color: PRIMARY_COLOR }}>
            {title}
          </p>

          <p className="fs-6 text-muted text-center">{message}</p>

          {hasAction && (
            <SecondaryButton
              size="small"
              isLink
              linkPath={linkPath}
              style={{
                backgroundColor: SECONDARY_LIGHT_COLOR,
                color: "black",
              }}
            >
              {actionLabel}
            </SecondaryButton>
          )}
        </div>
      )}
    </>
  );
}

export default EmptyData;
