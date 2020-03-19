/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getHole = /* GraphQL */ `
  query GetHole($id: ID!) {
    getHole(id: $id) {
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
export const listHoles = /* GraphQL */ `
  query ListHoles(
    $filter: ModelHoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
