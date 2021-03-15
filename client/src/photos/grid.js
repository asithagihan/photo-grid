import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Thumbnail from './thumbnail';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

function Grid() {
    const classes = useStyles();
    const [update, setUpdate] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [grid, setGrid] = useState({ entries: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://dev-pb-apps.s3-eu-west-1.amazonaws.com/collection/CHhASmTpKjaHyAsSaauThRqMMjWanYkQ.json', {}); // need to move this to the API level
            const { data } = await axios.get('/api/grid');
            if (data && data.data && data.data.length > 0) {
                setUpdate(true);
            }
            result.data.entries = result.data.entries.map(uploadedImage => {
                if (data.data.length > 0 && data.data[0].images.includes(uploadedImage.id)) {
                    uploadedImage.selected = true;
                }
                else {
                    uploadedImage.selected = false;
                }
                return uploadedImage
            });
            setGrid({ ...result.data, gridId: data.data[0]._id });
        };
        fetchData();
    }, []);

    const saveGrid = async () => {
        const result = await axios.post('/api/grid', {
            images: grid.entries.filter(uploadedImage => uploadedImage.selected).map(img => img.id)
        });
        if(result.data.success){
            setEditMode(false)
        }
        else{
            //display toast message
        }
    };

    const updateGrid = async () => {
        const result = await axios.put(`/api/grid/${grid.gridId}`, {
            images: grid.entries.filter(uploadedImage => uploadedImage.selected).map(img => img.id)
        });
        if(result.data.success){
            setEditMode(false)
        }
        else{
            //display toast message
        }
    };


    const getImages = () => {
        return editMode ? grid.entries :
        grid.entries.filter(uploadedImage => uploadedImage.selected);
    }

    return (<div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {getImages().map((uploadedImage) => (
                <GridListTile key={uploadedImage.id} cols={1} >
                    <Thumbnail classes image={uploadedImage} editMode={editMode}>
                    </Thumbnail>
                </GridListTile>
            ))}
        </GridList>
        {!editMode && !update && <Button onClick={saveGrid}>Save</Button>}
        {editMode && update && <Button onClick={updateGrid}>Update</Button>}
        {!editMode && <Button onClick={() => setEditMode(true)}>Edit</Button>}
    </div>);
}

export default Grid;