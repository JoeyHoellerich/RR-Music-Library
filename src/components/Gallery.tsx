import React from 'react'
import GalleryItem from './GalleryItem'

interface GalleryProps {
    data: any;
}

function Gallery(props: GalleryProps){

    const display = props.data.map((item: any, index: any) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
