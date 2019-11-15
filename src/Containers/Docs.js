import React, { Component } from 'react'
import Container from "react-bootstrap/Container";

class Docs extends Component {

  componentDidMount(){
  }

  componentDidUpdate(){

  }

  render(){
    return(
      <div>

        <Container className="pt-4 pb-4" size="sm">

          <h1 className="pb-2">Documentation</h1>
          <h3>Overview</h3>
          <p>React Big Bang is a solid foundation for React.js based apps, backed by latest techs and tools to get your React projects on feet in no time. The boilerplate includes basic API call example and UI elements usage example.</p>

          <h3>Table of contents:</h3>
          <ul>
            <li><a href="#routing">Routing</a></li>
            <li><a href="#components">Components</a></li>
            <li><a href="#redux">Redux - Sagas - API</a></li>
            <li><a href="#styling">Styling & CSS</a></li>
            <li><a href="#scripts">Scripts and helpers</a></li>
          </ul>

          <div id="routing">
            <h3>Routing</h3>

            <p>Routes are generally handled in the <code>src/Navigation/Routes.js</code> file. To add a new route, you will need to add a line like this:</p>
            <pre>
            <code>
               {`<Route exact path="/home" component={Home}/>`}
            </code>
            </pre>

            <p>To add a route with a parameter, you can use something like this:</p>
            <pre>
              {`<Route exact path="/posts/:id" component={Posts}/>`}
            </pre>
            <p>Then, in your component, you will be able to access your parameter by using <code>this.props.match.params.id</code>. </p>
          </div>


          <div id="components">
            <h3>Components</h3>
            <p>Components are split between the <code>Containers</code> and <code>Components</code> folders. As their name suggests, in the <i>Containers</i> one, you can store your smart components, and main container components for your pages, which are also usually connected to the redux store. Then for the dumb/presentation components, you can use the <i>Components</i> folder.</p>
          </div>


          <div id="redux">
            <h3>Redux - Sagas - API</h3>
            <p>For our redux store and data fetching capabilities, we have used a mix of redux-sauce, redux-saga and apisauce.</p>
            <p>In order to create a reducer that is able to fetch data from an API endpoint, you need to:</p>
            <ol>
              <li>Create a reducer under the <code>Redux</code> folder. With the help of redux-sauce, you will be able to easily generate your reducers, Types and Action creators and to the store initial state, all in one file.</li>
              <li>Import and add the reducer to the <code>Redux/index.js</code> <i>combineReducers</i> function. </li>
              <li>Create a saga file under the <code>Sagas</code> directory. Inside this file you will be able to write your saga effects, that are executed when a certain redux type has been dispatched. Usually, this is the place where we call our API, then based on it{"'"}s response, we can further on dispatch success or error actions.</li>
              <li>Import and add the reducer, as well as the saga that we just created to the <code>Sagas/index.js</code>. This is the place where we map our redux types to the saga effects.</li>
              <li>Add your API endpoint to the <code>Services/Api.js</code> file. The function for the API call will then be called from the saga effect function, where you can also pass additional parameters to the API call.</li>
            </ol>
            <p>I would recommend that at first, just to copy over the existing examples and turn adapt them your needs.</p>.
          </div>


          <div id="styling">
            <h3>UI & CSS</h3>
            <p>Regarding styling and CSS usage, we don{"'"}t have a strict paradigm over it. You can write CSS pretty much every way you can think of. You can write your own css/scss/sass/js files that you can import into your JS files, or you can even write instyle CSS, like this:</p>
            <p><code>{`style={{color:"red",marginTop:'1rem'}}`}</code></p>
          </div>

          <div id="scripts">
            <h3>Scripts and helpers</h3>
            <ul>
              <li><code>npm run setup</code> Runs initial setup script.</li>
              <li><code>npm start</code> Starts the project in dev mode.</li>
              <li><code>npm run build</code> Build the production bundle.</li>
              <li><code>npm run lint:watch</code> Preview eslint errors in realtime.</li>
              <li><code>npm run analyze-bundle</code> Get an interactive map of the sizes of your dependencies.</li>
              <li><code>npm run test</code> Run your test suites.</li>
            </ul>
          </div>

          <p>The documentation is lightweight so I hope that the code and the examples will be the ones that are self explanatory. If you got any suggestions or questions, don't hesitate to send us an email at <a href="mailto:contact@qwebdev.net">contact@qwebdev.net</a>.</p>

        </Container>

      </div>

    )
  }

}

export default Docs
