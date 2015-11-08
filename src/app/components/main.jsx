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
const rootUrl = 'https://materialtodo.firebaseio.com/';
const IconButton = require('material-ui/lib/icon-button');
const TableTest = require('./table-test.jsx')
const LinearProgress = require('material-ui/lib/linear-progress');




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
    //console.log(this.state.items)


  },

  handleDataLoaded () {
    this.setState({
      loaded: true
    })
    console.log('main.jsx: db loaded? '+this.state.loaded)
    //setTimeout(function() {
    //  console.log('main.jsx: db loaded? '+this.state.loaded)
    //}.bind(this),1000)
  },


  renderList() {

    if (!this.state.loaded) {
      return <LinearProgress mode="indeterminate"  />
    } else {
    return <div className = {"content" + (this.state.loaded ? " loaded":"") }>
        <List items={this.state.items}/>
    </div>
    }
  },


  render() {



    return (
      <div>
        <AppBar
          title="Title"
          />


          <TodoInput todoStore = {this.fb}/>
          {this.renderList()}




        </div>
      );
    }

  });

  module.exports = Main;
