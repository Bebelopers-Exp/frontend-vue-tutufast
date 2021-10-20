<template>
    <nav>
        <v-toolbar app flat class="grey lighten-3">
            <v-icon class="black--text" @click="drawer = !drawer">mdi-menu</v-icon>
            <span >
                <v-card-text>DOCENTE</v-card-text>
            </span>
            <span class="d-none d-sm-flex">
                    <v-card-text>MIRAFLORES</v-card-text>
            </span>
            <span class="d-none d-sm-flex">
                <v-card-text>UBICACION ACTUAL</v-card-text>
            </span>
            <v-spacer></v-spacer>
            <v-icon class="d-none d-sm-flex" color="primary">mdi-bell</v-icon>
            <v-avatar>
                <v-icon color="primary">
                    mdi-account-circle
                </v-icon>
            </v-avatar>
            <span class="font-weight-black">
                JESUS DURAN
            </span>
        </v-toolbar>

        <v-navigation-drawer app class="indigo" v-model="drawer">
            <v-list dense>

                <h1 class="white--text text-center mb-4">Tuto <b class="blue--text">Fast</b></h1>
                <v-list-item-group  dark >
                    <v-list-item v-for="(item,i) in items" :key="i" router :to="item.route">
                        <v-list-item-icon>
                            <v-icon color="primary" v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>

            </v-list>

        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "bar-teacher",
        data () {
            return {
                drawer: true,
                items: [
                    { icon: 'mdi-circle', text: 'Main', route: '/teacher-main'},
                    { icon: 'mdi-book-variant', text: 'Clases', route: '/teacher-classes'},
                    { icon: 'mdi-cash', text: 'Ingresos', route: '/teacher-incomes'},
                    { icon: 'mdi-account', text: 'Perfil del Usuario', route: '/perfil'}

                ]
            }
        }
    }
</script>

<style scoped>

</style>