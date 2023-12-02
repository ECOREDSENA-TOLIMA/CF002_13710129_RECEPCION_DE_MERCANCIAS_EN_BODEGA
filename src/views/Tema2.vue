<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Consolidación y desconsolidación de mercancías

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-primario.p-4.px-lg-5
          .row.justify-content-center
            .col-md-2.col-10
              figure 
                img(src='@/assets/curso/temas/tema2/tema2-1.svg', alt='')
            .col-md-10.col-12
              p.mb-0 Con el fin de facilitar las operaciones de distribución y almacenamiento en la logística se utiliza un procedimiento llamado consolidación, que consiste en agrupar los productos en una unidad de carga, y desconsolidación, el cual equivale a separar la carga en las unidades de medida de acuerdo con las especificaciones del cliente.
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Técnicas

    p.mb-5(data-aos="fade-down") Aunque puede existir una amplia variedad de técnicas para consolidar y desconsolidar productos, de acuerdo con el tipo de mercancía, naturaleza de la carga, especificaciones del cliente, cantidades solicitadas, entre otros, hay elementos generales que se deben establecer, teniendo únicamente el enfoque de la recepción de mercancías, ya que es el objetivo y alcance del presente contenido de formación.

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Consolidación de mercancías
        h3.mb-0.d-block.d-md-none.mx-3 Consolidación de mercancías

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es un proceso logístico que permite a las empresas reducir los costos para transportar sus productos. Este servicio logra la agrupación de diferentes cargas, con productos de diferentes especificaciones para un mismo cliente, siendo transportados en el mismo vehículo. Gracias a esto se evita duplicar el personal y los procesos de entrega, además que se beneficie la reducción de tiempos y costos de los procesos, si se debiera entregar un vehículo por cada tipo de producto. 

    p.mb-5(data-aos="fade-down") Algunas de sus principales ventajas son:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-secundario.p-4.px-lg-5
          ul.lista-ul.mb-0
            li.mb-0
              span.icon ✔ 
              | Unir mercancías de varias especificaciones o proveedores para reducir los costos del transporte.
            li.mb-0
              span.icon ✔ 
              | Logra que las empresas micro, pequeñas y medianas puedan recibir entregas a nivel local, nacional e internacional con varios productos consolidados a un costo logístico bajo. 
            li.mb-0
              span.icon ✔ 
              | Mejora los niveles de ocupación física en los medios de transporte en que se movilice la mercancía (avión, terrestre, marítimo, etc.). 
            li.mb-0
              span.icon ✔ 
              | Permite que las entregas lleguen de manera rápida, beneficiando al transportista y a los clientes.
            li.mb-0
              span.icon ✔ 
              | Logra instaurar economía de escalas en el transporte.

    p.mb-5(data-aos="fade-down") Para realizar los procesos de consolidación es necesario conocer los volúmenes de carga a transportar en un vehículo o contenedor, los cuales se pueden clasificar en dos categorías:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-2.col-10.mb-md-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/tema2-3.svg', alt='')
      .col-md-10.col-12
        p.mb-4 #[b La carga consolidada LTL (#[em Less than truck]):] es el tipo de consolidación de carga que mezcla diferentes productos de un mismo pedido o diferentes pedidos para varias empresas, compartiendo los espacios y precios del transporte. Él envió de LTL permite cargar los vehículos dependiendo del volumen y peso para ahorrar tiempo y dinero, teniendo en cuenta que los productos van al mismo cliente o la ruta de distribución tiene entregas cercanas. Algunas ventajas de la carga consolidada son: 
        ul.lista-ul.mb-0.ms-3
          li
            span.icon ✔ 
            | Economía, ya que un solo viaje puede generar ahorros en combustible, peajes, entre otros.
          li
            span.icon ✔ 
            | Logra el acceso en nuevos mercados, por medio del transporte de productos a diferentes clientes cercanos.
          li
            span.icon ✔ 
            | Disminuye el tiempo de distribución por cada ruta.
          li
            span.icon ✔ 
            | Genera ganancias, gracias a que se carga un vehículo con varios productos hasta completar su capacidad.

    p.mb-5(data-aos="fade-down") La técnica para consolidar diferentes productos en un mismo embalaje o varios embalajes de diferentes productos en un mismo vehículo debe contemplar los siguientes elementos:

    .tarjeta.color-primario.mb-5.p-4.p-lg-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            p Los productos más pesados deberán están en la parte inferior del empaque y sobre ellos los productos más livianos.
            p Ejemplo, en una caja deberá empacarse la panela (producto más pesado), en la parte inferior y sobre estas se colocará el café (producto más liviano), antes de sellar la caja.
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema2/tema2-4.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            p De la misma forma los embalajes más pesados deberán estar en la parte inferior y sobre ello deberán estar los productos más livianos. Ejemplo, en un vehículo deberán cargarse las cajas de limpiadores en la parte inferior y sobre estas los embalajes de papel higiénico.
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema2/tema2-5.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            p La carga debe ser asegurada para que el movimiento en el transporte no genere averías. Ejemplo, las diferentes referencias de productos lácteos son empacadas en canastillas y estas son aseguradas para que no se movilicen en el vehículo.
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema2/tema2-6.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            p Los embalajes para un mismo cliente deben incluir productos con compatibilidad química y que no generen averías. Ejemplo, si un cliente pide detergente y pan no se puede mezclarse en la misma caja, ni en el mismo vehículo para evitar que el pan absorba el aroma del detergente.
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema2/tema2-7.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            p Los productos empacados en un mismo embalaje deben ser conservados en condiciones físicas similares, sin que se afecten las características de estos. 
            p Ejemplo, no se puede consolidar y transportar en una misma canastilla o en un mismo vehículo helados y yogures, ya que el helado se transporta bajo cero grados centígrados para mantenerse congelado y el yogur debe estar aproximadamente a cinco grados centígrados, por lo que si se transporta en conjunto el yogurt se congela o el helado se derretirá.
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema2/tema2-8.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-2.col-10.mb-md-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/tema2-9.svg', alt='')
      .col-md-10.col-12
        p.mb-4 #[b La carga completa FTL (#[em Full truck load]):] este tipo de consolidación aplica cuando las cantidades de productos enviadas para un cliente tiene grandes volúmenes, con los cuales se puede enviar en un solo embalaje las mismas referencias de producto y/o en un mismo camión se pueden cargar solo embalajes de un mismo producto. Algunas ventajas de la carga completa son:
        ul.lista-ul.mb-0.ms-3
          li
            span.icon ✔ 
            | Mayor rapidez tanto en el cargue, descargue e inspección del recibo de los productos.
          li
            span.icon ✔ 
            | Una alta utilización del vehículo o #[em container].
          li
            span.icon ✔ 
            | Se reduce la posibilidad de averías de los productos por contaminación química o física.
          li
            span.icon ✔ 
            | Reducción de costos por pagos de varios viajes y disminución de costos de seguro para el transporte de la carga.

    p.mb-5(data-aos="fade-down") La técnica para consolidación productos iguales en un mismo embalaje o varios embalajes del mismo producto en un mismo vehículo debe contemplar los siguientes elementos:

    .tarjeta--container.row.mb-5(data-aos="zoom-in-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/ej-01.svg', alt='')
        h4.text-center Idénticos
        p Como todos los productos son idénticos en forma y peso se debe buscar el mejor acomodo geométrico en el embalaje para evitar pérdidas de espacios; pero respetando los sentidos de acomodación recomendados por el fabricante. Ejemplo, si se transporta gaseosa enlatada se deben empacar de forma vertical una junto a la otra, para evitar los daños generados por el peso si se empacaron las latas horizontalmente. 
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/ej-02.svg', alt='')
        h4.text-center Peso máximo
        p Aunque los embalajes de un mismo producto tengan la misma forma, el mismo tamaño y peso deben tenerse en cuenta para el proceso de consolidación, en un vehículo el peso máximo que puede soportar para evitar averías. Ejemplo, aunque se empaquen cajas de galletas, el fabricante recomienda colocar un máximo de 5 cajas una sobre la otra, ya que si se coloca un mayor número de cajas el peso partirá las galletas de la caja inferior.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/ej-03.svg', alt='')
        h4.text-center Asegurar
        p La carga debe ser asegurada para que el movimiento de los productos en el embalaje no genere averías. Ejemplo, una caja de botellas de vidrio de vino es empacada en una caja con divisiones de cartón corrugado, que amortigua el roce entre las botellas con el movimiento.

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Desconsolidación de mercancías
        h3.mb-0.d-block.d-md-none.mx-3 Desconsolidación de mercancías

    p.mb-4(data-aos="fade-down") Consiste en desagrupar los envíos o empaques consolidados en el mismo embalaje, estiba o vehículo, los cuales pueden contener uno o varios productos diferentes en varias cantidades. Algunas de sus principales ventajas son: 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12.col-lg-10
        ul.lista-ul.mb-0
          li
            span.icon ✔ 
            | Permite desconsolidar la carga en las cantidades comerciales de los productos.
          li
            span.icon ✔ 
            | Mejora los niveles de ocupación física de la estantería en las bodegas, ya que la mercancía desconsolidada tiene dimensiones y pesos más reducidos, permitiendo eficiencia en la acomodación.
          li
            span.icon ✔ 
            | Facilita los procesos de comercialización en unidades diferentes a la del embalaje.
          li
            span.icon ✔ 
            | Permite realizar la mezcla de pedidos para un cliente que solicita diferentes cantidades de diferentes tipos de productos.
          li
            span.icon ✔ 
            | Genera utilidades en el proceso de comercialización, con las ventas unitarias de los productos desconsolidados. 

    p.mb-5(data-aos="fade-down") La técnica para la desconsolidación de productos de en un mismo embalaje o varios embalajes de una estiba o un vehículo debe contemplar los siguientes elementos:

    .tarjeta.color-secundario.mb-5.p-4.p-lg-5(data-aos="fade-down")
      SlyderB.mb-5(:datos="datosSlyder")

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Operaciones matemáticas

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-5.col-10.mb-3.mb-md-0.d-flex.align-items-stretch
        figure
          img(src='@/assets/curso/temas/tema2/tema2-15.png', alt='')
      .col-md-7.col-12.d-flex.align-items-stretch
        .cajon.color-acento-contenido-c.p-4.p-lg-5
          p.mb-0 Para realizar los procesos de consolidación y desconsolidación de productos, embalajes y estibas es requerido conocer operaciones matemáticas de conversión de medidas, entre las cuales se deben contemplar el sistema de unidad de medida y el tamaño de la unidad medida, que son:

    p.mb-5(data-aos="fade-down") #[b Sistemas de unidades de medidas:] son reconocidas a nivel mundial y definen los estándares de las magnitudes físicas (tiempo, longitud, peso, volumen, corriente, temperatura). Estos estándares fueron definidos por diferentes comités técnicos a través de la historia y en la actualidad para los procesos de recepción de mercancías los sistemas que más se utilizan son: 

    .tarjeta--container.row.mb-5(data-aos="zoom-in-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/ej-04.svg', alt='')
        h4.text-center Sistema inglés
        p Se originó con el imperio británico en el Siglo XIX, en el cual se definieron e implementaron las unidades de medidas como una ley para todas sus colonias en el mundo, por lo cual se popularizó, ya que si se desea comercializar con algún país colonial del imperio debería conocerse este sistema.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/ej-05.svg', alt='')
        h4.text-center Sistema internacional
        p Con los procesos de globalización en la comercialización se decidió establecer a finales del Siglo XX un sistema común reconocido y utilizado por todos los países del mundo.

    p.mb-5(data-aos="fade-down") Es importante tener en cuenta que el sistema internacional es el más reciente y es el más utilizado en nuestros días; sin embargo, varios países aún mantienen el sistema inglés y para el caso de Colombia algunos productos se comercializan tanto en el sistema inglés como en el sistema internacional, razón por lo cual para la recepción de mercancía es necesario conocer las equivalencias en las principales unidades de magnitud que se utilizan en el recibo de productos, como se muestra en la siguiente tabla: 

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 4. </b> <i>Conversiones entre el sistema inglés y el sistema internacional</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:1024px")
            thead
              tr
                th(style="width:20%") Magnitud
                th Unidades con el sistema inglés 
                th Unidades con el sistema internacional 
                th(style="width:20%") Equivalencia 
            tbody
              tr.text-center
                td(rowspan="4")
                  p Pulgada (in)
                td
                  p Pulgada (in)
                td
                  p Centímetros (cm)
                td
                  p 1 in = 2.54 cm
              tr.text-center
                td
                  p Pie
                td
                  p Centímetros (cm)
                td
                  p 1 pie = 30.48 cm
              tr.text-center
                td
                  p Yarda (yd)
                td
                  p Metros (m)
                td
                  p 1 yd = 0.914 m
              tr.text-center
                td
                  p Milla (mi)
                td
                  p Kilómetro (km)
                td
                  p 1 mi = 1.609 km
              tr.text-center
                td(rowspan="3")
                  p Peso 
                td
                  p Libra (lb)
                td
                  p Gramos (g)
                td
                  p 1 lb = 453.6 g
              tr.text-center
                td
                  p Onza (oz)
                td
                  p Gramos (g)
                td
                  p 1 oz = 28.35 g
              tr.text-center
                td
                  p Tonelada (t) 
                td
                  p Kilogramos (kg)
                td
                  p 1 t = 907.2 kg
              tr.text-center
                td(rowspan="3")
                  p Volumen 
                td
                  p Galón (gal)
                td
                  p Litro (L)
                td
                  p 1 gal = 3.785 L
              tr.text-center
                td
                  p Pie cúbico 
                td
                  p Litro (L)
                td
                  p 1 pie3 = 28.32 L

    p.mb-5(data-aos="fade-down") Cada una de las magnitudes tiene diferentes unidades de medida, de acuerdo con el contenido de cada producto, por lo que es importante conocer cuáles son las diferentes unidades de medida con su respectivo equivalente entre ellas. Por lo cual, se presentan las conversiones de las principales magnitudes del sistema internacional utilizados en el proceso de recibo de mercancías:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-2.col-10.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-16.svg', alt='')
      .col-md-10.col-12
        p #[b Peso:] Físicamente su definición es una fuerza gravitatoria sobre un objeto; pero en los procesos de recepción de mercancías, el peso equivale a la cantidad de contenido de un producto en un estado sólido, por ejemplo, los productos recibidos en esta magnitud son el arroz, el frijol, el azúcar, el atún, los detergentes en polvo, las barras de jabón, entre otros.

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 5. </b> <i>Conversiones entre las unidades de peso en el sistema internacional</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:1024px")
            thead
              tr
                th 
                th Kilogramo (kg)
                th Hectogramo (hg)
                th Decagramo (dag)
                th Gramo (g)
                th Decigramo (dg)
                th Centigramo (cg)
                th Miligramo (mg)
            tbody
              tr.text-center
                td.text-start Kilogramo (kg)
                td 1
                td 10
                td 100
                td 1.000
                td 10.000
                td 100.000
                td 1.000.000
              tr.text-center
                td.text-start Hectogramo (hg)
                td 0.1
                td 1
                td 10
                td 100
                td 1.000
                td 10.000
                td 100.000
              tr.text-center
                td.text-start Decagramo (dag)
                td 0.01
                td 0.1
                td 1
                td 10
                td 100
                td 1.000
                td 10.000
              tr.text-center
                td.text-start Gramo (g)
                td 0.001
                td 0.01
                td 0.1
                td 1
                td 10
                td 100
                td 1.000
              tr.text-center
                td.text-start Decigramo (dg)
                td 0.0001
                td 0.001
                td 0.01
                td 0.1
                td 1
                td 10
                td 100
              tr.text-center
                td.text-start Centigramo (cg)
                td 0.00001
                td 0.0001
                td 0.001
                td 0.01
                td 0.1
                td 1
                td 10
              tr.text-center
                td.text-start Miligramo (mg)
                td 0.000001
                td 0.00001
                td 0.0001
                td 0.001
                td 0.01
                td 0.1
                td 1
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-2.col-10.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-17.svg', alt='')
      .col-md-10.col-12
        p #[b Longitud:] una definición práctica para esta magnitud equivale a la distancia medida entre dos puntos. Con lo cual se puede encontrar en los procesos de recibo la cantidad recibida de cables, hilos, cremalleras, entre otros, los cuales tienen la constante de tener siempre el mismo ancho. Adicionalmente, si a esta unidad de medida se le incluye un segundo segmento de longitud en otra coordenada se obtiene un área, con la cual se puede aplicar a otros productos recibidos, por ejemplo, el baldosín se comercializa por área, que es una unidad de medida que se obtiene al multiplicar largo por ancho. 

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 6. </b> <i>Conversiones de longitud lineal</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:1024px")
            thead
              tr
                th 
                th Centímetro (cm)
                th Metro (m)
                th Kilómetro (km)
                th Pulgada (pulg - in)
                th Pie
                th Yarda
                th Milla
            tbody
              tr.text-center
                td.text-start Centímetro (cm)
                td 1
                td 0,01
                td 0,00001
                td 0,393701
                td 0,0328083
                td 0,0109361
                td 6,21371
              tr.text-center
                td.text-start Metro (m)
                td 100
                td 1
                td 0,001
                td 39,3701
                td 3,28084
                td 1,09361
                td 6,21371
              tr.text-center
                td.text-start Kilómetro (km)
                td 1
                td 1000
                td 1
                td 3,93701
                td 3280,4
                td 1093,6
                td 0,621371
              tr.text-center
                td.text-start Pulgada (pulg - in)
                td 2,54
                td 0,0254
                td 2,54
                td 1
                td 0,08333
                td 0,027778
                td 1,57828
              tr.text-center
                td.text-start Pie
                td 30,48
                td 0,3048
                td 3,048
                td 12
                td 1
                td 0,333333
                td 1,8939
              tr.text-center
                td.text-start Yarda
                td 91,44
                td 0,9144
                td 9,144
                td 36
                td 3
                td 1
                td 5,6818
              tr.text-center
                td.text-start Milla
                td 1,60934
                td 1609,34
                td 1,60934
                td 6,336
                td 5280
                td 1760
                td 1

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-2.col-10.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-18.svg', alt='')
      .col-md-10.col-12
        p #[b Volumen:] geométricamente es una unidad de medida compuesta por la multiplicación de tres medidas líneas de longitud, siendo el largo por ancho, por alto de un objeto. Pero en los procesos de recepción de productos el volumen se utiliza para definir la cantidad de contenido líquido existente en un empaque, por ejemplo, las bebidas, los adhesivos líquidos, el combustible, los limpiadores líquidos, los perfumes, entre otros.

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 7. </b> <i>Conversiones entre las unidades de volumen en el sistema internacional</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:1024px")
            thead
              tr
                th 
                th Centímetro cúbico (cm3)
                th Litro
                th Metro cúbico (m3)
                th Galón
            tbody
              tr.text-center
                td.text-start Centímetro cúbico (cm3)
                td 1
                td 0,001
                td 1
                td 2,6417 E-4
              tr.text-center
                td.text-start Litro
                td 1000
                td 1
                td 0,001
                td 0,26417
              tr.text-center
                td.text-start Metro cúbico (m3)
                td 1,0 E+6
                td 1000
                td 1
                td 264,17
              tr.text-center
                td.text-start Galón
                td 3785,4
                td 3,7854
                td 3,7854 E-3
                td 1

    p.mb-3(data-aos="fade-down") Con las conversiones de magnitudes indicadas anteriormente, la fórmula matemática permite identificar las equivalencias para la regla de tres, la cual recibe su nombre porque tiene tres variables identificadas, con la que encuentra una cuarta que equivale a la incógnita de la proporción. 
    p.mb-5(data-aos="fade-down") Para su desarrollo se deberá colocar en la parte superior derecha e izquierda la proporción conocida de la equivalencia, en la parte inferior izquierda se colocará la cantidad a convertir para calcular el resultado de la parte inferior derecha, como se muestra en la siguiente tabla:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 8. </b> <i>Fórmula de la regla de tres</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/tabla-8a.svg', alt='En la tabla 8 se especifica la manera como se debe realizar una regla de tres simple teniendo en cuenta la ubicación de términos.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tabla-8b.svg', alt='En la tabla 8 se especifica la manera como se debe realizar una regla de tres simple teniendo en cuenta la ubicación de términos.')
          
    p.mb-5(data-aos="fade-down") Posteriormente, se realizará la multiplicación en cruz entre el dato ingresado en la parte inferior izquierda por el dato colocado en la parte superior derecha y se dividirá por el dato ingresado en la parte superior izquierda.

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Fórmula para la regla de tres</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-2a.svg', alt='En la figura 2 se muestra la fórmula general para realizar una regla de tres simple, teniendo en cuenta la multiplicación de la cantidad para convertir y la equivalencia de la unidad de medida, resultado que se divide por la unidad de medida base.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-2b.svg', alt='En la figura 2 se muestra la fórmula general para realizar una regla de tres simple, teniendo en cuenta la multiplicación de la cantidad para convertir y la equivalencia de la unidad de medida, resultado que se divide por la unidad de medida base.')
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-2.col-10.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-19.svg', alt='')
      .col-md-10.col-lg-8.col-12
        p #[b Ejemplo:] han llegado a la bodega 2.5 kilogramos de un químico para limpieza, el cual se desconsolida en la empresa para ser comercializado por gramos. Para lo cual necesitan identificar cuántos productos finales para comercializar por gramos se obtendrán.  Para este se aplicará la fórmula de la regla de tres:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 9. </b> <i>Ejemplo de uso de la regla de tres, parte 1</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/tabla-9a.svg', alt='En la tabla 9 se muestra un ejemplo de uno de la regla de tres teniendo en cuenta la unidad base de 1 kilogramo y su equivalencia en gramos para conocer a que cantidad hace referencia 2.5 kilogramos.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tabla-9b.svg', alt='En la tabla 9 se muestra un ejemplo de uno de la regla de tres teniendo en cuenta la unidad base de 1 kilogramo y su equivalencia en gramos para conocer a que cantidad hace referencia 2.5 kilogramos.')
          
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Solución del ejemplo de regla de tres</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-3a.svg', alt='En la figura 3 se muestra el desarrollo del ejemplo de la tabla 9 de la regla de tres simple. Dando como resultado que 2.5 kilogramos equivalen a 2500 gramos.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-3b.svg', alt='En la figura 3 se muestra el desarrollo del ejemplo de la tabla 9 de la regla de tres simple. Dando como resultado que 2.5 kilogramos equivalen a 2500 gramos.')
          
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 10. </b> <i>Resultado de conversión</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/tabla-10a.svg', alt='En la tabla 10 se muestra el resultado de la conversión anterior especificando cada uno de los valores en su respectiva ubicación.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/tabla-10b.svg', alt='En la tabla 10 se muestra el resultado de la conversión anterior especificando cada uno de los valores en su respectiva ubicación.')
         
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Procesos de inspección de productos desconsolidados

    p.mb-5(data-aos="fade-down") Son el mecanismo estandarizado con el cual se validan las características de calidad y la cantidad de las estibas entregadas, embalajes y productos recibidos en la empresa. Aunque este proceso puede variar de acuerdo con el tipo de productos y la presentación de la carga consolidada, a continuación, se presentan las generalidades básicas del proceso.

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Inspección de los embalajes desconsolidados
        h3.mb-0.d-block.d-md-none.mx-3 Inspección de los embalajes desconsolidados

    p.mb-5(data-aos="fade-down") En el proceso de recibo de mercancías se deberá verificar en las estibas antes de ser consolidadas y en los embalajes posterior a ser desconsolidados visualmente las siguientes variables:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-secundario.p-4.px-lg-5
          ul.lista-ul.mb-0
            li.mb-2
              span.icon ✔ 
              | Los embalajes se encuentran libres de averías físicas como lo son golpes, roturas, humedad o similares. 
            li.mb-2
              span.icon ✔ 
              | Los embalajes se encuentran libres de contaminación química, la cual se podrá evidenciar por olores diferentes al producto o por manchas en los embalajes, para lo cual el supervisor de la bodega tomará la decisión de devolver las mercancías o inspeccionar el contenido de los embalajes. 
            li.mb-2
              span.icon ✔ 
              | Los embalajes deberán ser separados y clasificados por el tipo de producto a entregar según sea el marcado de las cajas.
            li.mb-2
              span.icon ✔ 
              | El consolidado de los productos se deberá calcular, multiplicando el número de embalajes por el número de productos especificados en cada embalaje.
            li.mb-2
              span.icon ✔ 
              | Las cantidades entregadas en los embalajes deberán ser comparadas y validadas con la factura de entrega y la orden de compra. 
            li.mb-2
              span.icon ✔ 
              | Verificar que los embalajes estén sellados y no evidencien apertura o adulteraciones.
            li.mb-2
              span.icon ✔ 
              | En caso de que exista alguna novedad con la desconsolidación de embalajes se deberá notificar al jefe de bodega, quien decidirá si se continúa con el proceso de inspección de los productos o se procede a una devolución.
            
    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Inspección de los empaques y productos desconsolidados
        h3.mb-0.d-block.d-md-none.mx-3 Inspección de los empaques y productos desconsolidados

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-5.col-10.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-20.png', alt='')
      .col-md-7.col-12
        p Posterior a la inspección de los embalajes se procederá a realizar el proceso de verificación de los productos internos de cada empaque, para lo cual la empresa deberá decidir si realizará una revisión de la totalidad de los productos, abriendo cada uno de los empaques o si definirá un muestreo de algunos empaques para ser verificados. 
        p Uno de los criterios más importantes para tomar la decisión de la muestra de inspección es el costo de la mercancía, ya que si son productos con un alto valor se deberá realizar el conteo total de los productos, otra variable corresponderá al tiempo de inspección, debido a que si el tiempo de conteo y verificación puede costar más que el valor de los productos no valdría la pena realizar este proceso y se dejaría la cifra indicada por la inspección de los embalajes. Un ejemplo de esto es el proceso de recibo de tornillos, los cuales no son contados e inspeccionados uno a uno, porque el tiempo de verificación podría ser más costoso que el valor de cada tornillo. 

    p.mb-5(data-aos="fade-down") Los procedimientos de inspección de los productos al realizar la desconsolidación del embalaje son:    

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        ul.lista-ul.mb-0
          li.mb-2
            span.icon ✔ 
            | Cada empaque deberá ser abierto y extraído cada producto para ser inspeccionado visualmente, con el fin de verificar si se encuentran averías físicas de los productos como lo son rupturas, humedad, rayones o similares.
          li.mb-2
            span.icon ✔ 
            | Posteriormente se deberá inspeccionar olores y colores, con el fin de validar que no exista ningún tipo de contaminación química en los productos.
          li.mb-2
            span.icon ✔ 
            | Las cantidades deberán ser contadas por cada uno de los embalajes, con el fin de validar que coincidan con los datos registrados en el embalaje y no existan faltantes. 
          li.mb-2
            span.icon ✔ 
            | Posteriormente deberán ser totalizadas las cantidades consolidadas de cada una de las referencias de los productos, sumando las cantidades identificadas en cada uno de los embalajes.
          li.mb-2
            span.icon ✔ 
            | Por último, se deberá verificar las referencias y cantidades entregadas físicamente, comparándolas con la factura entregada por el proveedor y la orden de compra solicitada.
          li.mb-2
            span.icon ✔ 
            | En caso de que exista alguna novedad en la inspección de la desconsolidación de los productos se deberá notificar al jefe de bodega, quien decidirá si la mercancía será devuelta o se reciben parciales.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Manipulación y registro de productos

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el proceso de recibo de mercancías en bodegas existen diferentes etapas, en las cuales se debe interactuar con la mercancía al momento de contarla, movilizarse en las diferentes áreas, inspeccionarla y realizar el registro de ingreso con sus respectivas novedades. Por esto es importante conocer las siguientes recomendaciones al momento de la manipulación en la consolidación y desconsolidación.
           
    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Manipulación de mercancías en la desconsolidación
        h3.mb-0.d-block.d-md-none.mx-3 Manipulación de mercancías en la desconsolidación
            
    p.mb-5(data-aos="fade-down") Se debe tratar de minimizar los procesos de manipulación con el fin de evitar averías; sin embargo, es necesario realizar algunas actividades básicas, que son:

    .tarjeta--container.row.mb-5(data-aos="zoom-in-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/ej-07.svg', alt='')
        h4.text-center Manipular en el descargue
        p Esta puede ser realizada por el proveedor o por el personal de la empresa y consistirá en movilizar las estibas y/o embalajes desde la parte interna del vehículo hasta la zona de recibo en la empresa. Este proceso por lo general se efectúa con equipos de transporte interno como lo son montacargas, gatos hidráulicos, bandas transportadoras, entre otros.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/ej-08.svg', alt='')
        h4.text-center Manipulación desconsolidando estiba a embalajes
        p En esta etapa es necesario realizar la manipulación para remover el material de fijación que asegura los embalajes a la estiba como lo son vinipel, zunchos, entre otros. Adicionalmente se deberán separar los embalajes por tipos de productos.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/ej-09.svg', alt='')
        h4.text-center Manipulación desconsolidando embalajes a productos
        p Es el proceso donde el personal manipula los productos para la inspección de sus propiedades como de sus cantidades, razón por la cual se deben abrir los embalajes, extraer los productos, validarlos y posteriormente ser almacenados o distribuidos según lo defina la empresa.
   
    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Manipulación de mercancías en la consolidación
        h3.mb-0.d-block.d-md-none.mx-3 Manipulación de mercancías en la consolidación
           
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-7.col-12.mb-3.mb-md-0
        p En los procesos de recibo de mercancías la actividad de consolidar no es tan frecuente, puesto que la mercancía se entrega agrupada por el proveedor, quien realiza el alistamiento del pedido en sus instalaciones, puede ocurrir cuando se implementa la técnica de #[em croos-docking] (acoplamiento cruzado –  esta traducción del término no existe de forma precisa en el español), que es una técnica logística donde la mercancía que se está recibiendo es desconsolidada y posteriormente se consolidada de forma inmediata en varios pedidos para diferentes clientes, sin requerir de almacenaje y beneficia el flujo de mercancías.
        p En esta operación también se debe tener los mismos cuidados de la manipulación, establecidos en la desconsolidación, entre los cuales se incluyen evitar y generar averías por caídas, golpes, abolladuras, rasgados, contaminación fisicoquímica por mezcla de productos, entre otros. 
      .col-md-5.col-10
        figure
          img(src='@/assets/curso/temas/tema2/tema2-22.png', alt='')

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Registro de la información
        h3.mb-0.d-block.d-md-none.mx-3 Registro de la información
    
    p.mb-3(data-aos="fade-down") De acuerdo con la tecnología disponible en la empresa y la codificación que entregue el proveedor los registros pueden ser más rápidos y confiables, lo cual facilitará el proceso de ingreso de los datos al inventario. 
    p.mb-5(data-aos="fade-down") Esta operación de registro de la información comúnmente se realiza en dos etapas y son: 

    .row.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-md-6.col-lg-6.col-12.mb-5.mb-md-0.d-flex.align-items-stretch
        .tarjeta.color-acento-botones
          img(src='@/assets/curso/temas/tema2/cn_1.png' alt='')
          .p-4
            h4.text-center Registro de embalajes
            p En el momento del recibo se cuenta y se registra el número de embalajes entregados a la empresa. Para lo cual, si los embalajes tienen codificaciones como códigos de barras o chips en los productos y la empresa cuenta con lectores se puede generar la captura de forma sincronizada con el #[em software] que tenga la empresa para la gestión de almacenes.
            p Si la empresa no cuenta con dispositivos tecnológicos para el registro de los embalajes, la información debe ser diligenciada en planillas físicas, para un posterior registro en el mecanismo que la empresa seleccione, el cual puede ser un control en documentos físicos, hojas de cálculo de Excel o un #[em software] especializado.
      .col-md-6.col-lg-6.col-12.mb-5.mb-md-0.d-flex.align-items-stretch
        .tarjeta.color-acento-botones
          img(src='@/assets/curso/temas/tema2/cn_2.png' alt='')
          .p-4
            h4.text-center Registro de productos
            p Posterior a la inspección de los productos ya desconsolidados se deberá registrar cada producto, con el fin de validar que corresponda a la mercancía solicitada y el uso de la tecnología facilita este proceso, por medio de la lectura de las codificaciones de cada producto, pudiendo realizar la identificación y registro de forma automática de los datos del producto y las cantidades ingresadas.
            p Si la empresa no cuenta con dispositivos tecnológicos para el registro de los empaques, se deberá registrar la información en las planillas físicas que establezca la empresa, para un posterior registro en el mecanismo que la empresa seleccione, el cual puede ser desde un control en documentos físicos, hojas de cálculo de Excel o un #[em software] especializado.




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Se debe extraer las estibas (<em>pallets</em>) del furgón o contenedor, por medio de un vehículo que facilite la movilidad a la zona de inspección en la empresa, sin generar averías en los productos, ni daño al personal.',
        imagen: require('@/assets/curso/temas/tema2/tema2-10.png'),
      },
      {
        titulo: '',
        texto:
          'Las estibas recibidas deben ser desconsolidadas, para lo cual deberá ser retirado el material de fijación de las estibas, el cual puede ser vinipel (película polimérica expandible con la que se fija y se asegura los embalajes en una estiba), zunchos (cintas poliméricas o metálicas utilizadas para amarrar embalajes a una estiba) y posteriormente desconsolidar en cada embalaje.',
        imagen: require('@/assets/curso/temas/tema2/tema2-11.png'),
      },
      {
        titulo: '',
        texto:
          'En caso de que los embalajes contengan diferentes productos deberán clasificarse para validar posteriormente su contenido. En el ejemplo anterior se pudo establecer que la estiba contenía 8 embalajes de color verde y 24 de color café, los cuales fueron acomodados de forma estratégica para evitar averías, ya que los productos de la caja verde podrían ser más livianos.',
        imagen: require('@/assets/curso/temas/tema2/tema2-12.png'),
      },
      {
        titulo: '',
        texto:
          'Se deberá abrir cada uno de los embalajes para validar el contenido y en esta etapa se deberá confirmar que el contenido coincida con los productos solicitados, tanto en cantidades como en especificaciones.',
        imagen: require('@/assets/curso/temas/tema2/tema2-13.png'),
      },
      {
        titulo: '',
        texto:
          'Es importante contemplar que las cajas de embalaje, estibas, vinipel y zunchos deben ser separados para ser reciclados o reutilizados, si aplica en posteriores entregas.',
        imagen: require('@/assets/curso/temas/tema2/tema2-14.png'),
      },
    ],
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
