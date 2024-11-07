function chart() {
    var sum=document.getElementById("sum").value;
  
    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${paraR},${paraG},${paraB})`;
    //document.getElementById("paragraph").style.borderWidth = "200px";
    tag.style.borderWidth = `${borderWidth}px`; 
    tag.style.backgroundColor = `rgb(${backR},${backG},${backB})`;
    
  }