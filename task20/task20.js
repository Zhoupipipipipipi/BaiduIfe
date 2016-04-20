/**
 * Created by Administrator on 2016/4/20.
 */
/*存放数据*/
chartData=[];

/*渲染图表*/
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

/*查找*/
function Search(){
    var input=document.getElementById('search');
    var value=input.value;
    if(value==''){
        alert('请输入要查询的字符');
        return;
    }
    else{
        for(var i in chartData){
            var bool=chartData[i].indexOf(value);
            console.log(chartData[i]+bool);
            if(bool>=0){
                var n=document.getElementById('C'+i);
                n.style.backgroundColor='#FFFF00 ';
            }
            else{
                var n=document.getElementById('C'+i);
                n.style.backgroundColor='#FFD700';
            }
        }
    }
}
