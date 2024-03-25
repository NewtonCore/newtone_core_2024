import React from "react";

function EmailHasBeenSent({ email }) {
  let hide = email.split("@")[0].length - 3;
  var r = new RegExp(".{" + hide + "}@", "g");

  let email_hidden = email.replace(r, "***@");
  return (
    <div>
      <div class="alert alert-info" role="alert">
        Instructions to reset your password have been sent to your email{" "}
        {email_hidden}
      </div>
    </div>
  );
}

export default EmailHasBeenSent;
