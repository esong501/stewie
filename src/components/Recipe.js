import React, { Component, useEffect , useState} from 'react' 
import { ReactComponent as Time } from './../img/time.svg'
import { ReactComponent as Level1 } from './../img/level1.svg'
import { ReactComponent as Level2 } from './../img/level2.svg'
import { ReactComponent as Level3 } from './../img/level3.svg'
import { ReactComponent as GlutenF } from './../img/gluten.svg'
import { ReactComponent as Dairy } from './../img/dairy.svg'
import { ReactComponent as Veget } from './../img/vegetarian.svg'
import { ReactComponent as Pesca } from './../img/pescatarian.svg'

import ExpandRecipe from './ExpandRecipe/ExpandRecipe.js';

import './Recipe.css';

function DrawTags(props) {

  const diff = () => {
    if (props.level === 1){
      return <Level1 title='Level 1'/>
    }
    if (props.level === 2){
      return <Level2 title='Level 2'/>
    }
    if (props.level === 3){
      return <Level3 title='Level 3'/>
    }
  }
  
  return(
    <div className='attributes'>
      {diff()}
      <div className='dietatts'>
        {props.gluten ? <GlutenF title='Gluten Free'/> : null}
        {props.veget ? <Veget title='Vegetarian'/> : null}
        {props.dairy ? <Dairy titile='Dairy Free'/> : null}
        {props.pesca ? <Pesca title='Pescatarian'/> : null}
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
  <div className='recipepage'>
    <div className='pagehead'>
      Recipes 
    <h3 style={{color: 'var(--eggwhite)', textAlign:'center', fontFamily:'filson-soft', width: '100%'}}>Stewie has curated a set of recipes that are sure to be delish!</h3>
      <div className='row'>
        {props.recipes.map((recipe) => ( // Map each recipe and then print out ingredients
            <RPanel tbn={"data:image/jpeg;base64,"+recipe.image} name={recipe.label} desc={recipe.instructions[0]} time={recipe.totalTime + " min"} level={recipe.level} gluten={recipe.gluten} dairy={recipe.dairy} veget={recipe.veget} pesca={recipe.pesca}></RPanel>
            ))}
      </div>
    </div>
    
  </div>
  
  
  )
  }

export default Recipe;