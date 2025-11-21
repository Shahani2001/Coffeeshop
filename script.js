function calc(){
    var num=parseInt(document.querySelector('#num').value);
    var unit=parseInt(document.querySelector('#unit').value);

    var total;
    total=num*unit;
    document.write(total);
}