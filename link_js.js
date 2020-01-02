// let body = $("body");
// alert(navigator.appVersion);
// 平台检测
let platform_infos = navigator.appVersion;
if(platform_infos.indexOf("Android") !==-1 ){$("body").css("font-size","40px");}
else{$("body").css("font-size","18px");}

function search(){
    // $("#search_btn").text("百度一下");
    let root_url = "https://www.baidu.com/s?word=content&tn=88093251_35_hao_pg&ie=utf-8";
    let search_url;
    let in_content;
    in_content = document.getElementById("search_input").value;
    if (in_content === ""){
        alert("请输入搜索内容！！！");
        return NaN;
    }
    search_url = root_url.replace("content",in_content);
    location.href = search_url;
}
function input_onkeydown() {
    if (window.event.keyCode === 13){
        search();
    }
}

function window_resize(){
    //document.getElementById("search_input").style.width = document.body.scrollWidth * 0.24 - 550;
    let search_input = $("#search_input");
    search_input.width= 600;

}
function a_onclick(url){

    let show=document.getElementById("show");
    show.src = url;
}

