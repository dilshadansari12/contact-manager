

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Addcontact extends Component {


       state={
        name:"",
        email:"",
        number:""
       }
      

       MyInput = (e)=>{
           if(e.target.name === "name"){
            this.setState({name:e.target.value})
           }else if(e.target.name === "email"){
            this.setState({email:e.target.value})
           }else{
            this.setState({number:e.target.value})
           };



       }


       MySubmite = (e)=>{
        e.preventDefault();
            const staeData = this.state;
            this.props.GetDataFromAddcontatc(staeData);
            this.setState({name:"" ,email:"", number:""});


        //    this.history.pushState("/list")

       }

  render() {
    return (
        <section className='Formsmen'>
            <form className="from" onSubmit={this.MySubmite} >
                <div className='inputbox'>
                    <label>name:</label><br />
                    <input type="text" name="name" id="name" placeholder='Enter name' required value={this.state.name}   onChange={this.MyInput}/>
                </div>

                <div className='inputbox'>
                    <label>email:</label><br />
                    <input type="email" name="email" id="email" placeholder='Enter email' required value={this.state.email}  onChange={this.MyInput} />
                </div>

                <div className='inputbox'>
                    <label>number:</label><br />
                    <input type="number" name="number" id="number"  placeholder='Enter number' required value={this.state.number} onChange={this.MyInput} />
                </div>

               <button type='submite' className='btn'>Add Contact</button>
              </form>
        </section>
    )
  }
}
