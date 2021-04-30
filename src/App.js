
import './App.css';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
class App extends Component{
   
        state = { email: '' };
        constructor(props) {
            super(props);
            this.state = { email: '' };
            this.onSubmit = this.onSubmit.bind(this)
            this.myChangeHandler = this.myChangeHandler.bind(this);
            this.createNotification = this.createNotification.bind(this);

          }
          myChangeHandler = (event) => {
            this.setState({email: event.target.value});
          }
          createNotification(type){
            
              switch (type) {
                case 'info':
                  NotificationManager.info('Info message');
                  break;
                case 'success':
                  NotificationManager.success('Success', 'Email Added Successfully');
                  break;
                case 'warning':
                  NotificationManager.warning('Warning', 'Make Sure to fill the email form', 3000);
                  break;
                case 'error':
                  NotificationManager.error('Error', 'Make sure u type a valid email', 5000);
                  break;
              }
            
          };
        onSubmit(e) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(this.state.email == ""){
                    this.createNotification('warning');
            }else{
                if(re.test(String(this.state.email).toLowerCase())){
                    this.createNotification('success');
                }else{
                    this.createNotification('error');
                }
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
                <div>
                <NotificationContainer/>
                </div>
            </div>
            
        );
    }
}

export default App;