/**
 * Created by Administrator on 2016/5/5.
 */
window.onload=function(){
    imgLocation('container','box',5);
    var imgData={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},
        {'src':'6.jpg'},{'src':'7.jpg'},{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'}]};

    //设置滚动时执行以下函数
    window.onscroll=function(){
        if(checkImg()){
            for(var i=0;i<imgData.data.length;i++){
                var cparent=document.getElementById('container');
                var ccontent=document.createElement('div');
                ccontent.className='box';
                cparent.appendChild(ccontent);
                var boxImg=document.createElement('div');
                boxImg.className='box_img';
                ccontent.appendChild(boxImg);
                var img=document.createElement('img');
                img.src='img/'+imgData.data[i].src;
                boxImg.appendChild(img);
                var p=document.createElement('p');
                p.innerHTML='我的男神';
                boxImg.appendChild(p);
                imgLocation('container','box',5);
                img.addEventListener('click',Big,false);
            }
        }
    }
    //点击放大图片
    var cparent=document.getElementById('container');
    var img=document.getElementsByTagName('img');
    for(var i=0;i<img.length;i++){
        img[i].addEventListener('click',Big,false);
    }

    document.getElementById('close').onclick=function(){
        close();
    };
}
/*检查图片是否需要加载*/
function checkImg(){
    var cparent=document.getElementById('container');
    var ccontent=getElementChild(cparent,'box');
    var lastContentHeight=ccontent[ccontent.length-1].offsetTop;    //获得最后一张距离顶部的高度
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;   //DTD浏览器兼容 获得滚动的高度
    var pageHeight=document.documentElement.clientHeight||document.body.clientHeight; //网页可见区域高
    if(lastContentHeight<scrollTop+pageHeight){
        return true;
    }
}

/*设置图片加载*/
function imgLocation(parent,content,mw){
    var cparent=document.getElementById(parent);
    var ccontent=getElementChild(cparent,content);        //获得box内容
    var imgWidth=ccontent[0].offsetWidth;            //定义图片的宽度
    var num=Math.floor(document.body.clientWidth/imgWidth);
    cparent.style.width=imgWidth*num+'px';

    var boxHeight=[];                        //放置列数的高度
    for(var i=0;i<ccontent.length;i++){
        if(i<num){
            boxHeight[i]=ccontent[i].offsetHeight;
        }
        else{
            var minHeight=Math.min.apply(null,boxHeight);
            ccontent[i].style.position='absolute';
            ccontent[i].style.top=minHeight+'px';
            var MinHeightNum=getMinHeight(boxHeight,minHeight);
            ccontent[i].style.left=ccontent[i].offsetWidth*MinHeightNum+'px';
            boxHeight[MinHeightNum]=boxHeight[MinHeightNum]+ccontent[i].offsetHeight;
        }
    }
}

function getElementChild(cparent,content){
    var contentArr=[];                 //定义一个数组来存放内容
    var ccontent=document.getElementsByTagName('*');
    for(var i=0;i<ccontent.length;i++){
        if(ccontent[i].className==content){
            contentArr.push(ccontent[i]);
        }
    }
    return contentArr;
}

function getMinHeight(boxHeight,minHeight){           //获得最低那一列的列数
    for(var i=0;i<boxHeight.length;i++){
        if(boxHeight[i]==minHeight){
            return i;
        }
    }
}

/*变大*/
function Big(){
    console.log(this.src);
    var cparent=document.getElementById('content');
    var bigImg=document.getElementById('clickBig');
    var img=bigImg.getElementsByTagName('img');
    console.log(img);
    img[0].src=this.src;
    cparent.style.display='block';
    bigImg.style.display='block';
    var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
    var pageWidth=cparent.offsetWidth;
    bigImg.style.top=(pageHeight-img[0].height)/2+'px';
    bigImg.style.left=(pageWidth-img[0].width)/2+'px';
}
/*关闭*/
function close(){
    console.log('XX');
    var cparent=document.getElementById('content');
    cparent.style.display='none';
}
