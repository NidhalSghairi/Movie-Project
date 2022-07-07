import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { createNewMovie } from "../../services/api";
import { addOneMovie } from "../../modules/Dashboard.slice";
import { useDispatch } from "react-redux";

type MovieFormProps = {
  open: boolean;
  handleClose: () => void;
};

const MovieForm: React.FC<MovieFormProps> = ({
  open,
  handleClose,
}: MovieFormProps) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      coverImage: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleCreateNewMovie = () => {
    createNewMovie(formik.values);
    dispatch(addOneMovie(formik.values));
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter un nouveau film</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vous pouvez ajouter un nouveau film en remplissant les champs
            suivants:
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
            <TextField
              margin="dense"
              id="coverImage"
              label="coverImageUrl"
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.coverImage}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateNewMovie}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default MovieForm;
