import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './Swiper.css'

const Swiper = ({items}) => {

    if (!Array.isArray(items) || items.length === 0) {
        return null;
    }

    const photos = items.map(item => ({
        original: item.image,
        thumbnail: item.image
    }))

    return (
        <ImageGallery 
            items={photos}
            slideInterval={4000}
            showBullets
            showIndex
        />

        
    )
}

export default Swiper;