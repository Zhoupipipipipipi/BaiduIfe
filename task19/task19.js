/**
 * Created by Administrator on 2016/4/18.
 */
/*渲染图表*/
var chartData=[];
function renderChart(){
    var ul=document.getElementById('line');
    ul.innerHTML='';
    for(var i in chartData){
        ul.innerHTML+="<span style='color:#fff;text-align:center;display:inline-block;margin-left:10px;width:30px" +
        ";position:absolute;bottom:0;left:"+(i*40)+"px;line-height:"+chartData[i]+"px;background-color:#8A2BE2"+";'>"
        +chartData[i]+"</span>";
    }
}
function leftIn(){
    var input=document.getElementById('input');
    if(input.value==''||isNaN(input.value)||input.value>100||input.value<10){
        alert('请输入10-100之间的数字');
        return;
    }
    else {
        chartData.unshift(input.value);
        console.log(chartData);
        renderChart();
    }
}
function rightIn(){
    var input=document.getElementById('input');
    if(input.value==''||isNaN(input.value)||input.value>100||input.value<10){
        alert('请输入10-100之间的数字');
        return;
    }
    else{
        chartData.push(input.value);
        console.log(chartData);
        renderChart();
    }
}
function leftDel(){
    chartData.shift();
    console.log(chartData);
    renderChart();
}
function rightDel(){
    chartData.pop();
    console.log(chartData);
    renderChart();
}
function sort(){
    var n=0;
    for(var i in chartData){
        n+=1;
    }
    for(var i=n-1;i>=0;i--){
        for(var j=0;j<=i;j++){
            if(chartData[j]>chartData[j+1]){
                var m=chartData[j];
                chartData[j]=chartData[j+1];
                chartData[j+1]=m;
            }
        }
    }
    renderChart();
    console.log(chartData);
}
function init(){
    for(var i=0;i<10;i++){
        chartData[i]=Math.ceil(Math.random()*90+10);
    }
    renderChart();
}
init();