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
                                                <input type="text" name="username" id="username" v-model="username" class="input-md round form-control" placeholder="Username" pattern=".{3,100}" required>
                                            </div>
                                            
                                            <!-- Password -->
                                            <div class="form-group">
                                                <input type="password" name="password" id="password" v-model="password" class="input-md round form-control" placeholder="Password" pattern=".{5,100}" required>
                                            </div>
                                            
                                            <!-- Re-enter Password -->
                                            <div class="form-group">
                                                <input type="password" name="re-password" v-model="re_password" id="re-password" class="input-md round form-control" placeholder="Re-enter Password" pattern=".{5,100}" required>
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
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        re_password: '',
        username: '',
       
      }
    },
    methods: {
     
      onSubmit () {
        const formData = {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          password: this.password,
          re_password: this.re_password,
          username: this.username,
         
        }
        console.log(formData)
        this.$store.dispatch('signup', formData)
      }
    }
  }
</script>

<style scoped>
 
</style>