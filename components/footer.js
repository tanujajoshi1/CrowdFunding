import React from 'react'
import {
  Container,
  Divider,
   Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';


const Footer = () => (
  <div > 
    

    <Segment inverted vertical style={{padding:'23px 100px 55px'}} >
      <Container >
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
             Crowdfunding using Ethereum smart contract,Reactjs,Nextjs,semantic-ui-react
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
          <List.Item as='a' href='#'>
          Ⓒ Tanuja Joshi 2020
          </List.Item>
          <List.Item as='a' href='#'>
            joshitanuja276@gmail.com
          </List.Item>
        </List>
      </Container>
      </Segment>
  </div>
)
export default Footer ;