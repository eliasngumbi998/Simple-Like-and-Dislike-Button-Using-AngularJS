var myApp = angular.module("simModule", [])
									.controller("simController" , function($scope){
									
	var pLangs =[
		{name: "C", Likes: 0, Dislikes: 0},
		{name: "C++", Likes: 0, Dislikes: 0},
		{name: "C#", Likes: 0, Dislikes: 0},
		{name: "Java", Likes: 0, Dislikes: 0},
		{name: "HTML", Likes: 0, Dislikes: 0},
		{name: "PHP", Likes: 0, Dislikes: 0},
		{name: "VB.NET", Likes: 0, Dislikes: 0},
		{name: "Python", Likes: 0, Dislikes: 0},
		{name: "Pearl", Likes: 0, Dislikes: 0},
		{name: "Ruby", Likes: 0, Dislikes: 0},
	];					

	$scope.pLangs = pLangs;
	
	$scope.incrementUp = function(pLang){
		pLang.Likes++;
	}
	
	$scope.decrementDown = function(pLang){
		pLang.Dislikes++;
	}
});	