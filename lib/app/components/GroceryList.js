"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ListItem = (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        _super.apply(this, arguments);
    }
    ListItem.prototype.render = function () {
        return (React.createElement("li", null, this.props.quantity, "x ", this.props.name));
    };
    return ListItem;
}(React.Component));
exports.ListItem = ListItem;
var GroceryList = (function (_super) {
    __extends(GroceryList, _super);
    function GroceryList() {
        _super.apply(this, arguments);
    }
    GroceryList.prototype.render = function () {
        var listItems = this.props.groceries.map(function (item) {
            return (React.createElement(ListItem, {quantity: item.quantity, name: item.name}));
        });
        return (React.createElement("ul", null, listItems));
    };
    return GroceryList;
}(React.Component));
exports.GroceryList = GroceryList;
