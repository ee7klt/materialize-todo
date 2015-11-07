const React = require('react');
//const Table = require('material-ui/lib/table/table');
//const TableRow = require('material-ui/lib/table/table-body');
//const TableBody = require('material-ui/lib/table/table-row');
//const FloatingActionButton = require('material-ui/lib/floating-action-button');
const Mui = require('material-ui');
const Card = Mui.Card;
const CardText = Mui.CardText
const Table = Mui.Table
const TableBody = Mui.TableBody
const TableRow = Mui.TableRow



const TableTest = React.createClass ({

  render () {
    return <div>

      <Card>
        <CardText>this is a card</CardText>
      </Card>


    </div>
  }
})





module.exports = TableTest;
