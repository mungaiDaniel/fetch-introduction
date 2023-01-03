document.getElementById('getText').addEventListener('click', getText);

function getText(){
    fetch('sample.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
    })
}