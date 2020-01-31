import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from "./CharComponent/CharComponent"


class App extends Component {
  state = {
    sentence: '',
    sentenceLength: 0
  };
  sentenceCount = (event)=>{
    const sL = event.target.value.length;
    this.setState({sentence:event.target.value,  sentenceLength:sL})
  };

  deleteLetterHandler = (index)=>{
    let lettersList = (this.state.sentenceLength>0)? this.state.sentence.split(''):[];
    lettersList.splice(index,1,'');
    let newSentence = lettersList.join('');
    this.setState({sentence:newSentence, sentenceLength: newSentence.length})
  };

  render() {
    let letters = null;
    let lettersList = (this.state.sentenceLength>0)? this.state.sentence.split(''):[];

    letters = (
        <div>
          {
            lettersList.map((letter,index)=> <CharComponent key={index} letterval={letter} click={()=>this.deleteLetterHandler(index)}/>)
          }
        </div>
    );

    return (
      <div className="App">
        <div>
          <h1>Homework-2</h1>
          <b>Sentence:</b><input type="text" onChange={this.sentenceCount} value={this.state.sentence}/>
          <p>{this.state.sentenceLength}</p>
        </div>
        <div>
          <hr/>
        <ValidationComponent sentencelengthvalue={this.state.sentenceLength}/>
        </div>
        <div>
          {letters}
        </div>
      </div>
  );
  }



}

export default App;
