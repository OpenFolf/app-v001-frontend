/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateHole = /* GraphQL */ `
  subscription OnCreateHole {
    onCreateHole {
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
export const onUpdateHole = /* GraphQL */ `
  subscription OnUpdateHole {
    onUpdateHole {
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
export const onDeleteHole = /* GraphQL */ `
  subscription OnDeleteHole {
    onDeleteHole {
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
