
var fsextra = require('fs-extra');
var swig = require('../../converter/swig');

jekyde.extend.website(function(site, envs){
    var posts = site.posts;
    for (var i = 0; i < posts.length; i++) {
        var item = posts[i];
        var data = {
            site: site,
            post: item,
            content: item.content
        };
        var html = swig('post', data);
        fsextra.outputFileSync(envs.wdir + '/' + item.link, html);
    }
});
