var TTTApp = angular.module('TTTApp', []);

TTTApp.controller('TTTController', function ($scope) {
	
	$scope.testString = "Anuglar source, App, and Controller present" ;

	//create something to store the status of the cells:
$scope.cellList = [
	{status: "0"},
	{status: "1"},
	{status: "2"},
	{status: "3"},
	{status: "4"},
	{status: "5"},
	{status: "6"},
	{status: "7"},
	{status: "8"}
] ;
	$scope.movecounter = 0 ;

	$scope.playerPicks = function(thisCell) {
		$scope.movecounter = $scope.movecounter + 1;
		console.log("Cell was: " + thisCell.status);
		if (($scope.movecounter % 2) == 1) {
			thisCell.status = "X" ;
		} else {
			thisCell.status = "O";
		}
		console.log("Cell is now: " + thisCell.status);

		

		if ($scope.cellList[0].status == "X" && 
			$scope.cellList[1].status == "X" &&
			$scope.cellList[2].status == "X" )   {
			console.log("hello")

		}
		if ($scope.cellList[3].status == "X" && 
			$scope.cellList[4].status == "X" &&
			$scope.cellList[5].status == "X" )   {
			console.log("hello")

	
		}
		if ($scope.cellList[6].status == "X" && 
			$scope.cellList[7].status == "X" &&
			$scope.cellList[8].status == "X" )   {
			console.log("hello")

	
		}
		if ($scope.cellList[0].status == "X" && 
			$scope.cellList[3].status == "X" &&
			$scope.cellList[6].status == "X" )   {
			console.log("hello")

	}
		if ($scope.cellList[1].status == "X" && 
			$scope.cellList[4].status == "X" &&
			$scope.cellList[7].status == "X" )   {
			console.log("hello")

	}
		if ($scope.cellList[2].status == "X" && 
			$scope.cellList[5].status == "X" &&
			$scope.cellList[8].status == "X" )   {
			console.log("hello")

	}
		if ($scope.cellList[0].status == "X" && 
			$scope.cellList[4].status == "X" &&
			$scope.cellList[8].status == "X" )   {
			console.log("hello")

	}
		if ($scope.cellList[2].status == "X" && 
			$scope.cellList[4].status == "X" &&
			$scope.cellList[6].status == "X" )   {
			console.log("hello")

	}
		if ($scope.cellList[0].status == "O" && 
			$scope.cellList[1].status == "O" &&
			$scope.cellList[2].status == "O" )   {
			console.log("hello")

		}
		if ($scope.cellList[3].status == "O" && 
			$scope.cellList[4].status == "O" &&
			$scope.cellList[5].status == "O" )   {
			console.log("hello")

	
		}
		if ($scope.cellList[6].status == "O" && 
			$scope.cellList[7].status == "O" &&
			$scope.cellList[8].status == "O" )   {
			console.log("hello")

	
		}
		if ($scope.cellList[0].status == "O" && 
			$scope.cellList[3].status == "O" &&
			$scope.cellList[6].status == "O" )   {
			window.alert("You win!")

	}
		if ($scope.cellList[1].status == "O" && 
			$scope.cellList[4].status == "O" &&
			$scope.cellList[7].status == "O" )   {
			console.log("hello")

	}
		if ($scope.cellList[2].status == "O" && 
			$scope.cellList[5].status == "O" &&
			$scope.cellList[8].status == "O" )   {
			console.log("hello")

	}
		if ($scope.cellList[0].status == "O" && 
			$scope.cellList[4].status == "O" &&
			$scope.cellList[8].status == "O" )   {
			console.log("hello")

	}
		if ($scope.cellList[2].status == "O" && 
			$scope.cellList[4].status == "O" &&
			$scope.cellList[6].status == "O" )   {
			console.log("hello")

	}
	};

});