import React from "react";
import AppCol from "../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../organisms/AppRow/AppRow";
import "./LeftRightPage.css";

function LeftRightPage({ Left = {}, Right = {} ,id}) {
  return (
    <>
      <AppContainerFluid id="left-right">
        <AppRow>
          <AppCol id="left_leftright" size={3} md_size={3} lg_size={3}>
            <div>
              <>
                <AppRow style={{ padding: 0 }}>
                  <AppCol
                    id="left_display"
                    size={11}
                    className="position-sticky"
                  >
                    {Left}
                  </AppCol>
                </AppRow>
              </>
            </div>
          </AppCol>

          <AppCol id="right_left_right" size={9} md_size={9} lg_size={9}>
            {Right}
          </AppCol>
        </AppRow>
      </AppContainerFluid>
    </>
  );
}

export default LeftRightPage;
