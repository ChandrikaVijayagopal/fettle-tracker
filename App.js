import React,{Component} from 'react';
import './css/example.css';

class App extends Component{
  state = {
    value : "None",
    value2 : "None",
    value3 : "None",
    value4 : "None"

  };
  
  onChange = e =>{
    this.setState({[e.target.name] : e.target.value})
  }
  render(){
    const{value,value2,value3,value4} = this.state;
    return(
      <form>
      
        <h1 className="exampleBackgroundColor increaseFontSize"> Do you like light music or not? : {value}</h1>
        <label>
          <center>Yes I like
          <input type="radio"
                 value="Yes"
                 name="value"
                 checked={value==="Yes"}
                 onChange={this.onChange}/></center>

        </label>
        
        <label>
          <center>No I don't
          <input type="radio"
                 value="No"
                 name="value"
                 checked={value==="No"}
                 onChange={this.onChange}/></center>

        </label>
        <br/>
        
        
        
        <br/>
        <center>
        <h1 className="exampleBackgroundColor increaseFontSize">Do you like karoake? :{value2}</h1>
        <label>
          Yes i do
          <input type="radio"
                 value="Yes i do"
                 name="value2"
                 checked={value2==="Yes i do"}
                 onChange={this.onChange}/>

        </label>
        <br/>
        <label>
          No I don't
          <input type="radio"
                 value="No I don't"
                 name="value2"
                 checked={value2==="No I don't"}
                 onChange={this.onChange}/>

        </label></center>
        <br/>
        
       
        
        <br/>
        <center><h1 className="exampleBackgroundColor increaseFontSize">Are you a lyrics person or a beat person? : {value3}</h1>
        <label>
          I focus on lyrics
          <input type="radio"
                 value="I concentrate on lyrics"
                 name="value3"
                 checked={value3==="I concentrate on lyrics"}
                 onChange={this.onChange}/>

        </label>
        <br/>
        <label>
          I listen to the beat
          <input type="radio"
                 value="Selena gomez"
                 name="value3"
                 checked={value3==="Selena gomez"}
                 onChange={this.onChange}/>

        </label></center>
        <br/>
        
        <br/>
       <center> <h1 className="exampleBackgroundColor increaseFontSize">Can you concentrate on other things when you are listening to music? : {value4}</h1>
        <label>
          Yes, I can
          <input type="radio"
                 value="Yes, I can"
                 name="value4"
                 checked={value4==="Yes, I can"}
                 onChange={this.onChange}/>

        </label>
        <br/>
        <label>
          No, I completely focus on the music
          <input type="radio"
                 value="No, I completely focus on the music"
                 name="value4"
                 checked={value4==="No, I completely focus on the music"}
                 onChange={this.onChange}/>
        </label></center>
        <br/>
        <br/>

      </form>
    
    
    
      
    )
  }
}

export default App;
