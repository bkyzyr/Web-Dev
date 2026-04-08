function getList(){
    var groceries = ['milk', 'cheese','bread'];
    for(var i=0;i<groceries.length;i++){
        console.log(groceries[i]);
    }
}
getList();
document.getElementById('box').addEventListener('click' ,function(){
    alert('clicked now');
)}
/*var num=4;

for(var i=0;i<10;i++){
    console.log(i);
}
document.getElementById('box').innerHTML = String;
if(num==23){
    console.log('plk');
} else{
    console.log('lkmn');
}*/