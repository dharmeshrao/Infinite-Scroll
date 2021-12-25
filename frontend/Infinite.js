let container = document.querySelector('.container')
let limit = 25;
let page = 1;
let count = 1;
function getData() {
  fetch(`http://localhost:3000/data/?page=${page}&limit=${limit}`)
    .then((response) => response.json())
    .then((json) => {
        json.data.map((e,i) => {
            // console.log(e);
        
            const handleHtml = `
            <div class="mainDiv">
            <p>${e.data}   ${i}</p>
        </div>
            `;
            container.insertAdjacentHTML('beforeend',handleHtml)
          });
    });
}

getData();
window.addEventListener('scroll',()=>{
   const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
   if(scrollTop + clientHeight >= scrollHeight){
    console.log('here');   
    setTimeout(()=>{
        getData()
    },500)
   }
})