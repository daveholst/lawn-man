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

export const ADD_PROPERTY = gql`
  mutation AddProperty(
    $propertyName: String
    $address: String
    $juiceBoxId: String
    $openSprinklerAddress: String
    $openSprinklerKey: String
    $climate: String
  ) {
    addProperty(
      propertyName: $propertyName
      address: $address
      juiceBoxId: $juiceBoxId
      openSprinklerAddress: $openSprinklerAddress
      openSprinklerKey: $openSprinklerKey
      climate: $climate
    ) {
      token
      user {
        properties {
          propertyName
          address
          juiceBoxId
          openSprinklerAddress
          openSprinklerKey
          climate
        }
      }
    }
  }
`;

export const ADD_ZONES = gql`
  mutation AddZones(
    $propertyName: String!
    $addZonesInput: [CreateZonePayload]
  ) {
    addZones(propertyName: $propertyName, input: $addZonesInput) {
      token
      user {
        properties {
          zones {
            stationName
          }
        }
      }
    }
  }
`;
export const ADD_FERTILISER = gql`
  mutation AddFertiliser($addFertiliserInput: CreateFertiliserPayload) {
    addFertiliser(input: $addFertiliserInput) {
      productBrand
      productName
      type
    }
  }
`;

export const EDIT_ZONE = gql`
  mutation EditZone(
    $zoneId: String!
    $propertyName: String!
    $editZonesInput: [CreateZonePayload]
  ) {
    editZone(
      zoneId: $zoneId
      propertyName: $propertyName
      input: $editZonesInput
    ) {
      token
      user {
        properties {
          zones {
            stationName
            stationNumber
            type
            area
          }
        }
      }
    }
  }
`;

export const RUN_MAN_PROG = gql`
  mutation runManProg(
    $propertyId: String!
    $stationNumber: String!
    $fertRuntime: String!
  ) {
    runManProg(
      propertyId: $propertyId
      stationNumber: $stationNumber
      fertRuntime: $fertRuntime
    ) {
      message
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;
