import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";

type MovieFormProps = {
  open: boolean;
  handleClose: () => void;
};

const MovieForm: React.FC<MovieFormProps> = ({
  open,
  handleClose,
}: MovieFormProps) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can create a new movie by entering its title and a short
            description
          </DialogContentText>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="dense"
              id="title"
              label="title"
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <TextField
              margin="dense"
              id="description"
              label="description"
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default MovieForm;
