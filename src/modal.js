import React from 'react';
import { Button, Modal, FormGroup,Label,Input,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title:'',
      rating:1,
      year:'',
      image:''
    };
 
    this.toggle = this.toggle.bind(this);
  }
  handlechangetitle(event){
  this.setState({
  title:event.target.value
  });
 
}
  handlechangeyear(event){
    this.setState({
      year:event.target.value
    })
  }
 
  handlechangeimage(event){
    this.setState({
      image:event.target.value
    })
    
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  clearfield=()=>{
  this.setState({
      title:'',
      rating: 1,
      year:'',
      image:''
    

  })

  }
  addMovie=()=>{
    if(this.state.year<1930)
    alert('put a valid year')
    
    else
    {const newmovie =
      {id:Math.random(),
      title:this.state.title,
      rating:this.state.rating,
      year:this.state.year,
      image:this.state.image===''&& this.setState ({image:'https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png'}) 
    }
    this.toggle()
    this.clearfield()
    
    return this.props.addMovie(newmovie)
  }
   }
   
   incremment=()=>{
     if(this.state.rating<5)
     this.setState({
       rating:this.state.rating+1
     })
   }
   dicrement=()=>{
    if(this.state.rating>1)
    this.setState({
      rating:this.state.rating-1
    })
  }
  render() {
    return (
      <div>
        <div className="new-movie-card" onClick={this.toggle}>+</div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              <FormGroup>
            <Label for='title'>title</Label><Input type='text' id='title' value={this.state.title} onChange={(e)=>this.handlechangetitle(e)} />
            </FormGroup>
            <FormGroup><Label >rating</Label><br/><Button color="primary" onClick={this.incremment} >+</Button><span>{this.state.rating}</span><Button color="primary" onClick={this.dicrement} >-</Button></FormGroup>
            <FormGroup><Label for='year'>year</Label><Input type='text' id='year' value={this.state.year} onChange={(e)=>this.handlechangeyear(e)}/></FormGroup>
            <FormGroup><Label for='image'>image</Label><Input type='text'  id='image'  value={this.state.image} onChange={(e)=>this.handlechangeimage(e)}/></FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addMovie}>add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;