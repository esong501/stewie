import React, { Component, useEffect , useState} from 'react' 
import {Link, Routes, Route, useNavigate, Navigate, Router, Switch } from 'react-router-dom';
import { ReactComponent as Time } from './../img/time.svg'
import { SvgIcon } from '@mui/material';
import { ReactComponent as Level1 } from './../img/level1.svg'
import { ReactComponent as Level2 } from './../img/level2.svg'
import { ReactComponent as Level3 } from './../img/level3.svg'
import { ReactComponent as GlutenF } from './../img/gluten.svg'
import { ReactComponent as Dairy } from './../img/dairy.svg'
import { ReactComponent as Veget } from './../img/vegetarian.svg'
import { ReactComponent as Pesca } from './../img/pescatarian.svg'

// import { Panel, PanelGroup, Placeholder } from 'rsuite';

import ExpandRecipe from './ExpandRecipe/ExpandRecipe.js';

import './Recipe.css';
// import './Recipe.scss';
import gcheese from '../img/grilledcheese.svg';
import churro from '../img/churro.svg';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

// function TimeIcon() {
//   return (
//     <SvgIcon component={time} />
//   );
// }

function DrawTags(props) {

  const diff = () => {
    if (props.level === 1){
      return <Level1/>
    }
    if (props.level === 2){
      return <Level2/>
    }
    if (props.level === 0){
      return <Level3/>
    }
  }
  
  return(
    <div className='attributes'>
      {diff()}
      <div className='dietatts'>
        {props.gluten ? <GlutenF/> : null}
        {props.veget ? <Veget/> : null}
        {props.dairy ? <Dairy/> : null}
        {props.pesca ? <Pesca/> : null}
      </div>
    </div>
  )
}

function RPanel(props) {
 
  return(
      <div>
        <a href={props.name}>
        <button className='recipemock'>
          <DrawTags level={props.level} gluten={props.gluten} dairy={props.dairy} veget={props.veget} pesca={props.pesca} />
          <div className='timedisplay'>
            <Time className='timelogo' fill='#918B87'/>
            {props.time}
          </div>
          <div className='tbndisplay'>
            <img src={props.tbn} width={270} height={197} alt='thumbnail'/>
          </div>
          <div className='rtext'>
            <div className='rtitle'>{props.name}</div>
          </div>
        </button>
        </a>
      </div>
  );

 }

function Recipe(props) {
  return(
  //  <RPanel name={props.name} desc={props.desc}></RPanel>
  <div className='recipepage'>
     {/* <Header/> */}
    <div className='pagehead'>
      Recipes 
    <h3 style={{color: 'var(--eggwhite)', textAlign:'center', fontFamily:'filson-soft', width: '100%'}}>Stewie has curated a set of recipes that are sure to be delish!</h3>
    {/* <div className='maindiv'> */}
      <div className='row'>
        {props.recipes.map((recipe) => ( // Map each recipe and then print out ingredients
            <RPanel tbn={"data:image/jpeg;base64,"+recipe.image} name={recipe.label} desc={recipe.instructions[0]} time={(recipe.instructions.length*3).toString() + " min"} level={recipe.instructions.length%3} gluten={recipe.label.length%2 === 1} dairy={recipe.instructions[0].length%2 === 1} veget={false} pesca={false}></RPanel>
            ))}
      </div>
    {/* </div> */}
    </div>
    
  </div>
  
  
  )
  }

export default Recipe;