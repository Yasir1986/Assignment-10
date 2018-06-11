import React, { Component } from 'react';
import Header from './Components/Header';
import BlueBar from './Components/BlueBar';
import Read from './Components/Read';
import RecentWorkCard from './Components/RecentWorkCard';
//import MyNewComponent from './MyNewComponent';
import './App.css';
import TextBubble from './Components/TextBubble';
//import BorderBG from './Components/BorderBG';




class App extends Component {
  render(){
    return(<div>
      <Header /> 
      <BlueBar />
      
      <div className="fix">

      <Read icon="fas fa-mobile-alt"/>

      <div className="border">
        <hr />
        <div className = "Recent">RECENT WORK</div>
        <hr />
      </div>

      {/* <BorderBG /> */}

      <RecentWorkCard />

       <div className="border1">
        <hr />
        <div className = "Recent1">TESTIMONIALS</div>
        <hr />
      </div> 

      <div className="JohnContainer">

      <div className="JohnSmith1">
        <h4>John Smith</h4> <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
        </div>

        <div className="JohnSmith2">
        <h4>John Smith</h4> <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
        </div>
        </div>

        <div className="JohnContainer1">

        <div className="JohnSmith3">
        <h4>John Smith</h4> <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
        </div>

        <div className="JohnSmith4">
        <h4>John Smith</h4> <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</p>
        </div>
        </div>
        
      <div className = "Design" > 
         <h4>The Design</h4>
         <p>Mouthbrow doctor watson. tip top old bean cream bun disaster smashing good fun, smashing good fun mexican doctor watson. mouthbrow cappuccino collector freestyle goose tip top old bean cream bun disaster ron burgundy worn with distinction Fallen </p>
         <p>Mouthbrow doctor watson. tip top old bean cream bun disaster smashing good fun, smashing good fun mexican doctor watson. mouthbrow cappuccino collector freestyle goose tip top old bean cream bun disaster ron burgundy worn with distinction Fallen </p>        
        <button className="DesignBtn">READ MORE</button>
      </div>

  
         

         </div>

<div className = "BlueBar1">   <BlueBar />  </div>

         <div className="Footer">

        <div className="FooterContent">


            <div className="AboutUs"><h5>ABOUT US</h5>
            <p className="greySpan">Lorem ipsum dolor sit amet,tempor</p>
            <p className="greySpan">consectetur adipiscing elit</p>
            <p className="greySpan">Nunc tristique erat et eros tempor</p>
            <br/>
            

            <br/>
            <p className="greySpan">123 Street Name</p>
            <p className="greySpan">Road Name</p>
            <p className="greySpan">London</p>
            <p className="greySpan">+358458490190</p>
            
            </div>
            <div className="LatestNews"><h5>LATEST NEWS</h5>
            <p className="greySpan">@Jaynah Just submitted another</p>
            <p className="greySpan">great item on #theebay</p>
            <p className="greySpan">about a hour ago</p>
            <br/>
            <br/>

            <p className="greySpan">@Jaynah Working on an awesome</p>
            <p className="greySpan">theme for #theebay</p>
            <p className="greySpan">about 3 months ago</p>

            </div>
            <div className="LatestPosts"><h5>LATEST POSTS</h5>
            <p className="greySpan">Vestibulum augue orci, tempus a velit vel</p>
            <hr/>
            <br/>
            <p className="greyBlue">Orci varius natoque penatibus et magnis</p>
            <hr/>
            <br />
            <p className="greySpan">Orci varius natoque penatibus et magnis</p>
            <hr/>
            <br/>
            <p className="greySpan">Orci varius natoque penatibus et magnis</p>
            </div>

            <div className="Flickr"><h5>FLICKR</h5>
         
               <div className="FImg">
               <i class="fas fa-square"></i>
               <i class="fas fa-square"></i>
               <i class="fas fa-square"></i>
               <i class="fas fa-square"></i>
               <p>
               <i class="fas fa-square"></i>
               <i class="fas fa-square"></i>
               <i class="fas fa-square"></i>
               <i class="fas fa-square"></i>
              </p>
              </div>
               
            </div>

        </div>
         </div>
    
        <div className = "FooterBtm">
        <div className="BtmIcons">
        <p className="Copy">COPYRIGHT @ 2003-2012 ALL RIGHTS RESERVED</p>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-vimeo"></i>
        <i class="fab fa-google-plus-square"></i>
        <i class="fab fa-youtube-square"></i>
        <i class="fab fa-pinterest-square"></i>
        </div>

        </div>
         

    </div>);
  }
}





export default App;
