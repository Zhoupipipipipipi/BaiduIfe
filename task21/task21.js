/**
 * Created by Administrator on 2016/4/21.
 */
var button=document.getElementById('button');
var Tag=document.getElementById('Tag');
var TagList=document.getElementById('TagList');
var count=0;
/*存放数据*/
chartData=[];
tagData=[];

/*渲染图表*/
function renderTag(){
    TagList.innerHTML='';
    for(var i in tagData){
        console.log(i+'X'+tagData[i]);
        var li=document.createElement('li');
        li.onmouseover=function(){over(this);};     //添加鼠标事件
        li.onmouseout=function(){out(this);};
        li.innerHTML=tagData[i];
        li.id='T'+i;
        TagList.appendChild(li);
    }
}
function renderChart(){
    var ul=document.getElementById('line');
    ul.innerHTML='';
    for(var i in chartData){
        var li=document.createElement('li');
        li.id='C'+i;
        li.innerHTML=chartData[i];
        ul.appendChild(li);
    }
}
function trim(str){
//删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
/*插入*/
function In(){
    var input=document.getElementById('content');
    var value=trim(input.value);
    console.log(value);
    if(value==''||value==' '){
        alert('请输入要插入的字符');
        return;
    }
    else{
        if(chartData==''){
            var value=trim(input.value);
        }
        else{
            var value=trim(input.value)+' '+chartData;
        }
        chartData=value.split(/\n|\s|[,]|[，]|[.]/);   //判断分隔符
        console.log(chartData);
        renderChart();
    }
}
/*Tag键盘事件*/
function keyHit(){
    if(window.event.keyCode==13||window.event.keyCode==32||window.event.keyCode==188){
        if(trim(Tag.value)==''||trim(Tag.value)==' '){
            return;
        }
        else{
            if(tagData==''){
                count++;
                console.log(count+'XX');
                tagData.push(Tag.value);
                console.log(tagData);
            }
            else{
                for(var i in tagData){
                    if(tagData[i]==Tag.value){
                        alert('请不要输入重复的字符');
                        retun;
                    }
                }
                count++;
                console.log(count+'XX');
                tagData.push(Tag.value);
                console.log(tagData);
            }

            if(count>10){                       //tag的数量不能超过10
                tagData.shift();
                count=10;
            }
            Tag.value='';
            renderTag();
        }
    }
}
/*Tag鼠标事件*/
function over(obj){
    obj.style.backgroundColor='#eee';
    var pre=obj.innerHTML;
    obj.innerHTML='点击删除'+pre;
    obj.onmousedown=function(){down(this)};
}
function out(obj){
    obj.style.backgroundColor='#E0FFFF';
    var pre=obj.innerHTML;
    obj.innerHTML=pre.substring(4);
}
function down(obj){
    count--;
    console.log(count+'X');
    var pre=obj.innerHTML.substring(4);
    for(var i in tagData){
        if(tagData[i]==pre){
            tagData.splice(i,1);
        }
    }
    console.log(tagData);
    renderTag();
}
function init(){
    button.onclick=function(){In();};
}
init();