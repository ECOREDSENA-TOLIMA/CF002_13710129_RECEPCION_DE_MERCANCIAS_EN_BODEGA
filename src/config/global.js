export default {
  global: {
    componenteFormativo: 'Devolución y desconsolidación de mercancías',
    descripcionCurso:
      'Los procesos de devolución y desconsolidación de la carga permiten garantizar que los productos conformes sean desagrupados en la unidad de medida requerida por el cliente, para ello se deberán conocer las principales técnicas y procedimientos de inspección, con el fin de generar una devolución documental y de producto, en caso de ser necesario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Devolución de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Procedimientos de una devolución',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Documentos y registro de una devolución',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Consolidación y desconsolidación de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Operaciones matemáticas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procesos de inspección de productos desconsolidados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Manipulación y registro de productos',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_13710129.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Devolución de mercancías',
      referencia:
        'Soluciones Logísticas y Aduaneras E&S. (2020). <em>Qué son y cómo manejar las devoluciones.</em> ',
      tipo: 'Video',
      link: 'https://youtu.be/osTe8gwtUaA',
    },
    {
      tema: 'Documentos y registro de una devolución',
      referencia:
        'Itop Academy. (2020). <em>Tutorial Solicitud de devolución de mercancía.</em> ',
      tipo: 'Video',
      link: 'https://youtu.be/8ps0E7Yk3kw',
    },
    {
      tema: 'Consolidación y desconsolidación de mercancías',
      referencia:
        'Henao, A., Nicholls, L. y Castaño, S. (2016). <em>Optimización de costos de transporte nacional a partir de consolidación y desconsolidación de cargas.</em> ',
      tipo: 'Documento',
      link:
        'https://repositorio.esumer.edu.co/jspui/bitstream/esumer/2383/1/Trabajo%20de%20Grado.pdf',
    },
    {
      tema: 'Regla de tres simple',
      referencia:
        'Ecosistema de recursos educativos digitales SENA. (2022). <em>La regla de 3 (proporcionalidad).</em> ',
      tipo: 'Video',
      link: 'https://youtu.be/jBy0s72XiAo',
    },
    {
      tema:
        'Ubicación, consolidación y desconsolidación de la mercancía y objetos postales',
      referencia:
        'Ecosistema de recursos educativos digitales SENA. (2022). <em>Ubicación, consolidación y desconsolidación de la mercancía y objetos postales: introducción.</em> ',
      tipo: 'Video',
      link: 'https://youtu.be/fkhynnTHNc8',
    },
  ],
  glosario: [
    {
      termino: 'Cuarentena',
      significado:
        'para la temática su significado será el tiempo que debe permanecer almacenada y aislada una mercancía sospechosa de algún tipo de virus o plaga, mientras se realizan los procesos de análisis e inspección.',
    },
    {
      termino: 'Estiba (<em>pallet</em>)',
      significado:
        'es una estructura movible colocada en la base de la mercancía consolidada, utilizada para facilitar los procesos de almacenamiento y movilidad de los productos.',
    },
    {
      termino: 'Empaque',
      significado:
        'es un contenedor para un producto específico, el cual tiene la función de proteger de agentes externos; mantener las propiedades internas, es decir, ser un instrumento para el <em>marketing</em>; facilitar el almacenamiento y transporte de mercancías.',
    },
    {
      termino: 'ICA',
      significado:
        'es el Instituto Colombiano Agropecuario, que es una entidad pública de Colombia que regula procesos y productos del sector agrícola colombiano. Adicionalmente, el ICA también es un impuesto aplicado a la industria y comercio en Colombia.',
    },
    {
      termino: 'INVIMA',
      significado:
        'entidad colombiana dedicada al proceso de vigilancia de los productos de la industrias médica y alimentaria.',
    },
    {
      termino: 'IVA',
      significado:
        '<span>es el Impuesto al Valor Agregado en Colombia, el cual está incluido en la gran mayoría de productos y servicios.</span>',
    },
    {
      termino: 'Logística',
      significado:
        'son los procesos de coordinación de la gestión de los recursos para cumplir un fin específico. Se clasifica comúnmente en logística de aprovisionamiento, logística de distribución y logística de producción.',
    },
    {
      termino: 'NIT',
      significado:
        '<span>es el Número de Identificación Tributario, el cual es asignado para realizar el control y trazabilidad fiscal de las empresas y personas naturales en Colombia.</span>',
    },
    {
      termino: 'No conformidad',
      significado:
        'término que define un producto o un servicio que no cumplió uno o varios elementos acordados en la negociación.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'acción de realizar el seguimiento de un proceso o un producto por medio de una información base que permita identificarlo, como pueden ser códigos de barras o número de facturas. ',
    },
    {
      termino: 'Muestreo',
      significado:
        'técnica con la cual se selecciona un grupo de empaques o productos para realizar una inspección, con el fin de validar un lote de productos. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Cargo Flores. (2022). <em>Servicios de gestión logística integral.</em> ',
      link: 'https://www.cargoflores.com/service/gestion-logistica-integral/',
    },
    {
      referencia:
        'Euroinnova. (2023). <em>¿Qué son los flujos de mercancías?.</em> ',
      link:
        'https://www.euroinnova.co/blog/flujo-de-mercancias-en-el-almacen#:~:text=Los%20flujos%20de%20mercanc%C3%ADas%20o,es%20apto%20para%20la%20venta',
    },
    {
      referencia: 'Mora, L. (2011). Gestión logística integral. Marge Books.',
      link:
        'https://www.ecoeediciones.mx/wp-content/uploads/2016/12/Gestion-logistica-integral-2da-Edici%C3%B3n.pdf',
    },
    {
      referencia:
        'Transeop (2023). ¿Qué es la logística integral?, ¿Cuáles son sus ventajas?. ',
      link:
        'https://www.transeop.com/blog/LOGISTICA-INTEGRAL-QUE-ES-VENTAJAS/325/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eric Daniel Moreno Muñoz',
          cargo: 'Experto Temático',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Giovanna Andrea Escobar',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboar e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gòmez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
