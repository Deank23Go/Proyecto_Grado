document.addEventListener("DOMContentLoaded", function() {
    const nivelSelect = document.getElementById('nivel');
    const facultadContainer = document.getElementById('facultad-container');
    const facultadSelect = document.getElementById('facultad');
    const carreraContainer = document.getElementById('carrera-container');
    const carreraSelect = document.getElementById('carrera');

    const facultades = {
        tecnico: ["Facultad Técnica 1", "Facultad Técnica 2"],
        universitario: ["Facultad de Ingeniería", "Facultad de Ciencias", "Facultad de Humanidades"],
        especializacion: ["Facultad de Especialización 1", "Facultad de Especialización 2"],
        posgrado: ["Facultad de Posgrado 1", "Facultad de Posgrado 2"]
    };

    const carreras = {
        "Facultad Técnica 1": ["Carrera Técnica 1.1", "Carrera Técnica 1.2"],
        "Facultad Técnica 2": ["Carrera Técnica 2.1", "Carrera Técnica 2.2"],
        "Facultad de Ingeniería": ["Ingeniería de Sistemas", "Ingeniería Industrial"],
        "Facultad de Ciencias": ["Biología", "Química"],
        "Facultad de Humanidades": ["Filosofía", "Historia"],
        "Facultad de Especialización 1": ["Especialización 1.1", "Especialización 1.2"],
        "Facultad de Especialización 2": ["Especialización 2.1", "Especialización 2.2"],
        "Facultad de Posgrado 1": ["Posgrado 1.1", "Posgrado 1.2"],
        "Facultad de Posgrado 2": ["Posgrado 2.1", "Posgrado 2.2"]
    };

    nivelSelect.addEventListener('change', function() {
        const nivel = nivelSelect.value;
        facultadSelect.innerHTML = '<option value="">Seleccione la facultad</option>';
        carreraSelect.innerHTML = '<option value="">Seleccione la carrera</option>';
        carreraContainer.style.display = 'none';

        if (nivel) {
            facultadContainer.style.display = 'block';
            facultades[nivel].forEach(function(facultad) {
                const option = document.createElement('option');
                option.value = facultad;
                option.textContent = facultad;
                facultadSelect.appendChild(option);
            });
        } else {
            facultadContainer.style.display = 'none';
        }
    });

    facultadSelect.addEventListener('change', function() {
        const facultad = facultadSelect.value;
        carreraSelect.innerHTML = '<option value="">Seleccione la carrera</option>';

        if (facultad) {
            carreraContainer.style.display = 'block';
            carreras[facultad].forEach(function(carrera) {
                const option = document.createElement('option');
                option.value = carrera;
                option.textContent = carrera;
                carreraSelect.appendChild(option);
            });
        } else {
            carreraContainer.style.display = 'none';
        }
    });
});
