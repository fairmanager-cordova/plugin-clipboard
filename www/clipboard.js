"use strict";

const cordova = require( "cordova" );

/**
 * Clipboard plugin for Cordova
 *
 * @constructor
 */
class Clipboard {
	/**
	 * Sets the clipboard content
	 *
	 * @param {String}   text      The content to copy to the clipboard
	 * @param {Function} onSuccess The function to call in case of success (takes the copied text as argument)
	 * @param {Function} onFail    The function to call in case of error
	 */
	copy( text, onSuccess, onFail ) {
		if( typeof text === "undefined" || text === null ) {
			text = "";
		}
		cordova.exec( onSuccess, onFail, "Clipboard", "copy", [ text ] );
	}

	/**
	 * Gets the clipboard content
	 *
	 * @param {Function} onSuccess The function to call in case of success
	 * @param {Function} onFail    The function to call in case of error
	 */
	paste( onSuccess, onFail ) {
		cordova.exec( onSuccess, onFail, "Clipboard", "paste", [] );
	}
}

// Register the plugin
const clipboard = new Clipboard();
module.exports = clipboard;
