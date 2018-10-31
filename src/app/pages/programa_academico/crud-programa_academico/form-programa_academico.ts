
export let FORM_PROGRAMA_ACADEMICO = {
    titulo: 'ProgramaAcademico',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'ProgramaAcademico',
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
        nombre: 'CodigoSnies',
        label_i18n: 'codigo_snies',
        placeholder_i18n: 'codigo_snies',
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
        nombre: 'Institucion',
        label_i18n: 'institucion',
        placeholder_i18n: 'institucion',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Metodologia',
        label_i18n: 'metodologia',
        placeholder_i18n: 'metodologia',
        requerido: true,
        tipo: 'Metodologia',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'NivelFormacion',
        label_i18n: 'nivel_formacion',
        placeholder_i18n: 'nivel_formacion',
        requerido: true,
        tipo: 'NivelFormacion',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Titulacion',
        label_i18n: 'titulacion',
        placeholder_i18n: 'titulacion',
        requerido: true,
        tipo: 'Titulacion',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Duracion',
        label_i18n: 'duracion',
        placeholder_i18n: 'duracion',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'selectmultiple',
        claseGrid: 'col-6',
        nombre: 'UnidadTiempo',
        label_i18n: 'unidad_tiempo',
        placeholder_i18n: 'unidad_tiempo',
        requerido: true,
        tipo: 'text',
        opciones: [{valor: 'options'}],
    },
    ],
}
