import React from "react";
import { useSelector } from "react-redux";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";
import TestsList from "./pagecomponents/TestsList";
import { useEffect } from "react";
import { useState } from "react";

function Tests() {
  const [isMobile, SetIsMobile] = useState(false);

  const TalentProfileData = useSelector((state) => state.TalentProfile);
  let { talentState: talentSliceData } = TalentProfileData;
  let { data: talentDataResult } = talentSliceData;

  const isMobileDev = ()=>{
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
  }

  useEffect(() => {
    
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobileDev()) {
      SetIsMobile(true);
      /* your code here */
    }
  }, []);
  return (
    <div>
      <TalentLayout pageTitle="Tests" pageHeaderRight={undefined}>
        <WhiteBgDiv>
          {isMobile ? (
            <>
              <div className="alert alert-info">
                This module requires you to use a laptop device or a desktop and
                not a mobile phone
              </div>
            </>
          ) : (
            <>
              {talentDataResult.hasOwnProperty("id") ? (
                <TestsList></TestsList>
              ) : (
                <EmptyData
                  title="Your profile is not updated"
                  message="Cannot take test without updating your profile"
                ></EmptyData>
              )}
            </>
          )}

          {/* */}
        </WhiteBgDiv>
      </TalentLayout>
    </div>
  );
}

export default Tests;
