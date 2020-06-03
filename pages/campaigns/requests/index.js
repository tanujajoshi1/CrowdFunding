import React ,{Component} from 'react';
import Layout from '../../../components/layout';
import {Button,Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../campaign.js';
import RequestRow from '../../../components/requestRow';
import Footer from '../../../components/footer';

class RequestIndex extends Component{
    static async getInitialProps(props){
        const {address}=props.query;

const campaign=Campaign(address);
const requestsCount=await campaign.methods.getRequestsCount().call();
const approversCount=await campaign.methods.approversCount().call();
const requests= await Promise.all(
    Array(parseInt(requestsCount)).fill().map((element,index)=>{
        return campaign.methods.requests(index).call()
    })
)
         return {address,requests,requestsCount,approversCount};

    }   


    renderRows() {
        return this.props.requests.map((request, index) => {
          return (
            <RequestRow
              key={index}
              id={index+1}
              request={request}
           
              address={this.props.address}
              approversCount={this.props.approversCount}
            />
          );
        });
      }




    render(){
        const{HeaderCell,Header,Body,Row}=Table;
        return(
       <Layout>
           
           <div style={{marginLeft:"20%",marginRight:'20%'}}>
               <br/><br/>
               <h1>View Requests</h1>
               <div style={{marginLeft:'60px',fontFamily:"Arial",fontSize:"small"}}>[Hola!.. Here's the list of requests made by the creator of the campaign for different purposes mentioned.
               they have to be Approved and Finalise because then only the transaction to fulfill the requests can be processed.]
                 </div>
                 <br/><br/>
           <Link route={`/campaigns/${this.props.address}/requests/new`}>
           <a>
               <Button color="teal" size='large' floated="right" style={{marginBottom:20 }}>Add Request</Button>
            </a>
               </Link>
               <br/><br/>

<Table className="ui black table">
    <Header>
        <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalise</HeaderCell>
        </Row>
    </Header>
    <Body>{this.renderRows()}</Body>
</Table>


<h3>Found {this.props.requestsCount} requests.</h3>
</div>
<div style={{marginTop:'21%'}}><Footer/></div>
       </Layout>     

        )
    }
}
export default RequestIndex;