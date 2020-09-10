const {v4: uuidv4} = require('uuid')

const Mutation = {
    addUser(parent, args, context, info){
      const { name, age } = args
      const { users } = context

      users.push({
        id: uuidv4(),
        name,
        age
      })

      return users
    },
    updateUser(parent, args, context, info) {
      const {id, name, age} = args
      const { users, pubsub } = context
      pubsub.publish('update_user', {update: args})

      const user = users.find((user) => user.id === id)

      if (!user){
        throw new Error(`user with id(${id}) does not exist`)
      }

      user.name = name
      user.age = age

      return user
    },

    deleteUser(parent, args, context, info){
      const {id} = args
      const { users} = context
      const index = users.findIndex((index) => index.id === id)

      if (index === -1) {
        throw new Error(`user with id(${id}) does not exist`)
      }

      const deletedUser = users.splice(index, 1)
      
      return deletedUser[0]
    }
}

module.exports = Mutation
