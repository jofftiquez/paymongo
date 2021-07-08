export function createSource(secret: string, data: {
    attributes: {
        type: string;
        amount: number;
        currency: string;
        redirect: {
            success: string;
            failed: string;
        };
    };
}): Promise<any>;
export function retrieveSource(secret: string, id: string): Promise<any>;
