module.exports = {
    components: {
      schemas: {
        Task: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Title of the task",
              example: "Buy food"
            },
            completed: {
              type: "boolean",
              description: "Status of the task",
              example: false
            },
          },
        },
      }
    }
  };