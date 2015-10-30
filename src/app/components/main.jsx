/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const AppBar = require('material-ui/lib/app-bar');
const TodoInput = require('./todo-input.jsx');
const List = require('./list.jsx');
const Firebase = require('firebase');
const ReactFire = require('reactfire');
const rootUrl = 'https://materialtodo.firebaseio.com/'

const Main = React.createClass({

  mixins: [ReactFire],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      loaded: false,
      items: []
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500
    });

    this.setState({muiTheme: newMuiTheme});
    this.fb = new Firebase('https://materialtodo.firebaseio.com/items/');
    this.bindAsArray(this.fb,'items')
    this.fb.on('value', this.handleDataLoaded)


  },

  handleDataLoaded () {
    console.log(this.state.items)
  },



  render() {



    return (
      <div>
        <h1 id="test">test</h1>
        <AppBar title="Title" iconClassNameRight ="muidocs-icon-navigation-expand-more" />
        <TodoInput todoStore = {this.fb}/>
        <List items={this.state.items}/>


      </div>
    );
  }

});

module.exports = Main;
