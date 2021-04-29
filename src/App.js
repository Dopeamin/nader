
import './App.css';
import ReactDOM from 'react-dom';
import { Component } from 'react';

class App extends Component{
        state = { email: '' };
        constructor(props) {
            super(props);
            this.state = { email: '' };
            this.onSubmit = this.onSubmit.bind(this)
            this.myChangeHandler = this.myChangeHandler.bind(this)
          }
          myChangeHandler = (event) => {
            this.setState({email: event.target.value});
          }
        onSubmit(e) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(re.test(String(this.state.email).toLowerCase())){
                alert("Email Added");
            }else{
                alert("Please Verify your email");
            }
        }
    render(){
        return ( 
            <div className = "App" >
                <header>
                    <div className="Container">
                            <img src="logo.png"></img>
                            <h2>Sollectify</h2>
                    </div>
                    
                </header>
                <div className="Centered">
                    <img src="logo.png"></img>
                    <h1>Sollectify</h1>
                    <p>Fast and easy to use NFT marketplace on solana blockchain</p>
                        <input type="email"  name="email" onChange={this.myChangeHandler} placeholder="Email" required></input>
                        <button   type="button" onClick={this.onSubmit} class="fas fa-angle-right"></button>
                    
                    
                </div>
                <footer>
                <div className="Container2">
                        <a href="https://twitter.com/sollectify" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-telegram"></a>
                        <a href="https://discord.gg/s9F4jxxX8M" class="fab fa-discord"></a><br></br>
                </div>
                </footer>
                <div className="banner">

                </div>
            </div>
            
        );
    }
}

export default App;