document.getElementById('myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e){
    // console.log('it is working');
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    console.log(bookmark);

    e.preventDefault();
}