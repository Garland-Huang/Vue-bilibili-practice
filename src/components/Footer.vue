<template>
    <div>
        <mt-tabbar class="is-fixed">
            <router-link to="/home" class="mint-tab-item">
                <div class="mint-tab-item-icon">
                    <span class="iconfont icon-home"></span>
                </div>
                <div class="mint-tab-item-label">首页</div>
            </router-link>
            <router-link to="/category" class="mint-tab-item">
                <div class="mint-tab-item-icon">
                    <span class="iconfont icon-category"></span>
                </div>
                <div class="mint-tab-item-label">频道</div>
            </router-link>
            <router-link to="/dynamics" class="mint-tab-item">
                <div class="mint-tab-item-icon">
                    <span class="iconfont icon-Shoppingcart"></span>
                </div>
                <div class="mint-tab-item-label">动态</div>
            </router-link>
            <router-link to="/mine" class="mint-tab-item">
                <div class="mint-tab-item-icon">
                    <span class="iconfont icon-my"></span>
                </div>
                <div class="mint-tab-item-label">我的</div>
            </router-link>
        </mt-tabbar>
    </div>
</template>

<style>
</style>

