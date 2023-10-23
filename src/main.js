import '../style.css'
import { addContact } from './contact-crud';
import { addStates } from './helpers/department-helper'
import { loadTable } from './helpers/table-helper,';
import { Contact } from './models/contact';


addStates()

// Crea un arreglo con 5 contactos
const contactArray = [
    new Contact("John", "Doe", "123-456-7890", "123 Main St", "CA", "Los Angeles", true),
    new Contact("Jane", "Smith", "987-654-3210", "456 Elm St", "NY", "New York", false),
    new Contact("Alice", "Johnson", "555-555-5555", "789 Oak St", "TX", "Austin", true),
    new Contact("Bob", "Williams", "333-333-3333", "456 Pine St", "CA", "San Francisco", false),
    new Contact("Eve", "Taylor", "777-777-7777", "101 Maple St", "FL", "Miami", true)
];

loadTable(contactArray)

// Obtén una referencia al formulario por su ID
const form = document.getElementById('miFormulario');

// Agrega un controlador de eventos para el evento 'submit' del formulario
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Accede a los valores de los campos del formulario
  const name =     form.querySelector('#inputName').value;
  const lastName = form.querySelector('#inputLastName').value;
  const phoneNumber = form.querySelector('#inputNumber').value;
  const address =  form.querySelector('#inputAddress').value;
  const city =     form.querySelector('#inputCity').value;
  const state =    form.querySelector('#inputState').value;
  const favorite = form.querySelector('#gridCheck').checked;

  addContact(name,lastName,phoneNumber,address,city,state,favorite)

});
