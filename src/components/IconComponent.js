import React from "react";
import iconsData from "../utils/icons.json";



const IconComponent = ({ name, alt }) => {
  return (
    <div className="peekplex-icon-wrapper">
      {iconsData?.[name] && (
        <div dangerouslySetInnerHTML={{ __html: iconsData[name] }} />
      )}
    </div>
  );
};

export default IconComponent;
