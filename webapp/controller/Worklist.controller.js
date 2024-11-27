/*global location history */
sap.ui.define([
		"zjblessons/ControlTaskMoshkareva/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"zjblessons/ControlTaskMoshkareva/model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
		"use strict";

		return BaseController.extend("zjblessons.ControlTaskMoshkareva.controller.Worklist", {

			formatter: formatter,

				onInit : function () {
			
			},
				
			onSearchFieldLiveChange: function (oEvent) {
				
		}

		});
	}
);