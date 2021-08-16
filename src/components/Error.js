import React from 'react'
import {Grid,Header,Segment,Icon} from 'semantic-ui-react'

const Error=()=>{
  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 550}}>
    <Segment style={{backgroundColor: 'Azure'}} color='yellow'>
    <Icon name='bug' size='huge'/>
    <Header as='h2' color='pink' textAlign='center'>
    404 error:
    <Header.Subheader className="ui teal ">
    Sorry,this page doesn't exist
    </Header.Subheader>
    </Header>
    </Segment>
    </Grid.Column>
    </Grid>
  )
}

export default Error
