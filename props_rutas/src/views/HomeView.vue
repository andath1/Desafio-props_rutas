<template>
  <div class="principal">
      <header class="masthead" style="background-image:url('assets/img/home-bg.jpg');">
    <div class="overlay"></div>
    <div class="container ">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="site-heading">
                    <h1 class="hhome">V8</h1><span class="subheading">Noticias y reseñas de automóviles</span></div>
            </div>
        </div>
    </div>
</header>
<div class="container">
    <div class="row">
        <div class="col-md-10 col-lg-8">
            <div class="post-preview">
                <router-link to="/post/1">
                    <h2 class="post-title"><strong>Chevrolet presenta la totalmente nueva Blazer</strong></h2>
                    <h3 class="post-subtitle">Llega&nbsp;como la primera SUV deportiva de la marca</h3>
                </router-link>
            </div>
            
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
    name:"HomeView"
}
</script>

<style>
.principal{
    margin-left: 20px;
    background-image:url('https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/suv-and-crossovers/2019-blazer/mov/01-images/chevrolet-blazer-suv-4x4-diseno.jpg?imwidth=960 ');
    background-repeat: no-repeat;
    background-size: cover;
    height: 750px;   
}
.hhome,.site-heading,.post-title,.post-subtitle{
    text-align: left;
    color: rgb(90, 247, 247);
    margin-left: 10px;
    font-family: 'Times New Roman', Times, serif;
}

</style>