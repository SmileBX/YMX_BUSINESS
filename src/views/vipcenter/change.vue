<template>
    <div class="change_pwd">
        <div class="color_red font18 font_bold title text_left">Change Password</div>
        <div class="change_form font12">
            <div class="flex flexAlignCenter form_item">
                <span>Original Password</span>
                <input type="password">
            </div>
            <div class="flex flexAlignCenter form_item">
                <span>New Password</span>
                <input type="password">
            </div>
            <div class="flex flexAlignCenter form_item">
                <span>Confirm Password</span>
                <input type="password">
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
<style lang="scss">
  @import url("../../assets/css/mine.less");

</style>