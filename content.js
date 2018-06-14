chrome.runtime.sendMessage({
    'selectedText': window.getSelection().toString()
});