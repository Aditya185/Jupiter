import React  from 'react';
import { Button,ButtonGroup,UncontrolledCollapse, } from 'reactstrap';


const SideView =(props)=>{
    


         
    return(
        
       
       <div className ="container" style={{border: '2px solid #A9A9A9',marginTop: '10px', width:'260px',height:'600px',borderRadius:'10px' }}>
           <ButtonGroup vertical >
            <Button id="toggler1" style={{marginTop:10,width:"200px",borderRadius:"2px",backgroundColor:"#D3D3D3",color:"#000"}}>Profile</Button>
            <UncontrolledCollapse toggler="#toggler1">
            <ButtonGroup vertical>
                <Button onClick={(e)=>props.handleComponents(e.target.value)} style={{marginTop:10,marginLeft:20,width:"200px",borderRadius:"2px",backgroundColor:"#D3D3D3",color:"#000"}} value="Profile">Settings</Button>
                <Button onClick={(e)=>props.handleComponents(e.target.value)} style={{marginTop:10,marginLeft:20,width:"200px",borderRadius:"2px",backgroundColor:"#D3D3D3",color:"#000"}} value="Notification">Notification</Button>
            </ButtonGroup>
            </UncontrolledCollapse>
          
           </ButtonGroup>
           <ButtonGroup vertical >
            <Button id="toggler" style={{marginTop:10,width:"200px",borderRadius:"2px",backgroundColor:"#D3D3D3",color:"#000"}}>My Tasks</Button>
            <UncontrolledCollapse toggler="#toggler">
            <ButtonGroup vertical>
                <Button onClick={(e)=>props.handleComponents(e.target.value)}  style={{marginTop:10,marginLeft:20,width:"200px",borderRadius:"2px",backgroundColor:"#D3D3D3",color:"#000"}} value="Tasks">Task1</Button>
                <Button onClick={(e)=>props.handleComponents(e.target.value)}  style={{marginTop:10,marginLeft:20,width:"200px",borderRadius:"2px",backgroundColor:"#D3D3D3",color:"#000"}} value="Tasks">Task2</Button>
            </ButtonGroup>
            </UncontrolledCollapse>
          
           </ButtonGroup>
      
        </div>
        

        )
    

}
export default SideView;