<template>
<div class="sobremi">
  <header class="masthead" style="background-image:url('assets/img/about-bg.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="site-heading">
                    <h1 class="hsobremi">Sobre mí</h1>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="container">
    <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
            <p>Este es un blog dedicado al mundo automotor, en el cual te mostraré las últimas novedades de automóviles, los lanzamientos más recientes y te enseñaremos algunos tips para cuidar tu vehículo.</p>
            <p>Este es un medio independiente. Si te gusta nuestro contenido, ayúdanos en Patreon o haciendo una donación a través de PayPal. Te lo agradeceré mucho.</p>
        </div>
    </div>
</div>

</div>
</template>

<script>
export default {
    name:"SobremiView"
}
</script>

<style>
.sobremi{
    background-image: url('https://images1.autocasion.com/actualidad/wp-content/uploads/2020/06/salon-ginebra.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    color: white;
}
.hsobremi{
    color: white;
}
.row{
    margin-left: 30px;
    margin-right: 30px;
}
.site-heading{
    padding-top: 20px;
}
</style>