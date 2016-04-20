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

/*插入*/
function In(){
    var input=document.getElementById('content');
    if(chartData==''){
        var value=input.value;
    }
    else{
        var value=input.value+' '+chartData;
    }
    chartData=value.split(/\n|\s|[,]|[，]|[.]/);   //判断分隔符
    console.log(chartData);
    renderChart();
}

/*查找*/
function Search(){
    var input=document.getElementById('search');
    var value=input.value;
    console.log(value);
    for(var i in chartData){
        var character=[];             //将每一个数组的字符在放入一个数组里面
        character=chartData[i].split('');
        for(var j in character){
            if(character[j]==value){
                var n=document.getElementById('C'+i);
                n.style.backgroundColor='#FFFF00 ';
                break;                         //跳出，避免之后再改变其颜色
            }
            else{
                var n=document.getElementById('C'+i);
                n.style.backgroundColor='#FFD700';
            }
        }

    }
}
