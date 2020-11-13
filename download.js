window.addEventListener('load', function() {
        var src = document.getElementById("contentframe").src;
        var entryID = src.split('entryid%2F')[1].split('%2F')[0];
        var downloadURL = 'http://cdnakmi.kaltura.com/p/1355621/raw/entry_id/' + entryID;
        var target = document.getElementById("download");
        var link = document.createElement('a');
        link.innerHTML = 'Click to download';
        link.href = downloadURL;
        var div = document.createElement('div');
        div.appendChild(link);
        var fragment = document.createDocumentFragment();
        fragment.appendChild(div);
        target.appendChild(fragment);
})
