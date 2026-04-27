import {AdvisorAvailabilityResponse, AdvisorResponseType} from "./advisors.type";

export class AdvisorsService {
    public static async findAdvisors(): Promise<AdvisorResponseType[]> {
        // ENDPOINT DOESN'T WORK --> So I WILL MOCK THE RESPONSE
        //
        // [GET] https://demo2255213.mockable.io/listings
        // const response = await fetch("https://demo2255213.mockable.io/listings", {
        //     method: "GET",
        //     cache: "no-store",
        // });
        //
        // if (!response.ok) {
        //     throw new Error(`Failed to fetch advisors: ${response.status}`);
        // }
        //
        // const advisors = (await response.json()) as AdvisorResponseType[];
        //
        // return advisors;

        /**
         * IMPORTANT !!!
         *
         * List provided by Yuliia Pysmenna, because the endpoint doesn't work for me
         */
        return [
            {
                id: 1,
                name: "Advisor Laura",
                profilePictureUrl: "https://si.keen.com/memberphotos/-5253289-1156765229Primary.jpg",
                price: "$4.99/min",
                "call-availability": 1,
                "chat-availability": 0
            },
            {
                id: 2,
                name: "Miss Elisabeth",
                profilePictureUrl: "https://si.keen.com/memberphotos/-54149795-980884913Primary.jpg",
                price: "$7.99/min",
                "call-availability": 1,
                "chat-availability": 0
            },
            {
                id: 3,
                name: "Advisor Jada",
                profilePictureUrl: "https://si.keen.com/memberphotos/-24651289-1547364832Primary.jpg",
                price: "$2.49/min",
                "call-availability": 1,
                "chat-availability": 0
            },
            {
                id: 3, // --> Notice this is a repeated id
                name: "RexFrederick",
                profilePictureUrl: "https://si.keen.com/memberphotos/-24651289-1547364832Primary.jpg",
                price: "$4.25/min",
                "call-availability": 1,
                "chat-availability": 1
            }
        ]
    };

    public static async checkAdvisorAvailabilityById(advisorId: number): Promise<AdvisorAvailabilityResponse> {
        // ENDPOINT DOESN'T WORK --> So I WILL MOCK THE RESPONSE
        //
        // [GET] https://demo2255213.mockable.io/advisor-availability?advisorId=100
        // const response = await fetch(`https://demo2255213.mockable.io/advisor-availability?advisorId=${advisorId}`, {
        //     method: "GET",
        //     cache: "no-store",
        // });
        //
        // if (!response.ok) {
        //     throw new Error(`Failed to fetch advisor's availability: ${response.status}`);
        // }
        //
        // const advisorAvailability = (await response.json()) as AdvisorAvailabilityResponse[];
        //
        // return advisorAvailability;

        return {
            id: advisorId,
            "call-availability": this.getRandomAvailability(),
            "chat-availability": this.getRandomAvailability(),
        }
    }

    /**
     * Generates a random availability value (0 or 1).
     *
     * @returns {number} - A random availability value.
     * @private
     */
    private static getRandomAvailability(): number {
        return Math.random() < 0.5 ? 1 : 0;
    }
}
