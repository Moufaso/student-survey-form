<template>
  <HeaderComponent />
  <router-view :key="$route.fullPath" />
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
html {
    font-family: serif;
    background-color: #333;
    margin: 0.5vw;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
}

h1 {
    color: #006633;
    font-weight: lighter;
    font-size: 24px;
    width: 200px;
    margin: 0.2vw;
}

header {
    background-color: #FFCC33;
    border: 5px solid #006633;
    box-shadow: -2.5px -2.5px 5px #333;
}

footer {
    background-color: #006633;
    color: #e6e6e6;
}

body {
    background-color: #e6e6e6;
}

.table caption {
    color: #333;
}

.table th {
    background-color: #006633;
    border-color: #333;
    color: #e6e6e6;
}

.table td,
tr {
    background-color: #e6e6e6;
    border-color: #333;
}

form {
    padding: 0.5vw;
    margin: 0.5vw;
}

label {
    display: inline-block;
    align-items: center;
    padding: 0.7vw;
}


fieldset {
    padding: 1vw;
}

#about-us {
    margin: 1vw;
    font-size: 17px;
}

#ms-degrees {
    margin: 1vw;
    font-size: 16px;
}

.logo {
    width: 90px;
}

.bold {
    font-weight: bold;
}


.participant {
    display: inline-block;
    justify-content: center;
    align-items: center;
}

.required::before {
    content: "* ";
    color: red;
}

.buttons {
    display: flex;
    justify-content: center;
}

.button {
    margin: 5px;
    padding: 5px;
    background-color: #006633;
    border-color: #006633;
    color: #FFCC33;
}

.dialog {
    height: 39vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.error {
    background-color: #FFCC33;
    border: 2px solid #006633;
    border-radius: 5px;
}
</style>
