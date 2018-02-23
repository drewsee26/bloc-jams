var buildCollectionItemTemplate = function(i) {
    if(i == 1) {
        var template =
          '<div class="collection-album-container column third">'
        + '  <img src="assets/images/album_covers/01.png"/>'
        + '  <div class="collection-album-info caption">'
        + '    <p>'
        + '      <a class="album-name" href="albumPicasso.html">The Colors</a>'
        + '      <br/>'
        + '      <a href="albumPicasso.html"> Pablo Picasso </a>'
        + '      <br/>'
        + '      5 songs'
        + '      <br/>'
        + '    </p>'
        + '  </div>'
        + '</div>'
        ;
    } else if (i == 2) {
        var template =
          '<div class="collection-album-container column third">'
        + '  <img src="assets/images/album_covers/02.png"/>'
        + '  <div class="collection-album-info caption">'
        + '    <p>'
        + '      <a class="album-name" href="albumMarconi.html">The Telephone</a>'
        + '      <br/>'
        + '      <a href="albumMarconi.html">Guglielmo Marconi</a>'
        + '      <br/>'
        + '      5 songs'
        + '      <br/>'
        + '    </p>'
        + '  </div>'
        + '</div>'
        ;
    } else {
        var template =
          '<div class="collection-album-container column third">'
        + '  <img src="assets/images/album_covers/03.png"/>'
        + '  <div class="collection-album-info caption">'
        + '    <p>'
        + '      <a class="album-name" href="albumMonet.html">Poppies</a>'
        + '      <br/>'
        + '      <a href="albumMonet.html">Claude Monet</a>'
        + '      <br/>'
        + '      5 songs'
        + '      <br/>'
        + '    </p>'
        + '  </div>'
        + '</div>'
        ;
    }
    return $(template);
};

$(window).load(function() {
    var $collectionContainer = $('.album-covers');
    $collectionContainer.empty();

    for (var i = 0; i < 3; i++) {
        var $newThumbnail = buildCollectionItemTemplate(i);
        $collectionContainer.append($newThumbnail);
    }
});
