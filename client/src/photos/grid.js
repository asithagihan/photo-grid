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
    const [mode, setMode] = useState({
        update: false,
        display: false,
        save: true,
        text: "Save"
    });
    const [grid, setGrid] = useState({ entries: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://dev-pb-apps.s3-eu-west-1.amazonaws.com/collection/CHhASmTpKjaHyAsSaauThRqMMjWanYkQ.json', {}); // need to move this to the API level
            const { data } = await axios.get('/api/grid');
            if (data && data.result && data.result.length > 0) {
                setMode(oldMode => ({
                    update: false,
                    display: true,
                    save: false,
                    text: "Edit"
                }));
                result.data.gridId = data.result[0]._id
            }
            result.data.entries = result.data.entries.map(uploadedImage => {
                if (data && data.result.length > 0 && data.result[0].images.includes(uploadedImage.id)) {
                    uploadedImage.selected = true;
                }
                else {
                    uploadedImage.selected = false;
                }
                return uploadedImage
            });
            setGrid(result.data);
        };
        fetchData();
    }, []);

    const saveGrid = async () => {
        const result = await axios.post('/api/grid', {
            images: grid.entries.filter(uploadedImage => uploadedImage.selected).map(img => img.id)
        });
        if (result.data.success) {
            setMode(oldMode => ({
                update: false,
                display: true,
                save: false,
                text: "Edit"
            }));
            setGrid(oldGrid => ({
                ...oldGrid,
                gridId : result.data
            }));
        }
        else {
            //display toast message
        }
    };

    const updateGrid = async () => {
        const result = await axios.put(`/api/grid/${grid.gridId}`, {
            images: grid.entries.filter(uploadedImage => uploadedImage.selected).map(img => img.id)
        });
        if (result.data.success) {
            setMode({
                update: false,
                display: true,
                save: false,
                text: "Edit"
            });
        }
        else {
            //display toast message
        }
    };

    const enableEditMode = () => {
        setMode({
            update: true,
            display: false,
            save: false,
            text: "Update"
        });
    }

    const handleAction = () => {
        if(mode.display){
            enableEditMode();
        }
        else if(mode.update){
            updateGrid();
        }
        else{
            saveGrid();
        }
    }
    
    const getImages = () => {
        return mode.display ? grid.entries.filter(uploadedImage => uploadedImage.selected) : grid.entries;

    }

    return (<div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {getImages().map((uploadedImage) => (
                <GridListTile key={uploadedImage.id} cols={1} >
                    <Thumbnail classes image={uploadedImage} editMode={!mode.display}>
                    </Thumbnail>
                </GridListTile>
            ))}
        </GridList>
        {<Button onClick={handleAction}>{mode.text}</Button>}
    </div>);
}

export default Grid;