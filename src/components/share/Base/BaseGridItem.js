import {Grid, withStyles} from "@material-ui/core";

const BaseGridItem = withStyles({
  root: {
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 10
  }
})(Grid);
export default BaseGridItem;
