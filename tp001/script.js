
var azu1= '#4167D9';
var azu2= '#0034D1';
var azu3= '#00279E';
var azu4= '#001452';

var ver1= '#45D96F';
var ver2= '#02D13D';
var ver3= '#019E2D';
var ver4= '#015218';

var verde=true



function mudar(){
    var est=document.body.style
    if(verde){
        est.setProperty('--cor1', azu1);
        est.setProperty('--cor2', azu2);
        est.setProperty('--cor3', azu3);
        est.setProperty('--cor4', azu4);

        verde = false
    }else{
        est.setProperty('--cor1', ver1);
        est.setProperty('--cor2', ver2);
        est.setProperty('--cor3', ver3);
        est.setProperty('--cor4', ver4);

        verde = true
    }
}
