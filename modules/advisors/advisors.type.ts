export type AdvisorIdType = {
    id: number,
}

export type AdvisorAvailabilityType = {
    "call-availability": number,
    "chat-availability": number,
};

export type AdvisorResponseType = AdvisorIdType & AdvisorAvailabilityType & {
    name: string,
    profilePictureUrl: string,
    price: string,
}

export type AdvisorAvailabilityResponse = AdvisorIdType & AdvisorAvailabilityType;