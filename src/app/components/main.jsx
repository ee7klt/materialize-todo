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
      loaded: false
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
    var fb = new Firebase(rootUrl+'/items')
    this.bindAsArray(fb,"items")

  },

  componentDidMount () {
      console.log('firebase mounted')
      console.log(this.firebaseRefs)
      console.log(this.state.items)
  },

  render() {



    return (
      <div>

        <AppBar title="Title" iconClassNameRight ="muidocs-icon-navigation-expand-more" />
        <TodoInput todoStore = {this.fb}/>
        <List />


      </div>
    );
  }

});

module.exports = Main;
