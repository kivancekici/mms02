cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/com.threescreens.cordova.plugin.brotherPrinter/www/printer.js",
        "id": "com.threescreens.cordova.plugin.brotherPrinter.BrotherPrinter",
        "pluginId": "com.threescreens.cordova.plugin.brotherPrinter",
        "clobbers": [
            "plugin.brotherPrinter",
            "cordova.plugins.brotherPrinter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-brother-label-printer/www/printer.js",
        "id": "cordova-plugin-brother-label-printer.BrotherPrinter",
        "pluginId": "cordova-plugin-brother-label-printer",
        "clobbers": [
            "plugin.brotherPrinter",
            "cordova.plugins.brotherPrinter"
        ]
    },
    {
        "file": "plugins/com.threescreens.cordova.plugin.brotherPrinter.ql/www/printer.js",
        "id": "com.threescreens.cordova.plugin.brotherPrinter.ql.BrotherPrinter",
        "pluginId": "com.threescreens.cordova.plugin.brotherPrinter.ql",
        "clobbers": [
            "plugin.brotherPrinter",
            "cordova.plugins.brotherPrinter"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-statusbar": "1.0.1",
    "cordova-plugin-inappbrowser": "2.0.2",
    "cordova-plugin-network-information": "1.3.4",
    "com.threescreens.cordova.plugin.brotherPrinter": "0.0.3",
    "cordova-plugin-brother-label-printer": "0.0.6",
    "com.threescreens.cordova.plugin.brotherPrinter.ql": "0.0.3"
}
// BOTTOM OF METADATA
});