<template>
  <div id="app" >
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire"
    >
      <v-container id="bg" class="pt-16">

        <v-layout justify-end>

          <v-flex xs12 sm7 md6 lg6>

            <div class="text-center marg">

              <v-btn color="primary"
                     elevation="3"
                     large  class="black--text primary">Ingresar sesion

              </v-btn>

              <v-btn text to="/sign-up" color="black"
                     elevation="3"
                     large  class="white--text ">Registrate</v-btn>
            </div>

            <v-card elevation="4" light tag="section" >
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">
                  </h3>
                  <v-flex>
                    <v-avatar size="50%" >
                      <img
                              src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png"
                              alt="John"
                      >
                    </v-avatar>
                  </v-flex>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <p>Don't have an account? <a>Create your account</a>, it takes less than a minute</p>
                <v-form>
                  <v-text-field
                          outline
                          label="Email/Username"
                          type="text"
                          v-model="username"></v-text-field>
                  <v-text-field
                          outline
                          hide-details
                          label="Password"
                          type="password"
                          v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <div class="text-center pb-6">
                <v-btn depressed color="primary">
                  Ingresar
                </v-btn>
              </div>



            </v-card>
          </v-flex>
        </v-layout>

        <div>
          <div class="text-left ">
            <h1 class="text-sm-h2 font-italic  white--text ">Welcome to </h1>
            <h1 class="text-sm-h2 font-weight-bold white--text">TUTOFAST</h1>

          </div>
        </div>


      </v-container>


    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'login',

    data: () => ({

    }),
  }
</script>


<style scoped>
  #inspire {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url( 'https://themuslimahdiariesblog.files.wordpress.com/2020/12/critical-thinking-pic.jpg') no-repeat center center;
    background-size: cover;
    background-color: red;
  }
</style>