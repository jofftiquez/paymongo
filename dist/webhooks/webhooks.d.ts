export function createWebhook(secret: string, data: {
    attributes: {
        url: string;
        events: string[];
    };
}): Promise<any>;
export function retrieveWebhook(secret: string, id: string): Promise<any>;
export function listWebhooks(secret: string): Promise<any>;
export function toggleWebhook(secret: string, id: string, action: string): Promise<any>;
