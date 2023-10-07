let mainHeader = document.getElementsByClassName ("initial-main-header")[0];
let changed = false;

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
