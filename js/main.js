document.getElementById('myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e){
    // console.log('it is working');
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    // Test if bookmarks is nul
    if(localStorage.getItem('bookmarks') == null){
        var bookmarks = [];
        // add to array
        bookmarks.push(bookmark);
        // set to localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        // get bookmark from localstorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
    }
    
    // Local Storage Test
    // localStorage.setItem('test','Hello World');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem('test'));
    // console.log(bookmark);
     
     fetchBookmarks();

    // Prevent form from submitting 
    e.preventDefault();
}

function fetchBookmarks(){
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    var bookmarksResults = document.getElementById('bookmarksResults');
    
    //   build output
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">'+
                                      '<h3>'+name+'</h3>'
                                      '</div>';




    }
    // console.log(bookmarks);
}