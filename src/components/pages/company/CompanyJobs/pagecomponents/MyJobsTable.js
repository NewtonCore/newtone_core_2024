import React from "react";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import AppDataGrid from "../../../../organisms/AppDataGrid/AppDataGrid";

import { SECONDARY_LIGHT_COLOR } from "../../../../../constants/AppColors";
import { FormatDate } from "../../../../../constants/utils";
import { HOME_ROUTES } from "../../../../../routes/RouteLinks";
import AppActionButtons from "../../../../organisms/AppActionButtons/AppActionButtons";
import SecondaryButton from "../../../../atoms/AppButton/SecondaryButton";
import { useDispatch } from "react-redux";
import {
  toggleEditFormJob,
  toggleShowCompanyDeleteModal,
} from "../../../../../app-redux/features/jobCompany/jobCompanySlice";
import { useNavigate } from "react-router-dom";

import { Menu, MenuItem } from "@mui/material";
import Fade from "@mui/material/Fade";
import AppLink from "../../../../organisms/AppLink/AppLink";

// import ConfirmationModal from "../../../../organisms/ConfirmationModal/ConfirmationModal";

function MyJobsTable({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleCompanyDelete = (jobDetails) => {
    dispatch(toggleShowCompanyDeleteModal(jobDetails));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [job, SetJob] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event, job) => {
    SetJob(job);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleViewTalent = (job) => {
  //   if (job.hasOwnProperty("companypaymenttransaction_set")) {
  //     if (job.companypaymenttransaction_set.length === 0) {
  //       dispatch(togglePayPalModal(job));
  //     } else {
  //       navigate(`/company/view-talents/${job.id}`);
  //     }
  //   }
  // };

  const handleViewTalent = (isRecommended) => {
    // console.log(job)
    setAnchorEl(null);

    if (isRecommended) {
      navigate(`/company/view-talents/${job.id}?status=recommended`);
    } else {
      navigate(`/company/view-talents/${job.id}`);
    }
  };

  const handleViewRecommendedTalent = (e, job) => {
    // console.log(job)
    // setAnchorEl(null);

    handleClick(job);

    navigate(`/company/view-talents/${job.id}?status=recommended`);
  };
  // useEffect(() => {
  //   console.log('before tootle')
  //   dispatch(togglePayPalModal())
  // }, [])
  // console.log(data)
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Job title",
      minWidth: 200,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <AppLink to={`/${HOME_ROUTES.viewJob}${params.row.id}`}>
            {/* {JSON.stringify(params.row.title)} */}
            <h6 style={{ fontWeight: 500 }}>
              {params.row.title !== null ? params.row.title.name : "-"}
            </h6>
          </AppLink>
        );
      },
    },

    {
      field: "talents",
      headerName: "Talents",
      minWidth: 250,
      renderCell: (params) => {
        // console.log(params)

        return (
          <div>
            <h6>
              {params.row.hasOwnProperty("number_of_applicaton") &&
                `${params.row.number_of_applicaton} applicants`}
            </h6>
            {/* <InputLabel id="demo-simple-select-label">View Talent</InputLabel> */}

            {/* <Select size="small" label="View Talent"  onChange={handleClick} fullWidth>
      

      
          </Select> */}

            {/* <SecondaryButton
              onClick={() => handleViewTalent(params.row)}
              //   style={{height:25,fontSize:12}}
              backgroundColor={SECONDARY_LIGHT_COLOR}
              color="transparent"
           
            >
              {params.row.companypaymenttransaction_set.length === 0 ? (
                <LockOn color="orange" size={15} />
              ) : (
                <Check color={PRIMARY_COLOR} size={15} />
              )}{" "}
              View Talents
            </SecondaryButton> */}

            {/* <div className="btn-group">
  <button size="small" type="button" class="btn btn-danger">View Talents</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a onClick={() => handleViewTalent(params.row)} className="dropdown-item" href="#">View Recommended Talent</a></li>
    <li><a onClick={() => handleViewTalent(params.row)} className="dropdown-item" href="#">View Applied Talents</a></li>
    
  </ul>
</div> */}

            {params.row.hasOwnProperty("number_of_applicaton") &&
            params.row.number_of_applicaton > 0 ? (
              <>
                <SecondaryButton
                  onClick={(e) => handleClick(e, params.row)}
                  backgroundColor={SECONDARY_LIGHT_COLOR}
                  color="transparent"
                >
                  View Talents
                </SecondaryButton>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  elevation={1}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={() => handleViewTalent(false)}>
                    View Applied Talent
                  </MenuItem>

                  <MenuItem onClick={() => handleViewTalent(true)}>
                    View Recommended Talents
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <SecondaryButton
                  onClick={(e) => handleViewRecommendedTalent(e, params.row)}
                  backgroundColor={SECONDARY_LIGHT_COLOR}
                  color="transparent"
                >
                  View Recommended
                </SecondaryButton>
              </>
            )}
          </div>
        );
      },
    },

    {
      field: "applied_date",
      headerName: "Created & Expired",
      minWidth: 200,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            <h6>Created: {FormatDate(params.row.created_at)}</h6>
            <span style={{ fontWeight: 200 }}>
              Expiry date {FormatDate(params.row.expiration_date)}
            </span>
          </div>
        );
      },
    },

    {
      field: "status",
      headerName: "Status",
      minWidth: 100,
    },

    {
      field: "action",
      headerName: "Action",
      minWidth: 150,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            <AppActionButtons
              handleEditButton={() => {
                dispatch(toggleEditFormJob(JSON.stringify(params.row)));
              }}
              hanldeDeleteButton={() => handleToggleCompanyDelete(params.row)}
              hanldeLockButton={() => {}}
              // showLock
              showDelete
              showEdit
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {/* <SubscriptionModal
        toggleFunction={() => dispatch(togglePayPalModal())}
        show={appData.showSubScriptionModal}
      /> */}
      <AppDataGrid rows={data} columns={columns}></AppDataGrid>
    </div>
  );
}

export default MyJobsTable;
