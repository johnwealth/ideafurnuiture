<template>
     <div class="tab-pane fade" id="mini-two">
                            
                            <!-- Registry Form -->                            
                            <div class="row">
                                <div class="col-md-4 col-md-offset-4">
                                    
                                    <form @submit.prevent="onSubmit">
                                        <div class="clearfix">
						<!-- Full Name -->
                                            <div class="form-group">
                                                <input type="text" name="first_name" id="first_name" v-model="first_name" class="input-md round form-control" placeholder="First Name" pattern=".{3,100}" required>
                                            </div>     
						<!-- Address -->
                                            <div class="form-group">
                                                <input type="text" name="last_name" id="last_name" v-model="last_name" class="input-md round form-control" placeholder="Last Name" pattern=".{3,100}" required>
                                            </div>                                       

                                            <!-- Email -->
                                            <div class="form-group">
                                                <input type="text" name="Email" id="Email" v-model="email" class="input-md round form-control" placeholder="Email" pattern=".{3,100}" required>
                                            </div>
                                            
                                            <!-- Username -->
                                            <div class="form-group">
                                                <input type="text" name="phone_no" id="phone_no" v-model="phone_no" class="input-md round form-control" placeholder="phone_no" pattern=".{3,100}" required>
                                            </div>
                                            
                                            <!-- Password -->
                                            <div class="form-group">
                                                <input type="password" name="password" id="password" v-model="password" class="input-md round form-control" placeholder="Password" pattern=".{5,100}" required>
                                            </div>
                                            
                                            <!-- Re-enter Password -->
                                            <div class="form-group">
                                                <input type="password" name="confirm-password" v-model="confirm_password" id="confirm-password" class="input-md round form-control" placeholder="Re-enter Password" pattern=".{5,100}" required>
                                            </div>
                                                
                                        </div>
                                        
                                        <!-- Send Button -->
                                        <div class="pt-10">
                                            <button class="submit_btn btn btn-mod btn-medium btn-round btn-full" type="submit" id="reg-btn">Register</button>
                                        </div>
                                        
                                    </form>
                                    
                                </div>
                            </div>
                            <!-- End Registry Form -->
                            
      </div>
          
</template>

<script>
  export default {
    data () {
      return {
        
        first_name: '',
        last_name: '',
        email: '',
        phone_no: '',
        password: '',
        confirm_password: '',
        re_password: '',
      
       
      }
    },
    methods: {
     
      onSubmit () {
        const formData = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone_no: this.phone_no,
          password: this.password,
          confirm_password: this.confrim_password,
   
         
        }
        console.log(formData)
        this.$store.dispatch('/signup', formData)
      }
    }
  }
</script>

<style scoped>
 
</style>