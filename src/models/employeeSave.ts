export class Employee{
    constructor(
        public userName?: string,
        public password?: string,
        public startDate?: Date,
        public fullName?: string,
        public phoneNumber?: string,
        public email?: string,
        public role?: string
    ){}
}