<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Devolución de mercancías

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-5.col-10.mb-2.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema1/tema1-1.png', alt='')
      .col-md-7.col-12
        .cajon.color-secundario.p-4.mb-3
          p.mb-0 Es un procedimiento en el cual un producto o un servicio que no cumple con las especificaciones negociadas retorna al proveedor, razón por la cual el cliente espera una restitución del valor pagado o el cambio del producto o servicio por uno que contenga las características solicitadas. 
        p.mb-0 Las devoluciones se presentan en diferentes niveles, ya sea desde el consumidor final que retorna el producto al comercializador, así como en diferentes etapas de la cadena logística, entre las cuales se incluyen la devolución del comercializador al importador, la devolución del comercializador al fabricante y la devolución del fabricante al proveedor de materias primas, entre otras. 

    p.mb-5(data-aos="fade-down") En toda la cadena logística y comercial existen tres momentos para realizar la devolución, los cuales son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-11.col-lg-10
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Devolución previa al recibo de la mercancía")
            .col-12.mb-2
              p En la cual un cliente inspecciona el producto en el momento de la entrega y se rechaza por no cumplir con las especificaciones de la negociación. Este caso es muy común cuando se entregan productos a domicilio o se reciben mercancías en bodegas o almacenes.  
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-2.png', alt='')
          .row(numero="2" titulo="Devolución por garantías")
            .col-12.mb-2
              p Ocurre cuando el cliente recibe el producto; pero al utilizarlo observa fallas de funcionamiento o incumplimiento en las características pactadas, por lo cual solicita una garantía al proveedor y devolver el producto para un cambio o arreglo según sean las políticas comerciales acordadas. Ejemplos comunes son en artículos con componentes eléctricos como celulares, computadores, entre otros.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-3.png', alt='')
          .row(numero="3" titulo="Devolución posterior al recibo de la mercancía")
            .col-12.mb-2
              p Se presenta cuando el cliente recibió el producto y este cumple las especificaciones acordadas con el proveedor; pero a pesar de esto el cliente posterior a la entrega no se siente satisfecho y solicita un cambio por otro producto, una nota crédito (bono) para una futura compra o la devolución del dinero. 
              p Es importante indicar que no aplica para todos los productos, ni funciona en todas las empresas, ya que depende de los acuerdos comerciales entre el cliente y el proveedor. Ejemplos comunes son productos alimenticios perecederos como pan y bebidas lácteas, que se cambian por otro idéntico en caso de vencerse. 
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-4.png', alt='')

    p.mb-5(data-aos="fade-down") Para establecer los parámetros de un proceso de devolución es necesario conocer cuáles son las causales más comunes y estas pueden variar de acuerdo con las especificaciones de la empresa, del producto, del proveedor y del cliente. Comúnmente se clasifican en:

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Devolución por especificaciones del producto
        h3.mb-0.d-block.d-md-none.mx-3 Devolución por especificaciones del producto

    p.mb-5(data-aos="fade-down") En esta categoría se encuentran aquellas no conformidades asociadas a las características fisicoquímicas del producto recibido, teniendo alguna de las siguientes causales:  

    .tarjeta.color-primario.mb-5.p-4.p-lg-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Productos diferentes a los solicitados
            p Corresponden al proceso de verificación de una orden de compra con el producto recibido, en el cual no coinciden alguna de las siguientes variables como la referencia, el nombre del producto, la marca del producto no es la solicitada y la composición fisicoquímica del producto no es la requerida. 
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Averías del producto
            p Aunque el producto corresponda al solicitado pueden encontrarse evidencias físicas o químicas de daños que impidan recibir el producto, como lo pueden ser rupturas, rasgados, presencia de hongos, cambios de color, cambios de olor, cambios de sabor, entre otros. 
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Faltantes
            p A pesar de que el producto recibido cumpla con lo solicitado y no presente una avería fisicoquímica es necesario validar la correspondencia de las unidades solicitadas con las unidades entregadas, para lo cual es necesario tener en cuenta los sistemas de conversiones y equivalencias, ya que algunos productos pueden variar su unidad de empaque según sea el origen. Las causales de devolución en este factor pueden ser productos incompletos y la pérdida de contenido por el sellado inadecuado. 
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Devolución por empaque y/o embalaje
        h3.mb-0.d-block.d-md-none.mx-3 Devolución por empaque y/o embalaje

    p.mb-5(data-aos="fade-down") A esta categoría pertenecen aquellos defectos o evidencias de adulteración fisicoquímicas que se encuentren en las cajas, bolsas o materiales a fines del empaque, que cumplen la labor de protección y #[em marketing] para comercializar el producto. Dentro de estas causales se encuentran:

    .tarjeta.color-primario.mb-5.p-4.p-lg-5(data-aos="fade-down")
      SlyderB.mb-5(:datos="datosSlyder")

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Devolución por documentación
        h3.mb-0.d-block.d-md-none.mx-3 Devolución por documentación

    p.mb-5(data-aos="fade-down") La garantía de la trazabilidad y origen de los productos se evidencia en los documentos, por lo que un proceso de inspección de estos elementos permitirá la aceptación o el rechazo de los pedidos; pero es importante aclarar que la cantidad y el tipo de documentos varían según el tipo de productos, el origen de la mercancía y las políticas organizacionales. Las principales causales de devolución por documentos son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg-5.mb-md-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='')
      .col-md-6.col-lg-7
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Falta de documentos")
            .col-12.mb-2
              p.mb-0 Para la entrega de la mercancía ya sea embalada o productos individuales es obligatorio que el proveedor entregue una factura, que debe corresponder a la orden o solicitud de compra. Si un proveedor no entrega la factura con el pedido, para la gran mayoría de empresas será una causa de devolución de la totalidad del pedido, debido a que no se pueden verificar que las características correspondan a lo solicitado.
          .row(numero="2" titulo="Documentos obligatorios")
            .col-12.mb-2
              p Su ausencia puede ser causales de devolución:
              ul.lista-ul.ms-3.mb-0
                li.mb-0
                  span.icon ✔ 
                  | Certificados de importaciones con el en fin de evitar contrabando.
                li.mb-0
                  span.icon ✔ 
                  | Certificados de originalidad.
                li.mb-0
                  span.icon ✔ 
                  | Certificados ICA.
                li.mb-0
                  span.icon ✔ 
                  | Certificado INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos).
          .row(numero="3" titulo="Documentos adulterados, incompletos o errados")
            .col-12.mb-2
              p Si la empresa en el proceso de inspección documental evidencia enmendaduras, tachones, información borrosa, datos faltantes o información errónea en uno o en varios documentos mencionados anteriormente, puede devolver parcial o totalmente los productos. 
              p.mb-0 Algunos ejemplos de información errada o vencida causales de una devolución son fechas, datos del proveedor o referencias de los productos registrados en los certificados, tanto de importación como normativos (INVIMA o ICA).
          .row(numero="4" titulo="Precios y valores económicos diferentes")
            .col-12.mb-2
              p.mb-0 Al realizar el comparativo entre la orden de compra y la factura es de vital importancia validar los precios unitarios, los precios totales por producto, los descuentos, el subtotal antes del IVA (impuesto de valor agregado), el valor del IVA y el valor total de la factura, ya que si no coincide un solo elemento deberá cambiarse la factura. 
            
    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Devolución por fechas
        h3.mb-0.d-block.d-md-none.mx-3 Devolución por fechas

    p.mb-5(data-aos="fade-down") Los tiempos son vitales en los procesos de distribución y abastecimiento, porque ellos generan la planeación para satisfacer las necesidades de las ventas y los requerimientos de las compras. En caso de no cumplirse las fechas pactadas puede existir un proceso de devolución, siendo las más comunes en estas categorías:
    
    .tarjeta--container.row.mb-5(data-aos="zoom-in-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/ej-01.svg', alt='')
        h4.text-center Productos entregados en fechas posteriores a lo acordado
        p Esta devolución es aplicable para productos de temporada, en los cuales se ha realizado una planeación para recibir la mercancía y posteriormente enviarla a los puntos de venta para una ocasión especial, por lo cual enviarla después de la fecha acordada puede generar que sean devueltos al proveedor y que no se vendan. 
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/ej-02.svg', alt='')
        h4.text-center Productos con fechas de vencimiento inferiores a lo acordado
        p la gran mayoría de productos alimenticios son considerados perecederos, razón por la cual deben ser distribuidos antes de su vencimiento, se deben considerar los tiempos de almacenamiento en el proveedor, la distribución,  el almacenamiento hasta realizar la venta y tiempo de consumo por parte del usuario final. Algunos distribuidores solicitan en las negociaciones con el proveedor que se entreguen productos con fechas de vencimiento superiores a varias semanas o meses y en caso de no coincidir estas fechas se devolverá al proveedor la mercancía. 

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Devolución por destino
        h3.mb-0.d-block.d-md-none.mx-3 Devolución por destino

    p.mb-5(data-aos="fade-down") En esta categoría de devolución se encuentran los errores de entrega física de mercancías en ubicaciones específicas indicadas por el cliente, los cuales se pueden clasificar en: 

    .row.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-md-6.col-lg-5.col-12.mb-5.mb-md-0.d-flex.align-items-stretch
        .tarjeta.color-acento-botones
          img(src='@/assets/curso/temas/tema1/cn_1.png' alt='')
          .p-4
            h4.text-center Devolución de clientes al por menor
            p Aplica en entregas a domicilio para clientes ocasionales o con bajo volumen de compra y sucede por cambios de nomenclatura en la dirección de entrega, un error en la digitación de la ubicación o por no indicar en la orden de compra que el producto debe ser entregado en un lugar específico diferente a la dirección del comprador. Por lo que al llegar el transportador a la dirección indicada se le notifica que el cliente no existe y deberá ser devuelta la mercancía a la bodega para confirmar los datos, incrementando los costos y tiempos de entrega.
      .col-md-6.col-lg-5.col-12.mb-5.mb-md-0.d-flex.align-items-stretch
        .tarjeta.color-acento-botones
          img(src='@/assets/curso/temas/tema1/cn_2.png' alt='')
          .p-4
            h4.text-center Devolución de clientes al por mayor
            p Sucede cuando se incumple la negociación realizada desde un cliente que cuenta con varios puntos de venta o sedes de una empresa, en las cuales indica al proveedor en su orden de compra las cantidades a entregar para cada punto. 

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Procedimientos de una devolución

    p.mb-5(data-aos="fade-down") Un procedimiento es una secuencia con un orden lógico y metódico, estipulado para cumplir un objetivo específico. En el caso de una devolución se debe establecer una serie de procedimientos que permitan inspeccionar y validar cada uno de los elementos que componen la entrega, con el fin de establecer la causal de la no conformidad y generar la respectiva devolución, este procedimiento puede variar de acuerdo con las políticas de la empresa o características de los productos. A continuación, se presentan los procedimientos más comunes en los tres momentos donde es posible realizar una devolución:

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Devolución previa al recibo de la mercancía
        h3.mb-0.d-block.d-md-none.mx-3 Devolución previa al recibo de la mercancía
    
    p.mb-5(data-aos="fade-down") Las características del siguiente procedimiento contemplan que el proveedor entregará la mercancía en las instalaciones de la empresa del cliente, la mercancía es nueva, existió una solicitud de compra y el pedido se debe entregar completo, es decir, no se reciben entregas con faltantes de productos

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Procedimiento de una devolución previa al recibo de la mercancía</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:1024px")
            thead
              tr
                th(style="width:25%") Actividad de verificación
                th Causal 
                th Procedimiento de la devolución 
            tbody
              tr
                td 
                  p El proveedor debe estar agendado para la entrega.
                td 
                  p En caso de que el proveedor no agende el día y la hora, en empresas que reciben un gran número de productos de diferentes proveedores el vehículo se devolverá sin descargar; pero en empresas Pymes se puede notificar al jefe de bodega quien autorizará la recepción o la devolución.
                td
                  p Se notifica verbalmente al conductor del vehículo que debe ser agendada la recepción de mercancías y se notifica por correo a la compañía la devolución del pedido, argumentando con las políticas organizacionales de la empresa, en las cuales se aclara que el agendamiento se realizará para disponer el personal y los equipos.
              tr.tr-b
                td 
                  p Los documentos del personal para el ingreso y descarga de la mercancía deben estar en regla.
                td 
                  p Si el personal del proveedor no cuenta con ARL, se debe restringir el ingreso a las instalaciones de la empresa, ya que en caso de un accidente del proveedor en el proceso de descarga se podrían generar demandas al cliente.
                td 
                  p Se notifica verbalmente al personal de la empresa que sin ARL no se puede autorizar el descargue y se notifica a la empresa para que envíe la planilla de pago virtual o se reagende la entrega.
              tr
                td 
                  p El lugar de entrega es el negociado en la orden de compra.
                td 
                  p Cuando se valida que el pedido se debía entregar en un punto de venta y no en la bodega principal se devuelve el vehículo antes de realizar el descargue.
                td 
                  p Se notifica verbalmente al conductor cuál es la sede de la entrega y se envía correo a la empresa indicando que no se recibió la mercancía, la sede a la que llegó y la sede donde se debe entregar.
              tr.tr-b
                td 
                  p La factura se entrega y coincide con los datos de productos, precios y descuentos acordados.
                td 
                  p En caso de que el comparativo de la factura entregada por el proveedor y la orden de compra no sean idénticos en las variables de productos y precios se deberá devolver la totalidad del pedido, para evitar inconvenientes legales.
                td 
                  p Se contacta telefónicamente al proveedor y se le indica las diferencias, para efectuar el cambio de factura electrónica, la cual deberá ser enviada vía correo previo al recibo. En caso de no ser recibida se cancelará la recepción y se informará vía correo al proveedor para ser reagendado.
              tr
                td 
                  p Los documentos complementarios están al día y corresponden a los productos a entregar.
                td 
                  p Si faltan documentos, se encuentran enmendaduras o errores en los registros del INVIMA, ICA, certificados de importación u otro acorde con la naturaleza y tipo de mercancía se debe generar una devolución del pedido.
                td 
                  p Se contacta telefónicamente al proveedor y se le indica los documentos faltantes o pendientes a ajustar para ser enviados vía correo electrónico, previo al envío. En caso de no ser recibidos se deberá reagendar la entrega.
              tr.tr-b
                td 
                  p Los embalajes de los productos se encuentran en buenas condiciones aptas para el recibo.
                td 
                  p Posterior a la verificación documental se autoriza el descargue, en el cual se deberán verificar el estado de los embalajes y si se observan averías se procede a evaluar los daños para generar cuarentena o devolución de los productos.
                td 
                  p Se realiza el registro fotográfico y los videos con el estado de los embalajes, los cuales se le envían al proveedor y se indica que la mercancía será devuelta si la avería es grave y en caso de ser daños ligeros se indica que el producto se puede recibir; pero entrará en cuarentena o será susceptible a una devolución posterior.
              tr
                td 
                  p La cantidad de embalaje corresponde al total de productos de la factura y orden de compra.
                td 
                  p Cuando se reciben los embalajes previos a su apertura para validar cantidades por medio de un conteo de las cajas y se multiplica por el contenido de cada embalaje, para obtener el total del producto. En caso de existir una diferencia se realiza la devolución de la mercancía.
                td 
                  p Se notifica verbalmente al encargado de la entrega y se notifica al proveedor telefónicamente del faltante. Adicionalmente, se realiza el registro en video y fotografías para enviar el informe de faltantes por correo electrónico.
              tr.tr-b
                td 
                  p Definición del tamaño del muestreo y conteo de las unidades por embalaje. 
                td 
                  p Posterior a la validación de cantidades con los embalajes se debe decidir si se realiza el conteo de la totalidad de productos o se realiza un muestreo de un embalaje. Este procedimiento depende del tipo de productos, ya que por ejemplo si se reciben puntillas o tachuelas, el procedimiento de conteo de un pedido puede tardar varias horas o días, por lo cual se realiza un conteo aleatorio de algunos embalajes (muestreo). En caso de encontrarse inconformidades en el conteo, el jefe de bodega tomará la decisión de realizar el conteo total de la mercancía o notificar al proveedor la devolución de todo el pedido.
                td 
                  p Se realiza el proceso de conteo con el personal del proveedor que entrega, para que él valide los faltantes, se contacta telefónicamente al proveedor para informar que se devolverá el pedido por faltantes y se envía correo electrónico con un informe y con el soporte fotográfico del registro de faltantes. 
              tr
                td 
                  p Los productos físicos corresponden a la factura y la orden de compra.
                td 
                  p De los productos inspeccionados se deben validar con detalle las especificaciones de presentación, peso, marca y demás datos acordes al tipo de mercancía. En caso de que no cumplan deberán devolverse al proveedor.
                td 
                  p Se notifica verbalmente la diferencia al personal del proveedor que está entregando la carga, se realizan tomas fotográficas y se le envía el informe al proveedor por correo electrónico, notificando la devolución por la diferencia del producto físico con el solicitado.
              tr.tr-b
                td 
                  p Verificar que los productos no tengan averías o defectos.
                td 
                  p Es necesario realizar un proceso de inspección fisicoquímico del producto recibido y si se observan averías o faltantes de contenido el producto deberá ser devuelto.
                td 
                  p Se debe realizar la inspección con el personal del proveedor, al cual se le mostrarán las averías, de las cuales se deberán tomar fotografías, para enviar el informe al proveedor por correo electrónico notificando la devolución.
              tr
                td 
                  p Las fechas de vencimiento de los productos están acorde a lo solicitado.
                td 
                  p Se deben validar las fechas de vencimiento grabadas en las etiquetas del producto, las cuales deben estar acordes a las políticas de negociación de la empresa y en caso de que los productos estén vencidos o próximos a vencerse, los productos deberán devolverse.
                td 
                  p Se notifica al proveedor que uno o varios productos no cumplen con los días de vida exigidos de acuerdo con la negociación, enviando un informe por correo electrónico soportado con fotografías, en las cuales se detallan las fechas de vencimiento de cada producto.
                  
    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Devolución por garantías
        h3.mb-0.d-block.d-md-none.mx-3 Devolución por garantías
    
    p.mb-5(data-aos="fade-down") Para este procedimiento se contempla que el producto se compró y se recibió conforme a las especificaciones solicitadas por el cliente, que ha sido adquirido de forma legal; pero presenta fallas posteriores a la compra y el cliente lo llevó al proveedor.

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Procedimiento de una devolución por garantías</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:1024px")
            thead
              tr
                th(style="width:25%") Actividad de verificación
                th Causal 
                th Procedimiento de la devolución 
            tbody
              tr
                td 
                  p La documentación para validar la compra entregada por el cliente está libre de enmendaduras.
                td 
                  p En caso de encontrar adulteraciones y que el comparativo de la factura entregada por el cliente no corresponda con la información registrada en el sistema de la empresa, no se recibirá la devolución.
                td
                  p Se realiza la toma fotográfica de la documentación entregada por el cliente y la información registrada en el sistema, entregando un informe vía correo electrónico al cliente de las enmendaduras o modificaciones realizadas por las cuales se perdió el derecho de la devolución. 
              tr.tr-b
                td 
                  p El producto se devuelve en las fechas de garantía.
                td 
                  p De acuerdo con las políticas comerciales de la empresa se establecen los tiempos de garantía y en caso de que el cliente realice la devolución posterior a estas fechas se le indicará que no es posible efectuarla.
                td 
                  p Se notifica verbalmente y por correo electrónico al cliente las fechas de compra, tiempos de cobertura de la garantía y se le aclara que la fecha solicitada para el cambio superó estos tiempos.
              tr
                td 
                  p El producto se devuelve completo y con todos sus accesorios. 
                td 
                  p En caso de que el cliente entregue el producto incompleto se le notifica que no puede recibirse para la devolución, ya que el fallo puede ser generado por falta de componentes.
                td
                  p Se debe realizar la toma fotográfica del producto en las condiciones entregadas por el cliente, para generar un informe en el que se le notifica verbalmente y por correo electrónico qué piezas faltan, las cuales pueden ser causales del fallo, motivo por el que no se recibe la devolución. 
              tr.tr-b
                td 
                  p El producto no evidencia daños por mala manipulación o apertura de sus componentes por parte del cliente.
                td 
                  p Al producto debe realizarse una inspección básica frente al cliente para evidenciar daños por mala manipulación, algunos ejemplos son presencia de agua o humedad, averías por golpes o roturas. 
                td 
                  p Se genera un informe con registro fotográfico de las condiciones del producto entregado por el cliente, el cual se le entrega verbalmente y por escrito al correo electrónico del cliente, notificando que por mala manipulación se perdió el derecho a la devolución.
              tr
                td 
                  p El resultado de la inspección del técnico indica que el producto tenía fallas de fabricación.  
                td 
                  p Si se comprueba por el técnico especializado del producto que ha sido expuesto a condiciones diferentes al funcionamiento indicado por el catálogo, la devolución perderá validez, por ejemplo, los resultados de esta valoración corresponden a un fallo por conectar el equipo a un voltaje diferente al indicado en el producto; otro ejemplo corresponde a cambios de piezas internas por parte del cliente.
                td
                  p Se genera un informe con el registro fotográfico de las anormalidades encontradas y se envía al correo electrónico del cliente, notificando que se perdió el derecho a la devolución.
              tr.tr-b
                td 
                  p Notificación de aprobación de la devolución. 
                td 
                  p Si el producto cumplió con los documentos, fechas y está libre de averías por mala manipulación se aprueba la devolución.
                td 
                  p Se debe notificar al cliente vía correo electrónico, que de acuerdo con las políticas de la empresa su devolución fue aceptada, para lo cual se le pedirá que firme los documentos correspondientes y se podrá:
                  ul.lista-ul.ms-3.mb-0
                    li.mb-0
                      span.icon ✔ 
                      | Entregar un producto nuevo idéntico.
                    li.mb-0
                      span.icon ✔ 
                      | Reparar el producto.
                    li.mb-0
                      span.icon ✔ 
                      | Entregar una nota crédito (bono) para que el cliente adquiera un nuevo producto en la empresa.
                    li.mb-0
                      span.icon ✔ 
                      | Devolver al cliente el dinero pagado por el producto. 
         
    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Devolución posterior al recibo de la mercancía
        h3.mb-0.d-block.d-md-none.mx-3 Devolución posterior al recibo de la mercancía
    
    p.mb-5(data-aos="fade-down") El siguiente procedimiento es aplicable, siempre y cuando, exista un previo proceso de negociación para cambios y se hayan establecido las políticas para la devolución.

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Procedimiento de una devolución posterior al recibo de la mercancía</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:1024px")
            thead
              tr
                th(style="width:25%") Actividad de verificación
                th Causal 
                th Procedimiento de la devolución 
            tbody
              tr
                td 
                  p Verificar la documentación para validar la compra y solicitar el cambio por el cliente, debe estar libre de enmendaduras.
                td 
                  p En caso de encontrar adulteraciones y que el comparativo de la factura entregada por el cliente no corresponda con la información registrada en el sistema de la empresa no se recibirá la devolución.
                td
                  p Se realiza la toma fotográfica de la documentación entregada por el cliente y la información registrada en el sistema, se envía un informe por correo electrónico al cliente de las enmendaduras o modificaciones realizadas, por las cuales se perdió el derecho a la devolución.  
              tr.tr-b
                td 
                  p La solicitud de cambio está acorde con las políticas de negociación estipuladas.
                td 
                  p Si el cliente solicita cambios por fechas de vencimiento, por baja rotación, por cambios de referencia u otras y están incluidas en la política de cambios se aceptará la devolución; pero si se solicita el cambio por otra razón no incluida se negará la devolución. 
                td 
                  p Si no aplica la devolución se deberá enviar un correo electrónico al cliente, indicando las políticas de cambios y que su solicitud no se encuentra dentro de estos parámetros.
              tr
                td 
                  p El producto se devuelve completo y con todos sus accesorios.
                td 
                  p En caso de que el cliente entregue el producto incompleto se le notifica que no puede recibirse para la devolución, ya que el fallo puede ser generado por falta de componentes.
                td
                  p Se debe realizar la toma fotográfica del producto en las condiciones entregadas por el cliente, para generar un informe en el que se le notifica verbalmente y por correo electrónico qué piezas faltan.
              tr.tr-b
                td 
                  p El producto no evidencia ser usado. 
                td 
                  p Como es un cambio por baja rotación o fechas de vencimiento el producto no debe estar usado, por lo que si se evidencia que fue usado se perderá el derecho a ser devuelto.
                td 
                  p Se genera un informe con el registro fotográfico de las condiciones del producto entregado por el cliente, se notifica al cliente verbalmente y por correo electrónico que el producto fue usado, por lo cual se perdió el derecho a ser devuelto.
              tr
                td 
                  p Notificación de aprobación de la devolución.
                td 
                  p Si el producto cumplió con los documentos, causales de cambio y no está usado se aprueba la devolución.
                td
                  p Se debe notificar al cliente vía correo electrónico que de acuerdo con las políticas de la empresa la devolución fue aceptada, por lo cual se le pedirá que firme los documentos correspondientes, y se podrá: 
                  ul.lista-ul.ms-3.mb-0
                    li.mb-0
                      span.icon ✔ 
                      | Entregar un producto nuevo idéntico.
                    li.mb-0
                      span.icon ✔ 
                      | Entregar una nota crédito (bono) para que el cliente adquiera un nuevo producto en la empresa.
                    li.mb-0
                      span.icon ✔ 
                      | Devolver al cliente el dinero pagado por el producto.  

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Documentos y registro de una devolución

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-primario.p-4.px-lg-5
          .row.justify-content-center
            .col-md-2.col-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-12.svg', alt='')
            .col-md-10.col-12
              p.mb-0 De acuerdo con las características y la tipología de la empresa pueden existir variaciones en los formatos para registrar los procesos de devolución, los cuales deberán ser diligenciados con cada novedad del proceso de devolución, por lo que el estándar del registro documental equivale a contar con un soporte físico o digital con las características de los productos devueltos, para generar trazabilidad del proceso y tomar acciones correctivas. 

    p.mb-3(data-aos="fade-down") A continuación, se presentan algunos de los documentos más utilizados en una devolución:

    p.mb-3(data-aos="fade-down") #[b Factura:] equivalente al soporte documental de la compra realizada por un cliente a una empresa específica, razón por lo cual este documento contiene la información básica para realizar la trazabilidad de la compra, con el fin de validar si es posible aprobar la entrega de los productos y, para garantías permite validar si aplica la devolución. 
    
    p.mb-5(data-aos="fade-down") Los elementos mínimos que debe contener una factura son:

    LineaTiempoE.color-acento-contenido.mb-5(data-aos="zoom-in-down")
      .row(titulo="01" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2a.svg', alt='')
        .col-lg-10
          h4 Datos de la empresa
          p Debe contener el nombre de la empresa, el NIT (número de identificación tributaria), la dirección, el teléfono y opcionalmente contiene la página web, el correo electrónico, las redes sociales, entre otros.
      .row(titulo="02" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2b.svg', alt='')
        .col-lg-10
          h4 Descripción de productos
          p Debe contener el código de identificación del producto, nombre y descripción del producto con su respectiva unidad de compra.
      .row(titulo="03" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2c.svg', alt='')
        .col-lg-10
          h4 Precios y totales
          p En los cuales se deben establecer precios unitarios, cantidades compradas, subtotal del precio (precio unitario por cantidad comprada), valor del IVA (impuesto de valor agregado), descuentos en caso de que apliquen y el precio total. 
      .row(titulo="04" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2d.svg', alt='')
        .col-lg-10
          h4 Datos generales de la factura
          p Entre los cuales se contemplan fecha de emisión de la factura, número de la factura y datos del cliente que adquirió el producto.

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Elementos de la factura</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='En la figura 1 se muestran los elementos principales que contiene una factura.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='En la figura 1 se muestran los elementos principales que contiene una factura.')
          
    p.mb-4(data-aos="fade-down") #[b Formato de políticas:] en el cual se establecen las decisiones de la empresa respecto a los posibles inconvenientes que puedan presentarse con un producto, este documento debe ser público, para ser consultado por los clientes y en algunos casos se entregan adjuntas al producto o están incluidos en la factura. En este formato se contemplan todas las políticas de cambios, políticas de devoluciones y garantías. 
    p.mb-4(data-aos="fade-down") #[b Informe técnico de la devolución:] este tipo de informe puede tener múltiples variaciones de acuerdo con la forma de realizarlo, las cuales pueden ser en una plantilla estandarizada por la empresa, con un #[em software] especializado y en otros casos se realiza en un correo electrónico. 
    p.mb-5(data-aos="fade-down") Aunque existan variedades de informes, se deben tener presentes los siguientes elementos básicos: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-3a.svg' alt='')
        h4.text-center Datos de la empresa
        p En los cuales se debe indicar el nombre de la empresa, el NIT (Número de Identificación Tributaria), la dirección, el teléfono, la persona que realiza el informe, el cargo de la persona y el correo electrónico.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-3b.svg' alt='')
        h4.text-center Datos del cliente para garantías o del proveedor si es una devolución en el recibo
        p En este espacio se debe incluir el número de identificación (NIT o cédula), nombre de la empresa o cliente, nombre de la persona de contacto, el teléfono, la dirección y el correo electrónico.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-3c.svg' alt='')
        h4.text-center Datos generales del informe técnico
        p Entre los cuales se contempla el número del informe, la fecha del informe, la fecha de entrega de los productos y el lugar donde se recibieron los productos.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-3d.svg' alt='')
        h4.text-center Descripción del proceso de inspección para la devolución
        p En este espacio se incluye el listado de las verificaciones realizadas, con su respectivo soporte fotográfico para los productos devueltos y la descripción de los sucesos ocurridos cuando sean necesarios.
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-3e.svg' alt='')
        h4.text-center Dictamen del informe
        p Deberá contener el resultado de los procesos de inspección e indicar si la devolución aplica, cuál será el mecanismo utilizado por la empresa para restituir al cliente, en caso de garantías (pueden ser: bonos, reparación, cambios) y para entregas de proveedores se deberá indicar los procesos para reagendar citas de entrega, cambios parciales o totales de productos, entre otros.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Empaque o embalajes diferentes a los solicitados',
        texto:
          'De la misma forma que se debe inspeccionar el producto es necesario verificar el empaque con la orden de compra, respecto a las variables de referencia, nombre del producto, marca; pero adicionalmente se debe incluir composición y diseño del empaque, rotulado, entre otros.',
        imagen: require('@/assets/curso/temas/tema1/tema1-8.png'),
      },
      {
        titulo: 'Averías del empaque',
        texto:
          'Las principales funciones del empaque y embalaje son proteger el producto, transmitir información de <em>marketing</em>, facilitar el almacenaje y el transporte. Es por ello que una afectación en el empaque puede afectar su venta, aunque el producto se encuentre en buenas condiciones, ya que el consumidor lo percibirá como un producto de segunda o un producto con posibles daños. ',
        imagen: require('@/assets/curso/temas/tema1/tema1-9.png'),
      },
      {
        titulo: 'Faltantes',
        texto:
          'En el empaque y embalaje se debe garantizar la custodia del contenido, por lo que se debe validar que contenga las unidades del producto, el marcado con las cantidades por embalaje, ya que algunas de ellas son la unidad de venta al por mayor o facilitarán el conteo de productos almacenados.',
        imagen: require('@/assets/curso/temas/tema1/tema1-10.png'),
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
