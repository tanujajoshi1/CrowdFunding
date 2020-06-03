import React, { Component } from 'react';
import Layout from '../../components/layout';
import Campaign from '../../campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../contracts/web3';
import ContributeForm from '../../components/contribution';
import { Link } from '../../routes';
import Footer from '../../components/footer.js';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        return {
            address: props.query.address,
            minimumcontribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
        };
    }

    renderCards() {
        const {
            minimumcontribution,
            balance,
            requestsCount,
            approversCount,
            manager
        } = this.props;
        

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumcontribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: requestsCount,
                meta: 'Number of requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(balance, 'ether').toString(),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left',
                style: { overflowWrap: 'break-word' }
            }
        ];

        return (<div style={{backgroundColor:'grey',padding:'30px'}}>
            <Card.Group  items={items} />
        </div>
        )
    }

    render() {
        return (
            <Layout>
                <div style={{marginLeft:'7%', marginRight:'7%'}}>
                    <br/>
                <h1>Campaign Show</h1>
                <div style={{marginLeft:'60px',fontFamily:"veranda",fontSize:"small"}}>[Here is the detail of the campaign you have clicked upon.
                The grid below specifies the complete information related to a particular campaign. One can contribute to this campaign by clicking Contribute.
                There is also an option to view the requests made by the manager through the campaign]</div><br/><br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button color="teal" size="large">View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
                </div>
                <div style={{marginTop:'7.4%'}}><Footer/></div>
            </Layout>
        )
    }
}

export default CampaignShow;