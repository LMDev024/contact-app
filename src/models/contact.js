import { v4 as uuidv4 } from 'uuid'

export class Contact {

    constructor(name, lastName, number, address, state, city, favorite) {
        this.id = uuidv4(),
            this.name = name,
            this.lastName = lastName,
            this.phoneNumber = number,
            this.addres = address,
            this.state = state,
            this.city = city,
            this.favorite = favorite
    }

    get getContact() {
        return this
    }

    changeFavoriteStatus() {
        this.favorite = !this.favorite
    }

}