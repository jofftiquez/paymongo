export function createPaymentMethod(secret: string, data: {
    attributes: {
        type: string;
    };
}): Promise<any>;
export function retrievePaymentMethod(secret: string, id: string): Promise<any>;
