import React, { Component, useEffect , useState} from 'react' 
import {Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// import { Panel, PanelGroup, Placeholder } from 'rsuite';

import ExpandRecipe from './ExpandRecipe/ExpandRecipe.js';

import './Recipe.css';
// import './Recipe.scss';
import bchick from './../img/newbake.png';
import brchick from './../img/braised-chick.jpeg';
import cchick from './../img/catalan-chick.jpeg';

function RPanel(props) {
    // render () {

  return(
    <div>
      <button className='rpanel' >
        <div className='timedisplay'>45 min</div>
        {/* <div className='rtitle'>{this.props.name}</div>
        <div className='rdesc'>{this.props.desc}</div> */}
        <div className='tbndisplay'>
          <img src={props.tbn} width={270} height={197} alt='thumbnail'/>
        </div>
        {/* <img src={this.props.tbn} className='tbn' width={270} height={197} alt='thumbnail'/> */}
        <div className='rtitle'>{props.name}</div>
        <div className='rdesc'>{props.desc}</div>
      </button>
    </div>
  );

 }

// function DisplayPage() {
//   const [isShown, setIsShown] = useState(false);

//   const handleClick = event => {
//     // toggle shown state
//     setIsShown(current => !current);
//   };
//   // {isShown && (
//   //       <div>
//   //         <ExpandRecipe/>
//   //       </div>
//   //     )}
// }

class Recipe extends Component{
  renderRecipe (name,desc,tbn) {
    return RPanel(name,desc,tbn);
  }

  render () {
    return (
      <div>
        <div className='pagehead'>Recipes</div>
        <div className='grid-container'>
          <div><RPanel name='Baked Chicken' desc='6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on \n 1/2 teaspoon coarse salt 1/2 teaspoon Mrs. Dash seasoning \n 1/4 teaspoon freshly ground black pepper' tbn={bchick}/></div>
          <div><RPanel name='Braised Chicken' desc='1 tablespoon extra-virgin olive oil\n1 medium red or green bell pepper, diced\n2 tablespoons all-purpose flour\n2 cups sauce from Wine & Tomato Braised Chicken\n2 cups reduced-sodium chicken broth\n1 cup sliced okra, fresh or frozen (thawed)\n¾ cup instant brown rice (see Tip)\n⅛- ¼ teaspoon cayenne pepper' tbn={brchick}/></div>
          <div><RPanel name='Catalan Chicken' desc='1 whole 4-pound chicken, quartered\n8 slices bacon\n30 cloves garlic\n3 lemons, peeled, rinds thinly sliced and reserved\n½ cup Banyuls or another fortified dessert wine\n1 cup veal or chicken stock' tbn={cchick}/></div>
          {/* {DisplayPage()} */}
        </div>
      </div>
    )
  }
}

class rpage extends React.Component{

}

export default Recipe;