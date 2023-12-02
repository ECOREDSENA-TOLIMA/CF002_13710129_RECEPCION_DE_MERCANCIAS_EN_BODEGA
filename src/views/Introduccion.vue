<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12
        p.mb-4 En este componente formativo se abordarán los conceptos básicos de consolidación, desconsolidación y devolución de mercancías las cuales juegan un papel crucial en la gestión logística y comercial. Este proceso implica el retorno de productos no deseados o defectuosos al proveedor o al centro de distribución, así como la separación de mercancías consolidadas en envíos individuales. La eficiente devolución y desconsolidación son fundamentales para mantener la integridad de la cadena de suministro, minimizar costos y satisfacer las expectativas del cliente. Este flujo logístico demanda una cuidadosa coordinación entre diferentes actores y sistemas, destacando la importancia de implementar prácticas efectivas para garantizar operaciones fluidas y clientes satisfechos. 
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="Devolución y desconsolidación de mercancías" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Devolución y desconsolidación de mercancías
  
  
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
