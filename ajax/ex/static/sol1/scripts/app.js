(function(global) {
    
    $(function() {
        var $btn_login = $('#btn-login');
        
        $btn_login.click(function() {
            
            var user = $('#username').val();
            var pass = $('#password').val();
            
            var loginComplete = function(res) {
                alert(res);
            }
            
           $.post('/ex1/login', { username : user, password : pass },
                  loginComplete); 
        });
        
        
        
    });
    
    
}(this));