/**
 * Created by Administrator on 2016/4/5.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var pre_city=document.getElementById('aqi-city-input').value;
var pre_value=document.getElementById('aqi-value-input').value;
var last_city=strim(pre_city);
var last_value=strim(pre_value);
var aqiData={
    city:last_city,
    value:last_value
}
/*trim去掉空格*/
function strim(str){
    return str.replace(/(^\s*)|(\s*$)/g,'');
}

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData(){
    var pre_city=document.getElementById('aqi-city-input').value;
    var pre_value=document.getElementById('aqi-value-input').value;
    var last_city=strim(pre_city);
    var last_value=strim(pre_value);
    var c=document.getElementById('aqi-table').getElementsByTagName('td');
    var reg=new RegExp("[\\u4E00-\\u9FFF]+","g");
    if(!reg.test(last_city)){       //判断输入的是否为汉字
        alert("请输入汉字");
        return;
    }
    if(isNaN(last_value)){       //判断输入的是否为数字
        alert("请输入数字");
        return;
    }
    for(var i=0;i< c.length;i++){     //判断表格里是否存在这个地点
        console.log(c.length);
        if(last_city==c[i].innerHTML){
            console.log('XXX');
            c[i+1].innerHTML=last_value;
            return;
        }
    }
    aqiData.city=last_city;
    aqiData.value=last_value;
    return aqiData;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList(data) {
    var add=document.getElementById('aqi-table');
    var tr=add.insertRow();                        //添加新的一行
    tr.innerHTML='<td>'+data.city+'</td>'+'<td>'+data.value+'</td>'
    +'<td><button onclick="delBtnHandle(this.parentNode.parentNode)" type="button" class="btn btn-danger">删除</button></td>'
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle(tr) {
    tr.style.display='block';
    var data=addAqiData();
    renderAqiList(data);
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(theRow) {
    theRow.remove();
    renderAqiList();
}

function init() {
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var tr=document.getElementById('aqi-table');
    tr.innerHTML='<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
    tr.style.display='none';
    document.getElementById('add-btn').onclick=function(){addBtnHandle(tr);};
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}

init();
