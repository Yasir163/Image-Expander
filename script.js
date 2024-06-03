const arr = document.getElementsByTagName("img")
function remove(idx){
    for(let i = 0; i < arr.length; i++){
        if(i!=idx){
            arr[i].classList.remove("active")
            arr[i].nextElementSibling.classList.remove("img-text")
            arr[i].nextElementSibling.classList.add("hidden")          
        }
    }
}
for(let i=0; i<arr.length; i++){
    arr[i].addEventListener("click", (e) => {
        arr[i].classList.toggle("active");
        arr[i].nextElementSibling.classList.toggle("hidden")
        arr[i].nextElementSibling.classList.toggle("img-text")        

        
        remove(i);
    })
}
