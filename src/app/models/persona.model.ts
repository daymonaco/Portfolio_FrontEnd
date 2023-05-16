export class persona{
    id?: number;
    name: string;
    lastName: string;
    img: string;
    profile: string;
    city: string;
    aboutMe: string;
    email: string;
    phoneNumber: string;

    constructor(name: string, lastName: string, img: string, profile: string,
        city: string, aboutMe: string, email: string, phoneNumber: string) {
        this.name = name;
        this.lastName = lastName;
        this.img = img;
        this.profile = profile;
        this.city = city;
        this.aboutMe = aboutMe;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
