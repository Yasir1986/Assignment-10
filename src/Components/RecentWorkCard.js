import React from 'react';
import image from '../images/img-placeholder.png';
import TextBubble from './TextBubble.js';

const RecentWorkCard = () => {
    return (
        <div className = "WorkCard " >

        <div className="recentWorkCard">
            <img className="recentWorkImg1" src={image} alt="nothing to show" />
            <TextBubble title="Blog Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>   
        <br />
        <div className="recentWorkCard">
        <img className="recentWorkImg2" src={image} alt="nothing to show" />
        <TextBubble title="Blog Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </div>   

      <div className="recentWorkCard">
     <img className="recentWorkImg3" src={image} alt="nothing to show" />
     <TextBubble title="Blog Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
</div>   
    </div>
    );
}



export default RecentWorkCard;