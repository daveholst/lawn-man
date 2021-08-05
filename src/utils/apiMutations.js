import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUserMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        firstName
        lastName
        email
      }
    }
  }
`;
