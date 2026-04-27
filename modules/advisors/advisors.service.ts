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

        return [
            {
                id: "111",
                name: "Advisor",
                surname: "Laura",
                imageSrc: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2088%2088%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23f7b1a5%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237b426d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Ccircle%20cx%3D%2244%22%20cy%3D%2244%22%20r%3D%2242%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%2244%22%20cy%3D%2244%22%20r%3D%2242%22%20fill%3D%22none%22%20stroke%3D%22%23d6edf2%22%20stroke-width%3D%224%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2250%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2226%22%20font-weight%3D%22700%22%20fill%3D%22%23ffffff%22%3EAL%3C%2Ftext%3E%3C%2Fsvg%3E",
                price: "$4.99/min",
                callAvailability: true,
                chatAvailability: true,
            },
            {
                id: "222",
                name: "Miss",
                surname: "Elisabeth",
                imageSrc: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2088%2088%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b1f52%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23d96c8e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Ccircle%20cx%3D%2244%22%20cy%3D%2244%22%20r%3D%2242%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%2244%22%20cy%3D%2244%22%20r%3D%2242%22%20fill%3D%22none%22%20stroke%3D%22%23efe7ff%22%20stroke-width%3D%224%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2250%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2226%22%20font-weight%3D%22700%22%20fill%3D%22%23ffffff%22%3EME%3C%2Ftext%3E%3C%2Fsvg%3E",
                price: "$7.99/min",
                callAvailability: true,
                chatAvailability: false,
            },
            {
                id: "333",
                name: "Advisor",
                surname: "Jada",
                imageSrc: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2088%2088%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23d7d6ff%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23c56a38%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Ccircle%20cx%3D%2244%22%20cy%3D%2244%22%20r%3D%2242%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%2244%22%20cy%3D%2244%22%20r%3D%2242%22%20fill%3D%22none%22%20stroke%3D%22%23f4ecff%22%20stroke-width%3D%224%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2250%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2226%22%20font-weight%3D%22700%22%20fill%3D%22%23ffffff%22%3EAJ%3C%2Ftext%3E%3C%2Fsvg%3E",
                price: "$2.49/min",
                callAvailability: false,
                chatAvailability: true,
            },
            {
                id: "444",
                name: "Rex",
                surname: "Frederick",
                imageSrc: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2088%2088%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23d9c38d%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235f8f88%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Ccircle%20cx%3D%2244%22%20cy%3D%2244%22%20r%3D%2242%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%2244%22%20cy%3D%2244%22%20r%3D%2242%22%20fill%3D%22none%22%20stroke%3D%22%23edf6f4%22%20stroke-width%3D%224%22%2F%3E%3Ctext%20x%3D%2244%22%20y%3D%2250%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2226%22%20font-weight%3D%22700%22%20fill%3D%22%23ffffff%22%3ERF%3C%2Ftext%3E%3C%2Fsvg%3E",
                price: "$4.25/min",
                callAvailability: false,
                chatAvailability: false,
            },
        ]
    };

    public static async checkAdvisorAvailabilityById(advisorId: string): Promise<AdvisorAvailabilityResponse> {
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
            callAvailability: this.getRandomBoolean(),
            chatAvailability: this.getRandomBoolean(),
        }
    }

    /**
     * Returns a random boolean value to simulate the availability of an advisor.
     * @returns {boolean} - A random boolean value.
     * @private
     */
    private static getRandomBoolean(): boolean {
        return Math.random() < 0.5;
    }
}
