import { gql } from 'urql'

export const SearchProperties = gql`
  query SearchProperties(
    $where: PropertyWhereInput
    $orderBy: [PropertyOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [PropertyScalarFieldEnum!]
  ) {
    properties(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      lat
      lng
      style
      wishlisted {
        buyerUid
        type
      }
    }
  }
`

export const SearchPropertiesDetailed = gql`
  query SearchPropertiesDetailed(
    $where: PropertyWhereInput
    $orderBy: [PropertyOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [PropertyScalarFieldEnum!]
  ) {
    properties(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      address
      bath
      beds
      price
      sqft
      plan
      imgs
      published
      wishlisted {
        buyerUid
        type
      }
    }
  }
`

export const Property = gql`
  query Property($where: PropertyWhereUniqueInput) {
    property(where: $where) {
      price
      id
      sqft
      bath
      beds
      address
      style
      imgs
      lotSize
      lat
      lng
    }
  }
`

export const PropertyDetailed = gql`
  query PropertyDetailed($where: PropertyWhereUniqueInput) {
    property(where: $where) {
      address
      bath
      beds
      city
      createdAt
      description
      facts
      features
      id
      lat
      lng
      lotSize
      price
      priceSqft
      sqft
      state
      style
      updatedAt
      yearBuilt
      zipcode
      imgs
    }
  }
`

export const CreateUserHome = gql`
  mutation CreateUserHome($createUserHomeInput: CreateUserHomeInput!) {
    createUserHome(createUserHomeInput: $createUserHomeInput) {
      propertyId
      type
      buyerUid
    }
  }
`

export const CreateMessage = gql`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      id
      message
      propertyId
      uid
    }
  }
`
export const UserHomes = gql`
  query UserHomes(
    $distinct: [UserHomeScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: UserHomeWhereUniqueInput
    $orderBy: [UserHomeOrderByWithRelationInput!]
    $where: UserHomeWhereInput
  ) {
    userHomes(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      id
      propertyId
      type
    }
  }
`
export const MyHomes = gql`
  query MyHomes(
    $distinct: [UserHomeScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: UserHomeWhereUniqueInput
    $orderBy: [UserHomeOrderByWithRelationInput!]
    $where: UserHomeWhereInput
  ) {
    myHomes(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      id
      propertyId
      type
    }
  }
`
export const UserHomesDetailed = gql`
  query UserHomesDetailed(
    $distinct: [UserHomeScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: UserHomeWhereUniqueInput
    $orderBy: [UserHomeOrderByWithRelationInput!]
    $where: UserHomeWhereInput
  ) {
    userHomes(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      id
      propertyId
      type
      property {
        address
        price
        imgs
      }
    }
  }
`

export const RemoveUserHome = gql`
  mutation RemoveUserHome {
    removeUserHome {
      id
    }
  }
`
export const CreateProperty = gql`
  mutation CreateProperty($createPropertyInput: CreatePropertyInput!) {
    createProperty(createPropertyInput: $createPropertyInput) {
      address
      bath
      beds
      city
      createdAt
      description
      facts
      features
      id
      lat
      lng
      lotSize
      price
      priceSqft
      sqft
      state
      style
      updatedAt
      yearBuilt
      zipcode
    }
  }
`
export const Messages = gql`
  query Messages(
    $where: MessageWhereInput
    $orderBy: [MessageOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [MessageScalarFieldEnum!]
  ) {
    messages(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      property {
        id
        address
        price
        imgs
      }
      message
      createdAt
    }
  }
`

export const UpdateProperty = gql`
  mutation UpdateProperty($updatePropertyInput: UpdatePropertyInput!) {
    updateProperty(updatePropertyInput: $updatePropertyInput) {
      id
      plan
      published
    }
  }
`
// export const SDDF = gql``
// export const SDF = gql``
// export const DF = gql``

export const LocationStats = gql`
  query LocationStats(
    $where: LocationStatsWhereInput
    $orderBy: [LocationStatsOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [LocationStatsScalarFieldEnum!]
  ) {
    locationStats(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      name
      images
      lat
      lng
      priceSqft
      totalHomes
      type
      bedPrices {
        id
        sqftAvg
        beds
        avg
        count
      }
    }
  }
`

export const LocationStat = gql`
  query LocationStat($where: LocationStatsWhereUniqueInput) {
    locationStat(where: $where) {
      id
      name
      images
      lat
      lng
      priceSqft
      totalHomes
      type
      bedPrices {
        id
        sqftAvg
        beds
        avg
        count
      }
    }
  }
`
