// Notifications
import { toast } from "react-toastify";
// Modal pop up
import Modal from "@mui/material/Modal";
// styles
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Mui icons
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
//formik 
import { useFormik } from "formik";
// hooks
import { useState} from "react";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// Layouts
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// Typographies
import Typography from "@mui/material/Typography";
// Navigations
import Link from "@mui/material/Link";
// Menus
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// Inputs
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Skeleton from "@mui/material/Skeleton";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// styles
// import formBoxStyle from "../../src/assets/css/FormBoxStyles";
// axios
import axios from "axios";
// Dividers
import Divider from "@mui/material/Divider";

// Reusable components
import ReusableContainer from "../components/Container";
import ReusableBgBox from "../components/BgBox";
import ReusableBox from "../components/Box";
import ReusablePaper from "../components/Paper";
import ReusableTypography from "../components/Typography";
import ReusableInputLabel from "../components/InputLabel";
import ReusableFormTextField from "../components/TextField";
import ReusableButton from "../components/Button";
import ReusableLink from "../components/Link";
import ReusableChip from "../components/Chip";
import ReusableDivider from "../components/Divider";
import ReusableGrid from "../components/Grid";
 const Imports = {
   red,
   toast,
   useFormik,
   Modal,
   AddIcon,
   DeleteIcon,
   ModeEditIcon,
   FormControl,
    FormLabel,
    IconButton,
   MenuIcon,
useState,
useEffect,
useNavigate,
   useLocation,
useDispatch,
   Link,
   Box,
   Fab,
   Grid,
   Paper,
   Stack,
    Button,
    Tabs,
   Tab,
   styled,
   MenuItem,
   Skeleton,
   TextField,
   Container,
   Typography,
   Divider,
   Chip,
   InputLabel,
   ButtonGroup,
   ReusablePaper,
   ReusableContainer,
   ReusableBgBox,
   ReusableBox,
   ReusableTypography,
   ReusableInputLabel,
   ReusableButton,
   ReusableFormTextField,
   ReusableLink,
   ReusableChip,
   ReusableDivider,
   ReusableGrid,
 };
export default Imports;
