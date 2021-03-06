import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from 'react';
import { categories, sliderItems } from '../data';

import {Link} from "react-router-dom"
import Categories from './Categories';

const Container = styled.div `
width:100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
 @media only screen and (max-width: 380px){
    display: none;
}
`;

const Arrow = styled.div`
width:50px;
height:50px;
background-color: #fff;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom:0;
margin: auto;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor:pointer;
opacity:90%;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease-in;
transform: translateX(${props => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
width: 100vw;
height:100vh;
display: flex;
align-items: center;
background-color: ${props=>props.bg};
`;
const ImgContainer = styled.div`
height: 100%;
flex:1;
`;
const Image = styled.img`
height: 80%;
border-radius: 10px;
margin-left: 100px;
`;
const InfoContainer = styled.div`
flex:1;
padding:50px;
`;
const Title = styled.h1`
font-size: 78px;
`;
const Desc= styled.p`
margin:50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 1px;
`;
const Button= styled.button`
padding: 10px;
font-size: 20px;
background-color: #6a5acd;
color:white;
cursor: pointer;
border:none;
border-radius: 8px;
&:hover{
    background-color: black;
    color:#fff;
}
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=> {
        if(direction ==="left"){
            setSlideIndex(slideIndex >0 ? slideIndex -1:2)
        }else{
            setSlideIndex(slideIndex <2 ? slideIndex +1:0)
        }
    };

    return (
        <Container>
        <Arrow direction ="left" onClick ={()=> handleClick("left") }>
            <ArrowBackIosIcon />
        </Arrow >
        <Wrapper slideIndex = {slideIndex}>
         {sliderItems.map(item => 
        <Slide bg = {item.bg} key={item.id}> 
        <ImgContainer>
        <Image src={item.img} />
         </ImgContainer>
        <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Link to = "/products/women"> 
        <Button>Shop Now</Button>
        </Link>
         </InfoContainer>
        </Slide>
        )}
         </Wrapper>
        <Arrow direction ="right" onClick ={()=> handleClick("right") }>
            <ArrowForwardIosIcon  />
        </Arrow>
        </Container>
    )
}

export default Slider
