<template>
	<div class="home">
		<div class="width-all" style="height: 80px;position: fixed;top: 0;z-index: 99;">
			<div style="width: 1280px;margin: 0 auto;" class="flex space-between">
				<div style="line-height: 80px;">叮叮灵工</div>
				<el-menu default-active="1" class="el-menu-demo" mode="horizontal" background-color='rgba(0,0,0,0)'
					style="line-height: 80px;">
					<el-menu-item index="1">首页</el-menu-item>
					<el-menu-item index="2">关于我们</el-menu-item>
					<el-menu-item index="3">平台介绍</el-menu-item>
					<el-menu-item index="4">定制服务</el-menu-item>
					<el-menu-item index="5">
						<el-button type="primary" round size="small">登录 / 注册</el-button>
					</el-menu-item>
				</el-menu>
			</div>
		</div>
		<el-carousel ref='carousel' height="100vh" direction="vertical" :autoplay="false" indicator-position='none'>
			<el-carousel-item style="background-color: #eee;height: 100%;">
				<el-carousel indicator-position="outside" :autoplay="false" height="100vh">
					<el-carousel-item v-for="item in 2" :key="item" style="background-color: #66b1ff;height: 100%;">
						<h3>{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>
			</el-carousel-item>
			<el-carousel-item style="background-color: #dcdcdc;height: 100%;">
				<h3 class="medium"></h3>
			</el-carousel-item>
			<el-carousel-item style="background-color: #999;height: 100%;">
				<h3 class="medium"></h3>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		components: {},
		data() {
			return {
				initialIndex: 0,
				isScrolling: false
			}
		},
		methods: {
			setActiveItem(index) { //index为走马灯当前页码

			},
			handleScroll(e) {
				if (this.isScrolling) return
				this.isScrolling = true;
				const timer = setTimeout(() => {
					this.isScrolling = false;
					clearTimeout(timer);
				}, 2000)
				let direction = e.deltaY > 0 ? 'down' : 'up'; //deltaY为正则滚轮向下，为负滚轮向上
				if (direction == 'down' && e.deltaY >= 75) { //125为用户一次滚动鼠标的wheelDelta的值
					if (this.initialIndex >= 2) {
						this.initialIndex = 2
					} else {
						this.initialIndex++;
					}
					this.$refs.carousel.setActiveItem(this.initialIndex)
				}
				if (direction == 'up' && e.deltaY <= -75) {
					if (this.initialIndex <= 0) {
						this.initialIndex = 0;
					} else {
						this.initialIndex--;
					}
					this.$refs.carousel.setActiveItem(this.initialIndex)
				}
			},
		},
		mounted() {
			//监听鼠标滚动事件
			window.addEventListener('mousewheel', this.handleScroll);

		}
	}
</script>
<style scoped>
	/deep/ .el-menu.el-menu--horizontal {
		border-bottom: none;
	}

	/deep/ .el-menu--horizontal>.el-menu-item {
		height: 80px;
		line-height: 80px;
		padding: 0 30px;
	}
</style>
