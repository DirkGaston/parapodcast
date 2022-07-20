# Parapodcast Activity

Sitio web oficial del podcast de comedia PARAPODCAST ACTIVITY.

[Enlace al sitio](https://parapodcast-activity.web.app)

![Parapodcast Activity](https://i.imgur.com/803OeHo.png)


De momento el sitio se encuentra sólo accesible bajo registro de usuario, permite al usuario consultar toda la información relativa al podcast, con una guía de episodios y posibilidad de reproducirlos directamente. 

También se pueden marcar los episodios que se han escuchado y ordenar esa lista dentro del perfil de usuario. A futuro la idea es añadir funcionalidad para poder puntuarlos y poder dejar comentarios en sus respectivas páginas.

Existe una página de administración en la que AÑADIR episodios y editar toda la información. Esta funcionalidad de momento permanece visible a todo usuario registrado, no obstante las reglas de seguridad de FIRESTORE designan a un usuario ADMINISTRADOR que es el único con permiso para realizar estas operaciones.

Como pequeño valor añadido, el sitio está conectado a la API de la NASA para mostrar una imagen aleatoria de su base de datos cada día, indicando también la fecha.

## Herramientas Empleadas 🛠️

El proyecto ha sido creado en VUE y el framework de trabajo elegido en este caso ha sido QUASAR. Se ha hecho uso de las siguientes dependencias:

+ Quasar (framework UI)
+ Axios (consumo de API)
+ VUE Router (enrutamiento)
+ VUEX (administración de estado)
+ Vue Social Sharing (funcionalidad para compartir contenido en redes sociales)
+ VueJS Twitter Feed (embedding de la timeline del Twitter oficial del programa)
+ VueperSlides (carrusel personalizado)
+ Firestore (base de datos)
+ Firebase Hosting
+ Cypress (testing e2e)

## Accesos de Administración

**Correo**: dirkgaston87@gmail.com  
**Password**: test123

## Instalación de Dependencias 🚀

```bash
yarn
# or
npm install
```

## Levantar Servidor de Desarrollo

```bash
quasar dev
```

## Realizar Build para Producción
```bash
quasar build
```

## Testing e2e

Se ha ejecutado un test e2e utilizando **Cypress**
```bash
yarn e2e:test
```
El test cubre todas las funcionalidades del sitio, desde el registro de un usuario hasta las distintas operaciones que puede realizar el administrador.

## Autor ✒️
[Dirk Gastón](https://github.com/dirkgaston)

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
