export const Config = {
    LOCAL: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        PERSONA_SERVICE: '',
        DOCUMENTO_SERVICE: '',
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
        MINUTAS_ARGO_SERVICE:   'http://localhost:8089/v1/',
        CONTRATO_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services/contratoSuscritoProxyService/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
            CLIENTE_ID: 'e36v1MPQk2jbz9KM4SmKhk8Cyw0a',
            RESPONSE_TYPE: 'id_token token',
            REDIRECT_URL: 'http://localhost:4200/',
            SCOPE: 'openid email role documento',
            SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:4200/',
        },
    },
    PRUEBAS: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        PERSONA_SERVICE: '',
        DOCUMENTO_SERVICE: '',
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
        MINUTAS_ARGO_SERVICE:   'http://localhost:8080/v1/',
        CONTRATO_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services/contratoSuscritoProxyService/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co:8244/authorize',
            CLIENTE_ID: 'bpT1LDoodD1wNUTPD3I2QM_0JVYa',
            RESPONSE_TYPE: 'id_token token',
            REDIRECT_URL: 'http://localhost:4200/',
            SCOPE: 'openid email role documento',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:4200/',
        },

    },
    PREPROD_LOCAL: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        PERSONA_SERVICE: '',
        DOCUMENTO_SERVICE: '',
        CONF_MENU_SERVICE: 'https://autenticacion.udistrital.edu.co:8244/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
        MINUTAS_ARGO_SERVICE:   'http://localhost:8080/v1/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co:8244/authorize',
            CLIENTE_ID: 'e36v1MPQk2jbz9KM4SmKhk8Cyw0a',
            RESPONSE_TYPE: 'id_token token',
            REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
            SCOPE: 'openid email role documento',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
        },
    },
    PREPROD_NUBE: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        PERSONA_SERVICE: '',
        DOCUMENTO_SERVICE: '',
        CONF_MENU_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
        MINUTAS_ARGO_SERVICE:   'http://localhost:8080/v1/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
            CLIENTE_ID: 'iKu3JoaAbsqLoQTpIjjFlz9RfIga',
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email role documento',
            REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
            SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
        },
    },
};

export const GENERAL = {
    ENTORNO: Config.LOCAL,
};
