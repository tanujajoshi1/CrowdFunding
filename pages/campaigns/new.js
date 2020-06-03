import React,{Component}from 'react';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import Layout from '../../components/layout.js';
import web3 from '../../contracts/web3.js';
import factory from '../../contracts/factory.js';
import {Router} from '../../routes.js';
import Footer from '../../components/footer.js';
class newCamapign extends Component{

    state={
        minimumContribution: null,
        errmessage:null,
        loading:false
    }

    onSubmit =async event=>{
        event.preventDefault();
        this.setState({loading:true, errmessage:null})
        try{ 
        const accounts=await web3.eth.getAccounts();
        await factory.methods.createCampaign(this.state.minimumContribution).send({
            from:accounts[0]
        });
        Router.pushRoute('/');

    }catch(err){
        this.setState({errmessage:err.message})
    }
    this.setState({loading:false})
        
                }

    render(){   
        
  
        return(
            <Layout>
              <h1  style={{fontFamily:"Geogia Header" , fontSize:'large'}}align='center'>Create New Campaign</h1>
              <div style={{marginLeft:'10%',fontFamily:"Arial",fontSize:"small"}}>[To create a campaign of your own first there has to be some amount contributed in the ethereum network.
              Once you contribute some amount to the smart contract , your campaign will be created.]</div>

              <Form onSubmit={this.onSubmit} error={!!this.state.errmessage} style={{marginLeft:"500px",marginRight:'500px'}}>
                  <Form.Field>
                  
                      <h2 >Minimum contribution (amount)</h2>
                      <Input
                      placeholder="Enter Amount in Wei"
                      label="wei"
                      size="massive"
                       labelPosition="right"
                       type="number"
                       value={this.state.minimumContribution}
                       onChange={event=>this.setState({minimumContribution:event.target.value}) }/>
                  </Form.Field>
<Message error header="Oops!!" content={this.state.errmessage}/>
                 <br/><center><Button  loading={this.state.loading} type="Submit" color="teal" size='large'>Create</Button></center> 
              </Form>
              <div style={{marginTop:"19.9%"}}>
              <Footer/>
              </div>

            </Layout>
        );
    };

}
export default newCamapign;