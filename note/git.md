# 代码提交流程

1. git add . 提交所有文件
2. git commit -m '提交原因'
3. git push 推送到远程仓库
4. git config --global user.name "" 本地仓库配置git用户名
5. git config --global user.email "372909885@qq.com" 本地仓库配置git邮箱
6. git config --list 查看配置的信息。
7. git --version 查看git的版本信息
8. git fetch --all   查询地址
9. git reset --hard origin  强行拉取代码
10. git status 查看文件的状态。如果文件只存在本地不在暂存区，那么文件颜色是红色的，如果文件在暂存区，没在历史区，那么颜色是绿色的。

```JavaScript
var utils = (function () {
    // offset方法
    // 求当前元素距离body的偏移量
    function offset(ele) {
        let L = ele.offsetLeft;
        let T = ele.offsetTop;
        let parent = ele.offsetParent;
        while(parent){
            L+=parent.offsetLeft;
            T+=parent.offsetTop;
            L+=parent.clientLeft;
            T+=parent.clientTop;
            parent = parent.offsetParent
        }
        return {left:L,top:T}
    }
    // win
    // 求出当前可视区域的html或者body的属性【13个js盒子模型】也可以进行修改
    function win(attr,value) {
        if(value==undefined){
            return document.documentElement[attr]|| document.body[attr]
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }

    /*
    * getCss
    * 获取当前元素的样式
    *
    * */
    function getCss(ele,attr) {
        // window.getComputedStyle(ele)[attr];
        // 通过这种方式获取到的值，它是一个带单位的字符串
        // 我们需要将这个值去掉单位，以及将字符串变成数字，这样我们再js中会非常方便进行运算
        if('getComputedStyle' in window){
            let val = window.getComputedStyle(ele)[attr];
            // 通过这种方式，我们获取到的属性值，有可能是‘red’ 或者其他不是数字的字符串
            // 我们需要进行校验，判断这个值是一个数字且带单位；
            let reg = /^-?(\d+|[1-9]\d+)(\.\d+)?(px|pt|em|rem)$/i;
            if(reg.test(val)){
                // 如果校验通过的话，我们把单位去掉，且转成数字
                val = parseFloat(val)
            }
            return val
        }
    }
    /*
    * setCss
    * 设置当前元素的样式
    * 参数：当前元素 样式属性 样式的值
    * */
    function setCss(ele,attr,value) {
        var reg = /^(width|height|fontSize|((margin|padding)?(top|bottom|right|left)?))$/i;
        if(reg.test(attr)){
            /px/.test(value.toString())?null:value+='px'
        }
        ele['style'][attr]=value
    }

    /*
    * setGroupCss
    * 批量给元素设置样式
    *
    * */
    function setGroupCss(ele,obj={}) {
        if(!(obj instanceof Object)){
            return
        }
        for(var key in obj){
            if(obj.hasOwnProperty(key)){
                 setCss(ele,key,obj[key])
            }
        }
    }

    /*
    * css
    * 将这三个方法合并到一起，组成一个都可以调用的方法
    *
    * */

    function css(ele,...arg) {
        // 判断第二个参数有一个数，如果有2个话，我们默认调用setGroupCss这种方式，
        if(arg.length>=2){
            setCss(ele,arg[0],arg[1])
        }else if(arg.length==1){
            if(arg[0] instanceof Object){
                setGroupCss(ele,arg[0])
            }else{
                return getCss(ele,arg[0])
            }
        }
    }



    return {
        offset:offset,
        win:win,
        getCss:getCss,
        setCss,
        setGroupCss,
        css
    }
})()


```