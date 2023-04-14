import { useState } from "react";


import image1 from "../img/istockphoto-logo.jpg";
import image2 from "../img/lap-top.jpg";
// https://media.istockphoto.com/id/1403815188/photo/edit-video-timeline-scene-cut-and-editing.jpg?s=612x612&w=0&k=20&c=TD1Y1IYntkeXgQnWsjWOuNvYRC1ZpD_-09wbFe1vSU4=
import image4 from "../img/camera.jpg";
import image5 from "../img/printer.jpg";
import image6 from "../img/phone.jpg";




const mediaInfo = [
    {
        img:image1,
        title:"Logos",
        message:"Have a unique & creative logo designed to express and represent your brand identity.",
    },

    {
        img: image2,
        title:"Blog Writing",
        message:"Write SEO enriched blog posts as long or short articles on any topic of your choice.",

    },
    {
        img:"https://media.istockphoto.com/id/1418210625/photo/asian-editor-working-on-movie-production.jpg?s=612x612&w=0&k=20&c=ApX0IDdLLUbPQ_Q9pjZcnNDc7OaSQd9g1DWHnbC0s8M=",
        title:"Animated Videos",
        message:"Bring animated characters to live to keep your viewers engaged and entertained",
    },

    {
        img:image4,
        title:"Product Demo",
        message:"Introduce your product to potential customers in a clear and creative video",
    },

    {
        img:image5,
        title:" Copy Writing",
        message:"Have creative and compelling copies written to boost your product, brand, service or company",
    },

    {
        img:"https://media.istockphoto.com/id/1362871968/photo/young-man-using-smartphone-sending-emojis-diverse-positive-emoji-coming-out-of-mobile-phone.jpg?s=612x612&w=0&k=20&c=u1rU4eaEAelCqh03XTeE_oO6eC-YXDWFSPtZfGx4M1E=",
        title:"Social Media Ads",
        message:"Boost sales and awareness with tailor made ads from experts."
    }

]











const convert = mediaInfo.map((theinfo)=>{
    
    return(
        <div className="theinfo-con" id="services">
           <div className="info-img-con">
            <img src={theinfo.img} alt="What we do" />

            </div>
            <div className="info-text">
            <h3>{theinfo.title}</h3>
            <hr style={{width:"20%",border: " 1px solid #7E1CFE"}} />
            <p>{theinfo.message}</p>
            </div>
        </div>
    )
})



const Media = () => {
    return ( 
        <div className="media-con container">
            {convert}
        </div>
     );
}
 
export default Media;