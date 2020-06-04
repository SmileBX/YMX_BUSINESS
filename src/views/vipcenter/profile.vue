<template>
  <div class="profile">
      <div class="color_red font18 font_bold title text_left">Profile Date</div>
      <div class="file_form font12">
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Avatar</span>
                <div class="item_right ava_flex">
                    <img src="../../assets/images/edit.png" alt="" class="icon_avatar">
                    <div class="flex flexAlignCenter ml3">
                        <span>change</span>
                        <img src="../../assets/images/edit.png" alt="" class="icon_edit">
                    </div>
                </div>
                <span class="color_9 font12"><span class="color_red">*</span>Uploaded image should be no more than 2MB.</span>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">User name</span>
                <div class="item_right">
                    <input type="text" value="1039379614@qq.com">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">User name</span>
                <div class="item_right">
                    <input type="text" value="Vision_1175987019">
                    <img src="../../assets/images/edit.png" alt="" class="icon_edit">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Gender</span>
                <div class="item_right">
                    <el-radio-group v-model="radio" class="flex jusifyContentBetween flexAlignCenter">
                        <el-radio :label="3">Male</el-radio>
                        <el-radio :label="6">Female</el-radio>
                        <el-radio :label="9">Other</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Birthday</span>
                <div class="input_box item_right">
                    <input type="text" value="1999/05/23">
                    <img src="../../assets/images/rl.png" alt="" class="icon_rl">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">City</span>
                <div class="input_box item_right">
                    <input type="text">
                    <img src="../../assets/images/loca.png" alt="" class="icon_loc">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Profession</span>
                <div class="input_box item_right">
                    <input type="text">
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
            radio: 3
          }
      }
  }
</script>
<style lang="scss">
@import url("../../assets/css/mine.less");
.el-radio__input.is-checked .el-radio__inner{
    border-color:  #FD6A6C!important;
    background-color:  #FD6A6C!important;
  }
  .el-radio__input.is-checked+.el-radio__label{
    color: #FD6A6C;
  }
</style>