<template >
    <div class="classes-teacher grey lighten-3">
        <bar-teacher/>

        <v-content class=" my-2 pt-3 pl-0" >
            <v-container>
                <v-layout row wrap class="mx-auto">
                    <v-flex md6>
                        <v-card>
                            <v-row no-gutters>
                                <v-col>
                                    <v-card-title >HOY, 20</v-card-title>
                                    <v-card-subtitle >LUNES, OCT</v-card-subtitle>
                                </v-col>
                                <v-divider/>
                                <v-col >
                                    <v-card-title class="justify-center">4</v-card-title>
                                    <v-card-subtitle class="text-center">Horas</v-card-subtitle>
                                </v-col>
                                <v-col>
                                    <v-card-title class="justify-center">2</v-card-title>
                                    <v-card-subtitle class="text-center">Alumnos</v-card-subtitle>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row no-gutters>

                                <v-col>
                                    <v-card-text>
                                        <v-icon color="green" left>mdi-circle</v-icon> Marocs Ramirez
                                    </v-card-text>
                                </v-col>

                                <v-col>
                                    <v-card-text class="text-center">Fisica</v-card-text>
                                </v-col>
                                <v-col>
                                    <v-card-text class="text-center">3:00 PM</v-card-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-flex>
                    <v-divider></v-divider>
                    <v-flex md5>
                        <v-card class="mb-3">
                            <v-card-title class="font-weight-bold">CURSOS</v-card-title>
                            <v-card-text>Visualiza las clases realizadas o en pendientes
                            por el curso que enseña.</v-card-text>
                        </v-card>
                        <v-card class="pa-3">
                            <v-row no-gutters justify="center">
                                <v-date-picker
                                        v-model="date"
                                        readonly
                                ></v-date-picker>
                            </v-row>
                        </v-card>


                    </v-flex>
                </v-layout>



            </v-container>
        </v-content>
    </div>
</template>

<script>
    import BarTeacher from "@/components/bar-teacher";
    export default {
        name: "classes-teacher",
        components: {BarTeacher},
        data () {
            return {
                date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

            }
        }
    }
</script>

<style scoped>

</style>