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
  // let navigate = useNavigate();

  // const navigateRecipe = () => {
  //   let path = '/recipedetail';
  //   navigate(path, {props});
  // };
    // render () {

  return(
    // <Router>
      <div>
        {/* <Link to='/recipedetails'> */}
        <a href='recipedetails'>
        <button className='recipemock'>
          <DrawTags level={props.level} gluten={props.gluten} dairy={props.dairy} veget={props.veget} pesca={props.pesca} />
          <div className='timedisplay'>
            <Time className='timelogo' fill='#918B87'/>
            {/* <SvgIcon component={Time} /> */}
            {props.time}
          </div>
          {/* <div className='rtitle'>{this.props.name}</div>
          <div className='rdesc'>{this.props.desc}</div> */}
          <div className='tbndisplay'>
            <img src={props.tbn} width={270} height={197} alt='thumbnail'/>
          </div>
          {/* <img src={this.props.tbn} className='tbn' width={270} height={197} alt='thumbnail'/> */}
          <div className='rtext'>
            <div className='rtitle'>{props.name}</div>
            {/* <div className='rdesc'>{props.desc}</div> */}
          </div>
        </button>
        </a>
        {/* </Link> */}
      </div>
      // {/* <Switch>
      //     <Route path="/recipe" element={<Recipe />}/>
      //     <Route path="/recipedetail" element={<ExpandRecipe/>} />
      //   </Switch> */}
    // </Router>
  );

 }

// class Recipe extends Component{
//   renderRecipe (name,desc,tbn,time) {
//     return <RPanel name={name} desc={desc} tbn={tbn} time={time}/>;
//   }

//   render () {
//     return (
//       <div>
//         <Header/>
//         <div className='pagehead'>Recipes</div>
//         <div className='maindiv'>
//           <div className='row'>
//             <div>{this.renderRecipe('Baked Chicken','6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on \n 1/2 teaspoon coarse salt 1/2 teaspoon Mrs. Dash seasoning \n 1/4 teaspoon freshly ground black pepper',bchick,'45 min')}</div>
//             <div>{this.renderRecipe('Braised Chicken', '1 tablespoon extra-virgin olive oil\n1 medium red or green bell pepper, diced\n2 tablespoons all-purpose flour\n2 cups sauce from Wine & Tomato Braised Chicken\n2 cups reduced-sodium chicken broth\n1 cup sliced okra, fresh or frozen (thawed)\n¾ cup instant brown rice (see Tip)\n⅛- ¼ teaspoon cayenne pepper',brchick,'50 min')}</div>
//             <div>{this.renderRecipe('Catalan Chicken', '1 whole 4-pound chicken, quartered\n8 slices bacon\n30 cloves garlic\n3 lemons, peeled, rinds thinly sliced and reserved\n½ cup Banyuls or another fortified dessert wine\n1 cup veal or chicken stock',cchick, '55 min')}</div>
//           </div>
//           <Footer/>
//         </div>
        
//       </div>
//     )
//   }
// }

function Recipe(props) {
  return(
  //  <RPanel name={props.name} desc={props.desc}></RPanel>
  <div>
     {/* <Header/> */}
        <div className='pagehead'>Recipes</div>
    <div className='maindiv'>
      <div className='row'>
        {/* <div><RPanel tbn={"data:image/jpeg;base64,"+props.recipe.image} name={props.recipe.label} desc={props.recipe.instructions[0]}></RPanel></div>
        <div><RPanel tbn={gcheese} name="Grilled Cheese" ></RPanel></div>
        <div><RPanel tbn={churro} name="Churros"></RPanel></div> */}
        {props.recipes.map((recipe) => ( // Map each recipe and then print out ingredients
            // <h1>Instructions: {recipe.instructions[0]}</h1>
            // <Recipe tbn={recipe.image} name={recipe.label} desc={recipe.instructions[1]}></Recipe> // this is an issue where the array has to be init
            // <Recipe recipe={recipe}></Recipe> 
            // <ExpandRecipe recipe={recipe}></ExpandRecipe>
            // <Routes>
            //   {console.log(recipe)}
            //   <Route path="/" element={<RPanel tbn={"data:image/jpeg;base64,"+recipe.image} name={recipe.label} desc={recipe.instructions[0]} time={(recipe.instructions.length*3).toString() + " min"}></RPanel>}/>
            //   <Route path="/recipedetails" element={<ExpandRecipe recipe={props.recipes[1]}/>} />
            // </Routes>
            <RPanel tbn={"data:image/jpeg;base64,"+recipe.image} name={recipe.label} desc={recipe.instructions[0]} time={(recipe.instructions.length*3).toString() + " min"} level={recipe.instructions.length%3} gluten={recipe.label.length%2 === 1} dairy={recipe.instructions[0].length%2 === 1} veget={false} pesca={false}></RPanel>
            ))}
      </div>
    </div>
  </div>
  
  
  )
  }

export default Recipe;