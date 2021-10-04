import {makeStyles} from "@material-ui/core/styles";
import {lighten} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
export default makeStyles(theme => ({
  rootCard: {
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: lighten(theme.palette.background.paper, 0.1)
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  search: {
    height: "40px",
    position: "relative",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center"
  },
  searchIcon: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#999999"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(0, 1, 0, 0),
    paddingLeft: 10,
    // vertical padding + font size from searchIcon
    width: "auto",
    height: "32px"
  }
}));
