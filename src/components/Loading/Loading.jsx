import React from "react";
// import ReactLoading from "react-loading";
import "./Loading.css"
import gif from "./truck-loading.gif" ;
import { motion } from "framer-motion";
// import ReactPlayer from 'react-player'
// import {isLoading} from "../App.jsx"


export default function Loading() {
    const text ="TEAM REVANTA".split("")
	return (
        <>
        <div className="text">
        {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: i / 10
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
        </div>
		<div  className ="body">
			{/* <h2>Your Watch is here !</h2> */}
			{/* <ReactLoading type="balls" color="#0000FF"
				height={100} width={50} />
			<ReactLoading type="bars" color="#0000FF"
				height={100} width={50} />
			<ReactLoading type="bubbles" color="#0000FF"
				height={100} width={50} />
			<ReactLoading type="cubes" color="#0000FF"
				height={100} width={50} />
			<ReactLoading type="cylon" color="#0000FF"
				height={100} width={50} />
			<ReactLoading type="spin" color="#0000FF"
				height={100} width={50} />
			<ReactLoading type="spokes" color="#0000FF"
				height={100} width={50} /> */}



			{/* <ReactLoading
				type="spinningBubbles"
				color="#0000FF"
				height={100}
				width={50}
			/> */}
            <img src={gif} alt="gif" />


            {/* <img src="https://htmlburger.com/blog/wp-content/uploads/2021/07/The-Best-50-Website-Preloaders-Around-the-Web-Example-13.gif" alt="gif" /> */}
            {/* <ReactPlayer url={'https://cdn.dribbble.com/users/76454/screenshots/17555850/media/447160ab3c6e2b6bfb227f09e607e228.mp4'} controls={true} /> */}


		</div>
        </>
	);
}