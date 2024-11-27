/*global location history */
sap.ui.define(
  [
    "zjblessons/ControlTaskMoshkareva/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "zjblessons/ControlTaskMoshkareva/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
  ],
  function (
    BaseController,
    JSONModel,
    formatter,
    Filter,
    FilterOperator,
    MessageBox
  ) {
    "use strict";

    return BaseController.extend(
      "zjblessons.ControlTaskMoshkareva.controller.Worklist",
      {
        formatter: formatter,

        onInit: function () {
          const oViewModel = new JSONModel({});
          this.setModel(oViewModel, "worklistView");
        },

        onSearchFieldLiveChange: function (oEvent) {},

        onShowStudentInfoPress: function () {
          MessageBox.show("ФИО студента: Инга Мошкарёва", {
            icon: MessageBox.Icon.INFORMATION,
            title: "Студент",
            actions: [MessageBox.Action.OK],
            onClose: function (oAction) {},
          });
				},
				
				onShowMaterialIDPress: function (o) {
					const oTable = this.byId("gridTable");
					const selectedIndex = oTable.getSelectedIndex();
					if (selectedIndex !== -1) {
							var selectedContext = oTable.getContextByIndex(selectedIndex);
							var materialID = selectedContext.getProperty("MaterialID");

							MessageBox.show("Selected Material ID: " + materialID, {
									icon: MessageBox.Icon.INFORMATION,
									title: "Material Information",
									actions: [MessageBox.Action.OK],
									onClose: function () {
	
									}
							});
					} else {
							MessageBox.warning("Please select a material from the table.");
					}
			}
      }
    );
  }
);
