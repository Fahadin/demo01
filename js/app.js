

var clipboard = new ClipboardJS('.btnsm');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

//-----------------------------------

// document.addEventListener("deviceready", onDeviceReady, false);

// function onDeviceReady() {
// 	$( "#qrScanBtn" ).click(function() {
//   		doScan();
// 	});
// }

// function doScan(){
// 	cordova.plugins.barcodeScanner.scan(
// 		function (result) {
// 			alert("We got a barcode\n" +
// 				"Result: " + result.text + "\n" +
// 				"Format: " + result.format + "\n" +
// 				"Cancelled: " + result.cancelled);
// 	  	}, 
// 	  	function (error) {
// 			alert("Scanning failed: " + error);
// 	  	}
// 	);	
// }
