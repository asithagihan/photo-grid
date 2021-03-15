import React, { useState,useEffect } from 'react';
import Border from './border';

function Thumbnail({ image,editMode }) {
    const [selected, setSelected] = useState(image.selected);
    useEffect(() => {
        setSelected(image.selected);
      }, [image.selected]);
      
    const imageToggled = (uploadedImage) => {
        if(uploadedImage.selected){
            setSelected(false);
            uploadedImage.selected = false;
        }
        else{
            setSelected(true);
            uploadedImage.selected = true;
        }
    };

    return (<>
        <img  onClick={() => imageToggled(image)} src={image.picture} alt={image.message} />
        {selected && editMode && <Border classes ></Border>}
    </>);
}

export default Thumbnail;