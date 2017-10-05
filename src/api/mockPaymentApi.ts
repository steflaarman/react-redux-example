import { delay } from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const payments = [
  {
    id: "01",
    title: "Beers",
    date: "01-10",
    authorId: "bill-gates",
    amount: "24,99",
    category: "Account 1"
  },
  {
    id: "02",
    title: "Beers",
    date: "02-10",
    authorId: "bill-gates",
    amount: "873,10",
    category: "Account 1"
  },
  {
    id: "03",
    title: "Beers",
    date: "03-10",
    authorId: "bill-gates",
    amount: "2052,88",
    category: "Account 2"
  },
  {
    id: "04",
    title: "Beers",
    date: "04-10",
    authorId: "bill-gates",
    amount: "2,30",
    category: "Account 2"
  },
  {
    id: "05",
    title: "Beers",
    date: "05-10",
    authorId: "bill-gates",
    amount: "50,10",
    category: "Account 1"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (payment) => {
  return Math.random();
  //return replaceAll(payment.title, ' ', '-');
};

class PaymentApi {
  static getAllPayments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], payments));
      }, delay);
    });
  }

  static savePayment(payment) {
    payment = Object.assign({}, payment); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (payment.title.amount < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (payment.id) {
          const existingPaymentIndex = payments.findIndex(a => a.id == payment.id);
          payments.splice(existingPaymentIndex, 1, payment);
        } else {
          //Just simulating creation here.
          //The server would generate ids and date's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          payment.id = generateId(payment);
          payment.date = "05-10";
          payments.push(payment);
        }

        resolve(payment);
      }, delay);
    });
  }

  // static deletePayment(paymentId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfPaymentToDelete = payments.findIndex(payment:any => {
  //         payment.id == paymentId;
  //       });
  //       payments.splice(indexOfPaymentToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default PaymentApi;
