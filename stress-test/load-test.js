import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  max_vus: 1500,
  vus: 130,
  stages: [
    { duration: '30s', target: 100 }, 
    { duration: '30s', target: 200 },
    { duration: '30s', target: 500 },
    { duration: '30s', target: 1000 },
  ],
  thresholds: {
    'RTT': ['avg<2000']
  }
};

export default function() {
  // for now hardcoded the product based on category in the 
  // adidas-related-info/database/models/Product.js
  // getProducts() method to be { categoryName: "Sleek"}).sort({dateCreated : +1}).limit(16) 
  // sort the results and limit the results to 16
  let res = http.get('http://localhost:3002/products');
  check(res, {
    'status was 200': (r) => r.status == 200
  });

  sleep(1);
}