/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comaccenture/fioriui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
