import React, { Component } from 'react' 
import { Panel, PanelGroup, Placeholder } from 'rsuite';
import './Recipe.css';
// import './Recipe.scss';
import logo from './../img/logo.svg';
import bchick from './../img/newbake.png';
import brchick from './../img/braised-chick.jpeg';
import cchick from './../img/catalan-chick.jpeg';

class RPanel extends React.Component {
    // render() {
    //   return (
    //     <div className='Recipe-panel'>
    //       <Panel header={this.props.name} bordered>
    //         <div class="grid-container">
    //           <div class="grid-child 0">
    //             <img src={this.props.tbn} width={100} height={100} alt="tbn" />
    //           </div>
    //           <div class="grid-child 1">
    //             <div className='Recipe-desc'>
    //               <p>{this.props.desc}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Panel>
    //     </div>
    //   );
    // }
    render () {
      return(
        <button className='rpanel'>
          <img src={this.props.tbn} width={256} height={256} alt='thumbnail'/>
          <div className='rtitle'>{this.props.name}</div>
          <div className='rdesc'>{this.props.desc}</div>
        </button>
      )
    }
  }

class Recipe extends React.Component{
  renderRecipe (name,desc,tbn) {
    return <RPanel name={name} desc={desc} tbn={tbn}/>;
  }

  render () {
    return (
      <div>
        <div className='pagehead'>Recipes</div>
        <div className='grid-container'>
          <div>{this.renderRecipe('Baked Chicken','6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on \n 1/2 teaspoon coarse salt 1/2 teaspoon Mrs. Dash seasoning \n 1/4 teaspoon freshly ground black pepper',bchick)}</div>
          <div>{this.renderRecipe('Braised Chicken', '1 tablespoon extra-virgin olive oil\n1 medium red or green bell pepper, diced\n2 tablespoons all-purpose flour\n2 cups sauce from Wine & Tomato Braised Chicken\n2 cups reduced-sodium chicken broth\n1 cup sliced okra, fresh or frozen (thawed)\n¾ cup instant brown rice (see Tip)\n⅛- ¼ teaspoon cayenne pepper',brchick)}</div>
          <div>{this.renderRecipe('Catalan Chicken', '1 whole 4-pound chicken, quartered\n8 slices bacon\n30 cloves garlic\n3 lemons, peeled, rinds thinly sliced and reserved\n½ cup Banyuls or another fortified dessert wine\n1 cup veal or chicken stock',cchick)}</div>
        </div>
      </div>
    )
  }
}

class rpage extends React.Component{

}

export default Recipe;