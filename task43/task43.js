/**
 * Created by Administrator on 2016/4/28.
 */

var item=1;

function gallery(){
    var gallery=document.getElementById('gallery');
    var gal=document.createElement('div');
    gallery.appendChild(gal);

    for(var i=1;i<=item;i++){
        var img=document.createElement('img');
        img.src='img/gallery'+i+'.jpg';
        gal.appendChild(img);
    }


    gal.className='gal gal_'+item;
    console.log(gal.className);
    item++;
    if(item>6){
        return;
    }
}

function init(){
    for(var i=0;i<6;i++){
        gallery();
    }
}

init();
