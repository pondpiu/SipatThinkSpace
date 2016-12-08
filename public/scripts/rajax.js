/**
 * Created by Woods on 8/12/16.
 */

var rAjax = function () {
    'use strict';



    var testGet = function (url, complete) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            complete(this.response);
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    };

    // expose functions
    return {
        get:testGet
    }

}();