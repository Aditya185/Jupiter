import React from 'react';
import { Button, Form, FormGroup,Col,Card,CardText } from 'reactstrap';
import ToggleSwitch from './ToggleSwitch';


class Notification extends React.Component{


 render(){

         
    return(
        
       
    <div className ="container" style={{border: '2px solid #A9A9A9',marginTop: '20px', width:'500px' }}>
           
    <Form style={{marginTop:40,marginLeft:20}} >
      <FormGroup row >
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"180px"}}>
          <CardText className="center" style={{fontSize:12}}>Send all alerts</CardText>
      </Card>
        <Col sm={5}>
          <ToggleSwitch id="1"/>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"180px"}}>
          <CardText className="center" style={{fontSize:13}}>Alert only task success</CardText>
      </Card>
        <Col sm={5}>
         <ToggleSwitch id="2"/>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"180px"}}>
          <CardText className="center" style={{fontSize:13}}>Alerts only for failed tasks</CardText>
      </Card>
        <Col sm={5}>
          <ToggleSwitch id="3"/>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Card  sm={6} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"180px"}}>
          <CardText className="center" style={{fontSize:13}}>I do not want any alerts</CardText>
      </Card>
        <Col sm={5}>
         <ToggleSwitch id="4"/>
        </Col>
      </FormGroup>
      <FormGroup row style={{marginTop:"40px"}}>
        <Col sm={{ size: 10, offset: 6 }}>
          <Button color="danger">Cancel</Button>
          <Button color="success" style={{marginLeft:15}}>Submit</Button>
        </Col>
         

        </FormGroup>
    </Form>
       
        </div>
        

        )
    }

}
export default Notification;