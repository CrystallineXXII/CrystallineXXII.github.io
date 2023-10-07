let mainHeader = document.getElementsByClassName ("main-header")[0];
let changed = true;

window.addEventListener("scroll", function(event){
  if (this.scrollY > 20 && changed == false){
    mainHeader.classList.remove("main-header")
    mainHeader.classList.add("post-scroll-main-header");
    
    changed = true
  }
  if(this.scrollY < 20 && changed == true){
  mainHeader.classList.remove("post-scroll-main-header")
  mainHeader.classList.add("main-header");
  
  changed = false
  }
  
  //console.log(this.scrollY,changed,mainHeader.classList);
});
