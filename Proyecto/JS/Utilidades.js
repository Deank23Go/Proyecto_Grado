//Validacion de Intercanvio de paginas

document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById('form-ingreso');
    const mensajeError = document.getElementById('mensajeError');

    document.getElementById('btn-login').addEventListener('click', function(){
        let usuario = document.getElementById('user').value.trim();
        let contraseña = document.getElementById('pass').value.trim();

        // Validación de campos vacíos
        if (usuario === ''){
            mensajeError.innerText = 'El campo de usuario se encuentra vacío.';
            return;
        }

        if (contraseña === ''){
            mensajeError.innerText = 'El campo de Contraseña se encuentra vacío.';
            return;
        }

        // Si las validaciones pasan, realizar la redirección
        window.location.href = "/HTML/Study.html";
    });
});

//Validacion de Ingreso de Imagen o Avatar y visualizacion previa de ella 
const defaultFile = '/Img/ui_user_profile_avatar_person_icon_208734.png'

const file = document.getElementById('imagen');
const img = document.getElementById('img');
file.addEventListener( 'change', e=> {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e){
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    }else{
        img.src = defaultFile;
    }
});

//ocultar y selecionar nivel de educacion 
document.addEventListener("DOMContentLoaded", function() {
    const nivelSelect = document.getElementById('nivel');
    const facultadSelect = document.getElementById('facultad');
    const carreraSelect = document.getElementById('carrera');
    const facultadDiv = document.querySelector('.facul');
    const carreraDiv = document.querySelector('.Carrera');

    const programas = {
        pregrado: {
            "Ingenierías": [
                "Ingeniería de Sistemas",
                "Ingeniería Electrónica",
                "Ingeniería Industrial"
            ],
            "Administración y Contaduría": [
                "Administración de Empresas",
                "Contaduría Pública",
                "Administración en Salud",
                "Administración en Salud y Seguridad en el Trabajo"
            ],
            "Ciencias Sociales y Humanas": [
                "Trabajo Social",
                "Comunicación Social",
                "Licenciatura en Educación Infantil",
                "Licenciatura en Ciencias del Deporte y la Educación Física"
            ],
            "Diseño": [
                "Diseño Visual"
            ]
        },
        tecnologico: {
            "Tecnologías": [
                "Tecnología en Electrónica Industrial",
                "Tecnología en Sistemas de Información",
                "Tecnología en Producción Industrial",
                "Tecnología en Contabilidad Sistematizada",
                "Tecnología en Gestión Empresarial",
                "Tecnología en Instrumentación Industrial",
                "Tecnología en Gestión Contable y Financiera",
                "Tecnología en Mercadeo y Negocios Internacionales"
            ]
        },
        tecnico: {
            "Técnicos Laborales": [
                "Técnico Laboral en Electricidad Industrial",
                "Técnico Laboral en Mecánica de Aire Acondicionado y Refrigeración",
                "Técnico Laboral en Auxiliar Técnico en Electrónica",
                "Técnico Laboral en Auxiliar Administrativo",
                "Técnico Laboral en Auxiliar Contable"
            ]
        },
        especializacion: {
            "Especializaciones": [
                "Especialización en Seguridad en Redes y Servicios Telemáticos",
                "Especialización en Gestión de Bases de Datos",
                "Especialización en Gestión de la Responsabilidad Empresarial",
                "Especialización en Aseguramiento de la Información y Control Interno",
                "Especialización en Gerencia de Negocios",
                "Especialización en Ergonomía",
                "Especialización en Ciudadanía, Derecho y Gestión de Paz",
                "Especialización en Gestión Ambiental Sostenible",
                "Especialización en Gestión de Contenidos Digitales"
            ]
        },
        maestria: {
            "Maestrías": [
                "Maestría en Enseñanza de las Matemáticas",
                "Maestría en Gestión de Tecnología de la Información",
                "Maestría en Educación"
            ]
        },
        especializacion_tecnologica: {
            "Especialización Tecnológica": [
                "Especialización Tecnológica en Eficiencia Energética en Sistemas Electromecánicos"
            ]
        }
    };

    nivelSelect.addEventListener('change', function() {
        const nivel = nivelSelect.value;
        facultadSelect.innerHTML = '<option value="">Seleccione la Facultad</option>';
        carreraSelect.innerHTML = '<option value="">Seleccione la carrera</option>';

        if (nivel) {
            const facultades = programas[nivel];
            for (const facultad in facultades) {
                const option = document.createElement('option');
                option.value = facultad;
                option.textContent = facultad;
                facultadSelect.appendChild(option);
            }
            facultadDiv.style.display = 'block';
        } else {
            facultadDiv.style.display = 'none';
            carreraDiv.style.display = 'none';
        }
    });

    facultadSelect.addEventListener('change', function() {
        const nivel = nivelSelect.value;
        const facultad = facultadSelect.value;
        carreraSelect.innerHTML = '<option value="">Seleccione la carrera</option>';

        if (facultad) {
            const carreras = programas[nivel][facultad];
            carreras.forEach(function(carrera) {
                const option = document.createElement('option');
                option.value = carrera;
                option.textContent = carrera;
                carreraSelect.appendChild(option);
            });
            carreraDiv.style.display = 'block';
        } else {
            carreraDiv.style.display = 'none';
        }
    });
});
