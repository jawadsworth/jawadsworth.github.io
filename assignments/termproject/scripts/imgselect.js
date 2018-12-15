
$i = 0;

$(document).ready(function(){
   $('.fadeImg').css('position','relative');
   $('.fadeImg img').eq($i).css('display','inherit');
});

$i = document.getElementById('select').value;

$('#select').change(function(){
    $i = document.getElementById('select').value;
    pleaseWork();
});

function pleaseWork(){
    
    $('.fadeImg img').css('display','none');
    $('.fadeImg img').eq($i).css('display', 'inherit');
}

/* Washington, DC
   Manhatten, New York
   Philadelphia, PA
   Hartford, Conecticut
   Boston, Massachussetts  */