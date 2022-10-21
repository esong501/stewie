import React, { Component } from 'react' 
import { Panel, PanelGroup, Placeholder } from 'rsuite';
import './Recipe.css';
// import './Recipe.scss';

class Recipe extends React.Component {
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

        </button>
      )
    }
  }

class rcolumn extends React.Component{
  renderRecipe () {
    return <Recipe />;
  }
  render () {
    return (
      <rgroup>
        {this.renderRecipe()}
        {this.renderRecipe()}
        {this.renderRecipe()}
      </rgroup>
    )
  }
}

class rpage extends React.Component{

}

export default Recipe;