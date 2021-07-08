export function createPaymentIntent(secret: string, data: {
    attributes: {
        amount: number;
        payment_method_allowed: string[];
        currency: string;
    };
}): Promise<any>;
export function retrievePaymentIntent(secret: string, id: string): Promise<any>;
export function attachToPaymentIntent(secret: string, id: string, data: {
    attributes: {
        payment_method: string;
    };
}): Promise<any>;
