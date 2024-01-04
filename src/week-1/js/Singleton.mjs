const Singleton = (function () {
  let instance;

  function createInstance() {
    let object = new Object('I am the instance');
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export const SingletonInstance = Object.freeze(Singleton);

// Class version
// let instance;

// class Singleton {
//   constructor() {
//     if (instance) {
//       throw new Error('New instance cannot be created!!');
//     }

//     instance = this;
//   }

//   getInstance() {
//     return instance;
//   }

//   /**
//    * Finally, any singleton should define some business logic, which can be
//    * executed on its instance.
//    */
//   someBusinessLogic() {
//     // ...
//   }
// }

// export const SingletonInstance = Object.freeze(new Singleton());
