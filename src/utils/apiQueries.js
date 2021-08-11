import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      properties {
        _id
        propertyName
        address
        juiceBoxId
        openSprinklerAddress
        openSprinklerKey
        climate
        zones {
          _id
          stationNumber
          stationName
          type
          area
        }
      }
    }
  }
`;
