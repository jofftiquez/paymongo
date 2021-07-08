export function createToken(secret: string, data: {
    attributes: {
        number: string;
        exp_month: number;
        exp_year: number;
        cvc: string;
    };
}): Promise<any>;
export function retrieveToken(secret: string, id: string): Promise<any>;
