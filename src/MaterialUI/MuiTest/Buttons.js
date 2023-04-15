import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Buttons = () => {
  return (
    <Box>
      <Button variant="text">Hello World</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="outlined">Hello World</Button>
      <Button variant="text" disabled>
        Hello World
      </Button>
      <Button variant="contained" disabled>
        Hello World
      </Button>
      <Button variant="outlined" disabled>
        Hello World
      </Button>
      <Button color="secondary" variant="text">
        Hello World
      </Button>
      <Button color="secondary" variant="contained">
        Hello World
      </Button>
      <Button color="secondary" variant="outlined">
        Hello World
      </Button>
      <Button color="secondary" variant="text" disabled>
        Hello World
      </Button>
      <Button color="secondary" variant="contained" disabled>
        Hello World
      </Button>
      <Button color="secondary" variant="outlined" disabled>
        Hello World
      </Button>
      <Button color="success" variant="text">
        Hello World
      </Button>
      <Button color="success" variant="contained">
        Hello World
      </Button>
      <Button color="success" variant="outlined">
        Hello World
      </Button>
      <Button color="success" variant="text" disabled>
        Hello World
      </Button>
      <Button color="success" variant="contained" disabled>
        Hello World
      </Button>
      <Button color="success" variant="outlined" disabled>
        Hello World
      </Button>
      <Button color="error" variant="text">
        Hello World
      </Button>
      <Button color="error" variant="contained">
        Hello World
      </Button>
      <Button color="error" variant="outlined">
        Hello World
      </Button>
      <Button color="error" variant="text" disabled>
        Hello World
      </Button>
      <Button color="error" variant="contained" disabled>
        Hello World
      </Button>
      <Button color="error" variant="outlined" disabled>
        Hello World
      </Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default Buttons;
