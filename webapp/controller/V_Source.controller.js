sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("ZNavigation.ZNavigation.controller.V_Source", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZNavigation.ZNavigation.view.V_Source
		 */
		onInit: function () {},
		/**
		 *@memberOf ZNavigation.ZNavigation.controller.V_Source
		 */
		GoToTarget1: function (oEvent) {
			// Now Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this); 

			// Tell the Router to Navigate To Route_Tar_1
			oRouter.navTo("Route_Tar_1", {});
		},
		/**
		 *@memberOf ZNavigation.ZNavigation.controller.V_Source
		 */
		GoToTarget2: function (oEvent) {
			// Now Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Tell the Router to Navigate To Route_Tar_2
			oRouter.navTo("Route_Tar_2", {});
		}
	});
});