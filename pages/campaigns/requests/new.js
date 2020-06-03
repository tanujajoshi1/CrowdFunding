import React,{Component} from 'react';
import Campaign from '../../../campaign.js';
import {Router,Link} from '../../../routes.js';
import {Form,Button,Message,Input,Icon} from 'semantic-ui-react';
import web3 from '../../../contracts/web3';
import Layout from '../../../components/layout';
import Footer from'../../../components/footer';

class RequestNew extends Component{
    state={
        Description:" ",
        value:'',
        Recipient:null,
        loading:false,
        errmessage:null
    }
static async getInitialProps(props){
    const {address}=props.query;
    return {address};
}
onSubmit=async event=>{
    event.preventDefault();
    const campaign=Campaign(this.props.address);
    const{Description,value,Recipient}=this.state;
    this.setState({loading:true,errmessage:null})

    try{
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.createRequest(Description,web3.utils.toWei(value,'ether'),Recipient).send
        ({  from:accounts[0]  });
Router.pushRoute(`/campaigns/${this.state.address}/requests`)

    }catch(err){
this.setState({errmessage:err.message})
    }
    this.setState({loading:false})
}

    render(){
        return(
            <Layout >
                <div style={{marginLeft:'30%',marginRight:'30%'}}>
                    <br/>
                    
                <Link route={`/campaigns/${this.state.address}/requests`}>
                  <a className="item"><Icon name="arrow circle left" color='blue' size='large'/> Back</a>
                </Link>
                <h1>Create a Request</h1>
                <br/>
                <div style={{marginLeft:'0px',fontFamily:"Arial",fontSize:"small"}}>[Create an amount request here by filling the form below]</div>
                <br/>
                <br/>
                  <Form  onSubmit={this.onSubmit} error={!!this.state.errmessage}>
                      <Form.Field>
                          <h3>Description</h3>    
                          <Input 
                          placeholder="Renting office on lease"
                          size="huge"
                          value={this.state.Description}
                          onChange={event=>this.setState({Description:event.target.value})}
                          />                      
                      </Form.Field>

                      <Form.Field>
                          <h3>Value (Ethers)</h3>
                          <Input
                          placeholder="Ethers"
                          size="huge"
                          value={this.state.value}
                          onChange={event=>this.setState({value:event.target.value})}
                          />                          
                      </Form.Field>

                      <Form.Field>
                          <h3>Recipient</h3>   
                          <Input
                          placeholder="0x123456......"
                          size="huge"
                          value={this.state.Recipient}
                          onChange={event=>this.setState({Recipient:event.target.value})}
                          />                       
                      </Form.Field>
                      <Message error header="Oops!!" content={this.state.errmessage}/><br/>
                      <Button color="teal" size="large" loading={this.state.loading}>Create</Button>
                  </Form>
                  </div> 
                  <div style={{marginTop:"6.64%"}}><Footer/></div>
            </Layout>
    
        )
    }
}
export default RequestNew;