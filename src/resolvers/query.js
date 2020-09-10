const Query = {
    name: () => {
      return 'Dew'
    },
    age: () => {
      return 20
    },
    isSingle: () => {
      return true
    },
    numbers: () => {
      return [1,2,3]
    },
    location: () => {
      return {
        state: 'Bankok',
        city: 'Poon'
      }
    },
  users: (parent, args, context, info) => {
    const { users } = context
    return users
  }

}

module.exports = Query
