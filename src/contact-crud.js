import { Contact } from "./models/contact"

export const addContact = (name, lastName, phoneNumber, address, state, city, favorite )=>{

    if( name.length === 0 ||  lastName.length === 0 || phoneNumber.length === 0 || address.length === 0 ||  city.length === 0 || state === 'Choose...' ){
        alert('Por favor rellene todos los campos')
    }

    const contact = new Contact(name, lastName, phoneNumber, address, state, city, favorite)

    console.log({ contact })
}