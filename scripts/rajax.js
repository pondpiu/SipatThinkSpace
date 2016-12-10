/**
 * Created by Woods on 8/12/16.
 */


 // Todo - add error handler
var rAjax = function (req) {
    'use strict';

    // default to async
    if (typeof req.async === 'undefined') {
        req.async = true;
    }

    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.onload = function (e) {
        req.complete(e.target.response);
    };

    var bustCache = '?' + new Date().getTime();



    xhr.open(req.method, req.url + '/' + ((typeof req.query === 'undefined')? '' : req.query) + bustCache, req.async);

    if (typeof req.data !== 'undefined') {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    }

    return {
        send: function () {
            xhr.send(JSON.stringify(req.data));
        }
    };

};

var ajaxHandler = function () {

    var getNews = function (complete, error) {
        rAjax({
            url: '/news',
            method: 'GET',
            complete: complete,
            error: error
        }).send();
    };

    var getBookings = function (complete, error) {
        rAjax({
            url: '/bookings',
            method: 'GET',
            complete: complete,
            error: error
        }).send();
    };

    var addBookings = function (data, complete, error) {
        rAjax({
            url: '/bookings',
            method: 'POST',
            complete: complete,
            error: error,
            data: data
        }).send();
    };

    var getZone = function (query, complete, error) {
        rAjax({
            url: '/zone',
            method: 'GET',
            complete: complete,
            error: error,
            query: query
        }).send();
    };

    var getProduct = function (query, complete, error) {
        rAjax({
            url: '/product',
            method: 'GET',
            complete: complete,
            error: error,
            query: query
        }).send();
    };

    // expose functions
    return {
        getNews: getNews,
        getBookings: getBookings,
        addBookings: addBookings,
        queryZone: getZone,
        queryProduct: getProduct

    }
};