import React from 'react';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import {Row,Col,Card,CardText} from 'reactstrap';
import SideView from './components/SideView';
import Notification from './components/Notification';
import Tasks from './components/Tasks';

class App extends React.Component{

  state={
    currentComponent:'Profile'
  };

  handleComponents = (e) =>{
    this.setState({currentComponent: e})

  };


  render(){

    //console.log(this.state.currentComponent)

    var compo;

    if(this.state.currentComponent === 'Profile'){
      compo = <Profile/>
    }
    if(this.state.currentComponent === 'Notification'){
      compo = <Notification/>
    }
    if(this.state.currentComponent === 'Tasks'){
      compo = <Tasks/>
    }

  return (

    <div className="App">

  
     <NavBar/>
    
     <Row>
       <Col sm={{size:2,offset:1}} >
         <SideView handleComponents={this.handleComponents.bind(this)}/>
       </Col>
       <Row>
       <Col md={{size:6,offset:5}}>
       <Col md={{size:6,offset:6}} style={{marginTop:25}}>
          <Card   style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"110px"}}>
            <CardText className="center">{this.state.currentComponent}</CardText>
          </Card>
        </Col>
        {
          
            compo
          
        }
         
       </Col>

       </Row>
    
     </Row>
    
    
    </div>
  );
  }
}

export default App;
