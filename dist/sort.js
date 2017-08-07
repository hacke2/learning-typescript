"use strict";
function sortBy1Name(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localCompare(y.name);
    });
    return result;
}
