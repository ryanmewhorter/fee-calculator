import {Fee} from '../models/fee';
import {FeeSetting} from '../models/fee-setting';

export const FEE_SETTINGS: FeeSetting[] = [
  {
    name: 'PayPal',
    fees: [{flat: 0.3, percent: 2.9}]
  } as FeeSetting,
  {
    name: 'Depop',
    fees: [{flat: 0, percent: 10}, {flat: 0.3, percent: 2.9}]
  } as FeeSetting,
  {
    name: 'eBay (Standard - First 50)',
    description: 'Standard fees for most categories, including records, car parts & accessories, ' +
                 'and automotive tools and supplies. No insertion fee if not over 50 listings this month.',
    fees: [{flat: 0, percent: 10, max: 750}, {flat: 0.3, percent: 2.9}]
  } as FeeSetting,
  {
    name: 'eBay (Media - First 50)',
    description: 'Books, DVDs and movies, and music (except for records). ' +
                 'No insertion fee if not over 50 listings this month.',
    fees: [{flat: 0, percent: 12, max: 750}, {flat: 0.3, percent: 2.9}]
  } as FeeSetting,
  {
    name: 'eBay (Standard - Over 50)',
    description: 'Standard fees for most categories, including records, car parts & accessories, ' +
                 'and automotive tools and supplies. Insertion fee is $0.35 per listing if over 50 listings this month.',
    fees: [{flat: 0.35, percent: 10, max: 750}, {flat: 0.3, percent: 2.9}]
  } as FeeSetting,
  {
    name: 'eBay (Media - Over 50)',
    description: 'Books, DVDs and movies, and music (except for records). ' +
                 'Insertion fee is $0.35 per listing if over 50 listings this month.',
    fees: [{flat: 0.35, percent: 12, max: 750}, {flat: 0.3, percent: 2.9}]
  } as FeeSetting,
  {
    name: 'Craigslist (Cars/trucks, Services)',
    description: 'Cars/trucks by-dealer or by-owner in the US, Vancouver BC. Services in US and CA. $5',
    fees: [{flat: 5, percent: 0}]
  } as FeeSetting,
  {
    name: 'Craigslist (Furniture by-dealer)',
    description: 'Furniture by-dealer in the US, Vancouver BC. $3',
    fees: [{flat: 3, percent: 0}]
  } as FeeSetting,
];
