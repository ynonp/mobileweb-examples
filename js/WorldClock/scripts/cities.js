(function(global) {
    
    var City = function(name, img, offset) {
        var that = { name : name, img : img, offset : offset };
        
        that.getCurrentTime = function() {
            var now = new Date(),
                hrs = now.getUTCHours() + that.offset,
                min = now.getUTCMinutes();
            
            if ( hrs < 10 ) {
                hrs = '0' + hrs;
            }
            
            if ( min < 10 ) {
                min = '0' + min;
            }
            
            return hrs + ':' + min;
        }
        
        return that;
    }

    var World = function(list_el, clock_el) {
        var that = { list_el : list_el, clock_el : clock_el };

        that.onSelectCity = function() {
            var $el  = $(this),
                city = $el.data('city'),
                clock_display = that.clock_el.find('.clock-display');
                
                
            that.clock_el.css('backgroundImage', city.img);
            clock_display.css('display', 'block');
            clock_display.text(city.getCurrentTime());
        };
        
        that.cities = [
            City('Paris', 'url(img/paris.png)', +1 ),
            City('London', 'url(img/london.png)', 0 ),
            City('Tel Aviv', 'url(img/telaviv.png)', +2)
        ];
        
        that.init = function() {
            var city_el;
            
            for ( var i=0; i < that.cities.length; ++i ) {
                console.log(i);
                console.dir(that.cities);
                city_el = $(document.createElement('li'));
                city_el.html('<a href="#">' + that.cities[i].name + '</a>');
                city_el.data('city', that.cities[i]);
                city_el.click(that.onSelectCity);
                that.list_el.append(city_el);
            }          
        };
        
        that.init();
    }
    
    
    global.app.World = World;
}(this));