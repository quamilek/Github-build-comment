(function() {

function get_build_info(builds){
    var pr_number = $('.gh-header-number').text();
    var repo_name = $('.js-current-repository').attr('href');
    var build_info = {};

    builds.forEach(function(element, index, array){
        if(element['repo_name'] === repo_name && element['pr_number'] === pr_number){
            build_info = {
                'build_url': element['build_link'],
                'build_status': element['build_status']
            }
        }
    });
    return build_info;
}

$.ajax({
  url: chrome.extension.getURL('template.html'),
}).done(function(data_template) {
    chrome.storage.local.get('infoUrl', function (result) {
        $.ajax({
          url: result.infoUrl, //'https://gist.githubusercontent.com/quamilek/bf813986e299242b91b1/raw/ae561362bc0a09f2707916dcce888bffe8c0c6a9/gistfile1.txt',
        }).done(function(data) {
            builds = JSON.parse(data)['builds'];
            var build_info = get_build_info(builds);
            if (build_info.hasOwnProperty('build_url')){
                var comment_content = Mustache.to_html(
                    data_template,
                    {
                        "comment_text": 'Build link: ',
                        "build_status": build_info['build_status'],
                        "build_link": build_info['build_url'],
                        "user_name": "Build info commentator",
                        "timestamp": new Date()
                    }
                );
                $('.js-discussion').append(comment_content);
            }
        });
    });
});

})();

