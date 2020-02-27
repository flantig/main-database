import React, {Component} from "react"
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

const windows_xp_wallpaper = "https://wallpaperaccess.com/full/90278.jpg";

function Map (){
  return (
<ParallaxBanner
    className="your-class"
    layers={[
        {
            image: 'https://all4desktop.com/data_images/original/4221852-sky-colors.jpg',
            amount: 0.2,
        },
        {
            image: 'https://i.imgur.com/duAPviR.png',
            amount: 0.0,
        },
    ]}
    style={{
        height: '300px',
    }}
>
    <h1>Banner Children</h1>
</ParallaxBanner>
  )
}

export default Map