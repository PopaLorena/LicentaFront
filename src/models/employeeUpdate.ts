export class Employee{
    constructor(
        public userName?: string,
        public password?: string,
        public phoneNumber?: string,
        public email?: string,
        public workedDaysPerMonth?: number,
        public endDate?: Date
    ){}
}