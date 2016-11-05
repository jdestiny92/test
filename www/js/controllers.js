angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.video = function(){
		// start video capture
		navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});

		// capture error callback
		var captureError = function(error) {
		    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
		};

		// capture callback
		var captureSuccess = function(mediaFiles) {
		    var i, path, len;
		    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
		        path = mediaFiles[i].fullPath;
		        // do something interesting with the file
		        console.log(path);
		    }
		};

	}
}])
 