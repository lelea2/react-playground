const invoiceData = {
  data: [{
    name: 'John Do',
    date: '11/25/2020',
    ref: 'ee668bb1-a176-4584-8eda-923af1249586',
    status: 'NOPAID',
    amount: 100
  }, {
    name: 'Steve Bar',
    date: '11/26/2020',
    ref: 'ebde3f44-5122-454b-9c7b-acff3525e45d', // bank transaction
    status: 'NOPAID',
    amount: -50
  }, {
    name: 'Jennie Ng',
    date: '11/30/2020',
    ref: '3aa18df3-f31e-4304-bcfd-10b3ab6c08e7',
    status: 'PAID',
    amount: 150
  }, {
    name: 'Mary Ng',
    date: '12/6/2020',
    ref: '3aa18df3-f31e-4304-bcfd-10b3ab6c08e0',
    status: 'PAID',
    amount: -100
  }],
  metadata: {
    count: 50,
    total: 100, // summary total
  }
};

export default invoiceData;