import React from 'react';
import Header from './header.js';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';

 
export default (props)=>{
    return(
        <Container >
            <Head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
           </Head>
       <Header />
       {props.children}  
        
       </Container>
       
    )
}
