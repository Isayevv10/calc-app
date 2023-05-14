import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.status.warning,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: "#DF8419",
    boxShadow: "none",
  },
}));

export const StyledBtn2 = styled(Button)(({ theme }) => ({
  backgroundColor: theme.status.grey,
  color: theme.palette.grey[900],
  "&:hover": {
    backgroundColor: "#C5CEDF",
    boxShadow: "none",
  },
}));

export const StyledBtn3 = styled(Button)(({ theme }) => ({
  backgroundColor: theme.status.white,
  color: theme.palette.grey[900],
  "&:hover": {
    backgroundColor: "#ECEFF4",
    boxShadow: "none",
  },
}));
