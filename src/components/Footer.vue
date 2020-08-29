<template>
    <div class="footer-page">
        <div class="center">
            <div class="line1">
                <img src="../assets/images/logo.png" alt="">
            </div>
            <div class="line2">
                <div class="column1">
                    <div class="line">QQ邮箱：574807769@qq.com</div>
                    <div class="line">联系电话：15238699705</div>
                    <div class="line">总部：正尚科技</div>
                    <div class="line">办公地址：郑州市郑东新区金水东路绿地新都会6号楼1522</div>
                </div>
                <div class="column2">
                    <div class="line">分部：弘廷科技</div>
                    <div class="line">办公地址：郑州市管城区航海东路2号55号楼22层307号</div>
                    <div class="line">分部：智亘科技</div>
                    <div class="line">办公地址：郑州市郑东新区金水东路绿地新都会6号楼1521</div>
                </div>
                <div class="column3">
                    <div class="line">COPYRIGHT 2020河南正尚网络科技有限公司版权所有ALL RIGHTS RESERVED</div>
                    <div class="line">豫ICP备20012527号1</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    .footer-page {
        @include page-style;
        height: 352px;
        background: #131726;
        padding: 50px 0 64px 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;

        .center {
            width: 1300px;
            display: flex;
            flex-direction: column;

            .line {
                font-size: 14px;
                font-weight: 400;
                color: #FFFFFF;
                opacity: 0.7;
                margin: 10px 0;
                line-height: 1.5;
            }

            .line1 {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                padding-bottom: 50px;

                img {
                    width: 134px;
                    height: 41px;
                }
            }

            .line2 {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .column1, .column2 {
                    .line:nth-child(3) {
                        margin-top: 30px;
                    }
                }
                .column3 {
                    width: 220px;
                    .line:nth-child(2) {
                        margin-top: 30px;
                    }
                }
            }
        }
    }

</style>