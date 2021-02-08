
function showData(){
    ;
    const txt = document.getElementById('text').value;
    document.getElementById('para').innerHTML= txt;
    console.log(txt)
    
}
showData();


    var slider = document.getElementById('myrange');
    var output = document.getElementById('value');
    output.innerHTML = slider.value;
    slider.oninput = function(){
        output.innerHTML = this.value;
    }
    console.log(slider);


