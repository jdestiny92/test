angular.module('starter.controllers', ['ngCordova'])
 
.controller('VideoCtrl', function($scope, $cordovaCapture, VideoService) {
    // TBD
    $scope.clip = '';
 
	$scope.captureVideo = function() {
		$cordovaCapture.captureVideo().then(function(videoData) {
			VideoService.saveVideo(videoData).success(function(data) {
				$scope.clip = data;
				$scope.$apply();
			}).error(function(data) {
				console.log('ERROR: ' + data);
			});
		});
	};

	$scope.urlForClipThumb = function(clipUrl) {
	var name = clipUrl.substr(clipUrl.lastIndexOf('/') + 1);
	var trueOrigin = cordova.file.dataDirectory + name;
	var sliced = trueOrigin.slice(0, -4);
	return sliced + '.png';
	}
 
	$scope.showClip = function(clip) {
		console.log('show clip: ' + clip);
	}
});