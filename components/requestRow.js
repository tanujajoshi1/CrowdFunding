import React,{Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import web3 from '../contracts/web3';
import Campaign from '../campaign.js';
class RequestRow extends Component{
 state={
     loadingApprove:false,
     loadingFinalise:false
 }

onApprove=async(event)=>{
    event.preventDefault();
    const campaign= Campaign(this.props.address);
    const accounts= await web3.eth.getAccounts();
    this.setState({ loadingApprove: true });
    try {
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    }
    catch (err) {
      // Ignore?
    }
    this.setState({ loadingApprove: false });
  };


onFinalize=async(event)=>{
    const campaign= Campaign(this.props.address);
    const accounts= await web3.eth.getAccounts();
   
    this.setState({ loadingFinalize: true });
    try {
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    }
    catch (err) {
      // ignore?
    }

    this.setState({ loadingFinalize: false });
}


    render=()=> {
        const{Cell,Row}=Table;
        const{id,request,approversCount}=this.props;
        const readyToFinalize=(request.voteCount>=approversCount/2);
        return(
              <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
                  <Cell>{id}</Cell>
                  <Cell>{request.description}</Cell>
                  <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
                  <Cell>{request.recipient}</Cell>
                  <Cell>{request.voteCount }/{approversCount}</Cell>
                  <Cell>
                      { request.complete ? null: (
                      <Button color="green" onClick={this.onApprove} loading={this.state.loadingApprove}>Approve</Button>
                        )}
                  </Cell>
                  <Cell>
                      { request.complete||readyToFinalize ?null:(  
                      <Button color="red" onClick={this.onFinalize}>Finalise</Button>)}
                  </Cell>
              </Row>

        )
    }
}
export default RequestRow;
