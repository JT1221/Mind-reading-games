//需要先制作一个随机数的函数
function mathRound(min, max) {
	//0-1
	return Math.floor(Math.random() * (max - min) + min)
}
//获取需要的元素
var imgCenter = document.getElementById("imgCenter")
var imgResult = document.getElementById("imgResult")
var divRound = document.getElementById("divRound")
var divTable = document.getElementById("divTable")

//设置圆盘找中间显示出来的背景图片
var resultIndex = mathRound(0, 16)
imgResult.src = "img/values/" + resultIndex + ".png";

//制作右边的表格
function createTable() {
	for (var i = 0; i < 100; i++) {
		//创建一个div
		var div = document.createElement("div")
		//创建一个span
		var span = document.createElement("span")
		span.innerHTML = i
		//创建一个图片
		var img = document.createElement("img")
		div.setAttribute("class", "item")
		//如果当前是9的倍数的话，则当前的图片和中间的图片一样
		if (i % 9 === 0) {
			img.src = "img/values/" + resultIndex + ".png"
		} else {
			img.src = "img/values/" + mathRound(0, 16) + ".png"

		}

		divTable.appendChild(div)
		div.appendChild(span)
		div.appendChild(img)
	}
}
createTable()

//监听事件的点击事件
divRound.onclick = function () {
	divRound.onclick = null
	//设置图片顺时针旋转1800度
	divRound.style.transform = "rotate(1800deg)"
	divRound.addEventListener("transitionend", function () {
		//中间图片隐藏
		imgCenter.style.display = "none"

	})

}
