var DEFAULT_BUILD_INFO_URL = 'https://gist.githubusercontent.com/quamilek/bf813986e299242b91b1/raw/08fb74a1266c3f566c6802a183a7dff50a4196df/gistfile1.txt'
function updateOptions() {
  chrome.storage.local.set({'infoUrl': options.infoUrl.value});
}

window.addEventListener('load', function () {
  chrome.storage.local.get('infoUrl', function (result) {
    options.infoUrl.value = result.infoUrl;
  });
  options.infoUrl.onchange = updateOptions;
});

