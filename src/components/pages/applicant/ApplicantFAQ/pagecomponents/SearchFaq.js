import React from "react";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppTextField from "../../../../organisms/AppTextField/AppTextField";

function SearchFaq() {
  return (
    <div>
      <AppRow>
        <AppCol
          size={8}
          olg={2}
          md_size={8}
          lg_size={8}
          xs_size={12}
          omg={2}
          osg={2}
          oxsg={0}
        >
          <center>
            <h1>Frequently Asked Questions (FAQs)</h1>
          </center>
          <form>
            <AppTextField
              showLabel={false}
              placeholder="Search for a question ..."
            ></AppTextField>
          </form>
        </AppCol>
      </AppRow>
    </div>
  );
}

export default SearchFaq;
