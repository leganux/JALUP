var isObj = function (a) {
    if ((!!a) && (a.constructor === Object)) {
        return true;
    }
    return false;
};
var _st = function (z, g) {
    return "" + (g != "" ? "[" : "") + z + (g != "" ? "]" : "");
};

module.exports = function (params, skipobjects, prefix) {
    if (skipobjects === void 0) {
        skipobjects = false;
    }
    if (prefix === void 0) {
        prefix = "";
    }
    var result = "";
    if (typeof (params) != "object") {
        return prefix + "=" + encodeURIComponent(params) + "&";
    }
    for (var param in params) {
        var c = "" + prefix + _st(param, prefix);
        if (isObj(params[param]) && !skipobjects) {
            result += fromObject(params[param], false, "" + c);
        } else if (Array.isArray(params[param]) && !skipobjects) {
            params[param].forEach(function (item, ind) {
                result += fromObject(item, false, c + "[" + ind + "]");
            });
        } else {
            result += c + "=" + encodeURIComponent(params[param]) + "&";
        }
    }
    return result;
};
