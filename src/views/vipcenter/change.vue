<template>
    <div class="change_pwd">
        <div class="color_red font18 font_bold title text_left">Change Password</div>
        <div class="change_form font12">
            <div class="flex flexAlignCenter form_item">
                <span class="pwd_name">Original Password</span>
                <div class="input_box">
                    <input type="password" v-model="query.old_password">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item" >
                <span class="pwd_name">New Password</span>
                <div class=" input_box">
                    <input type="password" v-model="query.new_password">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="pwd_name">Confirm Password</span>
                <div class=" input_box">
                    <input type="password" v-model="pwd">
                </div>
            </div>
        </div>
        <div class="confirm cli_pointer" @click="submit">Confirm</div>
    </div>
</template>
<script>
    import {post,get} from '@/api/axios.js'
    import {getToken} from '@/utils/auth.js'
    export default{
        data(){
            return{
                pwd:'',
                query:{
                    user_token:getToken(),
                    old_password:'',
                    new_password:''
                }
            }
        },
        methods: {
            submit(){
                if(this.val()){
                    post('common/changepassword',this.query).then(res=>{
                        if(res.code == 0){
                            this.$message({
                                message:"修改成功!",
                                type:'success',
                                center:true,
                                duration:1000
                            }) 
                            //清除token  重新登录
                            this.$store.dispatch('loginOut').then(
                                this.$router.push('/login')
                            )
                        }else{
                            this.$message(res.msg);
                        }
                    })
                }
            },
            val(){
                if(this.query.old_password == ''){
                    this.$message('请输入旧密码!');
                    return;
                }
                if(this.query.new_password == ''){
                    this.$message('请输入新密码!');
                    return;
                }
                if(this.pwd == ''){
                    this.$message('请再次输入新密码!');
                    return;
                }
                if(this.pwd != this.query.new_password){
                    this.$message('请两次输入的密码不一致!');
                    return;
                }
                return true;
            },
        }
    }
</script>
<style lang="less">
  @import url("../../assets/css/mine.less");
    input{
        height:100%;
    }
</style>