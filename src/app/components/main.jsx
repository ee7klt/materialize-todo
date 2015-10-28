/** In this file, we create a React component which incorporates components provided by material-ui */


// hook up firebase db to react
const React = require('react');
const ReactFire = require('reactfire');


const Firebase = require('firebase');
const RaisedButton = require('material-ui/lib/raised-button');
const AppBar = require('material-ui/lib/app-bar');
const TextField = require('material-ui/lib/text-field');
const Dialog = require('material-ui/lib/dialog');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');


//db root url
const rootUrl = 'https://materialtodo.firebaseio.com/'



const Main = React.createClass({
  mixins: [ReactFire],
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      newTodo: ''
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

    this.fb = new Firebase(rootUrl);
    this.bindAsArray(this.fb,'items');
  },

  render() {
    let containerStyle = {
      textAlign: 'center',
      paddingTop: '200px'
    };

    let standardActions = [
      { text: 'Okay' }
    ];

    return (
      <div>
        <AppBar
          title="Immaterial"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />

        <div style={containerStyle}>
          <TextField
            hintText="Hint Text"
            onChange={this._handleTextFieldChange}
            value = {this.state.newTodo}

            />
          <Dialog
            title="Go get 'em Tiger!"
            actions={standardActions}
            ref="superSecretPasswordDialog">
            {this.state.newTodo}
          </Dialog>

          <h3>A journey of a thousand miles begins with a single step</h3>

          <RaisedButton label="Carpe Diem" primary={true} onTouchTap={this._handleTouchTap} />

        </div>
      </div>
    );
  },

  _handleTextFieldChange: function(e) {
    this.setState({
      newTodo: e.target.value
    })
  },

  _handleTouchTap() {
    //this.setState({todo: this.refs.newTodo.getValue()});
    console.log(this.state.newTodo);

    this.refs.superSecretPasswordDialog.show();
  }

});

module.exports = Main;
