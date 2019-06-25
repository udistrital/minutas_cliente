# :ledger: Admin - minutas_argo_cliente, Argo
Este ropositorio contiene el cliente utilizado para la gestion de las plantillas usadas en Argo, en el resente cliente se permite: 

- Buscar contratos segun la dependencia escogida.
- Visualizar un contrato ya existente.
- Editar un contrato ya existente.
- Crear un nuevo contrato con base en uno ya previamente existente.
- Colocar una fecha apartir de la cual el nuevo contrato comenzara a ser vigente.


Como componentes básicos cuenta con:
 * **ngxAdmin** ~ [link_documentación](https://github.com/akveo/ngx-admin)
 * **Angular 6.0**
 * **Bootstrap 4**
 * **Nebular Components**
 * **Material Angular**

### Requisitos.

- NodeJs.
- AngularCli.

<details>
<summary><h2> 🛠️ Configuracion del proyecto</h2></summary>

  - Clonar el repositorio del proyecto

```shell
git clone https://github.com/udistrital/minutas_argo_cliente.git
```
  - Dentro de la carpeta del proyecto, intalar las dependencia.

  ```shell 
      npm install
  ```
  - 🚀 Correr el proyecto para verificar que las dependencias estan correctamente instaladas

  ```shell 
      ng serve
  ```
  o
  ```shell 
      npm start
  ```
</details>
<summary><h2> :pick: Dependencias Utilizadas</h2></summary>
<details>
    Dependencias incluidas:

  - **[Nebular](https://github.com/akveo/nebular)** 
  - **Angular 6**
  - **Bootstrap 4** 
  - **[Material Angular](https://material.angular.io/)** 

  ### API MID
  - **movilidad_academica_mid:** este [api](https://github.com/udistrital/movilidad_academica_mid). se encarga de gestionar la logica de negocio relacionada con el manejo de informacion relacionada con los estudiantes/docentes entrantes y salientes.

  ### API CRUD
  - **movilidad_academica_crud:** este [api](https://github.com/udistrital/movilidad_academica_crud). se encarga de gestionar las tablas del esquema de .....

  ### Variables de entorno
  ```typescript 
      {
      
          NUXEO: 'servicio de gestion y almacenamiento de documentos.',
        WSO2_SERVICE: 'servicio de autenticacion unica',
        DOCUMENTO_SERVICE: 'servicio de almanecamiento de ID de documentos enviados a Nuxeo(no se usa actualmente en este aplicativo)',
        CONF_MENU_SERVICE: 'servicio para obtener el menu a mostrar en la aplicacion',
        MINUTAS_ARGO_SERVICE:   'servicio CRUD para gestionar las plantillas',
        CONTRATO_SERVICE: 'servicio para obtener los cntratos segun la dependencia seleccionada',
  };
  ```
</details>