(function(global) {
    global.templates = {};
    
    global.templates.form = '\
    <div data-role="fieldcontain">                                  \
        <label for="gender">Gender:</label>                         \
        <input type="text" name="gender" id="gender" value="{{gender}}"  />   \
    </div>                                                          \
    <div data-role="fieldcontain">                                  \
        <label for="eyes">Password:</label>                         \
        <input type="text" name="eyes" id="eyes" value="{{eyes}}"  />       \
    </div>                                                          \
                                                                    \
    <div data-role="fieldcontain">                                  \
        <label for="name">Name:</label>                             \
        <input type="text" name="name" id="name" value="{{name}}"  />       \
    </div>                                                          \
                                                                    \
    <div data-role="fieldcontain">                                  \
        <label for="age">Age:</label>                               \
        <input type="text" name="age" id="age" value="{{age}}"  />         \
    </div>                                                          \
    '

}(this));