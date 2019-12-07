# Paymongo for Node.js

Node.js SDK for Paymongo API

### Contents 

- [Create Token](#create-token)
- [Get Token](#get-token)
- [Create Payment](#create-payment)
- [Get Payment](#get-payment)
- [Get Payments](#get-payments)

### Installation

```bash
$ npm install node-paymongo
```

```bash
$ yarn add node-paymongo
```

### Usage

```javascript
import Paymongo from 'node-paymongo';

// Retrieve the secret key from your paymongo 
// dashboard under developers tab.
const paymongo = new Paymongo(process.env.SECRET_KEY);
```

## Token

### Create Token

> ### .createToken(payload)

Creates a one-time use token representing your customer's credit card details. **NOTE: This token can only be used once to create a Payment**. You must create separate tokens for every payment attempt.

**Payload**

Refer to [Paymongo documentation](https://developers.paymongo.com/reference#create-a-token) for payload guidelines.

**Sample**

```js
const payload = {
  data: {
    attributes: {
      number: '4242424242424242',
      exp_month: 1,
      exp_year: 23,
      cvc: '111'
    }
  }
}
const token = await paymongo.createToken(payload);
```

### Get Token

> ### .getToken(id)

Retrieve a token given an ID. The prefix for the id is `tok_` followed by a unique hash representing the token.

Just pass the token id to `.getToken(tokenId)`.

**Sample**

```js
const token = await paymongo.getToken('tok_6SGC9TBsjduCnV6HiAmXgctt');
```

## Payment

### Create Payment

> ### .createPayment(payload)

To charge a payment source, you must create a Payment object. When in test mode, your payment sources won't actually be charged. You can select specific payment sources for different success and failure scenarios.

**Payload**

Refer to [Paymongo documentation](https://developers.paymongo.com/reference#create-a-payment) for payload guidelines.

**Sample**

```js
const payload = {
  data: {
    attributes: {
      amount: 10000,
      currency: 'PHP',
      description: '1 month premium subscription',
      statement_descriptor: 'MYCURE Premium',
      source: {
        id: 'tok_6SGC9TBsjduCnV6HiAmXgctt',
        type: 'token'
      }
    }
  }
}
const payment = await paymongo.createPayment(payload);
```

### Get Payment

> ### .getPayment(id)

You can retrieve a Payment by providing a payment ID. The prefix for the id is `pay_` followed by a unique hash representing the payment.

Just pass the payment id to `.getPayment(paymentid)`.

**Sample**

```js
const payment = await paymongo.getPayment('pay_SMizRExCTxdZAbnTaRiRrExN');
```

### Get Payments

> ### .getPayments()

Returns all the payments you previously created, with the most recent payments returned first. Currently, all payments are returned as one batch. We will be introducing pagination and limits in the next iteration of the API.

Just pass the payment id to `.getPayments()`.

**Sample**

```js
const payments = await paymongo.getPayments();
```

Made with :heart: by Jofferson Ramirez Tiquez