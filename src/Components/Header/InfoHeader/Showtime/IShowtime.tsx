
export interface Ticket {
    name: string;
    url: string;
}

export interface Session {
    id: string;
    name: string;
    url: string;
    cinemaId: string;
    scheduledFilmId: string;
    sessionId: string;
    areaCategoryCodes: any[];
    isAllocatedSeating: boolean;
    allowChildAdmits: boolean;
    seatsAvailable: number;
    allowComplimentaryTickets: boolean;
    eventId: string;
    priceGroupCode: string;
    screenName: string;
    screenNameAlt: string;
    screenNumber: number;
    cinemaOperatorCode: string;
    formatCode: string;
    formatHopk: string;
    salesChannels: string;
    sessionAttributesNames: any[];
    conceptAttributesNames: any[];
    allowTicketSales: boolean;
    hasDynamicallyPricedTicketsAvailable: boolean;
    playThroughId?: any;
    sessionBusinessDate: Date;
    sessionDisplayPriority: number;
    groupSessionsByAttribute: boolean;
    soldoutStatus: number;
    typeCode: string;
    dayOfWeekLabel: string;
    dayOfWeekKey: string;
    showDate: string;
    showTime: string;
}

export interface Bundle {
    caption: string;
    code: string;
    version: string;
    sessions: Session[];
}

export interface Date {
    showDate: string;
    dayOfWeekLabel: string;
    bundles: Bundle[];
}

export interface RootObject {
    id: string;
    slug: string;
    name: string;
    vistaName: string;
    description: string;
    code: string;
    order: number;
    phone: string;
    address: string;
    cityId: string;
    mapEmbeb: string;
    status: number;
    reward: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy?: any;
    updatedBy: string;
    oldId: number;
    imageUrls: string[];
    ticket: Ticket[];
    imageLandscape: string;
    imagePortrait?: any;
    longitude: string;
    latitude: string;
    cityIds?: any;
    dates: Date[];
}

