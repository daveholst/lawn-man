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

export const GET_FERTILISERS = gql`
  query fertilisers {
    fertilisers {
      _id
      productBrand
      productName
      type
      description
      applicationRate
      manufacturerLink
      bunningsLink
      imageLink
    }
  }
`;
