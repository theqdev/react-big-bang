import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExampleActions from '../Redux/Example'
import {Button, Dimmer, Grid, Image, Input, List, Loader, Rail, Segment} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Home extends Component {

  componentDidMount(){

    // alert(1);
    console.log(this.props);
    console.log(this.state);

  }


  componentDidUpdate(){

    // alert(1);
    console.log(this.props);
    console.log(this.state);
    // this.props.getAPIData();

  }

  render(){
    return(
      <div>
        <h1>Home page</h1>
        <h3>Down below you can find some of the <a href="https://react.semantic-ui.com/introduction">React Semantic</a> UI Kit elements:</h3>
        <div>
          <Button basic>Standard</Button>
          <Button basic color='red'>Red</Button>
          <Button basic color='orange'>Orange</Button>
          <Button basic color='yellow'>Yellow</Button>
          <Button basic color='olive'>Olive</Button>
          <Button basic color='green'>Green</Button>
          <Button basic color='teal'>Teal</Button>
          <Button basic color='blue'>Blue</Button>
          <Button basic color='violet'>Violet</Button>
          <Button basic color='purple'>Purple</Button>
          <Button basic color='pink'>Pink</Button>
          <Button basic color='brown'>Brown</Button>
          <Button basic color='grey'>Grey</Button>
          <Button basic color='black'>Black</Button>
        </div>

        <div>
          <Icon name='home' size='mini' />
          <Icon name='home' size='tiny' />
          <Icon name='home' size='small' />
          <Icon name='home' size='small' />
          <br />
          <Icon name='home' />
          <br />
          <Icon name='home' size='large' />
          <br />
          <Icon name='home' size='big' />
          <br />
          <Icon name='home' size='huge' />
          <br />
          <Icon name='home' size='massive' />
        </div>

        <Image
          src='/assets/images/wireframe/image-text.png'
          as='a'
          size='medium'
          href='http://google.com'
          target='_blank'
        />

        <Input
          action={{ color: 'teal', labelPosition: 'right', icon: 'copy', content: 'Copy' }}
          defaultValue='http://ww.short.url/c0opq'
        />

        <List>
          <List.Item>
            <List.Icon name='users' />
            <List.Content>Semantic UI</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='marker' />
            <List.Content>New York, NY</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' />
            <List.Content>
              <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
            </List.Content>
          </List.Item>
        </List>

        <div>
          <Segment>
            <Dimmer active>
              <Loader content='Loading' />
            </Dimmer>

            <Image src='/assets/images/wireframe/short-paragraph.png' />
          </Segment>

          <Segment>
            <Dimmer active inverted>
              <Loader inverted content='Loading' />
            </Dimmer>

            <Image src='/assets/images/wireframe/short-paragraph.png' />
          </Segment>
        </div>


        <Grid centered columns={3}>
          <Grid.Column>
            <Segment>
              <Image src='/assets/images/wireframe/paragraph.png' />

              <Rail position='left'>
                <Segment>Left Rail Content</Segment>
              </Rail>

              <Rail position='right'>
                <Segment>Right Rail Content</Segment>
              </Rail>
            </Segment>
          </Grid.Column>
        </Grid>

      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    data: state.example,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateUserSettings: (data) => dispatch(UserActions.userSuccess(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
