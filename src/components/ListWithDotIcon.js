import React, { useState } from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import Imports from "../common/Imports"
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
const ReusableListWithDotIcon = (props) => {
  const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
      setShowAll(!showAll);
    };
  return (
    <>
      {props.list
        ?.slice(0, showAll ? props.list?.length : props.maxItemsToShow)
        .map((item, index) => (
          <div style={{ pl: 0, pt: 0, pb: 0 }} key={index}>
            <div style={{ pl: 1.5, pt: 0, pb: 0,display:'flex',flexDirection:'row',alignItems:'center'}}>
              {props.icon === "icon" ? (
                <>
                  {" "}
                  <div style={{ minWidth: "20px" }}>
                    <FiberManualRecordTwoToneIcon
                      sx={{ fontSize: 10 }}
                      edge="start"
                    />
                  </div>
                </>
              ) : (
                ""
              )}

              <div
                style={{ ...props.style }}
              >
                {item.item}{" "}
                {props.title ? (
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      color: "#2874f0",
                    }}
                  >
                    {props.title}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      {props.maxItemsToShow ? (
        <>
          <Imports.ReusableLink
            onClick={toggleShowAll}
            variant="body2"
            underline="none"
            sx={{ cursor: "pointer", color: "blue" }}
          >
            {showAll ? "Show less" : "Show more"}
          </Imports.ReusableLink>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default ReusableListWithDotIcon;
