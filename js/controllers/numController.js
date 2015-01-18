// xangular.module("timeseries", ["highcharts-ng"]).controller("numController", function numController($scope) {
app.controller("numController", function numController($scope) {

    $scope.numbers = "";
    $scope.numArr = [];
    $scope.numNumbers = [];
    $scope.retarr = function () {
        var m = [];
        var n = [];
        var x = 0;
        $scope.numNumbers = [];
        m = $scope.numbers.split(" ");
        for (var i = 0; i < m.length; i++) {
            x = parseFloat(m[i], 10);
            if (!isNaN(x)) {
                n.push(x);
                $scope.numNumbers.push(n.length);
            }
        }
        $scope.numArr = n;
        //$scope.chartData.series = $scope.numNumbers;
        //$scope.numbers = $scope.arr.join(' ');
        $scope.chartConfig.series[0].data=$scope.numArr;
        return $scope.numArr;
    };

    $scope.chartConfig = {
        options: {
            chart: {
                type: 'line'                
            }
        },
        series: [{
            "name": "Числа",
            data: [0],
            "type": "areaspline"
        }],
        title: {
            text: 'Значения'
        },
        xAxis: {
            title: {text: '123'}
        },
        size:{
            height: 300
        },
        loading: false
    }

})