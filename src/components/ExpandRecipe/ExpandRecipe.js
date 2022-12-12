import { useState, useEffect, createContext } from 'react';
import { Link, Route, Routes } from "react-router-dom";

import './ExpandRecipe.scss';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import RecipeWalkthrough from '../RecipeWalkthrough/RecipeWalkthrough.js';
import Recipe from '../Recipe.js';
import TabBarRecipe from '../TabBarRecipe/TabBarRecipe.js';
import { PropTypes } from 'prop-types';
import { Typography, Checkbox, LinearProgress, Box, Button, FormControlLabel, FormGroup, SvgIcon, IconButton } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material/';
import { ReactComponent as BackArrow } from '../../img/backarrow.svg';
import { ReactComponent as Level1 } from './../../img/level1.svg'
import { ReactComponent as Level2 } from './../../img/level2.svg'
import { ReactComponent as Level3 } from './../../img/level3.svg'
import { ReactComponent as GlutenF } from './../../img/gluten.svg'
import { ReactComponent as Dairy } from './../../img/dairy.svg'
import { ReactComponent as Veget } from './../../img/vegetarian.svg'
import { ReactComponent as Pesca } from './../../img/pescatarian.svg'
import { ReactComponent as Time } from './../../img/time.svg'

// temp
import bchick from '../../img/newbake.png';
import { textTransform } from '@mui/system';

function LinearProgressWithLabel(props) {
    return (
      <div className='progBox'>
        {console.log(props.value)}
        {console.log(props.numSteps)}
        <div className='progText'>
          <div className='fracProg'>{`${Math.round((props.value/100)*(props.numSteps),)}`}/{props.numSteps}</div>
          <div className='percentProg'>{`${Math.round(props.value,)}%`}</div>
        </div>
        <div className='progressBar'>
            <LinearProgress variant="determinate" className='progressBar' sx={{ backgroundColor: `#E9E3DA`,"& .MuiLinearProgress-bar": {backgroundColor: `#CCCC52` } }} {...props} />
        </div>
      </div>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

  function DrawAtts(props) {

    const diff = () => {
      if (props.level === 1){
        return <div className='diettext'><Level1/> level {props.level}</div>
      }
      if (props.level === 2){
        return <div className='diettext'><Level2/> level {props.level}</div>
      }
      if (props.level === 3){
        return <div className='diettext'><Level3/> level {props.level}</div>
      }
    }
    
    return(
      <div className='TagsList'>
        {diff()}
        <div className='diettags'>
            {props.gluten ? <div className='diettext'><GlutenF className='dietlogo'/> gluten-free</div> : null}
            {props.veget ? <div className='diettext'><Veget className='dietlogo'/> vegetarian</div> : null}
            {props.dairy ? <div className='diettext'><Dairy className='dietlogo'/> dairy-free</div> : null}
            {props.pesca ? <div className='diettext'><Pesca className='dietlogo'/> pescatarian</div> : null}
        </div>
        <div className='diettext'><Time className='timelogo' fill='#918B87'/>{props.totalTime} min total</div>
      </div>

    )
  }

export const ProgressContext = createContext();

function ExpandRecipe(props) {
    // const navigate = useNavigate();
    const [isCooking, setIsCooking] = useState(false);

    const recipeOverview = (
        <div class = "NavTabs">
            <TabBarRecipe recipe = {props.recipe}/>
            
            {isCooking === false ? <Button variant="contained" className="CookButton" onClick={() => setIsCooking(!isCooking)}> Start Cooking </Button> : <Button variant="contained" className="CookButton" onClick={() => setIsCooking(!isCooking)}> Stop Cooking </Button>}
            
        </div>
    );

    const recipeTitle = (
        <div className='headerContain'>
            <div class = "RTitle">
                {/* <Button variant="text" class='backButton' href="/browse" startIcon={<BackArrow/>}>Back</Button> */}
                <h2>{props.recipe.label}</h2>
            </div>
            <Button variant="text" class='backButton' href="/browse"><BackArrow className='backArrow'/>Back</Button>
        </div>
    )

    const instructions = (
        <div className='headerContain'>
            <div className='IHeader'>
                <h1  style={{color: 'var(--tomato)'}}>Instructions</h1>
            </div>
            <Button variant="text" class='backButton' onClick={() => setIsCooking(!isCooking)}><BackArrow className='backArrow'/>Exit</Button>
        </div>
    )

    const [progress, setProgress] = useState(0);
    
    return (
        <div>
            <ProgressContext.Provider value={{ progress, setProgress }}>
            <div class="Recipe">  
                <div class = "RecipeSidebar">
                    {isCooking ? <Box sx={{ width: '40%', ml: 19 }}>
                                        <LinearProgressWithLabel value={progress}  numSteps={props.recipe.instructions.length}/>
                                    </Box> : null}
                    {isCooking ? <h3  style={{color: 'var(--poppyseed)', fontFamily:'filson-soft'}}>{props.recipe.label}</h3> : null}
                    <div class="RecipeTags">

                        <DrawAtts level={props.recipe.level} gluten={props.recipe.gluten} dairy={props.recipe.dairy} veget={props.recipe.veget} pesca={props.recipe.pesca} totalTime={props.recipe.totalTime}/>
                    </div>
                    <div class = "RecipeIngreds">
                        <h2>Ingredients</h2>
                        <ul class="IngredientsList">
                            {props.recipe.ingredientLines.map((ing) =>
                                 <li class="IndivIngred">{ing}</li>
                                )}
                        </ul>
                    </div>
                </div>
                <div class="RecipeOverview">
                    {!isCooking ? recipeTitle: instructions}
                        {isCooking ? <RecipeWalkthrough steps = {props.recipe.instructions} index={0}></RecipeWalkthrough>: recipeOverview}
                    
                </div>
            </div>
            </ProgressContext.Provider>
            {/* <Footer /> */}
        </div>
    );
}

export default ExpandRecipe;