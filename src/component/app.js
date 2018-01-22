import React from 'react';
import citations from '../citations.js';
import Citation from './citation';


class App extends React.Component {

  state ={};

    componentWillMount(){

    this.genererUneCitation();
  };
    genererUneCitation = e => {
    // On transforme les citations en array
    const keyArray = Object.keys(citations);

    // une citation au hasard//
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];

    if (this.state.citation === citations[randomKey].citation){
      this.genererUneCitation();
      return
    }
    this.setState(citations[randomKey]);

    };

  render(){
    return(
      <div>
        <Citation details={this.state}/>
        {/* nous mettons le state dans la  variable "details"  pour pouvoir l'utilisé dans le 'citation.js'*/}
      <button onClick={(e => this.genererUneCitation(e))}> Une autre punchline!</button>
      </div>
    )
  }
}
export default App;
