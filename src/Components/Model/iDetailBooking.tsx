
    export interface Ticket {
        description: string;
        descriptionAlt: string;
        descriptionTranslations: any[];
        ticketTypeCode: string;
        ticketCode: string;
        quantity: number;
    }

    export interface PackageContent {
        concessions: any[];
        tickets: Ticket[];
    }

    export interface Ticket {
        name: string;
        description: string;
        category: string;
        price: number;
        displayPrice: number;
        defaultQuantity: number;
        ticketTypeCode: string;
        packageContent: PackageContent;
        areaCategoryCode: string;
        onlyMember: boolean;
    }

    export interface ConcessionItem {
        id: string;
        headOfficeItemCode: string;
        hopk: string;
        description: string;
        descriptionAlt: string;
        extendedDescription: string;
        extendedDescriptionAlt: string;
        priceInCents: number;
        taxInCents: number;
        isVariablePriceItem: boolean;
        minimumVariablePriceInCents?: any;
        maximumVariablePriceInCents?: any;
        itemClassCode: string;
        requiresPickup: boolean;
        canGetBarcode: boolean;
        shippingMethod: string;
        restrictToLoyalty: boolean;
        loyaltyDiscountCode: string;
        recognitionMaxQuantity: number;
        recognitionPointsCost: number;
        isRecognitionOnly: boolean;
        recognitionId: number;
        recognitionSequenceNumber: number;
        recognitionExpiryDate?: any;
        redeemableType: number;
        isAvailableForInSeatDelivery: boolean;
        isAvailableForPickupAtCounter: boolean;
        voucherSaleType: string;
        descriptionTranslations: any[];
        alternateItems: any[];
        packageChildItems: any[];
        modifierGroups: any[];
        smartModifiers: any[];
        discountsAvailable: any[];
        recipeItems: any[];
        vistaConcessionId: number;
        imageUrl: string;
        startDate: Date;
        endDate: Date;
        createdBy?: any;
        updatedBy: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        displayPrice: number;
        defaultQuantity: number;
        maxQuantity: number;
    }

    export interface Consession {
        id: number;
        name: string;
        concessionItems: ConcessionItem[];
    }

    export interface Position {
        areaNumber: number;
        rowIndex: number;
        columnIndex: number;
    }

    export interface SeatsInGroup {
        areaNumber: number;
        rowIndex: number;
        columnIndex: number;
    }

    export interface Seat {
        position: Position;
        priority: number;
        id: string;
        status: number;
        seatStyle: number;
        seatsInGroup: SeatsInGroup[];
        originalStatus: number;
    }

    export interface Row {
        physicalName: string;
        seats: Seat[];
    }

    export interface Area {
        number: number;
        areaCategoryCode: string;
        description: string;
        descriptionAlt: string;
        numberOfSeats: number;
        isAllocatedSeating: boolean;
        hasSofaSeatingEnabled: boolean;
        left: number;
        top: number;
        height: number;
        width: number;
        rows: Row[];
        rowCount: number;
        columnCount: number;
    }

    export interface AreaCategory {
        areaCategoryCode: string;
        seatsToAllocate: number;
        seatsAllocatedCount: number;
        seatsNotAllocatedCount: number;
        selectedSeats: any[];
        isInSeatDeliveryEnabled: boolean;
    }

    export interface SeatLayoutData {
        areas: Area[];
        areaCategories: AreaCategory[];
        boundaryRight: number;
        boundaryLeft: number;
        boundaryTop: number;
        screenStart: number;
        screenWidth: number;
    }

    export interface SeatPlan {
        seatLayoutData: SeatLayoutData;
        responseCode: number;
        errorDescription?: any;
    }

    export interface RootObject {
        ticket: Ticket[];
        consession: Consession[];
        seatPlan: SeatPlan;
    }

