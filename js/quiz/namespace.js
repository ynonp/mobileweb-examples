(function(global) {
    
    global.object = function(parent) {
        function F() {};
        
        F.prototype = parent || Object;
        
        return new F();
    }
    
    global.app = {};

    
}(this));