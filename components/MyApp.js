import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import Map from "./Map.js"
import Navbar from "./Navbar.js"
import List from "./List.js"




function MyApp (){
	
  return(
    
		<div>
    {/* These are your components 
        If you notice they start with camel case letters to help denote that they are components vs html tags
        In general, it's good practice to do it like this */}


        <Navbar />
              <ParallaxProvider>
              <Map />
              </ParallaxProvider>
            <List />
            <List />
            <List />
      
		</div>
	)
}

export default MyApp