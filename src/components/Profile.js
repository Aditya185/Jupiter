import React from 'react';
import { Button, Form, FormGroup,  Input,Col,Card,CardText,FormFeedback } from 'reactstrap';



class Profile extends React.Component{

  state={
    nameValid:false,
    dobValid:false,
    professionValid:false,
    designationValid:false,
    error: ''

  };

  handleNameChange = (e) => {
    const text = e.target.value;
    console.log(this.state.nameValid)

    if(text.length > 30){
      this.setState(() => ({
        nameValid: true,
        //error: `Maximum 30 characters allowed`

      }));
    }else{
      this.setState(() => ({
        nameValid: false,
        //error: `Maximum 30 characters allowed`

      }));

    }
   
  };

  handleDOBChange = (e) => {
    const text = e.target.value;
    console.log(this.state.dobValid)
    var re =  /^\d{4}-\d{1,2}-\d{1,2}$/;

    if(re.test(text)){
      this.setState(() => ({
        dobValid: false,
        //error: `Maximum 30 characters allowed`

      }));
    }else{
      this.setState(() => ({
        dobValid: true,
        //error: `Maximum 30 characters allowed`

      }));

    }
   
  };
  handleProfessionChange = (e) => {
    const text = e.target.value;
    console.log(this.state.nameValid)

    if(text.length > 30){
      this.setState(() => ({
        professionValid: true,
        //error: `Maximum 30 characters allowed`

      }));
    }else{
      this.setState(() => ({
        professionValid: false,
        //error: `Maximum 30 characters allowed`

      }));

    }
   
  };
  handleDesignationChange = (e) => {
    const text = e.target.value;
    console.log(this.state.nameValid)

    if(text.length > 30){
      this.setState(() => ({
        designationValid: true,
        //error: `Maximum 30 characters allowed`

      }));
    }else{
      this.setState(() => ({
        designationValid: false,
        //error: `Maximum 30 characters allowed`

      }));

    }
   
  };


 render(){

  

         
    return(
        
       
    <div className ="container" style={{border: '2px solid #A9A9A9',marginTop: '10px', width:'500px' }}>
           
    <Form style={{marginTop:40,marginLeft:20}} >
      <FormGroup row >
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"110px"}}>
          <CardText className="center">Name</CardText>
      </Card>
        <Col sm={6}>
          <Input invalid={this.state.nameValid}  
          valid={this.state.nameValid} type="text" name="name" id="nameInput" onChange={this.handleNameChange}  />
         {/* <FormText  color="#FF0000">{this.state.error}</FormText> */}
         <FormFeedback>Maximum 30 characters allowed</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"110px"}}>
          <CardText className="center">DOB</CardText>
      </Card>
        <Col sm={6}>
          <Input type="text"   invalid={this.state.dobValid} name="dob" id="dobInput" onChange={this.handleDOBChange}/>
           <FormFeedback>Valid format is YYYY-MM-DD</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"110px"}}>
          <CardText className="center">Profession</CardText>
      </Card>
        <Col sm={6}>
          <Input  invalid={this.state.professionValid} type="text" name="Profession" id="professionInput" onChange={this.handleProfessionChange} />
          <FormFeedback>Maximum 30 characters allowed</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"110px"}}>
          <CardText className="center">Designation</CardText>
      </Card>
        <Col sm={6}>
          <Input type="text" valid={this.state.designationValid} invalid={this.state.designationValid} name="designation" id="designationInput"  onChange={this.handleDesignationChange}/>
          <FormFeedback>Maximum 30 characters allowed</FormFeedback>
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
export default Profile;