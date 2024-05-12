import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {

    constructor(props){
        super(props);
        this.state={
            presentImage:0
        }
    }

    render(){
        return(
            <div className="container">
                <div className="backgroundimages" style={{backgroundImage:`url(${images[this.state.presentImage].img})`}}>
                    <div className="backwardArrow" onClick={()=>{this.state.presentImage > 0 && this.setState({presentImage:this.state.presentImage - 1})}}><ArrowBackIosIcon/></div>
                        <div className="content">
                            <h1>{images[this.state.presentImage].title}</h1>
                            <p>{images[this.state.presentImage].subtitle}</p>
                        </div>
                    <div className="forwardArrow" onClick={()=>{this.state.presentImage < images.length-1 && this.setState({presentImage:this.state.presentImage+1})}}><ArrowForwardIosIcon/></div>
                </div>
            </div>
        )
    }
  
}

export default Carousel;