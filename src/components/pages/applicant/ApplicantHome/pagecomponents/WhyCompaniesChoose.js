import React from "react";
import Fade from "react-reveal/Fade";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import PrimaryCard from "../../../../organisms/PrimaryCard/PrimaryCard";
import SecondaryBackground from "../../../../organisms/SecondaryBackground/SecondaryBackground";

function WhyCompaniesChoose({ styles }) {
  return (
    <>
      <SecondaryBackground>
        <div className="pt-0">
          <AppRow size={12}>
            <center>
              <Fade bottom>
                <h1
                  className="display-3 text-center mb-4 mt-5"
                  style={{ fontSize: 50, fontWeight: 600 }}
                >
                 Why companies choose Newton International Inc
                </h1>
              </Fade>

              <AppCol size="12" md_size="12" sm_size={12}>
                <AppRow>
                  {DUMMY_DATA.whyCompaniesChooseNewton.map((data, index) => {
                    return (
                      <AppCol
                        key={index}
                        md_size="4"
                        size="4"
                        lg_size="4"
                        sm_size="6"
                        xs_size={12}
                      >
                        <Fade bottom>
                          <PrimaryCard 
                        className="shadow-sm rounded bg-white"
                          
                          color="secondary">
                            <AppContainerFluid>
                              <AppRow>
                                <AppCol
                                  md_size="12"
                                  size="12"
                                  lg_size="12"
                                  sm_size="12"
                                  xs_size={3}
                                  
                                  // style={{ backgroundColor: "red" }}
                                >
                                  <div className={styles.image_div}>
                                    <AppSVG data={data.image} />
                                  </div>
                                </AppCol>

                                <AppCol
                                  md_size="12"
                                  size="12"
                                  lg_size="12"
                                  sm_size="12"
                                  xs_size={9}
                                  // style={{backgroundColor:"red"}}
                                >
                                  <h6 className="mt-2 mb-2">{data.title}</h6>
                                  <p className="fw-light">{data.desc}</p>
                                </AppCol>
                              </AppRow>
                            </AppContainerFluid>
                          </PrimaryCard>
                        </Fade>
                      </AppCol>
                    );
                  })}
                </AppRow>
              </AppCol>
            </center>
          </AppRow>
        </div>
      </SecondaryBackground>
    </>
  );
}

export default WhyCompaniesChoose;
