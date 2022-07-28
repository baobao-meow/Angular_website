"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _addViewToListing = require("./addViewToListing");

var _getAllListings = require("./getAllListings");

var _getListing = require("./getListing");

var _getUserListings = require("./getUserListings.js");

var _createNewListing = require("./createNewListing");

var _deleteListing = require("./deleteListing");

var _updateListing = require("./updateListing");

var _default = [_addViewToListing.addViewToListingRoute, _getAllListings.getAllListingsRoute, _getListing.getListingRoute, _getUserListings.getUserListingsRoute, _createNewListing.createNewListingRoute, _updateListing.updateListingRoute, _deleteListing.deleteListingRoute];
exports["default"] = _default;