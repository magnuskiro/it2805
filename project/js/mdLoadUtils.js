/**
 * Created by kiro on 17/11/14.
 */

// define markdown converter.
var converter = new Markdown.Converter();
// define base location for markdown content / articles.
//var baseLocation='file:///home/alex/git/it2805/project/';   // works.
// uncomment in prod.
var baseLocation='http://magnuskiro.no/it2805/project/';

// example: loadMD('articles/ingredients.md', '#sub-content');
function loadMD(file, tag){
    var url = baseLocation+file;
    // load article content.
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'text',
        success: function(text) {
            // insert html converted markdown into content div.
            //console.log("Loading file: "+url);
            $(tag).html(converter.makeHtml(text));
        }
});
}

// example: createSubMenuItems(articles, 'ingredients');
function createSubMenuItems(articles, parentPage){
    // create sub menu.
    var subMenu = document.getElementById("sub-menu");
    // for articles in this category
    for(var art in articles){
        // add menu element in #sub-menu
        subMenu.innerHTML += "<li onclick=\"viewSelectedSubPage('" + articles[art] + "', '" + parentPage + "')\">" + articles[art] + "</li>";
    }
}

function viewSelectedSubPage(name, parentPage){
    console.log("loading content| "+name+":"+parentPage);
    loadMD('articles/'+parentPage+"/"+name+".md", '#sub-content');
}

