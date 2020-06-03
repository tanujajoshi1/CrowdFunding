import React,{Component} from 'react';
import Campaign from'../campaign.js';
import {Input,Form,Button,Message} from 'semantic-ui-react';
import web3 from '../contracts/web3';
import {Router} from '../routes.js';
class contributionForm extends Component{
  state={
    value:'',
    errmessage:null,
    loading:false
  }
  onSubmit=async event=>{
    event.preventDefault();
    const campaign=Campaign(this.props.address);
  this.setState({loading:true, errmessage:null});
  
  try{
  const accounts=await web3.eth.getAccounts();
  await campaign.methods.contribute().send({
    from:accounts[0],
    value:web3.utils.toWei(this.state.value,'ether')
  
  })
  Router.replaceRoute(`/campaigns/${this.props.address}`)
  }catch(err){
  this.setState({errmessage:err.message})
  }
  
  this.setState({loading:false,value:""});
  
  }
  render(){


return(
<Form onSubmit={this.onSubmit} error={!!this.state.errmessage}>
    <Form.Field>
        <h2>Amount to contribute</h2>
        <Input
        size="large"
        placeholder= 'Enter Amount in ether'
        value={this.state.value}
        onChange={event=>this.setState({value:event.target.value})}
        label="ether" 
        labelPosition="right"></Input>
        </Form.Field>
        <Message error header="Oops!" content={this.state.errmessage}/>
        <Button color='teal'size="large" loading={this.state.loading}>Contribute</Button>
</Form>
);
  }
}

export default contributionForm;