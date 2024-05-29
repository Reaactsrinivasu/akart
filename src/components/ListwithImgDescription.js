import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Collapse,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import Imports from "../common/Imports";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
const ReusableListwithImgDescription = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
      setShowAll(!showAll);
    };
    // console.log(props);
   return (
     <>
       {/* <Box sx={{ pl: 0, pt: 0, pb: 0 }}> */}
       <Box sx={{ p: 3 }}>
         <Box
           onClick={handleClick}
           disableRipple={true}
           sx={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "space-between",
             "&:hover": {
               backgroundColor: "transparent",
             },
           }}
         >
           <Typography variant="h4">Product Description</Typography>
           <Typography>{open ? <ExpandLess /> : <ExpandMore />}</Typography>
         </Box>
         <Divider variant="fullWidth" />
         <Collapse in={open} timeout="auto" unmountOnExit>
           {props.list
             ?.slice(0, showAll ? props.list?.length : props.maxItemsToShow)
             .map((item, index) => (
               <Box sx={{ pl: 1.5, pt: 0, pb: 0 }}>
                 {/* <Typography ml={3} fontWeight="bold">
                   {item.title}
                 </Typography> */}
                 <Box
                   sx={{
                     display: "flex",
                     flexDirection: item.id % 2 !== 0 ? "row" : "row-reverse",
                     alignItems: "center",
                     margin: 2,
                   }}
                 >
                   <img
                     src={item.image}
                     alt="1"
                     style={{ width: "18%", height: "18%" }}
                   />
                   <Box
                     sx={{
                       display: "flex",
                       flexDirection: "column",
                       alignItems: "flex-start",
                     }}
                   >
                     <Typography ml={3} fontWeight="bold">
                       {item.title}
                     </Typography>
                     <Typography sx={{ ...props.sx }} textAlign="justify">
                       {item.desc}
                     </Typography>
                   </Box>
                 </Box>
                 <Divider variant="fullWidth" />
               </Box>
             ))}
         </Collapse>
       </Box>
       {props.maxItemsToShow ? (
         <>
           <Imports.ReusableLink
             onClick={toggleShowAll}
             variant="body2"
             underline="none"
             sx={{
               cursor: "pointer",
               color: "blue",
               m: 3,
               transition: "0.3s",
             }}
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
export default ReusableListwithImgDescription;
