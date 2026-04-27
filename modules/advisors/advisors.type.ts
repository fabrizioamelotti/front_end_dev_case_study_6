export type AdvisorIdType = {
    id: string,
}

export type AdvisorAvailabilityType = {
    callAvailability: boolean,
    chatAvailability: boolean,
};

export type AdvisorResponseType = AdvisorIdType & AdvisorAvailabilityType & {
    name: string,
    surname: string,
    imageSrc: string,
    price: string,
}

export type AdvisorAvailabilityResponse = AdvisorIdType & AdvisorAvailabilityType;