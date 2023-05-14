import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Paper, Switch } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./App";
import { StyledBtn, StyledBtn2, StyledBtn3 } from "./styles";

const ariaLabel = { "aria-label": "description" };

const ToggleMode = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setInputValue(inputValue.concat((e.target as HTMLInputElement).value));
  };

  const clear = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const clearAll = () => {
    setInputValue("");
  };

  const calculate = () => {
    try {
      if (inputValue.includes("%")) {
        let curr: string[] = inputValue.split("%");
        setInputValue(
          ((parseInt(curr[0]) * parseInt(curr[1])) / 100).toString()
        );
      } else {
        setInputValue(eval(inputValue).toString());
      }
    } catch {
      setInputValue("Error");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: "14px",
        backgroundColor: theme.palette.mode === "light" ? "#E5E5E5" : "#222630",
      }}
    >
      <Switch onClick={colorMode.toggleColorMode} />
      <Box
        component='form'
        sx={{
          "& > :not(style)": { m: 1 },
          flexGrow: 1,
        }}
        noValidate
      >
        <TextField
          inputProps={ariaLabel}
          value={inputValue}
          fullWidth
          variant='standard'
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>

      <Grid container sx={{ pb: "10px" }} spacing={1}>
        <Grid item xs={3}>
          <StyledBtn2 variant='text' onClick={clear} fullWidth={true}>
            C
          </StyledBtn2>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn2 variant='text' onClick={clearAll} fullWidth={true}>
            AC
          </StyledBtn2>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn2
            variant='text'
            value='%'
            onClick={handleClick}
            fullWidth={true}
          >
            %
          </StyledBtn2>
        </Grid>

        <Grid item xs={3}>
          <StyledBtn
            variant='text'
            value='/'
            onClick={handleClick}
            fullWidth={true}
          >
            ÷
          </StyledBtn>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ pb: "10px" }}>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='7'
            onClick={handleClick}
            fullWidth={true}
          >
            7
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='8'
            onClick={handleClick}
            fullWidth={true}
          >
            8
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='9'
            onClick={handleClick}
            fullWidth={true}
          >
            9
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn
            variant='text'
            value='*'
            onClick={handleClick}
            fullWidth={true}
          >
            x
          </StyledBtn>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ pb: "10px" }}>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='4'
            onClick={handleClick}
            fullWidth={true}
          >
            4
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='5'
            onClick={handleClick}
            fullWidth={true}
          >
            5
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='6'
            onClick={handleClick}
            fullWidth={true}
          >
            6
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn
            variant='text'
            value='-'
            onClick={handleClick}
            fullWidth={true}
          >
            -
          </StyledBtn>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ pb: "10px" }}>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='1'
            onClick={handleClick}
            fullWidth={true}
          >
            1
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='2'
            onClick={handleClick}
            fullWidth={true}
          >
            2
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='3'
            onClick={handleClick}
            fullWidth={true}
          >
            3
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn
            variant='text'
            value='+'
            onClick={handleClick}
            fullWidth={true}
          >
            +
          </StyledBtn>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <StyledBtn3
            variant='text'
            value='0'
            onClick={handleClick}
            fullWidth={true}
          >
            0
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn3
            variant='text'
            value='.'
            onClick={handleClick}
            fullWidth={true}
          >
            .
          </StyledBtn3>
        </Grid>
        <Grid item xs={3}>
          <StyledBtn
            variant='text'
            value='='
            onClick={calculate}
            fullWidth={true}
          >
            =
          </StyledBtn>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToggleMode;
