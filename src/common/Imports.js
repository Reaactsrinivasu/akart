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
import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
// Reusable components
// import ReusableButton from "./Button";
// import ResuableHeaderTypo from "./Header";
// import ResuableFormButton from "./FormButton";
// import ResuableFormTextField from "./FormTextField";
// import ReusablePaper from "./Paper";

// Layouts
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
// Typographies
import Typography from "@mui/material/Typography";
// Navigations
import Link from "@mui/material/Link";
// Menus
import MenuItem from "@mui/material/MenuItem";
// Inputs
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Skeleton from "@mui/material/Skeleton";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// styles
import formBoxStyle from "../../src/assets/css/FormBoxStyles";
// axios
import axios from "axios";
// Dividers
import Divider from "@mui/material/Divider";

const Imports = {
  red,
  toast,
  Modal,
  AddIcon,
  DeleteIcon,
  ModeEditIcon,
  formBoxStyle,

  Link,
  Box,
  Fab,
  Grid,
  Paper,
  Stack,
  Button,
  styled,
  MenuItem,
  Skeleton,
  TextField,
  Container,
  Typography,
  Divider,
  Chip,
  ButtonGroup,
  ReusablePaper,
  ReusableButton,
  TextareaAutosize,
  ResuableHeaderTypo,
  ResuableFormButton,
  ResuableFormTextField,
};

export default Imports;
