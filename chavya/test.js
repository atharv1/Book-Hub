function makeSize(size){
  return function(){
    document.body.style.fontSize =size +"px";
  }
}
let size40 =  makeSize(500);
size40();
