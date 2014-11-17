/**
 * Created by kiro on 17/11/14.
 */

// define markdown converter.
var converter = new Markdown.Converter();
// define base location for markdown content / articles.
var baseLocation='file:///home/kiro/ntnu/it2805/project/';   // works.
// uncomment in prod.
//var baseLocation='http://magnuskiro.no/it2805/project/';

function loadMD(file, tag){
    var url = baseLocation+file;
    // load article content.
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'text',
        success: function(text) {
            // insert html converted markdown into content div.
            console.log("Loading file: "+url);
            $(tag).html(converter.makeHtml(text));
        }
});
}
