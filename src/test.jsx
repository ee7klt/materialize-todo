//Basic React component that renders a material-ui
//raised button with the text "Default"
const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const test = React.createClass({
  render() {
    return (
        <RaisedButton label="Default" />
    );
  },
});
module.exports = test;
