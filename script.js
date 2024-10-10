
const accesskey = '6bLCXIruST3mfr8RUkLvOVSY1RtrfrDtgjmthvx6rok';

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');





let keyword = "";
let page = 1;

 async function searchImages(){
     keyword = searchBox.value;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=30`;
      
     const response = await fetch(url);
     const data = await response.json();

     if(page === 1){
        searchResult.innerHTML = "";
     }
    
    const results = data.results;

    results.map ((results) =>{
        const image = document.createElement('img');
        image.src = results.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = results.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});



searchBox.addEventListener('click', () =>{
    page++;
    searchImages();
})




