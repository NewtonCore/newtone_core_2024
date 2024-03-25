import {
  LinearProgress,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { CircleMinus, TrashBin, TrashCan } from "akar-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FixedSizeList } from "react-window";
import {
  handleOnSelectInput,
  toggleShowManualUniversityForm,
} from "../../../app-redux/features/TalentProfile/TalentProfileSlice";
import {
  BLACK_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from "../../../constants/AppColors";
import {
  ExtractFieldsFromFormData,
  SearchFilterFunc,
} from "../../../constants/utils";
import { universities } from "../../../constants/world_universities";
import AppRow from "../AppRow/AppRow";
import SearchInput from "./SearchInput";
import { handleOnChangeTextInput } from "../../../app-redux/features/TalentProfile/TalentProfileSlice";
import ManualUniversityForm from "./ManualUniversityForm";
import SecondaryButton from "../../atoms/AppButton/SecondaryButton";
import { toast } from "react-toastify";

function SelectUniversityModal({
  message = "Select University",
  message2,
  onHide,
  actionButtonFn,
  loading,
  confirmText = "OK",
  cancelText = "Cancel",
  isDanger = false,
  handleSelect,
  val = "",
  meta,
  label,
  inputId,
  isRequired,
  defaultValue,
}) {
  const [valueSelected, setValueSelected] = useState("");
  const [show, setshow] = useState(false);

  let [q_search, SetQSearch] = useState("");

  let [final_universities, SetFinalUniversities] = useState(universities);

  const dispatch = useDispatch();
  const TalentSlice = useSelector((state) => state.TalentProfile);

  const { uni_search_form, manual_uni_form, showManualUniversityModal } =
    TalentSlice;

  let handleSearch = (search) => {
    SetQSearch(search);

    let final_skills_2 = SearchFilterFunc(search, universities);
    SetFinalUniversities(final_skills_2);
    // console.log(search)
    // console.log(final_skills)
  };

  //   useEffect(() => {
  //     SetFinalUniversities(universities);
  //     q_search = q_search.replace(/\s+/g, " ");

  //     if (q_search !== "") {
  //         // console.log(q_search.length)
  //         SetFinalUniversities(SearchFilterFunc(q_search, final_universities));
  //     } else {
  //         SetFinalUniversities(skills);
  //     }
  //   }, [q_search]);

  useEffect(() => {
    if (val !== "") {
      setValueSelected(val);
    } else {
      setValueSelected("");
    }
  }, [val]);

  let showManualUniversityForm = () => {
    dispatch(toggleShowManualUniversityForm(true));
  };

  let hideManualUniversityForm = () => {
    dispatch(toggleShowManualUniversityForm(false));
  };

  let submitManulUniversity = () => {
    let manual_uni_data = ExtractFieldsFromFormData(manual_uni_form);

    let manual_uni_data_value = manual_uni_data.search;

    manual_uni_data_value = manual_uni_data_value.replace(/\s+/g, " ");

    let e = {
      target: {
        name: "school",
        value: manual_uni_data_value,
      },
    };

    if (manual_uni_data_value === " " || manual_uni_data_value === "") {
      toast.info("Input cannot be empty");

      return 0;
    } else {
      let { value, name } = e.target;
      const { DataKey, RowKey, ChildKey } = meta;
      // console.log(meta)
      dispatch(
        handleOnSelectInput({
          state: "education",
          valueToUpdate: value,
          RowKey,
          ChildKey,
          DataKey,
        })
      );

      dispatch(toggleShowManualUniversityForm());
      setshow(false);
    }
  };

  //   console.log({valueSelected})

  let handleSelectFn = (value) => {
    // let { value, name } = e.target;
    setValueSelected(value);
    setshow(false);
    const { DataKey, RowKey, ChildKey } = meta;
    // console.log(meta)
    dispatch(
      handleOnSelectInput({
        state: "education",
        valueToUpdate: value,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  useEffect(() => {
    // dispatch(hideManualUniversityForm())
  }, []);

  return (
    <>
      <AppRow className="input_div_r_select" id={inputId}>
        <div className="label_div">
          {label !== undefined && (
            <>
              <span className="label">
                {label} {isRequired && "*"}
              </span>
            </>
          )}
        </div>

        <ListItem onClick={() => setshow(!show)}>
          <ListItemButton>
            <ListItemText
              primary={valueSelected !== "" ? valueSelected : "Select"}
            />
          </ListItemButton>
        </ListItem>

        {/* <button className="btn btn-primary" >
            
        </button> */}
        <Modal
          scrollable
          contentClassName=""
          show={show}
          backdrop="static"
          keyboard={false}
          // onHide={() => dispatch(toggleLoginForm())}
          onHide={() => setshow(false)}
          centered
        >
          {loading && <LinearProgress />}
          <Modal.Header closeButton>
            <span className="ms-auto">
              {" "}
              {showManualUniversityModal ? "Enter your university" : message}
            </span>
          </Modal.Header>

          <Modal.Body>
            {val !== "" && val !== null && val !== undefined && (
              <div>
                <span
                  className="badge text-bg-primary d-inline-block text-truncate"
                  style={{ maxWidth: 350 }}
                >
                  Current University: {val}
                </span>
              </div>
            )}

            {showManualUniversityModal ? (
              <ManualUniversityForm
                submit={submitManulUniversity}
                data={manual_uni_form}
                handleTextInputFn={handleOnChangeTextInput}
              ></ManualUniversityForm>
            ) : (
              <>
                <SearchInput
                  placeholder={`Search ${
                    Array.isArray(universities)
                      ? `ex: ${
                          universities[
                            Math.floor(Math.random() * universities.length)
                          ].name
                        }`
                      : ""
                  }`}
                  handleTextInputFn={handleOnChangeTextInput}
                  handleSearch={handleSearch}
                  data={uni_search_form}
                />

                <FixedSizeList
                  height={500}
                  // width={360}
                  itemSize={46}
                  // itemCount={200}
                  overscanCount={5}
                  itemData={final_universities}
                  itemCount={final_universities.length - 1}
                >
                  {/* {renderRow} */}

                  {({ data, index, style }) => {
                    let value = `${data[index].name} (${data[index].CountryCode})`;
                    return (
                      <ListItem
                        onClick={() => handleSelectFn(value)}
                        style={{
                          ...style,
                          backgroundColor:
                            value === valueSelected
                              ? PRIMARY_COLOR
                              : WHITE_COLOR,
                          color:
                            value === valueSelected ? WHITE_COLOR : BLACK_COLOR,
                        }}
                        key={index}
                        component="div"
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemText primary={value} />
                        </ListItemButton>
                      </ListItem>
                    );
                  }}
                </FixedSizeList>
              </>
            )}

           
          </Modal.Body>
          <Modal.Footer>
              {showManualUniversityModal ? (
                <div>
                  <SecondaryButton onClick={() => hideManualUniversityForm()}>
                    Cancel
                  </SecondaryButton>
                </div>
              ) : (
                <div>
                  <SecondaryButton onClick={() => showManualUniversityForm()}>
                    + Add university not on list
                  </SecondaryButton>
                </div>
              )}
            </Modal.Footer>
        </Modal>
      </AppRow>
    </>
  );
}

export default SelectUniversityModal;
