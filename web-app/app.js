/**
 * Created by Santhosh on 10-Oct-15.
 */
angular.module("mainApp", ["kendo.directives"]).controller("GridController", function($scope) {
    $scope.mainGridOptions = {
        dataSource: {
            type: "json",
            transport: {
                read: "http://localhost:3000/users"
            },
            pageSize: 5,
            serverPaging: true,
            serverSorting: true,
            group:{
                field:'sport'
            }
        },
        sortable: true,
        pageable: true,
        height:600,
        groupable:true,
        columns: [{
            field: "athlete",
            title: "Athlete Name",
            width: "120px"
        },{
            field: "age",
            title: "Age",
            width: "120px"
        },{
            field: "country",
            title: "Country",
            width: "120px"
        },{
            field: "sport",
            title: "Sport",
            width: "120px"
        },{
            field: "gold",
            title: "Gold Medals",
            width: "120px"
        },{
            field: "silver",
            title: "Silver Medals",
            width: "120px"
        },{
            field: "bronze",
            title: "Bronze Medals",
            width: "120px"
        },{
            field: "total",
            title: "Total Medals",
            width: "120px"
        }]
    };
});
