import React from 'react';
import { Button, Form, FormGroup,  Input,Col,Card,CardText
    ,UncontrolledDropdown,DropdownItem,DropdownToggle,DropdownMenu } from 'reactstrap';
import Data from '../local.json';


class Tasks extends React.Component{

    state={
        firstDropDown:"Dropdown",
        secondDropDown:"Dropdown",

    };

    handleChange = (e) => {
        const optionSelected = e.target.value;
  
        this.setState(() => ({
            firstDropDown:optionSelected
        }));
    };

    handleChange2 = (e) => {
        const optionSelected = e.target.value;
  
        this.setState(() => ({
            secondDropDown:optionSelected
        }));
    };
  
    


    
    render(){
        const source=[];
        const target=[];

        Data.map((detail,index)=>{

            if(detail.logged === true){
               
                target.push(detail.targetResult)
            }
            return 0;
        
          });

          Data.map((detail,index)=>{

            if(detail.logged === true){
                source.push(detail.sourcename)

            }
            return 0;
        
          });
        //   console.log(target)
        //   console.log(source)
         
    
         
    return(
        
       
    <div className ="container" style={{border: '2px solid #A9A9A9',marginTop: '20px', width:'500px' }}>
           
    <Form style={{marginTop:40,marginLeft:20}} >
      <FormGroup row >
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"120px"}}>
          <CardText className="center" style={{fontSize:12}}>Source Name</CardText>
      </Card>
        <Col sm={5}>
        <UncontrolledDropdown setActiveFromChild >
            <DropdownToggle id="toggle" caret >
                {this.state.firstDropDown}
            </DropdownToggle >
            <DropdownMenu>
                
              {
                    source[0].map((tr,index)=>{
                    return <DropdownItem key={tr} value={tr} onClick={(e) => this.handleChange(e)}>{tr}</DropdownItem>

                    })
                    
                 }
                
                
            </DropdownMenu>
         </UncontrolledDropdown>
        </Col>
      </FormGroup>
      <FormGroup row>
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"120px"}}>
          <CardText className="center" style={{fontSize:13}}>Enable Logging</CardText>
      </Card>
        <Col sm={5}>
            
            <Input type="checkbox" style={{width:"20px",height:"20px"}} />{' '}
            
    
        </Col>
      </FormGroup>
      <FormGroup row>
      <Card  sm={5} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"120px",height:"40px"}}>
          <CardText className="center" style={{fontSize:13}}>Provide SQL</CardText>
      </Card>
        <Col sm={5}>

            
                <Input type="textarea" name="text" id="exampleText" placeholder="Provide SQL here" style={{width:"250px"}}/>
        
        </Col>
      </FormGroup>
      <FormGroup row>
      <Card  sm={6} style={{marginLeft:30,marginRight:30,padding:10,backgroundColor:"#D3D3D3",width:"120px"}}>
          <CardText className="center" style={{fontSize:13}}>Target Result</CardText>
      </Card>
        <Col sm={5}>
        <UncontrolledDropdown  direction="down">
            <DropdownToggle caret>
               {this.state.secondDropDown}
            </DropdownToggle>
            <DropdownMenu>
            {
                    target[0].map((tr,index)=>{
                    return <DropdownItem key={tr} value={tr} onClick={(e) => this.handleChange2(e)}>{tr}</DropdownItem>

                    })
                    
                 }
            </DropdownMenu>
         </UncontrolledDropdown>
        </Col>
      </FormGroup>
      <FormGroup row style={{marginTop:"40px"}}>
        <Col sm={{ size: 10, offset: 4 }}>
          <Button color="danger">Cancel</Button>
          <Button color="success" style={{marginLeft:15}}>Submit</Button>
          <Button color="primary" style={{marginLeft:15}}>Validate</Button>
        </Col>
         

        </FormGroup>
    </Form>
       
        </div>
        

        )
    }
    

}
export default Tasks;