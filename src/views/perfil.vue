<template>
    <div class="perfil grey lighten-3">
        <bar-teacher/>
        <v-content class=" my-2 pt-3 pl-0">
            <v-container class="mx-auto">
                <v-layout row wrap class="mx-auto" >
                    <v-flex md9 lg9 class="">
                        <v-card class=" mb-3">
                            <v-row no-gutters align="center">
                                <v-col cols="1" class="text-center " >
                                    <v-icon x-large class="align-center">
                                        mdi-circle
                                    </v-icon>
                                </v-col>

                                <v-col cols="11">
                                    <v-card-title>Jesus Duran Huancas</v-card-title>
                                    <v-card-subtitle>Docente</v-card-subtitle>
                                </v-col>
                            </v-row>
                        </v-card>

                        <v-row>
                            <v-col cols="6">
                                <v-card>
                                    <v-card-title >Informacion Basica</v-card-title>
                                    <v-list dense>
                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">Apellidos y Nombres:</v-list-item-content>
                                            <v-list-item-content class="align-end">
                                                Duran Jesus
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">DNI</v-list-item-content>
                                            <v-list-item-content class="align-end">
                                                75863690
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">E-mail:</v-list-item-content>
                                            <v-list-item-content wrap class="align-end" >
                                                <v-list-item-title class="text-wrap">duran-teacher@gmail.com</v-list-item-title>

                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">Numero Tlf.:</v-list-item-content>
                                            <v-list-item-content class="align-end">
                                                987654321
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">Fecha Nac.:</v-list-item-content>
                                            <v-list-item-content class="align-end">
                                                10 de Junio de 1994
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">Direccion</v-list-item-content>
                                            <v-list-item-content class="align-end">
                                                Av. Los Girasoles 125
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">Distrito:</v-list-item-content>
                                            <v-list-item-content class="align-end">
                                                Miraflores
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>

                                </v-card>
                            </v-col >

                            <v-col cols="6">
                                <v-card class="mb-4">
                                    <v-card-title>Informacion Profesional</v-card-title>
                                    <v-list dense>
                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">Universidad de Egresado:</v-list-item-content>
                                            <v-list-item-content class="align-end">
                                                Universidad Peruana de Ciencias Aplicadas UPC
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">Año de Egreso</v-list-item-content>
                                            <v-list-item-content class="align-end">
                                                2012
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-content class="font-weight-bold">Profesión:</v-list-item-content>
                                            <v-list-item-content class="align-end">
                                                Docente en el Area de Ciencia
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                                <v-row class="mb-5">
                                    <v-col cols="5">
                                        <v-card color="blue" dark>
                                            <v-card-title>Pro</v-card-title>
                                            <v-card-subtitle>1 year</v-card-subtitle>

                                            <v-card-text>Pay $30.00 per month</v-card-text>
                                        </v-card>
                                    </v-col >
                                    <v-col cols="7">
                                        <v-card  height="150" white>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-flex>
                    <v-divider></v-divider>
                    <v-flex md3 lg3>
                        <v-card class="mx-5">
                            <v-card-title class="justify-center">CURSOS</v-card-title>
                            <v-card-subtitle class="text-center">Lista de cursos que enseña:</v-card-subtitle>

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
        name: "perfil",
        components: {BarTeacher}
    }
</script>

<style scoped>
    .wrap-text {
        -webkit-line-clamp: unset !important;
    }
</style>