export class Routes{
    constructor(
        public routeId?: number,
        public routeDetails?: string,
        public executionTime?: Date,
        public collectedMoney?: string,
        public spentMoney?: string,
        public kmNumber?: number
    ){}
}