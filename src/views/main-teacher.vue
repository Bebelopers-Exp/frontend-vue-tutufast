<template>
    <div class="main-teacher grey lighten-3">

        <bar-teacher/>

        <v-content class=" my-5 pt-4 pl-0" >
            <v-container>

                <v-card class="mb-5">
                    <v-card-text>Encuentre su tutoria</v-card-text>
                    <v-card-title class="blue--text ">IDEAL,SEGURO Y DE CONFIANZA</v-card-title>
                </v-card>

                <v-card class="mb-5">
                    <v-layout row wrap class="py-2 ma-0">
                        <v-flex xs6 sm4 md4 lg2 v-for="option in options"
                                :key="option.title" class="filter-teacher text-center">
                            <v-card-text class="caption blue--text">
                                {{option.title}}
                            </v-card-text>
                            <v-select

                                    flat
                                    :items="getListFilter(option.info)"
                                    :label="option.info"
                                    solo
                            ></v-select>
                        </v-flex>
                        <v-flex lg2 class="align-self-center text-center">
                                <v-btn color="primary">BUSCAR</v-btn>
                        </v-flex>

                    </v-layout>
                </v-card>

                <v-card class="mb-5">
                    <v-card-text>
                        Seleccione el curso
                    </v-card-text>
                    <v-layout row wrap class="ma-0">
                        <v-radio-group row mandatory class="pl-3">
                            <v-radio
                                    label="Matematica"
                                    value="radio-1"
                            ></v-radio>
                            <v-radio
                                    label="Fisica"
                                    value="radio-2"
                            ></v-radio>
                        </v-radio-group>

                    </v-layout>
                </v-card>

                <v-card>
                    <v-card-text class="font-weight-black text--primary" >RESULTADOS</v-card-text>
                    <v-data-table
                            :headers="headers"
                            :items="students"
                            :items-per-page="5"
                            class="elevation-1"
                    ></v-data-table>
                </v-card>
            </v-container>
        </v-content>
    </div>


</template>

<script>
    //import BarTeacher from "@/components/bar-teacher";
    import BarTeacher from "@/components/bar-teacher";
    export default {
        name: "main-teacher",
        components: {BarTeacher},
        //components: {BarTeacher},
        data () {
            return {
                options: [
                    { title: 'Hora de Inicio', info:'Agregar hora', route:'/' },
                    { title: 'Hora de Fin', info:'Agregar hora', route:'/' },
                    { title: 'Ubicacion (Distrito)', info:'Agregar Distrito', route:'/' },
                    { title: 'Nivel Educativo', info:'Agregar Nivel Educativo', route:'/' },
                    { title: 'Grado educativo', info:'Agregar Grado educativo', route:'/' },

                ],
                hours : [],
                locations: ['Miraflores','Chorrillos','Barranco'],
                education: ['Primaria','Secundaria'],
                grade: ['Primero','Segundo','Tercero','Cuarto','Quinto'],
                courses: [
                    { title: 'Matematica', image: 'https://www.pinclipart.com/picdir/big/42-423230_mathematics-clipart-mathematics-calculation-matematicas-dibujo-blanco-y.png'},
                    { title: 'Ingles', image: 'https://image.flaticon.com/icons/png/512/90/90800.png'}
                ],
                //                headers: ['ID','Estudiante','Curso','Nivel','Grado','Inicio','Fin','Distrito','Opciones'],
                headers: [
                    {
                        text: 'ID',
                        align: 'start',
                        sortable: false,
                        value: 'id'

                    },
                    { text: 'Estudiante', value:'student'},
                    { text: 'Curso', value:'course'},
                    { text: 'Nivel', value:'student'},
                    { text: 'Grado', value:'student'},
                    { text: 'Inicio', value:'student'},
                    { text: 'Fin', value:'student'},
                    { text: 'Distrito', value:'student'},
                    { text: 'Opciones', value:'student'},


                ],
                students: [
                ]
            }
        },
        created() {
            this.retrieveHours();
        },
        methods: {
            retrieveHours() {
                for (let i = 0 ; i <= 23;i++) {
                    this.hours.push(`${i}:00`)
                }
            },
            getListFilter(info) {
                console.log(`Enviando ${info}`)
                console.log(`Option 1 ${this.options[0].info}`)

                if(info == this.options[0].info && info == this.options[1].info)
                    return this.hours;
                if (info == this.options[2].info)
                    return this.locations;
                if (info == this.options[3].info)
                    return this.education;
                if (info == this.options[4].info)
                    return this.grade;
            }
        }
    }
</script>

<style scoped>
    .filter-teacher {
        border-right: 1px solid black
    }
</style>