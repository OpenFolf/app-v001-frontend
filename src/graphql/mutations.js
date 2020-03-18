/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      games {
        id
        course {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
        owner {
          id
          username
          email
        }
        players {
          id
          username
          email
        }
      }
      friends {
        id
        username
        email
        games {
          id
        }
        friends {
          id
          username
          email
        }
        favoritecourses {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
      }
      favoritecourses {
        id
        name
        holes {
          id
          no
          nickname
          par
        }
        courselength
        yearestablished
        parinfo
        teetype
        baskettype
        description
        streetaddress
        postalcode
        location
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      games {
        id
        course {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
        owner {
          id
          username
          email
        }
        players {
          id
          username
          email
        }
      }
      friends {
        id
        username
        email
        games {
          id
        }
        friends {
          id
          username
          email
        }
        favoritecourses {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
      }
      favoritecourses {
        id
        name
        holes {
          id
          no
          nickname
          par
        }
        courselength
        yearestablished
        parinfo
        teetype
        baskettype
        description
        streetaddress
        postalcode
        location
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      games {
        id
        course {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
        owner {
          id
          username
          email
        }
        players {
          id
          username
          email
        }
      }
      friends {
        id
        username
        email
        games {
          id
        }
        friends {
          id
          username
          email
        }
        favoritecourses {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
      }
      favoritecourses {
        id
        name
        holes {
          id
          no
          nickname
          par
        }
        courselength
        yearestablished
        parinfo
        teetype
        baskettype
        description
        streetaddress
        postalcode
        location
      }
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      course {
        id
        name
        holes {
          id
          no
          nickname
          par
        }
        courselength
        yearestablished
        parinfo
        teetype
        baskettype
        description
        streetaddress
        postalcode
        location
      }
      owner {
        id
        username
        email
        games {
          id
        }
        friends {
          id
          username
          email
        }
        favoritecourses {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
      }
      players {
        id
        username
        email
        games {
          id
        }
        friends {
          id
          username
          email
        }
        favoritecourses {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
      }
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      course {
        id
        name
        holes {
          id
          no
          nickname
          par
        }
        courselength
        yearestablished
        parinfo
        teetype
        baskettype
        description
        streetaddress
        postalcode
        location
      }
      owner {
        id
        username
        email
        games {
          id
        }
        friends {
          id
          username
          email
        }
        favoritecourses {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
      }
      players {
        id
        username
        email
        games {
          id
        }
        friends {
          id
          username
          email
        }
        favoritecourses {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
      }
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      course {
        id
        name
        holes {
          id
          no
          nickname
          par
        }
        courselength
        yearestablished
        parinfo
        teetype
        baskettype
        description
        streetaddress
        postalcode
        location
      }
      owner {
        id
        username
        email
        games {
          id
        }
        friends {
          id
          username
          email
        }
        favoritecourses {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
      }
      players {
        id
        username
        email
        games {
          id
        }
        friends {
          id
          username
          email
        }
        favoritecourses {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
      }
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      name
      holes {
        id
        no
        nickname
        course {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
        par
      }
      courselength
      yearestablished
      parinfo
      teetype
      baskettype
      description
      streetaddress
      postalcode
      location
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      name
      holes {
        id
        no
        nickname
        course {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
        par
      }
      courselength
      yearestablished
      parinfo
      teetype
      baskettype
      description
      streetaddress
      postalcode
      location
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      name
      holes {
        id
        no
        nickname
        course {
          id
          name
          courselength
          yearestablished
          parinfo
          teetype
          baskettype
          description
          streetaddress
          postalcode
          location
        }
        par
      }
      courselength
      yearestablished
      parinfo
      teetype
      baskettype
      description
      streetaddress
      postalcode
      location
    }
  }
`;
export const createHole = /* GraphQL */ `
  mutation CreateHole(
    $input: CreateHoleInput!
    $condition: ModelHoleConditionInput
  ) {
    createHole(input: $input, condition: $condition) {
      id
      no
      nickname
      course {
        id
        name
        holes {
          id
          no
          nickname
          par
        }
        courselength
        yearestablished
        parinfo
        teetype
        baskettype
        description
        streetaddress
        postalcode
        location
      }
      par
    }
  }
`;
export const updateHole = /* GraphQL */ `
  mutation UpdateHole(
    $input: UpdateHoleInput!
    $condition: ModelHoleConditionInput
  ) {
    updateHole(input: $input, condition: $condition) {
      id
      no
      nickname
      course {
        id
        name
        holes {
          id
          no
          nickname
          par
        }
        courselength
        yearestablished
        parinfo
        teetype
        baskettype
        description
        streetaddress
        postalcode
        location
      }
      par
    }
  }
`;
export const deleteHole = /* GraphQL */ `
  mutation DeleteHole(
    $input: DeleteHoleInput!
    $condition: ModelHoleConditionInput
  ) {
    deleteHole(input: $input, condition: $condition) {
      id
      no
      nickname
      course {
        id
        name
        holes {
          id
          no
          nickname
          par
        }
        courselength
        yearestablished
        parinfo
        teetype
        baskettype
        description
        streetaddress
        postalcode
        location
      }
      par
    }
  }
`;
