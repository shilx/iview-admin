<style lang="less">
    @import "./main.less";
</style>
<template>
    <div class="main" :class="{'main-hide-text': shrink}">
        <div class="sidebar-menu-top">
            <Row type="flex" justify="space-between">
                <Col class="logo-con">
                    <img src="../images/logo.jpg" />
                </Col>
                <Col>
                    <div class="header-avator-con">
                        <full-screen v-model="isFullScreen" @on-change="fullscreenChange"></full-screen>
                        <lock-screen></lock-screen>
                        <message-tip v-model="mesCount"></message-tip>
                        <theme-switch></theme-switch>
                        <div class="user-dropdown-menu-con">
                            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                                <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                                    <a href="javascript:void(0)">
                                        <span class="main-user-name">{{ userName }}</span>
                                        <Icon type="arrow-down-b"></Icon>
                                    </a>
                                    <DropdownMenu slot="list">
                                        <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                        <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
            <Menu mode="horizontal" :theme="menuTheme" :active-name="navName" class="nav-bar" @on-select="handleNavmenuChange">
                <Row type="flex" justify="center" :gutter="40">
                    <Col>
                        <MenuItem name="example">
                            <Icon type="ios-paper"></Icon>
                            官方示例
                        </MenuItem>
                    </Col>
                    <Col>
                        <MenuItem name="task">
                            <Icon type="ios-people"></Icon>
                            首页
                        </MenuItem>
                    </Col>
                    <Col>
                        <MenuItem name="loan">
                            <Icon type="ios-people"></Icon>
                            业务管理
                        </MenuItem>
                    </Col>
                    <Col>
                        <MenuItem name="risk">
                            <Icon type="stats-bars"></Icon>
                            风控管理
                        </MenuItem>
                    </Col>
                    <Col>
                        <MenuItem name="member">
                            <Icon type="settings"></Icon>
                            会员管理
                        </MenuItem>
                    </Col>
                    <Col>
                        <MenuItem name="statistics">
                            <Icon type="settings"></Icon>
                            数据统计
                        </MenuItem>
                    </Col>
                    <Col>
                        <MenuItem name="system">
                            <Icon type="settings"></Icon>
                            系统设置
                        </MenuItem>
                    </Col>
                </Row>
            </Menu>
        </div>
        <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
            <shrinkable-menu 
                :shrink="shrink"
                @on-change="handleSubmenuChange"
                :theme="menuTheme" 
                :before-push="beforePush"
                :open-names="openedSubmenuArr"
                :menu-list="menuList">
            </shrinkable-menu>
        </div>
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="main-header" :style="{left: shrink?'60px':'200px'}">
                <div class="navicon-con">
                    <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
                <div class="header-middle-con">
                    <div class="tags-con">
                        <tags-page-opened @updateNav="handleNavmenuChange" :pageTagsList="pageTagsList"></tags-page-opened>
                    </div>
                </div>
            </div>
            <div class="single-page">
                <keep-alive :include="cachePage">
                    <router-view></router-view>
                </keep-alive>
            </div>
            <copy-right></copy-right>
        </div>
    </div>
</template>
<script>
    import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue';
    import tagsPageOpened from './main-components/tags-page-opened.vue';
    import fullScreen from './main-components/fullscreen.vue';
    import lockScreen from './main-components/lockscreen/lockscreen.vue';
    import messageTip from './main-components/message-tip.vue';
    import themeSwitch from './main-components/theme-switch/theme-switch.vue';
    import copyRight from '@/htt/copy-right'
    import Cookies from 'js-cookie';
    import util from '@/libs/util.js';
    
    export default {
        components: {
            shrinkableMenu,
            tagsPageOpened,
            fullScreen,
            lockScreen,
            messageTip,
            themeSwitch,
            copyRight
        },
        data () {
            return {
                shrink: false,
                userName: '',
                isFullScreen: false,
                openedSubmenuArr: this.$store.state.app.openedSubmenuArr,
                navName: 'example'
            };
        },
        computed: {
            menuList () {
                return this.$store.state.app.menuList;
            },
            pageTagsList () {
                return this.$store.state.app.pageOpenedList;  // 打开的页面的页面对象
            },
            avatorPath () {
                return localStorage.avatorImgPath;
            },
            cachePage () {
                return this.$store.state.app.cachePage;
            },
            lang () {
                return this.$store.state.app.lang;
            },
            menuTheme () {
                return this.$store.state.app.menuTheme;
            },
            mesCount () {
                return this.$store.state.app.messageCount;
            }
        },
        methods: {
            init () {
                let pathArr = util.setCurrentPath(this, this.$route.name);
                this.$store.commit('updateMenulist');
                if (pathArr.length >= 2) {
                    this.$store.commit('addOpenSubmenu', pathArr[1].name);
                }
                this.userName = Cookies.get('user');
                let messageCount = 3;
                this.messageCount = messageCount.toString();
                this.checkTag(this.$route.name);
                this.$store.commit('setMessageCount', 3);
            },
            toggleClick () {
                this.shrink = !this.shrink;
            },
            handleClickUserDropdown (name) {
                if (name === 'ownSpace') {
                    util.openNewPage(this, 'ownspace_index');
                    this.$router.push({
                        name: 'ownspace_index'
                    });
                } else if (name === 'loginout') {
                    // 退出登录
                    this.$store.commit('logout', this);
                    this.$store.commit('clearOpenedSubmenu');
                    this.$router.push({
                        name: 'login'
                    });
                }
            },
            checkTag (name) {
                let openpageHasTag = this.pageTagsList.some(item => {
                    if (item.name === name) {
                        return true;
                    }
                });
                if (!openpageHasTag) {  //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
                    util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {});
                }
            },
            handleNavmenuChange (val) {
                this.navName = val
                this.$store.commit('updateMenulist', this.navName);
            },
            handleSubmenuChange (val) {
                // console.log(val)
            },
            beforePush (name) {
                // if (name === 'accesstest_index') {
                //     return false;
                // } else {
                //     return true;
                // }
                return true;
            },
            fullscreenChange (isFullScreen) {
                // console.log(isFullScreen);
            }
        },
        watch: {
            '$route' (to) {
                console.log('改变')
                this.$store.commit('setCurrentPageName', to.name);
                let pathArr = util.setCurrentPath(this, to.name);
                if (pathArr.length > 2) {
                    this.$store.commit('addOpenSubmenu', pathArr[1].name);
                }
                this.checkTag(to.name);
                localStorage.currentPageName = to.name;
            },
            lang () {
                util.setCurrentPath(this, this.$route.name);  // 在切换语言时用于刷新面包屑
            }
        },
        mounted () {
            this.init();
        },
        created () {
            // 显示打开的页面的列表
            this.$store.commit('setOpenedList');
        }
    };
</script>
