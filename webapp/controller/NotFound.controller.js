sap.ui.define([
		"zjblessons/ControlTaskMoshkareva/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblessons.ControlTaskMoshkareva.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);