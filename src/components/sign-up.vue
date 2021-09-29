<template>
  <div id="app" >
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"  id="inspire"
    >
      <v-container id="bg" class="pt-10">

        <v-layout justify-end>

          <v-flex xs12 sm7 md5 l6>

            <div class="text-center marg">

              <v-btn text to="/"
                     elevation="3"
                     large  class="white--text">Ingresar sesion

              </v-btn>

              <v-btn  color="primary"
                      elevation="3"
                      large  class="black--text primary">Registrate</v-btn>
            </div>

            <v-stepper v-model="e1">
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card elevation="4" light tag="section" >
                    <v-card-title class="blue--text">
                      Elija una categoria

                      <v-card-text class="black--text">
                        Ingresa los datos en los campos establecidos y seleccione una categoria.
                      </v-card-text>



                    </v-card-title>

                    <v-layout align-center justify-space-between>
                      <v-flex>
                        <v-avatar size="55%" >
                          <img
                                  src="https://icon-library.com/images/user-image-icon/user-image-icon-13.jpg"
                                  alt="Avatars"
                          >
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                    <v-card-text>
                      <h3 class="blue--text">User </h3>
                      <v-icon
                              medium
                              color="blue darken-2"
                      >
                        mdi-arrow-down-drop-circle
                      </v-icon>
                    </v-card-text>

                    <v-form>
                      <v-text-field
                              outline
                              label="Ingrese un username"
                              type="text"
                              v-model="username"></v-text-field>
                      <v-text-field
                              outline
                              label="Escriba una constraseña"
                              type="password"
                              v-model="password"></v-text-field>
                      <v-text-field
                              outline
                              hide-details
                              label="Vuelva a escribir la contraseñas"
                              type="password"
                              v-model="password"></v-text-field>
                    </v-form>
                    <div class="text-right pb-6">
                      <v-btn depressed color="primary">
                        Siguiente
                      </v-btn>
                    </div>
                    <h4 class="font-weight-bold">Copyright Bebelopers</h4>


                  </v-card>

                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>


          </v-flex>
        </v-layout>

        <!---<div>
          <div class="text-left ">
            <h1 class="text-sm-h2 font-italic  white--text ">Welcome to </h1>
            <h1 class="text-sm-h2 font-weight-bold white--text">TUTOFAST</h1>

          </div>
        </div>!--->


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