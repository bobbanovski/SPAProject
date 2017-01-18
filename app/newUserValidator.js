System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var newUserValidator;
    return {
        setters:[],
        execute: function() {
            newUserValidator = (function () {
                function newUserValidator() {
                }
                newUserValidator.checkEmail = function (control) {
                    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = regEx.test(control.value);
                    if (valid)
                        return null;
                    else
                        return { checkEmail: true };
                };
                return newUserValidator;
            }());
            exports_1("newUserValidator", newUserValidator);
        }
    }
});
//# sourceMappingURL=newUserValidator.js.map