import React from 'react';
import {Menu,Icon} from 'semantic-ui-react';
import {Link} from '../routes.js';


export default()=>{
    return( 
        <div >
<Menu className="ui inverted teal menu" >
       <Link route='/' >
        <a className="item" > <Icon name='users' size="big"/> <h3 >YouGo</h3>  </a>
    </Link>

    <Menu.Menu position="right">
    <Link route='/'>
        <a className="item">  <h2>Campaign </h2>  </a>
        </Link>
      <Link route="/campaigns/new"> 
      <a className="item">  <Icon name="plus" size="large"/> </a></Link> 
    </Menu.Menu>

</Menu>
</div>
    );
};