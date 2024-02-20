<template>
  <div id="login-view" class="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="mb-5">
        <img src="../assets/logo.png" alt="Image" class="mb-3" />
        <div class="text-900 text-3xl font-medium mb-3">Login</div>
        <span class="text-500 font-light line-height-3">Welcome back. Enter your credentials to access your account</span>
      </div>

      <div>
        <label for="username1" class="block text-900 font-medium mb-2">Username</label>
        <InputText v-model="username" id="username1" type="text" placeholder="Username" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-2">
          <label for="password1" class="block text-900 font-medium">Password</label>
          <a class="font-medium no-underline ml-2 text-green-600 text-sm text-right cursor-pointer">Forgot password</a>
        </div>
        <InputText v-model="password" id="password1" type="password" placeholder="Password" class="w-full mb-2" />

        <Message v-if="error" severity="error" class="w-full mb-4">Please enter correct username and password</Message>

        <div class="flex align-items-center justify-content-between mb-4 mt-3">
          <div class="flex align-items-center">
            <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
            <label for="rememberme1">Keep me signed in</label>
          </div>
        </div>

        <Button label="Continue" icon="pi pi-user" class="w-full" @click="login()"></Button>
        <div class="text-center mt-5">
          <span class="text-600 font-normal line-height-3">Don't have an account?</span>
          <a class="font-medium no-underline ml-2 text-green-600 cursor-pointer">Sign up here</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginView",

    created() {
      if (sessionStorage.getItem('auth') == 'true') {
        this.$router.push({ path: 'home' });
      }
    },

    data() {
      return {
        username: "",
        password: "",
        error: false,
        checked: false
      }
    },

    methods: {
      login() {
        if (this.username != '' && this.password != '') {
          sessionStorage.setItem('auth', 'true');
          this.$router.push({ path: 'home' });
        } else {
          this.error = true;
        }
      }
    },
  };
</script>
