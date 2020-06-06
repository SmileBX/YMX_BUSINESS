<template>
    <div class="change_pwd">
        <div class="color_red font18 font_bold title text_left">Change Password</div>
        <div class="change_form font12">
            <div class="flex flexAlignCenter form_item">
                <span class="pwd_name">Original Password</span>
                <div class="input_box">
                    <input type="password">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item" >
                <span class="pwd_name">New Password</span>
                <div class=" input_box">
                    <input type="password">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="pwd_name">Confirm Password</span>
                <div class=" input_box">
                    <input type="password">
                </div>
            </div>
        </div>
        <div class="confirm">Confirm</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style lang="less">
  @import url("../../assets/css/mine.less");

</style>