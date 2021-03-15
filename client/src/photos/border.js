import GridListTileBar from '@material-ui/core/GridListTileBar';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';

function Border({ classes }) {


    return (<GridListTileBar
        title={''}
        titlePosition="top"
        actionIcon={
            <IconButton aria-label={''} className={classes.icon} color={'primary'}>
                <CheckIcon />
            </IconButton>
        }
        actionPosition="left"
    />);

}

export default Border;