//这个配置文件，就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象

const path =require('path')

//导入在内存中生成的HTML 页面的插件  注意只要是插件，都要放到plugin节点里去
const htmlWebpackPlugin= require('html-webpack-plugin')

module.exports ={
	//手动指定 入口和出口
	entry: path.join(__dirname,'./src/main.js'),     //入口，表示：要使用webpack打包那个文件

	output: {//输出文件相关的配置
		path: path.join(__dirname,'./dist'), //指定打包好的文件，输出到哪个目录中去
		filename:'bundle.js' //这里指定输出的文件的名称
	},

	plugins: [//配置插件的节点
		new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
			//1.指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
			template:path.join(__dirname,'./src/index.html'),

			//2.指定生成的页面的名称
			filename:'index.html'

		})
	],

	module:{//用于配置所有第三方模块加载器
		rules:[//第三方模块的匹配规则
			{test: /\.css$/, use: ['style-loader', 'css-loader']},//配置css的第三方
		]
	}

}