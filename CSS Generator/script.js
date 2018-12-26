document.getElementById('r1').oninput=cssGenerator1;
document.getElementById('r2').oninput=cssGenerator2;
document.getElementById('r3').oninput=cssGenerator3;
document.getElementById('r4').oninput=cssGenerator4;
document.getElementById('r5').oninput=cssGenerator5;


function cssGenerator1(){
    var div=document.getElementById('test');
    var out=document.getElementById('out');
    div.style.borderRadius=this.value+'px';
    out.innerHTML='-webkit-border-radius:'+this.value+'px;\n';
    out.innerHTML+='border-radius: '+this.value+'px' ;
}

function cssGenerator2(){
    var div=document.getElementById('test');
    var out=document.getElementById('out');
    div.style.border=this.value+'px solid black';
    out.innerHTML='-webkit-border: ' +this.value+'px;\n';
    out.innerHTML+='border: ' +this.value+'px'+'solid black';
}

function cssGenerator3(){
    var div=document.getElementById('test');
    var out=document.getElementById('out');
    div.style.width=this.value+'px';
    out.innerHTML='-webkit-width: '+this.value+'px';
    out.innerHTML='width: '+this.value+'px';
}

function cssGenerator4(){
    var div=document.getElementById('test');
    var out=document.getElementById('out');
    div.style.height=this.value+'px';
    out.innerHTML='-webkit-height: '+this.value+'px';
    out.innerHTML='height: '+this.value+'px';
}

function cssGenerator5(){
    var div=document.getElementById('test');
    var out=document.getElementById('out');
    div.style.fontSize=this.value+'px';
    out.innerHTML='-webkit-fontSize: '+this.value+'px';
    out.innerHTML='fontSize: '+this.value+'px';
}





