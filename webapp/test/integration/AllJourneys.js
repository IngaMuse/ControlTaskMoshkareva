/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/ControlTaskMoshkareva/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/ControlTaskMoshkareva/test/integration/pages/Worklist",
	"zjblessons/ControlTaskMoshkareva/test/integration/pages/Object",
	"zjblessons/ControlTaskMoshkareva/test/integration/pages/NotFound",
	"zjblessons/ControlTaskMoshkareva/test/integration/pages/Browser",
	"zjblessons/ControlTaskMoshkareva/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.ControlTaskMoshkareva.view."
	});

	sap.ui.require([
		"zjblessons/ControlTaskMoshkareva/test/integration/WorklistJourney",
		"zjblessons/ControlTaskMoshkareva/test/integration/ObjectJourney",
		"zjblessons/ControlTaskMoshkareva/test/integration/NavigationJourney",
		"zjblessons/ControlTaskMoshkareva/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});