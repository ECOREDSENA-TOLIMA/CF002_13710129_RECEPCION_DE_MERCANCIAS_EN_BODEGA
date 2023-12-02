<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Devolución y desconsolidación de mercancías, procesos que abarca la gestión logística de productos no deseados o defectuosos y la separación de envíos consolidados en operaciones comerciales. Incluye procesos para reintegrar productos, minimizar costos y mantener la eficiencia de la cadena de suministro. Temas clave involucran coordinación logística, implementación de políticas de devolución, tecnologías de seguimiento y la importancia de prácticas efectivas en la desconsolidación. La satisfacción del cliente, la integridad de los productos y la optimización operativa son elementos esenciales, destacando la relevancia de estrategias sólidas para garantizar un flujo logístico fluido y eficaz.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se muestran los temas principales del componente formativo, devolución y desconsolidación especificando cada uno de sus sub temas. ")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
