var TTTApp = angular.module('TTTApp', ["firebase"]);
var FB;
TTTApp.controller('TTTController', function($scope,$firebase) {
  var ticTacRef = new Firebase("https://ticcattoe.firebaseio.com/");
  $scope.remoteGameContainer =
  $firebase(ticTacRef);
  FB=($scope.remoteGameContainer);

$scope.testJS = function() {
  $scope.cellList = [
    {status: "A"},
    {status: "B"},
    {status: "C"},
    {status: "D"},
    {status: "E"},
    {status: "F"},
    {status: "G"},
    {status: "H"},
    {status: "I"}
  ];
};

  $scope.moveCounter = 0;

  ticTacRef.once("value", function(data) {
    console.log(data.val());

    console.log($scope.imPlayer);

    if(!data.val() || data.val().numPlayers == 2) {
      $scope.imPlayer = 0;
    }
    else {
      $scope.imPlayer = 1;
    }
    //Special Sauce
    $scope.gameContainer = {
      cellListArray: $scope.cellList,
      moveCount: $scope.moveCounter,
      numPlayers: $scope.imPlayer +1,
      gameState: 0
    };

    $scope.remoteGameContainer.$bind($scope, "gameContainer");
    $scope.testJS();
  });


  $scope.$watch('gameContainer', function() {
    console.log('gameContainer changed!') ;
  });

  $scope.playerPicks = function(thisCell) {

    console.log("You are player : " + $scope.imPlayer.toString() + ".  moveCount:" + $scope.gameContainer.moveCount + ".status:" + thisCell.status);
    if (thisCell.status == "X" || thisCell.status == "O" || $scope.imPlayer.toString() != ($scope.gameContainer.moveCount % 2)){
      console.log("not your move!");
      // This says that once a value is issued the cell cannot be clicked again
      return;

      }
    else {
      $scope.gameContainer.moveCount ++ ;
      console.log("Cell was: " + thisCell.status) ;
      if (($scope.gameContainer.moveCount % 2) == 1) {
        thisCell.status = "X" ;
        determineWin("X") ;
      } else {
        thisCell.status = "O" ;
        determineWin("O");
      }
      thisCell.clickNumber ++;
      console.log("Cell is now: " + thisCell.status);
      // return thisCell.status;
    }
  };
  
  // WINS!
  function determineWin(xo) {
    if ($scope.gameContainer.moveCount <= 4) {
      return;
    }
    var currentPlayer = xo == "X"? 1: 2;


    if ($scope.gameContainer.cellListArray[0].status == xo &&
        $scope.gameContainer.cellListArray[1].status == xo &&
        $scope.gameContainer.cellListArray[2].status == xo) {

      $scope.gameContainer.gameState = currentPlayer;
    }
    if ($scope.gameContainer.cellListArray[3].status == xo &&
        $scope.gameContainer.cellListArray[4].status == xo &&
        $scope.gameContainer.cellListArray[5].status == xo) {

      $scope.gameContainer.gameState = currentPlayer;
    }
    if ($scope.gameContainer.cellListArray[6].status == xo &&
        $scope.gameContainer.cellListArray[7].status == xo &&
        $scope.gameContainer.cellListArray[8].status == xo) {

      $scope.gameContainer.gameState = currentPlayer;
    }
    if ($scope.gameContainer.cellListArray[0].status == xo &&
        $scope.gameContainer.cellListArray[3].status == xo &&
        $scope.gameContainer.cellListArray[6].status == xo) {

      $scope.gameContainer.gameState = currentPlayer;
    }
    if ($scope.gameContainer.cellListArray[1].status == xo &&
        $scope.gameContainer.cellListArray[4].status == xo &&
        $scope.gameContainer.cellListArray[7].status == xo) {

      $scope.gameContainer.gameState = currentPlayer;
    }
    if ($scope.gameContainer.cellListArray[2].status == xo &&
        $scope.gameContainer.cellListArray[5].status == xo &&
        $scope.gameContainer.cellListArray[8].status == xo) {

      $scope.gameContainer.gameState = currentPlayer;
    }
    if ($scope.gameContainer.cellListArray[0].status == xo &&
        $scope.gameContainer.cellListArray[4].status == xo &&
        $scope.gameContainer.cellListArray[8].status == xo) {

      $scope.gameContainer.gameState = currentPlayer;
    }
    if ($scope.gameContainer.cellListArray[2].status == xo &&
        $scope.gameContainer.cellListArray[4].status == xo &&
        $scope.gameContainer.cellListArray[6].status == xo) {

      $scope.gameContainer.gameState = currentPlayer;
    }
    
	// this will establish a cat's game 
    if ($scope.gameContainer.moveCount == 9 && $scope.gameContainer.gameState == 0) {
        $scope.gameContainer.gameState = 3;
    } 
    console.log("hello",$scope.gameContainer.gameState)
};

   $scope.testJS = function() {
    $scope.gameContainer.cellListArray = [

    {status: "A"},
    {status: "B"},
    {status: "C"},
    {status: "D"},
    {status: "E"},
    {status: "F"},
    {status: "G"},
    {status: "H"},
    {status: "I"}
    ];

    $scope.gameContainer.moveCount = 0 ;

    $scope.gameContainer.gameState = 0;
  };

  });