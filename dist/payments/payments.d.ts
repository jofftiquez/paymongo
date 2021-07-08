export function createPayment(secret: string, data: {
    attributes: {
        amount: number;
        currency: number;
        source: {
            id: string;
            type: string;
        };
    };
}): Promise<any>;
export function retrievePayment(secret: string, id: string): Promise<any>;
export function listPayments(secret: string): Promise<any>;
