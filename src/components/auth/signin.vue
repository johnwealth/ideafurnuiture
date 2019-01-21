<template>
<div>
   <section class="small-section bg-dark-lighter">
                <div class="relative container align-left">
                    
                    <div class="row">
                        
                        <div class="col-md-8">
                            <h1 class="hs-line-11 font-alt mb-20 mb-xs-0">My IDEA Account</h1>
                            <div class="hs-line-4 font-alt">
                                Login or Sign Up for an account
                            </div>
                        </div>
                        
                        <div class="col-md-4 mt-30">
                            <div class="mod-breadcrumbs font-alt align-right">
                                <a href="#">Home</a>&nbsp;/&nbsp;<a href="#">Pages</a>&nbsp;/&nbsp;<span>My Account</span>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
            <!-- End Head Section -->
            
            
            <!-- Section -->
            <section class="page-section">
                <div class="container relative">
                    
                    <!-- Nav Tabs -->
                    <div class="align-center mb-40 mb-xxs-30">
                        <ul class="nav nav-tabs tpl-minimal-tabs">
                            
                            <li class="active">
                                <a href="#mini-one" data-toggle="tab">Login</a>
                            </li>
                            
                            <li>
                                <a href="#mini-two" data-toggle="tab">Registration</a>
                            </li>
                            
                        </ul>
                    </div>
                    <!-- End Nav Tabs -->
                    
                    <!-- Tab panes -->
                    <div class="tab-content tpl-minimal-tabs-cont section-text">
                        
                        <div class="tab-pane fade in active" id="mini-one">
                            
                            <!-- Login Form -->                            
                            <div class="row">
                                <div class="col-md-4 col-md-offset-4">
                                    
                                    <form @submit.prevent="onSubmit">
                                        <div class="clearfix">
             
                                            
                                            <!-- Username -->
                                            <div class="form-group">
                                                <input type="text" name="email" id="email_login"   v-model="email" class="input-md round form-control" placeholder="Username" pattern=".{3,100}" required>
                                            </div>
                                            
                                            <!-- Password -->
                                            <div class="form-group">
                                                <input type="password" name="password" id="password_login"  v-model="password"  class="input-md round form-control" placeholder="Password" pattern=".{5,100}" required>
                                            </div>
                                                
                                        </div>
                                        
                                        <div class="clearfix">
                                            
                                            <div class="cf-left-col">
                                                
                                                <!-- Inform Tip -->                                        
                                                <div class="form-tip pt-20">
                                                    <a href="">Forgot Password?</a>
                                                </div>
                                                
                                            </div>
                                            
                                            <div class="cf-right-col">
                                                
                                                <!-- Send Button -->
                                                <div class="align-right pt-10">
                                                    <button class="submit_btn btn btn-mod btn-medium btn-round" type="submit" id="login-btn">Login</button>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </form>
                                    
                                </div>
                            </div>
                            <!-- End Login Form -->
                            
                        </div>
                        
                              <app-signup></app-signup>     
                    </div>
                    
                </div>
            </section>
        </div>
</template>

<script>
import Signup from  './signup.vue';
   export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },

     components: {

        'app-signup': Signup
      },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
        this.$store.dispatch('login', formData)
        }
     
    }
  }
</script>

