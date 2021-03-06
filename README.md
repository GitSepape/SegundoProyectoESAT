# SegundoProyectoESAT

## Objetivo
En este proyecto se pretende crear una tienda web de smoothies caseros. Los usuarios podrán adquirir la materia prima de la frutería/verdulería más cercana.

La idea es montar una estructura de negocio donde participen el mayor número de pequeños comercios de barrio y promover la pequeña industria sin olvidarnos de mantener también una dieta equilibrada y un planeta sostenible, evitando el uso de macrogranjas donde poco a poco van destruyendo el sistema.

El diseño y los elementos de este, pueden visualizarse en: - Figma

### Requisitos

#### Instalación

Debes clonar el repositorio del proyecto.

#### Contribuir

Debes crear un pull request al proyecto.

#### Programas utilizados

El proyecto se ha construido con los siguientes programas:

Para el diseño:

- Para el diseño:

  - <a href="https://www.figma.com/">Figma</a>: diseño de wireframes.
  - <a href="https://www.adobe.com/products/illustrator.html">Illustrator</a>: diseño de logotipo e iconos.
- Para el desarrollo:

  - <a href="https://code.visualstudio.com/">Visual Studio Code</a>: editor de código fuente.
  - <a href="https://prepros.io/">Prepos</a>: compilador de archivos.

#### Nomenclatura

##### Clases

La convención de nombre para las clases de los elementos sigue el patrón BEM:

.bloque{}
.bloque__elemento{}
.bloque--modificador{}

'.bloque' representa el primer nivel de una abstracción o componente, es el elemento padre. '.bloque__elemento' representa un hijo del elemento padre '.bloque'. '.bloque--modificador' representa un estado diferente de '.bloque'.

##### Etiquetas archivos sass

Para la localización rápida de archivos sass emplearemos etiquetas en texto comentado, por ejemplo:

//-------$VARIABLES
//-------$CARDS

##### Estructura del respositorio del proyecto

Para nuestro proyecto aplicaremos la metodología de ramas de Gitflow, basada en cinco palabras clave, estas determinaran la estructura de nuestro repositorio.

En primer lugar, tenderemos la rama principal llamada main, donde está el código definitivo. No se debe trabajar directamente sobre ella.

La segunda rama mas importante de nuestro repositorio será la develop, donde se guardan las nuevas funcionalidades del proyecto. (No hacer commits directamente sobre ella.)

Para el desarrollo de las nuevas funcionalidades crearemos una rama nueva, para cada funcionalidad, que salga de la nombrada anteriormente, y la llamaremos feature/funcionalidad. Al finalizar la nueva funcionalidad la mezclamos con la rama Develop para que los cambios queden allí guardados. (Una vez mezclada estas ramas, se puede borrar la Feature.)

Es importante tener una rama llamada hotfix, se encarga de solucionar los incidentes. (Esta rama debe ser generada a partir de la Main.)

Al implementar las features en la develop, pueden surgir errores. Para solucionar estos errores se crea una rama hotfix-error a partir de la develop, en la que se soluciona el error y se realiza un pull request a la rama develop.

Por últimos tendremos la rama releaes, se utiliza para la entrega a producción o ambiente real. En ella se harán las pruebas para el cliente. (Una vez terminada la prueba si no tiene ningún fallo se mezcla con la rama Main.)

### SCSS

Los archivos scss son los encargados de aportar los estilos necesarios a los elementos html, estos se encuentran organizados en la carpeta sass/.

Estructura del repositorio sass/

- sass/
  - style.scss
  - variables/
    - _variables.scss
  - utilities/
    - _functions.scss
    - _mixins.scss
  - site/
    - _site.scss
  - components/
    - _images.scss
    - _lines.scss
  - layout/
    - _main.scss
    - _header.scss
    - _cards.scss
    - _navigation.scss
    - _footer.scss


#### Variables

Las variables que se emplearán en este proyecto se encuentra en el archivo sass/utilites/_variables.scss. Estas variables globales definen los colores, el espaciado y las tipografías de todo el documento.

#### Espaciado

Para el espaciado la unidad base será 6px, de la cual se emplearán sus múltiplos en función del espaciado que necesitemos. Para las tags del proyecto usaremos 12px vertical y 24px horizontales para las resoluciones pequeñas y el doble para las resoluciones grandes. Las tarjetas tendrán 24px horizontal en todas las resoluciones.

$space-unit: 6px;

#### Color

La paleta de colores a utilizar en este proyecto estará declarada de la siguiente manera.

$color-brown
$color-ligth-green
$color-dark-green
$color-orange

#### Fuentes

En cuanto a las fuentes, se ha elegido Freedoka. 

#### Recursos multimedia

Los recursos multimedia a emplear en el documento web, se guardarán en la carpeta resources/ e images/. Las imágenes deben de estar optimizadas y no deben superar un peso de 300kb.

#### PHP

En los archivos PHP se programan los diferentes componentes de la web. Cada componente tiene una carpeta con los archivos que lo forman.

Para ejecutar el proyecto, debemos tener instalado un servidor local, dejo enlaces a los más utilizados: XAMPP: https://www.apachefriends.org/es/index.html MAMP: https://www.mamp.info/de/downloads/ LAMP: https://bitnami.com/stack/lamp/installer

Después de instalar el servidor debemos meternos en las carpetas de la aplicación y buscar una llamada htdocs, en esta carpeta habra que meter la carpeta del proyecto que queremos ejecutar. Finalmente habría que inicar Apache y MySQL en el servidor y al buscar localhost/nombre de la carpeta, deberia aparecernos el directorio.

se programa como si fuese un archivo HTML, el código HTML va fuera de las etiquetas de PHP ( ). Las etiquetas como body, head... Ya estan creadas no hace falta volver a crearlas, y los estilos ya estan enlazados.

### **Vídeo explicativo para la ejecución de PHP**

    https://www.youtube.com/watch?v=p8Ozqop6O3s 