/**
 * Created by kiro on 17/11/14.
 */

// define markdown converter.
var converter = new Markdown.Converter();
// define base location for markdown content / articles.
var baseLocation='file:///home/kiro/ntnu/it2805/newProject/';

function loadMD(file, tag){
    // load article content.
    $.ajax({
        url: baseLocation+file,
        type: 'GET',
        dataType: 'text',
        success: function(text) {
            // insert html converted markdown into content div.
            $(tag).html(converter.makeHtml(text));
        }
});
}
