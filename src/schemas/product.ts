import z from 'zod';

export const PRODUCT_REQUEST_SCHEMA = z.object({
  city: z.string().describe('City of the customer'),
  country: z.string().describe('Country of the customer'),
  price: z.number().int().positive().describe('Price of the product'),
});

export const PRODUCT_200_RESPONSE_SCHEMA = z.object({
  product_id: z.number().int().describe('ID of the product'),
  // user_id: z.number().int().describe('ID of the user'),
  // amount: z.number().describe('Amount of the transaction'),
});

export const PRODUCTS_200_RESPONSE_SCHEMA = z.object({
  products: z.array(z.object({
    id: z.number().int().describe('ID of the product'),
    city: z.string().describe('City of the customer'),
    country: z.string().describe('Country of the customer'),
  })).describe('Array of products'),
});

export const PRODUCT_400_RESPONSE_SCHEMA = z.object({
  error: z.number().int().negative().describe('Error code'),
  error_note: z.string().describe('Error note'),
});
