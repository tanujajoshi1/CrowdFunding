import React, {Component} from 'react';
import factory from '../contracts/factory.js';
import {Card, Button,Icon} from 'semantic-ui-react';
import Layout from '../components/layout.js';
import {Link} from '../routes.js';
import Footer from '../components/footer.js';
class CampaignIndex extends Component{
    
    
    static async getInitialProps(){
        const campaign = await factory.methods.getCampaign().call();
       return{campaign};
    }
renderCampaigns=()=>{
     const items=this.props.campaign.map(address=>{
         return{   
         header:address,
         description:(
         <Link route={`/campaigns/${address}`} >
         <a ><br/><Icon name="external alternate" color='blue'/>View Campaign</a>
         </Link>
         ),
         fluid:true
         }
     })
     return <Card.Group items={items}/>
}
 render(){
     return(

         <Layout  >
             
         <div style={{marginLeft:'200px',marginRight:'550px'}}>            
        <br/>
             <h1 style={{marginLeft:'60px'}}>Open Campaigns</h1>
           <div style={{marginLeft:'60px',fontFamily:"Arial",fontSize:"small"}}> [This is a list of campaigns below. If you want to make a campaign of your own then 
           go on to create or else you can visit and view the already existing contracts]</div> 
             <Link route="/campaigns/new"> 
             <a className="item">

             <Button style={{marginRight:'60px'}}
         floated="right"
         size='big'
             content="Create Campaign"
             icon="add"
             color="teal"
             />
             </a>             
             </Link>
       <br/><br/>
             <div style={{padding:"25px 60px",fontFamily:"Arial, Helvetica, sans-serif", borderColor:"black"}}>  {this.renderCampaigns()}</div>
           
         </div>
         <div style={{marginTop:'100px'}}> <Footer/></div>
        
         </Layout>  
     );
 }

}

export default CampaignIndex;