<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="elevation-6 mt-10">
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card-text class="mt-12">
                                        <h4 class="text-center">Login in to Your Account</h4>
                                        <h6 class="text-center  text-grey ">Log in to your account so you can continue
                                            builiding <br>and editing your onboarding flows</h6>
                                        <v-form v-model="valid">
                                            <v-row align="center" justify="center">
                                                <v-col cols="12" sm="8">

                                                    <v-text-field v-model.trim="email" :rules="loginMailRules" label="Email"
                                                        outlined dense color="blue" autocomplete="false" class="mt-16" />
                                                    <v-text-field v-model.trim="password" :rules="loginPasswordRules"
                                                        label="Password" outlined dense color="blue" autocomplete="false"
                                                        type="password" />
                                                    <!-- <v-row>
                                                    <v-col cols="12" sm="7">
                                                        <v-checkbox label="Remember Me" class="mt-n1" color="blue">
                                                        </v-checkbox>
                                                    </v-col>
                                                    <v-col cols="12" sm="5">
                                                        <span class="caption blue--text">Forgot password</span>
                                                    </v-col> 
                                                    </v-row>-->
                                                    <v-btn color="blue" @click="submitForm" dark block tile>Log in</v-btn>

                                                    <!-- <h5 class="text-center  grey--text mt-4 mb-3">Or Log in using</h5>
                                                <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                                                    <v-btn depressed outlined color="grey">
                                                        <v-icon color="red">fab fa-google</v-icon>
                                                    </v-btn>
                                                    <v-btn depressed outlined color="grey">
                                                        <v-icon color="blue">fab fa-facebook-f</v-icon>
                                                    </v-btn>
                                                    <v-btn depressed outlined color="grey">
                                                        <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                                                    </v-btn>
                                                </div> -->
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-card-text>
                                </v-col>
                                <v-col cols="12" md="6" class="bg-blue rounded-bl-xl">
                                    <div style="  text-align: center; padding: 180px 0;">
                                        <v-card-text class="text-white">
                                            <h3 class="text-center ">Don't Have an Account Yet?</h3>
                                            <h6 class="text-center">Let's get you all set up so you can start creating your
                                                your first<br> onboarding experience</h6>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn tile outlined dark class="text-blue" @click="step++">SIGN UP</v-btn>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-window-item>
                        <v-window-item :value="2">
                            <v-row>
                                <v-col cols="12" md="6" class="bg-blue rounded-br-xl">
                                    <div style="  text-align: center; padding: 180px 0;">
                                        <v-card-text class="text-white">
                                            <h3 class="text-center ">Alredy Signed up?</h3>
                                            <h6 class="text-center">Log in to your account so you can continue building
                                                and<br> editing your onboarding flows</h6>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn tile outlined dark class="text-blue" @click="step--">Log in</v-btn>
                                        </div>
                                    </div>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-card-text class="mt-12">
                                        <h4 class="text-center">Sign Up for an Account</h4>
                                        <h6 class="text-center  text-grey ">Let's get you all set up so you can start
                                            creatin your <br>
                                            first onboarding experiance</h6>
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="8">
                                                <v-row>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model.trim="name" :rules="signupNameRules"
                                                            label="First Name" outlined dense color="blue"
                                                            autocomplete="false" class="mt-4" />
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model.trim="lastName" :rules="signupLastNameRules"
                                                            label="Last Name" outlined dense color="blue"
                                                            autocomplete="false" class="mt-4" />
                                                    </v-col>
                                                </v-row>
                                                <v-text-field v-model.trim="signupMail" :rules="signupMailRules"
                                                    label="Email" outlined dense color="blue" autocomplete="false" />
                                                <v-text-field v-model.trim="signupPassword" :rules="signupPasswordRules"
                                                    label="Password" outlined dense color="blue" autocomplete="false"
                                                    type="password" />
                                                <!-- <v-row>
                                                    <v-col cols="12" sm="7">
                                                        <v-checkbox label="I Accept AAE" class="mt-n1" color="blue">
                                                        </v-checkbox>
                                                    </v-col> 
                                                     <v-col cols="12" sm="5">
                                                        <span class="caption blue--text ml-n4">Terms &Conditions</span>
                                                    </v-col>
                                                </v-row> -->
                                                <v-btn color="blue" dark block tile>Sign up</v-btn>

                                                <!-- <h5 class="text-center  grey--text mt-4 mb-3">Or Sign up using</h5>
                                                <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                                                    <v-btn depressed outlined color="grey">
                                                        <v-icon color="red">fab fa-google</v-icon>
                                                    </v-btn>
                                                    <v-btn depressed outlined color="grey">
                                                        <v-icon color="blue">fab fa-facebook-f</v-icon>
                                                    </v-btn>
                                                    <v-btn depressed outlined color="grey">
                                                        <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                                                    </v-btn>
                                                </div> -->
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>


export default {
    data: () => ({
        step: 1,
        valid: false,
        email: "",
        password: "",
        signupPassword: "",
        name: "",
        signupMail: "",
        lastName: "",

        formIsValid: false,
        mode: "login",
        loginMailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            v => v.indexOf('.') - v.indexOf('@') > -1 || 'E-mail should contain a vaild domain name',
            v => v.indexOf('.') <= v.length - 3 || "Email should contain a valid domain extension"
        ],
        loginPasswordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 8 || 'Password must be more than 8 characters',
        ],
        signupMailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        signupNameRules: [
            v => !!v || 'Name is required',
        ],
        signupLastNameRules: [
            v => !!v || 'Last Name is required',
        ],
        signupPasswordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 8 || 'Password must be more than 8 characters',
        ],

    }),
    props: {
        source: String
    },
    methods: {
        submitForm() {
            if (this.email && this.password) {
                this.$store.dispatch('login', { email: this.email, password: this.password })
                this.$router.push({ name: 'TodoView' })
            } else {
                this.$store.dispatch('showSnackbar', { text: 'Please fill in all fields', color: 'error' })
            }
        },
        swithAuthMode() {

        }
    }


}
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>