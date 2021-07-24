import Context from '../context/Context';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const Img = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  margin-top: 15px;
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: 20
  },
}));

const Logo = () => {
  const classes = useStyles();

	return (
	  <Context.Consumer>
	    {context => (
	      <>
          <Img src={context.owner.avatar_url} alt={context.owner.login} />
          <FormControl className={classes.formControl}>
            <InputLabel id="repo-list-filter-label">Filtered by:</InputLabel>
            <Select
              labelId="repo-list-filter-label"
              id="repo-list-filter"
              value={context.currRepoFilterType}
              onChange={context.handleRepoFilterType}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"public"}>Public</MenuItem>
              <MenuItem value={"private"}>Private</MenuItem>
              <MenuItem value={"forks"}>Forks</MenuItem>
              <MenuItem value={"sources"}>Thirty</MenuItem>
              <MenuItem value={"member"}>Member</MenuItem>
              <MenuItem value={"internal"}>Internal</MenuItem>
            </Select>
          </FormControl>
	      </>
	    )}
	  </Context.Consumer>
	);
};

export default Logo;