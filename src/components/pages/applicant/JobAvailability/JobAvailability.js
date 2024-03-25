import React, { useEffect } from "react";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  handleRadioChange,
  jobAvailabilityFn,
  preloadAvailabilityData,
  updateAvailability,
} from "../../../../app-redux/features/TalentProfile/TalentProfileSlice";
import {
  ExtractFieldsFromFormData,
  JsonToformData,
} from "../../../../constants/utils";
import { toast } from "react-toastify";
import AppBackDrop from "../../../organisms/AppBackDrop/AppBackDrop";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import { TALENT_ROUTE } from "../../../../routes/RouteLinks";

function JobAvailability() {
  const dispatch = useDispatch();
  const talentData = useSelector((state) => state.TalentProfile);

  const { availability_form, talentState, JobAvailabilityState } = talentData;

  const { data: talentStateData } = talentState;

  let handleRadionFn = (e, meta) => {
    let value = "";
    let name = "";

    if (e.target !== undefined) {
      value = e.target.value;
      name = e.target.name;
    } else {
      value = e;
    }

    const { RowKey, ChildKey } = meta;

    dispatch(
      handleRadioChange({
        state: "availability",
        valueToUpdate: value,
        KeyName: name,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  const postAvailability = () => {
    let data = ExtractFieldsFromFormData(availability_form);

    data = JsonToformData(data);

    dispatch(
      jobAvailabilityFn({
        dataPassed: data,
        isEdit: talentStateData.hasOwnProperty("availability")
          ? talentStateData.availability !== null
            ? true
            : false
          : false,
      })
    )
      .unwrap()
      .then((res) => {
        // console.log(res)
        dispatch(updateAvailability(res));
        toast.success("Availability has been updated!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    if (talentStateData.hasOwnProperty("availability")) {
      // return 0
      if (talentStateData.hasOwnProperty("availability")) {
        if (talentStateData.availability !== null) {
          dispatch(preloadAvailabilityData(talentStateData.availability));
        }
      }
    }
  }, [talentStateData]);

  return (
    <div>
      <TalentLayout
        pageTitle="Update your availability"
        pageHeaderRight={undefined}
      >
        {JobAvailabilityState.loading && <AppBackDrop open={true} />}

        {talentState.loading && <AppBackDrop open={true} />}
        {!talentStateData.hasOwnProperty("id")  ? (
          <EmptyData
            message="Click on update button below"
            title="Your profile is not updated
          "
            actionLabel="Update Profile"
            hasAction={true}
            linkPath={`/${TALENT_ROUTE.index}${TALENT_ROUTE.editProfile}`}
          ></EmptyData>
        ) : (
          <>
            {availability_form !== undefined && (
              <div className="p-3" style={{ backgroundColor: "white" }}>
                {availability_form.map((input_1, input_1_index) => {
                  return (
                    <span key={input_1.id}>
                      <h6 className="pb-2 pt-3">{input_1.label}</h6>
                      <AppRow className="gx-3">
                        {input_1.children.length !== 0 &&
                          input_1.children.map((input_2, input_2_index) => {
                            return (
                              <AppCol key={input_2.id} size={input_1.size}>
                                <FormInputRenderer
                                  handleChange={handleRadionFn}
                                  type={input_2.input_type}
                                  metaData={{
                                    ...input_2,
                                    name: input_1.name,
                                    value: input_2.value,
                                    icon: input_2.icon,
                                    options: input_2.options,
                                    size: input_2.size,
                                    meta: {
                                      RowKey: input_1_index,
                                      ChildKey: input_2_index,
                                    },
                                  }}
                                ></FormInputRenderer>
                              </AppCol>
                            );
                          })}
                      </AppRow>
                    </span>
                  );
                })}
                <AppButton
                  onClick={() => postAvailability()}
                  size="small"
                  label="Save Changes"
                ></AppButton>
              </div>
            )}
          </>
        )}
      </TalentLayout>
    </div>
  );
}

export default JobAvailability;
