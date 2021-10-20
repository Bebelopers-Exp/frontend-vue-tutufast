<template>
    <div class="incomes-teacher grey lighten-3">
        <bar-teacher/>
        <v-container class=" my-2 pt-3 pl-0">
            <v-card-title>Your Card</v-card-title>

            <v-row class="justify-center ">
                <v-col cols="4" md="4">
                    <v-card >
                        <v-card-title>Interbank</v-card-title>
                        <v-card-text>3777 1355 12356 12315</v-card-text>
                        <v-row>
                            <v-col>
                                <v-card-title>Year</v-card-title>
                                <v-card-subtitle>2020</v-card-subtitle>
                            </v-col>
                            <v-col>
                                <v-card-title>Desde</v-card-title>
                                <v-card-subtitle>10/23</v-card-subtitle>
                            </v-col>
                        </v-row>
                        <v-card-title>JESUS DURAN</v-card-title>

                    </v-card>
                </v-col>

                <v-col cols="2" md="3">
                    <v-card>
                        <v-card-title>S/10.000</v-card-title>
                        <v-card-subtitle>Ingresos</v-card-subtitle>
                        <v-card-text>Banco Interbank</v-card-text>
                        <v-card-title class="justify-end">PEN</v-card-title>
                    </v-card>
                </v-col>

                <v-col cols="2" md="5">
                    <v-card>
                        <v-card-title class="justify-center">My transaction</v-card-title>
                        <v-list dense>
                            <v-list-item class="text-center">
                                <v-list-item-content>
                                    <div class="d-flex flex-row">
                                        <v-icon large>mdi-circle</v-icon>
                                        <div>
                                            <v-card-title>Cobro Marzo</v-card-title>
                                            <v-card-subtitle class="text-left">TutoFast S.A.C.</v-card-subtitle>
                                        </div>

                                    </div>

                                </v-list-item-content>

                               <v-list-item-content >
                                   <v-card-title class="justify-center">+100</v-card-title>
                               </v-list-item-content>
                            </v-list-item>

                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import BarTeacher from "@/components/bar-teacher";

    export default {
        name: "incomes-teacher",
        components: {BarTeacher}

    }
</script>

<style scoped>

</style>