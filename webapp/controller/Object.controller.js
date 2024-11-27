/*global location*/
sap.ui.define([
		"zjblessons/ControlTaskMoshkareva/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/ui/core/routing/History",
	"zjblessons/ControlTaskMoshkareva/model/formatter",
	"sap/m/MessageToast",
	], function (
		BaseController,
		JSONModel,
		History,
	formatter,
	MessageToast,
	) {
		"use strict";

		return BaseController.extend("zjblessons.ControlTaskMoshkareva.controller.Object", {

			formatter: formatter,

			onInit: function () {
				const oViewModel = new JSONModel({
				});
				this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);
			},
				
				

			onNavBack : function() {
				var sPreviousHash = History.getInstance().getPreviousHash();
				if (sPreviousHash !== undefined) {
					history.go(-1);
				} else {
					this.getRouter().navTo("worklist", {}, true);
				}
			},

			_onObjectMatched : function (oEvent) {
				var sObjectId =  oEvent.getParameter("arguments").objectId;
				this.getModel().metadataLoaded().then( function() {
					var sObjectPath = this.getModel().createKey("zjblessons_base_Materials", {
						MaterialID :  sObjectId
					});
					this._bindView("/" + sObjectPath);
				}.bind(this));
				MessageToast.show("Вы перешли к материалу с ID: " + sObjectId);
			},

			_bindView : function (sObjectPath) {
				var oViewModel = this.getModel("objectView"),
					oDataModel = this.getModel();

				this.getView().bindElement({
					path: sObjectPath,
					events: {
						change: this._onBindingChange.bind(this),
						dataRequested: function () {
							oDataModel.metadataLoaded().then(function () {
						
							});
						},
						dataReceived: function () {
						
						}
					}
				});
			},

			_onBindingChange : function () {
				var oView = this.getView(),
					oViewModel = this.getModel("objectView"),
					oElementBinding = oView.getElementBinding();

				if (!oElementBinding.getBoundContext()) {
					this.getRouter().getTargets().display("objectNotFound");
					return;
				}

				var oResourceBundle = this.getResourceBundle(),
					oObject = oView.getBindingContext().getObject(),
					sObjectId = oObject.MaterialID,
					sObjectName = oObject.MaterialID;

				oViewModel.setProperty("/busy", false);
			},

			onTabSelect: function (oEvent) {
				const oSelectedKey = oEvent.getParameter("selectedKey");
		}

		});

	}
);