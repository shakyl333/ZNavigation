/*global QUnit*/

sap.ui.define([
	"ZNavigation/ZNavigation/controller/V_root.controller"
], function (Controller) {
	"use strict";

	QUnit.module("V_root Controller");

	QUnit.test("I should test the V_root controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});