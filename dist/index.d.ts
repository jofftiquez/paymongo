export default class Paymongo {
    constructor(secret: any);
    secret: any;
    paymentMethods: {
        create: (data: any) => Promise<any>;
        retrieve: (id: any) => Promise<any>;
    };
    paymentIntents: {
        create: (data: any) => Promise<any>;
        retrieve: (id: any) => Promise<any>;
        attach: (id: any, data: any) => Promise<any>;
    };
    sources: {
        create: (data: any) => Promise<any>;
        retrieve: (id: any) => Promise<any>;
    };
    payments: {
        create: (data: any) => Promise<any>;
        retrieve: (id: any) => Promise<any>;
        list: () => Promise<any>;
    };
    tokens: {
        create: (data: any) => Promise<any>;
        retrieve: (id: any) => Promise<any>;
    };
    webhooks: {
        create: (data: any) => Promise<any>;
        retrieve: (id: any) => Promise<any>;
        list: () => Promise<any>;
        toggle: (id: any, action: any) => Promise<any>;
    };
}
