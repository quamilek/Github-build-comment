
var DEFAULT_BUILD_INFO_URL = 'https://gist.githubusercontent.com/quamilek/bf813986e299242b91b1/raw/08fb74a1266c3f566c6802a183a7dff50a4196df/gistfile1.txt'

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.storage.local.set({'infoUrl': DEFAULT_BUILD_INFO_URL});
        chrome.tabs.create({ url: chrome.extension.getURL('options.html')});
    }
})

