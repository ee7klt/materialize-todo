/** In this file, we create a React component which incorporates components provided by material-ui */


// hook up firebase db to react
const React = require('react');
const ReactFire = require('reactfire');


const Firebase = require('firebase');
const AppBar = require('material-ui/lib/app-bar');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

//const TodoInput = require('./todo-input');


//db root url
const rootUrl = 'https://materialtodo.firebaseio.com/'



const Main = React.createClass({
  mixins: [ReactFire],
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500
    });

    this.setState({muiTheme: newMuiTheme});

    this.fb = new Firebase(rootUrl+'items/');
    this.bindAsArray(this.fb,'items');
  },

  render() {



    return (
      <div>
        <h1>hello world!</h1>
        //  <TodoInput todoStore = {this.fb}/>



      </div>
    );
  }

});

module.exports = Main;
