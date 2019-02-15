// 这是main.js 是我们项目的js入口文件

//1. 导入jQuery包  注意： import XXX from XXX 是es6导入模块的函
import $ from 'jquery'

//使用import语法，导入css样式表
import './css/index.css'

$(function(){
	$('li:odd').css('backgroundColor', 'red')

	$('li:even').css('backgroundColor', function(){
		return '#'+'D97634'
	})
})