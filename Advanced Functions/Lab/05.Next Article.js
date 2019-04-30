function getArticleGenerator(articles) {
    let div = $('div#content');
    return function () {
        if (articles.length > 0) {
            div.append($('<article>').text(articles.shift()));
        }
    }
}