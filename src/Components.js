// import { useState } from "react";
import './App.css';
import React from 'react';

export class MainComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
      this.state ={
        displayValue: "displayed value",
        altTetx: ""
      }
      // Only change code above this line
    }
    render() {
      return (
        <div className='container'>
            <MainDisplay/>
            <Keypad />
            <Engine />
        </div>
      );
    }
};

  
export function MainDisplay(){
    var displayObj = new MainComponent();

    return(
      <div class="display" id="display" name="display" data-value="0" >{displayObj.state.displayValue}</div>
    )
}
  
export function Keypad(){
    return (
      <table id="table" className='container'>
        <tbody id='table-body'>
        <tr ><td value="1"class="btns" onclick="pressed()" accesskey="1" id="one">1</td><td value="2" class="btns" onclick="pressed()" accesskey="2" id='two'>2</td><td value="3" class="btns" onclick="pressed()" id='three'>3</td><td value="/"class="btns" onclick="pressed()">/</td></tr>
        <tr><td value="4" class="btns" onclick="pressed()" aria-valuetext="4" id='four'>4</td><td value="5" class="btns" onclick="pressed()" id='five'>5</td><td value="6" class="btns" onclick="pressed()" id='six'>6</td><td value="*" class="btns" onclick="pressed()">*</td></tr>
        <tr><td value="7" class="btns" onclick="pressed()" id='seven'>7</td><td value="8" class="btns" onclick="pressed()" id='eight'>8</td><td value="9" class="btns" onclick="pressed()" id='nine'>9</td><td value="+" class="btns" onclick="pressed()" id='plus'>+</td></tr>
        <tr><td value="0" class="btns" onclick="pressed()" id='zero'>0</td><td value="-" class="btns" onclick="pressed()" id='minus'>-</td><td id="equals" value="=" class="btns" onclick="pressed()">=</td><td value="." class="btns" onclick="pressed()" id='decimal'>.</td></tr>
        </tbody>
        <button class="" onclick="pressed()" id='clear'>Clear</button>
      {/* <td class="btns" onclick="pressed()" id='clear'>Clear</td> */}
     </table>
    )
}
  
function Engine(){
    console.log('JS loaded successfully');
    var d = document.getElementsByClassName('btns')[3].getAttribute('value');
    // var o = document.getElementsByClassName('btns')[0].textContent;
    // displays the element value (/)
    console.log(d);
    var m = document.getElementsByClassName('btns')[7].getAttribute('value');
    // displays the element value (*)
    console.log(m);
    var a = document.getElementsByClassName('btns')[11].getAttribute('value');
    // displays the element (+) value
    console.log(a);
    var z = document.getElementsByClassName('btns')[12].getAttribute('value');
    // displays the element 0 value
    console.log(z);
    var s = document.getElementsByClassName('btns')[13].getAttribute('value');
    // displays the element (-) value
    console.log(s);
    var e = document.getElementsByClassName('btns')[14].getAttribute('value');
    // displays the element (=) value
    console.log(e)
    var dm = document.getElementsByClassName('btns')[15].getAttribute('value');
    // displays the element (.) value
    console.log(dm);
}