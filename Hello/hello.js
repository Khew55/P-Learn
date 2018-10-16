/* exports.sayHelloInEnglish = function(){
    return 'Hello';
};
exports.sayHelloInSpanish = function(){
    return 'Hola';
} */

/* module.exports = {
    sayHelloInEnglish : function(){
        return 'Hello';
    },
    sayHelloInSpanish : function(){
        return 'Hola';
    }
}; */

var hello = {
    sayHelloInEnglish : function(){
        return 'Hello';
    },
    
    sayHelloInSpanish : function(){
        return 'Hola';
    }
};

module.exports = hello;