
export let FORM_LINEA_INVESTIGACION = {
    titulo: 'LineaInvestigacion',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'LineaInvestigacion',
    campos: [
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Id',
        label_i18n: 'id',
        placeholder_i18n: 'id',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Nombre',
        label_i18n: 'nombre',
        placeholder_i18n: 'nombre',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Descripcion',
        label_i18n: 'descripcion',
        placeholder_i18n: 'descripcion',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'CodigoAbreviacion',
        label_i18n: 'codigo_abreviacion',
        placeholder_i18n: 'codigo_abreviacion',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'checkbox',
        claseGrid: 'col-6',
        nombre: 'Activo',
        label_i18n: 'activo',
        placeholder_i18n: 'activo',
        requerido: true,
        tipo: 'checkbox',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'NumeroOrden',
        label_i18n: 'numero_orden',
        placeholder_i18n: 'numero_orden',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'GrupoInvestigacion',
        label_i18n: 'grupo_investigacion',
        placeholder_i18n: 'grupo_investigacion',
        requerido: true,
        tipo: 'number',
    },
    ],
}
