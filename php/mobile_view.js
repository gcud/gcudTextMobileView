function SetBackgroundColor(ColorString){
    document.querySelector("html").style.backgroundColor=ColorString;
}
function SetTextColor(ColorString){
    document.querySelector("html").style.color=ColorString;
}
let ContentBlock=document.getElementById("Content");
let FunctionBlock=document.getElementById("Function");
let ColorSelectorBlock=document.getElementById("ColorSelector");
let SetBackgroundColorBlock=document.getElementById("SetBackgroundColor");
let SetSetTextColorBlock=document.getElementById("SetTextColor");
//读取本地保存的背景色和文字颜色
let BackgroundColor=localStorage.getItem("gcudTextMobileView-BackgroundColor");
let TextColor=localStorage.getItem("gcudTextMobileView-TextColor");
//设置颜色
if(BackgroundColor!==null)
    SetBackgroundColor(BackgroundColor);
if(TextColor!==null)
    SetTextColor(TextColor);
//初始化功能
ContentBlock.onclick=function(){
    let Status="block";
    if(FunctionBlock.style.display==="block")
        Status="none";
    FunctionBlock.style.display=Status;
};
SetBackgroundColorBlock.onclick=function () {
    ColorSelectorBlock.setAttribute("data-selector",this.id);
    ColorSelectorBlock.click();
    ColorSelectorBlock.onchange=function(){
        SetBackgroundColor(this.value);
        localStorage.setItem("gcudTextMobileView-BackgroundColor",this.value);
    };
};
SetSetTextColorBlock.onclick=function () {
    ColorSelectorBlock.setAttribute("data-selector",this.id);
    ColorSelectorBlock.click();
    ColorSelectorBlock.onchange=function(){
        SetTextColor(this.value);
        localStorage.setItem("gcudTextMobileView-TextColor",this.value);
    };
};