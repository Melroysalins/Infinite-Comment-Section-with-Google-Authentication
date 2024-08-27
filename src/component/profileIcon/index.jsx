import React from "react";
import "./index.css";
import UserName from "../username";

const ProfileIcon = () => {
  return (
    <div className="ProfileIconContainner">
      <div className="Icon">
        <img
          src={
            "https://s3-alpha-sig.figma.com/img/23fc/429e/4a3c3278f934025379eb971ac47d1d04?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kY4B-sj7sKlPMCyNGto89fCPxTqYNmKxh~J8RCL~ilrhpxVfB8OsXR3r8tANTMoobjo6RPQLcdN6JN2xD4Q4hAhSmp1vh9r3IXocdhQniq7ZExUXHHCFfmXg115FD9G7VooGza~c-kG9qh0jebpqKsAznqTG3sA1PvOtSi9QiGjgrBZVUnhbiqHXu1voFF4gMH0jppC~BOtnP99uCI4QW7zoPCQUQ3X-xH3crO2r~y8wu-jRXQuggu~wq7BU6b7KBpVis3hseYPVxCYDrfJFkMnpNykW7I25KHClmiTiAFWlBbiECoK5d6Ay8n5KMC~6psXFaIBK3q9aGSte~~~zhg__"
          }
        />
      </div>
      <UserName />
    </div>
  );
};

export default ProfileIcon;
