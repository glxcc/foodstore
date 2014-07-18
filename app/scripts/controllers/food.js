'use strict';

/**
 * Created by nlg on 16/07/2014.
 */

angular.module('foodstoreApp')
    .controller('FoodCtrl', function ($scope , $filter) {
        $scope.food = {
            products: [
                {name: 'product #1', description: 'product 1', category: 'cat1', price: 100},
                {name: 'product #2', description: ' product 2', category: 'cat2', price: 200},
                {name: 'product #3', description: ' product 3', category: 'cat3', price: 300},
                {name: 'product #4', description: ' product 4', category: 'cat4', price: 400}
            ]
        }

        /**
         * select product category
         */
        var selectedCategory = null;
        $scope.selectedCategory = function(newCategory){
            selectedCategory = newCategory;
        }

        $scope.categoryFilterFn = function(product){
            return selectedCategory == null || product.category == selectedCategory;
        }


    });
