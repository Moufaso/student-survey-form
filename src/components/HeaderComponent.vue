<template>
    <!-- Header -->
    <div class="sticky-top">
        <header class="container-fluid">
            <div class="row align-items-center">
                <div class="col-auto">
                    <div class="row align-items-center">
                        <div class="col-auto gx-3"><img class="logo" src="../assets/logo-black.png"></div>
                        <div class="col-auto gx-0">
                            <h1>CS Department<br><span class="bold">Homepage</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Navbar -->
        <div class="container-fluid" style="background-color: #333;">
            <nav class="navbar navbar-expand-sm navbar-dark">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-nav collapse navbar-collapse align-items-start" id="navbarToggler">
                    <RouterLink class="nav-link" to="/home">Home</RouterLink>
                    <RouterLink class="nav-link" to="/survey">Survey</RouterLink>
                    <RouterLink class="nav-link" to="/list">List</RouterLink>
                </div>
            </nav>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HeaderComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
