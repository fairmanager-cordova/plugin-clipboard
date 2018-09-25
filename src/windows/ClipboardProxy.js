"use strict";

/* global Windows */

module.exports = {
	copy : ( successCallback, errorCallback, args ) => {
		let text = "";
		try {
			text = args[ 0 ];
		} catch( e ) {
			errorCallback( e );
			return;
		}

		try {
			const dataPackage = new Windows.ApplicationModel.DataTransfer.DataPackage();
			dataPackage.setText( text );
			Windows.ApplicationModel.DataTransfer.Clipboard.setContent( dataPackage );
			successCallback( text );
		} catch( e ) {
			errorCallback( e );
		}
	},
	paste : ( successCallback, errorCallback, args ) => {
		let text = "";

		try {
			const dataPackageView = Windows.ApplicationModel.DataTransfer.Clipboard.getContent();
			if( dataPackageView.contains( Windows.ApplicationModel.DataTransfer.StandardDataFormats.text ) ) {
				dataPackageView.getTextAsync().then( value => {
					text = value;
					successCallback( text );
					return null;
				} )
					.catch( error => errorCallback( error ) );
			}
		} catch( e ) {
			errorCallback( e );
		}
	}
};

require( "cordova/exec/proxy" ).add( "Clipboard", module.exports );
