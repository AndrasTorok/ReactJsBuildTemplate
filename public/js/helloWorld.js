(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"react":undefined}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var Helpers_1 = require('./helpers/Helpers');
var GroceryList_1 = require('./components/GroceryList');
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.render = function () {
        var peterGabriel = new Helpers_1.Person('Peter', 'Gabriel'), arminVanBuuren = new Helpers_1.Person('Armin', 'van Buuren'), groceryListProps = { groceries: [
                { name: 'Bread', quantity: 1 },
                { name: 'Eggs', quantity: 6 },
                { name: 'Milk', quantity: 2 }
            ] };
        return (React.createElement("div", null, "Hello ", peterGabriel.toString(), ", ", arminVanBuuren.toString(), "!", React.createElement(GroceryList_1.GroceryList, {groceries: groceryListProps.groceries})));
    };
    return Hello;
}(React.Component));
ReactDOM.render(React.createElement(Hello, null), document.getElementById('root'));

},{"./components/GroceryList":1,"./helpers/Helpers":3,"react":undefined,"react-dom":undefined}],3:[function(require,module,exports){
"use strict";
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.toString = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
exports.Person = Person;

},{}]},{},[2]);
