"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var Helpers_1 = require('./Helpers');
var peterGabriel = new Helpers_1.Person('Peter', 'Gabriel'), arminVanBuuren = new Helpers_1.Person('Armin', 'van Buuren');
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.render = function () {
        return React.createElement("div", null, "Hello ", this.props.name);
    };
    return Hello;
}(React.Component));
ReactDOM.render(React.createElement(Hello, null), document.getElementById('root'));
