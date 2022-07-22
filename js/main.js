document.getElementById('myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e){
    // console.log('it is working');
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

   if(!validateForm(siteName,siteUrl)){
    return false;
   }

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
     
    // clear form
    document.getElementById('myForm').reset();

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

        bookmarksResults.innerHTML += `
                      <div class='card card-body bg-light'>
                        <h3>${name}
                        <a class='btn btn-default' href="${url}">Visit</a>
                        <a onclick="deleteBookmark(\''${url}'\')" class="btn btn-danger btn-sm">Delete</a>
                        </h3>
                      </div>
        `;
        // bookmarksResults.innerHTML += '<div class="card card-body bg-light">'+
        //                               '<h3>'+name+
        //                               '<a class="btn btn-default" href="'+url+'">Visit</a>'+
        //                               '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger btn-sm">Delete</a>'+
        //                               '</h3>'+
        //                               '</div>';




    }
    // console.log(bookmarks);
}



// Validate Form
function validateForm(siteName,siteUrl){
    if(!siteName || !siteUrl){
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
        alert('Please use a valid URL');
        return false;
    }

    return true;
}

function deleteBookmark(url){
    // Get bookMark 
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Loop through bookmarks
    for(var i = 0; i <bookmarks.length; i++){
        if(bookmarks[i].url == url){
            // Remove from array
            bookmarks.splice(i, 1);
        }
    }
    // Re-set back to localStorage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    // re-fetch bookmarks
    fetchBookmarks();

}


