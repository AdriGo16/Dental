// Abrir la modal de selección de odontología y cerrar la de servicio
function openSelectModal() {
    document.getElementById("modal-odontologia").style.display = "flex";
    document.getElementById("modal-servicio").style.display = "none";
}

// Cerrar la modal seleccionada
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cargar la información del servicio seleccionado y mostrar la modal de servicio
function loadServiceInfo() {
    const selectElement = document.getElementById("odontologia-options");
    const selectedOption = selectElement.value;

    // Definir información de cada servicio con formato HTML
const services = {
    implantes: {
        title: "Implantes",
        description: `
            <p>Recupera la funcionalidad y estética de tu sonrisa con nuestros implantes dentales. 
            Es uno de los tratamientos más comunes para reemplazar los dientes perdidos de manera 
            permanente, mejorando tu calidad de vida y confianza.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>Los implantes restauran tu sonrisa y previenen la pérdida ósea, manteniendo la 
            integridad de tu rostro.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Previenen la pérdida ósea y el envejecimiento prematuro del rostro.</li>
                <li>Se sienten y lucen como dientes naturales.</li>
                <li>Son una solución duradera y de alta calidad.</li>
            </ul>
            
            <p><strong>Duración:</strong> El proceso completo puede llevar de 3 a 6 meses, dependiendo de cada caso.</p>
        `,
        image: "../IMG/Implantes.png"
    },
    ortodoncia: {
        title: "Ortodoncia",
        description: `
            <p>Mejora la alineación de tus dientes y corrige problemas de mordida con nuestros tratamientos 
            de ortodoncia. Desde brackets hasta alineadores transparentes, diseñamos la solución ideal para ti.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>La ortodoncia no solo mejora la estética de tu sonrisa, sino que también facilita una mejor 
            higiene dental y previene problemas como el desgaste prematuro de los dientes.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Corrige problemas de alineación y mordida.</li>
                <li>Mejora la higiene bucal y reduce el riesgo de caries.</li>
                <li>Puede prevenir el desgaste desigual de los dientes.</li>
            </ul>
            
            <p><strong>Duración:</strong> De 12 a 24 meses.</p>
        `,
        image: "../IMG/RD.jpg"
    },
    limpieza: {
        title: "Limpieza Dental",
        description: `
            <p>Mantén tus dientes y encías sanos con una limpieza dental profesional. 
            Eliminamos placa y sarro, y prevenimos problemas más graves de salud bucal.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>Una limpieza regular ayuda a prevenir la acumulación de bacterias y reduce el riesgo 
            de caries y enfermedad periodontal.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Mejora la salud de las encías.</li>
                <li>Reduce el riesgo de caries y enfermedades.</li>
                <li>Aporta una sonrisa más limpia y brillante.</li>
            </ul>
            
            <p><strong>Duración:</strong> Aproximadamente 30 minutos.</p>
        `,
        image: "../IMG/Limpieza.png"
    },
    blanqueamiento: {
        title: "Blanqueamiento Dental",
        description: `
            <p>Consigue una sonrisa radiante con nuestro tratamiento de blanqueamiento dental profesional. 
            Eliminamos manchas y devolvemos el brillo a tus dientes.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>Mejora la estética de la sonrisa y aumenta la confianza al sonreír.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Sonrisa más blanca y brillante.</li>
                <li>Elimina manchas y decoloración.</li>
                <li>Resultados visibles en una sola sesión.</li>
            </ul>
            
            <p><strong>Duración:</strong> 1 a 2 horas.</p>
        `,
        image: "../IMG/Blanqueamiento.png"
    },
    extraccion: {
        title: "Extracción Dental",
        description: `
            <p>Remueve dientes dañados o problemáticos con una extracción dental segura y eficaz.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>Ayuda a prevenir infecciones y dolores causados por dientes dañados o sin espacio adecuado.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Alivia el dolor y elimina infecciones.</li>
                <li>Previene daños a dientes cercanos.</li>
                <li>Procedimiento seguro y controlado.</li>
            </ul>
            
            <p><strong>Duración:</strong> Aproximadamente 30 a 60 minutos.</p>
        `,
        image: "../IMG/Extraccion.png"
    },
    carillas: {
        title: "Carillas Dentales",
        description: `
            <p>Transforma tu sonrisa con nuestras carillas dentales, una solución rápida y estética para 
            mejorar la apariencia de tus dientes.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>Mejora la estética dental y corrige defectos de forma y color en los dientes.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Sonrisa natural y hermosa.</li>
                <li>Resistentes a manchas.</li>
                <li>Proceso rápido y poco invasivo.</li>
            </ul>
            
            <p><strong>Duración:</strong> 1 a 2 semanas para completar el tratamiento.</p>
        `,
        image: "../IMG/Carillas.png"
    },
    coronas: {
        title: "Coronas Dentales",
        description: `
            <p>Protege y refuerza tus dientes dañados con nuestras coronas dentales personalizadas y de alta calidad.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>Ayuda a restaurar dientes debilitados y previene fracturas.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Refuerza dientes debilitados.</li>
                <li>Apariencia natural.</li>
                <li>Duración prolongada.</li>
            </ul>
            
            <p><strong>Duración:</strong> 2 a 3 visitas.</p>
        `,
        image: "../IMG/Coronas.png"
    },
    protesis: {
        title: "Prótesis Dentales",
        description: `
            <p>Recupera la funcionalidad y estética de tu sonrisa con nuestras prótesis dentales personalizadas.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>Las prótesis dentales reemplazan dientes perdidos, ayudando a mejorar la función masticatoria y la estética.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Mejor función masticatoria.</li>
                <li>Apariencia natural.</li>
                <li>Facilidad de uso y mantenimiento.</li>
            </ul>
            
            <p><strong>Duración:</strong> Depende del tipo de prótesis y la adaptación.</p>
        `,
        image: "../IMG/Protesis.png"
    },
    endodoncia: {
        title: "Endodoncia",
        description: `
            <p>Tratamiento de conducto para eliminar infecciones y conservar dientes dañados.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>Elimina infecciones y previene la pérdida del diente.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Alivia el dolor y elimina infecciones.</li>
                <li>Permite conservar el diente.</li>
                <li>Evita extracciones innecesarias.</li>
            </ul>
            
            <p><strong>Duración:</strong> 1 a 2 horas.</p>
        `,
        image: "../IMG/Endodoncia.png"
    },
    frenillos: {
        title: "Frenillos",
        description: `
            <p>Corrige problemas de alineación dental y mordida con nuestros tratamientos de frenillos personalizados.</p>
            
            <p><strong>¿Por qué es importante realizarlo?</strong></p>
            <p>Los frenillos ayudan a mejorar la alineación dental y la mordida, mejorando la salud y apariencia bucal.</p>
            
            <p><strong>Ventajas:</strong></p>
            <ul>
                <li>Sonrisa alineada y saludable.</li>
                <li>Mejora la función masticatoria.</li>
                <li>Evita futuros problemas dentales.</li>
            </ul>
            
            <p><strong>Duración:</strong> 1 a 2 años.</p>
        `,
        image: "../IMG/Frenillos.png"
    }
};

    // Si no hay una opción seleccionada o la opción no existe en el objeto de servicios, no hace nada
    if (!selectedOption || !services[selectedOption]) return;

    // Carga la información del servicio seleccionado
    document.getElementById("service-title").textContent = services[selectedOption].title;
    document.getElementById("service-description").innerHTML = services[selectedOption].description;
    document.getElementById("service-image").src = services[selectedOption].image;

    // Cambia de la modal de selección a la modal de servicio
    document.getElementById("modal-odontologia").style.display = "none";
    document.getElementById("modal-servicio").style.display = "flex";

    // Restablece el valor del select para permitir la misma selección nuevamente
    selectElement.value = "";
}

// Función para cerrar la modal al hacer clic fuera de ella
function closeOnOutsideClick(event, modalId) {
    const modal = document.getElementById(modalId);
    if (event.target === modal) {
        closeModal(modalId);
    }
}

// Cerrar la modal seleccionada
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
