import React from 'react';
import Container from 'react-bootstrap/Container';

const Docs = () => {
  return (
    <Container className="pt-4 pb-4" size="sm">
      <h2 className="pb-4 pt-2 fw-bold">Documentation</h2>
      <h3 className="mb-3">Overview</h3>
      <p>
        React Big Bang is a solid foundation for React.js-based apps,
        backed by the latest techs and tools to get your React projects on
        their feet in no time. The boilerplate includes basic API call
        examples and UI elements usage examples.
      </p>

      <h3 className="mb-3">Installation</h3>
      <p>To get started, run the following commands:</p>
      <ul>
        <li>
          <code>git clone https://github.com/theqdev/react-big-bang</code>
        </li>
        <li>
          <code>npm run setup</code> or <code>npm install</code>
        </li>
        <li>
          <code>npm start</code>
        </li>
      </ul>

      <h3 className="mb-3">Table of contents:</h3>
      <ul>
        <li>
          <a href="#routing">Routing</a>
        </li>
        <li>
          <a href="#components">Components</a>
        </li>
        <li>
          <a href="#redux">Redux - Sagas - API</a>
        </li>
        <li>
          <a href="#styling">Styling & CSS</a>
        </li>
        <li>
          <a href="#scripts">Scripts and helpers</a>
        </li>
      </ul>

      <div id="routing">
        <h3 className="mb-3">Routing</h3>
        <p>
          Routes are generally handled in the <code>src/Navigation/Routes.js</code> file.
          To add a new route, you will need to add a line like this:
        </p>
        <pre>
          <code>{`<Route exact path="/home" component={Home}/>`}</code>
        </pre>

        <p>To add a route with a parameter, you can use something like this:</p>
        <pre>
          <code>{`<Route exact path="/posts/:id" component={Posts}/>`}</code>
        </pre>
        <p>
          Then, in your component, you will be able to access your parameter by using{' '}
          <code>this.props.match.params.id</code>.
        </p>
      </div>

      <div id="components">
        <h3 className="mb-3">Components</h3>
        <p>
          Components are split between the <code>Containers</code> and <code>Components</code> folders.
          As their names suggest, in the <i>Containers</i> folder, you can store your smart components and
          main container components for your pages, which are also usually connected to the Redux store.
          For the dumb/presentation components, you can use the <i>Components</i> folder.
        </p>
      </div>

      <div id="redux">
        <h3 className="mb-3">Redux - Sagas - API</h3>
        <p>
          For our Redux store and data fetching capabilities, we have used a mix of redux-sauce, redux-saga, and apisauce.
        </p>
        <p>To create a reducer that can fetch data from an API endpoint, you need to:</p>
        <ol>
          <li>
            Create a reducer under the <code>Redux</code> folder. With the help of redux-sauce, you will be able to easily
            generate your reducers, Types, Action creators, and the store&apos;s initial state, all in one file.
          </li>
          <li>
            Import and add the reducer to the <code>Redux/index.js</code> <i>combineReducers</i> function.
          </li>
          <li>
            Create a saga file under the <code>Sagas</code> directory. Inside this file, you can write your saga effects,
            which are executed when a certain Redux type has been dispatched. Usually, this is where we call our API,
            then based on its response, we can dispatch success or error actions.
          </li>
          <li>
            Import and add the reducer and the saga we just created to the <code>Sagas/index.js</code>. This is where we
            map our Redux types to the saga effects.
          </li>
          <li>
            Add your API endpoint to the <code>Services/Api.js</code> file. The function for the API call will then be
            called from the saga effect function, where you can also pass additional parameters to the API call.
          </li>
        </ol>
        <p>
          I would recommend that, at first, you simply copy over the existing examples and adapt them to your needs.
        </p>
      </div>

      <div id="styling">
        <h3 className="mb-3">UI & CSS</h3>
        <p>
          Regarding styling and CSS usage, we don&apos;t have a strict paradigm over it. You can write CSS in any way
          you prefer or you might just use bootstrap utilities instead.
        </p>
        <ul>
          <li>No CSS at all - just use utilities</li>
          <li>Inline CSS</li>
          <li>CSS/SCSS/SASS</li>
        </ul>
      </div>

      <div id="scripts">
        <h3 className="mb-3">Scripts and helpers</h3>
        <ul>
          <li><code>npm run setup</code> - Runs the initial setup script.</li>
          <li><code>npm start</code> - Starts the project in dev mode.</li>
          <li><code>npm run build</code> - Builds the production bundle.</li>
          <li><code>npm run lint:watch</code> - Previews ESLint errors in real-time.</li>
          <li><code>npm run analyze-bundle</code> - Gets an interactive map of the sizes of your dependencies.</li>
          <li><code>npm run test</code> - Runs your test suites.</li>
        </ul>
      </div>

      <p>
        The documentation is lightweight, so I hope that the code and examples are self-explanatory.
        If you have any suggestions or questions, don&apos;t hesitate to send us an email or write us a message.
      </p>
    </Container>
  );
};

export default Docs;
