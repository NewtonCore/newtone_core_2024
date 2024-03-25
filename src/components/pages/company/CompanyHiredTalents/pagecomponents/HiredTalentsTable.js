import React from "react";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import AppDataGrid from "../../../../organisms/AppDataGrid/AppDataGrid";
import { COMPANY_ROUTE } from "../../../../../routes/RouteLinks";
import { SECONDARY_LIGHT_COLOR } from "../../../../../constants/AppColors";
import SecondaryButton from "../../../../atoms/AppButton/SecondaryButton";
import { FormatDate } from "../../../../../constants/utils";
import AppLink from "../../../../organisms/AppLink/AppLink";
import { Money } from "akar-icons";
import { useNavigate } from "react-router-dom";

function HiredTalentsTable({ data }) {
  const navigate = useNavigate();
  const columns: GridColDef[] = [
    {
      field: "Name",
      headerName: "Name",
      minWidth: 300,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            <h6>
              <AppLink
                to={
                  params.row.first_name !== undefined &&
                  params.row.first_name !== null &&
                  params.row.first_name !== ""
                    ? `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewTalent}${params.row.talentId}`
                    : "#"
                }
              >
                {params.row.first_name !== undefined &&
                params.row.first_name !== null &&
                params.row.first_name !== ""
                  ? params.row.first_name
                  : "Talent may have been deleted"}
              </AppLink>
            </h6>
            <span className="text-muted">
              {params.row.current_job_title !== undefined &&
              params.row.current_job_title !== null &&
              params.row.current_job_title !== ""
                ? params.row.current_job_title
                : "-"}
            </span>
          </div>
        );
      },
    },

    {
      field: "status",
      headerName: "Status",
      minWidth: 250,

      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            <h6>{params.row.status}</h6>

            {params.row.status === "accepted" && (
              <SecondaryButton
                backgroundColor={SECONDARY_LIGHT_COLOR}
                color="transparent"
                onClick={() =>
                  navigate(
                    `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.makePaymentForTalent}${params.row.id}`
                  )
                }
              >
                <Money /> Make Payment
              </SecondaryButton>
            )}
          </div>
        );
      },
    },

    {
      field: "qualification",
      headerName: "Qualification",
      minWidth: 200,
      renderCell: (params: GridValueGetterParams) => {
        return <>
        {params.row.qualification !== undefined &&
              params.row.qualification !== null &&
              params.row.qualification !== ""
                ? params.row.qualification
                : "-"}

        </>;
      },
    },

    {
      field: "address",
      headerName: "Address",
      minWidth: 200,
      renderCell: (params: GridValueGetterParams) => {
        return <>
        {params.row.address !== undefined &&
              params.row.address !== null &&
              params.row.address !== ""
                ? params.row.address
                : "-"}

        </>;
      },
    },

    {
      field: "view_talent",
      headerName: "View Talent",
      minWidth: 200,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div>
            {
              params.row.talentId !== undefined &&
              params.row.talentId !== null &&
              params.row.talentId !== ""? 
              
              <SecondaryButton
              backgroundColor={SECONDARY_LIGHT_COLOR}
              color="transparent"
              isLink={true}
              linkPath={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewTalent}${params.row.talentId}`}
            >
              View Talent
            </SecondaryButton>
              : 
              <SecondaryButton
              backgroundColor={SECONDARY_LIGHT_COLOR}
              color="transparent"
              loading={true}
            >
              Cannot View Talent
            </SecondaryButton>
            }
            {/* {JSON.stringify(params.row.user.id)} */}
           
          </div>
        );
      },
    },

    {
      field: "created_at",
      headerName: "Date Hired",
      minWidth: 200,
      renderCell: (params: GridValueGetterParams) => {
        return <div>{FormatDate(params.row.created_at)}</div>;
      },
    },
  ];
  return (
    <div>
      <AppDataGrid rows={data} columns={columns}></AppDataGrid>
    </div>
  );
}

export default HiredTalentsTable;
