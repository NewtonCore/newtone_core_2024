import React, { useEffect, useState } from "react";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import AppDataGrid from "../../../../organisms/AppDataGrid/AppDataGrid";
import { SECONDARY_LIGHT_COLOR } from "../../../../../constants/AppColors";
import SecondaryButton from "../../../../atoms/AppButton/SecondaryButton";
import AppActionButtons from "../../../../organisms/AppActionButtons/AppActionButtons";
import { FormatDate, returnSalary } from "../../../../../constants/utils";
import { HOME_ROUTES, TALENT_ROUTE } from "../../../../../routes/RouteLinks";
import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { Article, Visibility } from "@mui/icons-material";
import {
  resetJobDetails,
  toggleShowTalentApplicationHistoryModal,
} from "../../../../../app-redux/features/jobCompany/jobCompanySlice";
import { useDispatch, useSelector } from "react-redux";
import TalentApplicationHistoryModal from "./TalentApplicationHistoryModal";
import {
  getAppliedTalentObject,
  resetapplyingTalentData,
} from "../../../../../app-redux/features/TalentSlice/talentSlice";
import AppLink from "../../../../organisms/AppLink/AppLink";
function MyJobsTable({ data }) {
  const [applicationDetails, setApplicationDetails] = useState({});

  const dispatch = useDispatch();
  const jobData = useSelector((state) => state.jobCompany);
  const talentSliceData = useSelector((state) => state.talent);

  const { showTalentApplicationHistory } = jobData;

  const { applyingTalentData } = talentSliceData;
  // console.log({ data });

  const navigate = useNavigate();
  const getAppliedJobDetails = (jobID, data) => {
    setApplicationDetails(data);
    dispatch(getAppliedTalentObject(jobID));
  };

  useEffect(() => {
    if (applyingTalentData.id !== null) {
      dispatch(toggleShowTalentApplicationHistoryModal(true));
    }
  }, [applyingTalentData]);

  useEffect(() => {
    return () => {
      dispatch(resetapplyingTalentData());
      dispatch(toggleShowTalentApplicationHistoryModal(false));
    };
  }, []);
  const onHideModal = () => {
    dispatch(resetapplyingTalentData());
    dispatch(resetJobDetails());
    dispatch(toggleShowTalentApplicationHistoryModal(false));
  };

  // console.log(data);

  const columns: GridColDef[] = [
    {
      field: "jobTitle",
      headerName: "Job title",
      width: 350,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            <h6>
              {params.row.jobTitle !== undefined ? (
                <>
                  <AppLink to={`/${HOME_ROUTES.viewJob}${params.row.jobID}`}>
                    {params.row.jobTitle.name}
                  </AppLink>
                  <br></br>
                  <span className="bg-light">
                    <>
                      Salary offered:{" "}
                      {returnSalary(
                        params.row.min_salary,
                        params.row.max_salary
                      )}
                    </>
                  </span>
                </>
              ) : (
                <>Job may have been deleted</>
              )}
            </h6>
          </div>
        );
      },
    },

    {
      field: "applied_date",
      headerName: "Applied & Job Expiry",
      width: 230,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            {params.row.expiry_date === undefined &&
            params.row.created_at === undefined ? (
              <>Job not found</>
            ) : (
              <>
                <h6>Applied: {FormatDate(params.row.created_at)}</h6>
                <span>Expiry date {FormatDate(params.row.expiry_date)}</span>
              </>
            )}
          </div>
        );
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 230,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            <h6>{params.row.status}</h6>

            {params.row.message !== "" &&
              params.row.message !== null &&
              params.row.jobDetails !== null && (
                <SecondaryButton
                  backgroundColor={SECONDARY_LIGHT_COLOR}
                  color="transparent"
                  loading={applyingTalentData.loading}
                  onClick={() =>
                    getAppliedJobDetails(`${params.row.jobID}`, params.row)
                  }
                >
                  <Article /> View Details
                </SecondaryButton>
              )}
          </div>
        );
      },
    },

    {
      field: "job_offer",
      headerName: "Job Offer",
      width: 150,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            <h6>{params.row.status}</h6>

            {params.row.status === "offered" &&
              params.row.jobDetails !== null && (
                <SecondaryButton
                  backgroundColor={SECONDARY_LIGHT_COLOR}
                  color="transparent"
                  loading={applyingTalentData.loading}
                  onClick={() =>
                    navigate(
                      `/${TALENT_ROUTE.index}${TALENT_ROUTE.acceptJobOffer}${params.row.id}`
                    )
                  }
                >
                  <Visibility /> View offer
                </SecondaryButton>
              )}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            <AppActionButtons
              handleEditButton={() => {}}
              hanldeDeleteButton={() => {}}
              hanldeLockButton={() => {}}
              showLock
              //  showDelete
              //  showEdit
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      {applyingTalentData.loading && (
        <>
          <LinearProgress />
        </>
      )}
      <TalentApplicationHistoryModal
        applicationDetails={applicationDetails}
        data={applyingTalentData.data}
        show={showTalentApplicationHistory}
        onHide={() => onHideModal()}
      ></TalentApplicationHistoryModal>
      <AppDataGrid rows={data} columns={columns}></AppDataGrid>
    </div>
  );
}

export default MyJobsTable;
