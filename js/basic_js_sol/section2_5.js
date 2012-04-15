(function() {
    var MusicBox = function() {
        var albums = [];

        var self = {
            addAlbum: function(album) { albums.push(album); },
            favoriteAlbum: function() {
                var max = -1, fav;

                for ( var i=0; i < albums.length; i += 1 ) {
                    if ( albums[i].played > max ) {
                        max = albums[i].played;
                        fav = albums[i];
                    }
                }

                return fav.to_s();
            }
        };

        return self;
    };

    var Album = function(artist, title) {
        var self = {
            played: 0,
            play: function() { self.played += 1; },
            to_s: function() { return artist + " - " + title; }
        };

        return self;
    };


    var box = MusicBox(),
        a1 = Album("The Who", "Tommy"),
        a2 = Album("Tom Waits", "Closing Time"),
        a3 = Album("John Cale", "Paris 1919"),
        favorite;

        box.addAlbum(a1);
        box.addAlbum(a2);
        box.addAlbum(a3);

        a1.play() ; // prints "Playing The Who - Tommy"
        a2.play(); // prints "Playing John Cale - Paris 1919"  
        a1.play(); // prints "Playing The Who - Tommy"

        favorite = box.favoriteAlbum(); 

        // prints "favorite album is The Who - Tommy"
        console.log("favorite album is " + favorite); 

}());

