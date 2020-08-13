const data = require('./db/data.json');
const fs = require('fs')

module.exports = {
  Query: {
    page: () => data
  },
  Mutation: {
    submitContactForm: (parent, args, context, info) => {
      const form = {
        firstName: args.firstName,
        lastName: args.lastName,
        message: args.message
      };
      fs.writeFile('./db/submitForm.json', JSON.stringify(form), err => {
        if (err) {
          console.log(err)
        } else {
          return {
            success: true
          }
        }
      });
    }
  }
}
