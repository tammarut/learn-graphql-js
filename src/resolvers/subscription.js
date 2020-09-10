const Subscription = {
    update: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: (parent, args, context, info) =>{
        const { pubsub } = context
        return pubsub.asyncIterator(['update_user'])
      } 
    }
}

module.exports = Subscription
