/**
 * Created by Administrator on 2016/4/9.
 */
/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */
//以下两个函数用于随机生成测试数据
function getDateStr(dat){        //dat为原始日期
    var y=dat.getFullYear();     //获得年份
    var m=dat.getMonth()+1;        //获得月份
    m=m<10?'0'+m:m;              //m<10时改为0X
    var d=dat.getDate();         //获得天数
    d=d<10?'0'+d:d;
    return y+'-'+m+'-'+d;        //返回日期
    console.log(y+'-'+m+'-'+d);
}

function randomBuildData(seed){   //得到每一天的测试数据
    var returnData={};            //用来存放对象数组
    var dat=new Date("2016-01-01");   //初始第一个日期
    var datStr="";
    for(var i=1;i<92;i++){          //三个月天数的测试数据
        datStr=getDateStr(dat);      //调用函数使日期标准
        returnData[datStr]=Math.ceil(Math.random()*seed);
        dat.setDate(dat.getDate()+1);     //重新设置日期
    }
    return returnData;
}

var aqiSourceData={     //设置对象，调用randomBuilData函数，产生测试数据
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
}

//用于渲染图表的数据
var chartData={};

//记录当前页面的表单选项
var pageState={
    nowSelectCity:'北京',
    nowGraTime:'day'
}

//渲染图表
function renderChart(){
    var aqi_chart=document.getElementById('aqi-chart-wrap');
    var GraTime=document.getElementsByName('gra-time');
    //设定宽度
    var childWidth=function(){
        if(pageState.nowGraTime=='day'){
            return '13px';
        }
        else if(pageState.nowGraTime=="week"){
            return '80px';
        }
        else{
            return '300px';
        }
    }();                 //匿名函数

    //设置颜色
    var chartColor=function(height){
        if(height>=0&&height<50){
            return '#C71585';
        }else if(height >= 50 && height < 110){
            return "#8A2BE2";
        }else if(height >= 100 && height < 150){
            return "#FF8C00 ";
        }else if(height >= 150 && height < 200){
            return "#20B2AA ";
        }else if(height >= 200 && height < 250){
            return "#00BFFF";
        }else if(height >= 250 && height < 300){
            return "#FFB6C1 ";
        }else if(height >= 300 && height < 350){
            return "#6A5ACD ";
        }else if(height >= 350 && height < 400){
            return "#7FFFD4 ";
        }else if(height >= 400 && height < 450){
            return "#1E90FF";
        }else{
            return "#EE82EE";
        }
    };
    //设置包裹属性
    aqi_chart.style.width='100%';
    aqi_chart.style.height='500px';
    aqi_chart.style.lineHeight='1000px';
    aqi_chart.style.textAlign='center';
    aqi_chart.innerHTML='';

    //渲染表格内容
    for(var item in chartData){
        aqi_chart.innerHTML+="<span style='display:inline-block;margin-left:1px;width:" +
        childWidth+";height:"+chartData[item]+"px;background-color:"+chartColor(chartData[item])+";'></span>";
    }
}
/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    var city=document.getElementById('city-select');
    if(city.value!=pageState.nowSelectCity){    //确定选项是否发生了变化
        pageState.nowSelectCity=city.value;
        initAqiChartData();
    }
    else{
        return;
    }
}

/*日月周的radio事件点击时的处理函数*/
function graTimeChange(){
    var gra_time = document.getElementById("form-gra-time").getElementsByTagName("input");
    for(var i = 0 ; i < gra_time.length ; i++){
        if(gra_time[i].checked){
            if(gra_time[i].value === pageState.nowGraTime){
                break;//无变化
            }else{
                pageState.nowGraTime = gra_time[i].value;
            }
        }
    }

    // 设置对应数据
    initAqiChartData();

}
/*初始化日、周、月的radio事件，当点击时，调用函数graTimeChange*/
function initGraTimeForm(){
    var gra_time=document.getElementById("form-gra-time").getElementsByTagName("input");
    for(var i=0;i<gra_time.length;i++){
        gra_time[i].addEventListener("click",graTimeChange,false);
    }

}
/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var city_select=document.getElementById('city-select');
    var str='';
    for(var city in aqiSourceData){
        str+='<option>'+city+'</option>';
    }
    city_select.innerHTML=str;
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    city_select.addEventListener('change',citySelectChange,false);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    chartData={};
    // 将原始的源数据处理成图表需要的数据格式
    var type=pageState.nowGraTime;
    var city=pageState.nowSelectCity;
    console.log(city);
    switch(type){
        case 'day':                   //按日来算
            chartData=aqiSourceData[city];
            break;
        case 'week':
            var count= 0,total= 0,week= 1,date,weekDay;
            for(var day in aqiSourceData[city]){
                date=new Date(day);     //创建一个日期参数
                weekDay=date.getDay();    //得到周几0-6
                if(weekDay!=6){
                    count++;             //周几的数
                    total+=aqiSourceData[city][day];    //污染总数
                }
                else{
                    count++;
                    total+=aqiSourceData[city][day];
                    chartData['week'+week]=Math.round(total/count);  //将每周的数都存在chartData中,四舍五入
                    week++;              //周数
                    count=0;             //到一周结束后重新开始
                    total=0;
                }
            }
            chartData['week'+week]=Math.round(total/count);        //最后一周
            break;
        case 'month':
            var count= 0,total= 0,month=-1,date;
            for(var day in aqiSourceData[city]){
                date=new Date(day);
                if(month==-1){
                    month=date.getMonth()+1;
                }
                else if(month!=date.getMonth()+1){
                    chartData[month+'月']=Math.round(total/count);
                    month=date.getMonth()+1;
                    count=0;
                    total=0;
                }
                count++;
                total+=aqiSourceData[city][day];
            }
            chartData[month+'月']=Math.round(total/count);   //最后一个月
            break;
    }
    // 处理好的数据存到 chartData 中
    //渲染图表
    console.log(JSON.stringify(chartData));
    renderChart();
}

/*初始化函数*/
function init(){
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
}

init();