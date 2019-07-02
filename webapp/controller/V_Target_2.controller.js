sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"], function (Controller,History) {
	"use strict";
	return Controller.extend("ZNavigation.ZNavigation.controller.V_Target_2", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZNavigation.ZNavigation.view.V_Target_2
		 */
		onInit: function () {},
		/**
		 *@memberOf ZNavigation.ZNavigation.controller.V_Target_2
		 */
		GoOneScreenBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			// Go one screen back if you find a Hash
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}
			// If you do not find a correct Hash, go to the Source screen using default router;
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("", true);
			}
		},
		/**
		 *@memberOf ZNavigation.ZNavigation.controller.V_Target_1
		 */
		/**
		 *@memberOf ZNavigation.ZNavigation.controller.V_Target_1
		 */
		GotoSource: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Tell the Router to Navigate To Route_Tar_2
			oRouter.navTo("Route_Source", {});
		}
	});
});