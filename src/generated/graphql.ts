import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
}

export type Agent = {
  __typename?: 'Agent'
  createdAt: Scalars['DateTime']['output']
  messages?: Maybe<Array<GroupedMessages>>
  properties?: Maybe<Array<Property>>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type AgentListRelationFilter = {
  every?: InputMaybe<AgentWhereInput>
  none?: InputMaybe<AgentWhereInput>
  some?: InputMaybe<AgentWhereInput>
}

export type AgentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type AgentOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>
  properties?: InputMaybe<PropertyOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AgentRelationFilter = {
  is?: InputMaybe<AgentWhereInput>
  isNot?: InputMaybe<AgentWhereInput>
}

export enum AgentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AgentWhereInput = {
  AND?: InputMaybe<Array<AgentWhereInput>>
  NOT?: InputMaybe<Array<AgentWhereInput>>
  OR?: InputMaybe<Array<AgentWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  messages?: InputMaybe<MessageListRelationFilter>
  properties?: InputMaybe<PropertyListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AgentWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']['input']>
}

export type BedPrice = {
  __typename?: 'BedPrice'
  avg: Scalars['Int']['output']
  beds: Scalars['String']['output']
  count: Scalars['Int']['output']
  id: Scalars['Int']['output']
  locationStatsId: Scalars['Int']['output']
  sqftAvg: Scalars['Int']['output']
}

export type BedPriceListRelationFilter = {
  every?: InputMaybe<BedPriceWhereInput>
  none?: InputMaybe<BedPriceWhereInput>
  some?: InputMaybe<BedPriceWhereInput>
}

export type BedPriceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BedPriceOrderByWithRelationInput = {
  avg?: InputMaybe<SortOrder>
  beds?: InputMaybe<SortOrder>
  count?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  locationStats?: InputMaybe<LocationStatsOrderByWithRelationInput>
  locationStatsId?: InputMaybe<SortOrder>
  sqftAvg?: InputMaybe<SortOrder>
}

export enum BedPriceScalarFieldEnum {
  Avg = 'avg',
  Beds = 'beds',
  Count = 'count',
  Id = 'id',
  LocationStatsId = 'locationStatsId',
  SqftAvg = 'sqftAvg',
}

export type BedPriceWhereInput = {
  AND?: InputMaybe<Array<BedPriceWhereInput>>
  NOT?: InputMaybe<Array<BedPriceWhereInput>>
  OR?: InputMaybe<Array<BedPriceWhereInput>>
  avg?: InputMaybe<IntFilter>
  beds?: InputMaybe<StringFilter>
  count?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  locationStats?: InputMaybe<LocationStatsRelationFilter>
  locationStatsId?: InputMaybe<IntFilter>
  sqftAvg?: InputMaybe<IntFilter>
}

export type BedPriceWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<Scalars['Boolean']['input']>
}

export type Buyer = {
  __typename?: 'Buyer'
  createdAt: Scalars['DateTime']['output']
  interests?: Maybe<Array<UserHome>>
  messages?: Maybe<Array<GroupedMessages>>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  views?: Maybe<Array<View>>
}

export type BuyerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  interests?: InputMaybe<UserHomeOrderByRelationAggregateInput>
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  views?: InputMaybe<ViewOrderByRelationAggregateInput>
}

export type BuyerRelationFilter = {
  is?: InputMaybe<BuyerWhereInput>
  isNot?: InputMaybe<BuyerWhereInput>
}

export enum BuyerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type BuyerWhereInput = {
  AND?: InputMaybe<Array<BuyerWhereInput>>
  NOT?: InputMaybe<Array<BuyerWhereInput>>
  OR?: InputMaybe<Array<BuyerWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  interests?: InputMaybe<UserHomeListRelationFilter>
  messages?: InputMaybe<MessageListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  views?: InputMaybe<ViewListRelationFilter>
}

export type BuyerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']['input']>
}

export type CreateAgentInput = {
  uid: Scalars['String']['input']
}

export type CreateBedPriceInput = {
  avg: Scalars['Int']['input']
  beds: Scalars['String']['input']
  count: Scalars['Int']['input']
  locationStatsId: Scalars['Int']['input']
  sqftAvg: Scalars['Int']['input']
}

export type CreateBuyerInput = {
  uid: Scalars['String']['input']
}

export type CreateLocationStatsInput = {
  lat: Scalars['Int']['input']
  lng: Scalars['Int']['input']
  priceSqft: Scalars['Int']['input']
  totalHomes: Scalars['Int']['input']
  type?: InputMaybe<LocationStatsType>
}

export type CreateMessageInput = {
  agentUid?: InputMaybe<Scalars['String']['input']>
  buyerUid?: InputMaybe<Scalars['String']['input']>
  message: Scalars['String']['input']
  propertyId: Scalars['Int']['input']
  sellerUid?: InputMaybe<Scalars['String']['input']>
}

export type CreatePropertyInput = {
  address: Scalars['String']['input']
  bath?: InputMaybe<Scalars['Int']['input']>
  beds?: InputMaybe<Scalars['Int']['input']>
  city: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  facts?: InputMaybe<Scalars['String']['input']>
  features?: InputMaybe<Scalars['String']['input']>
  imgs: Array<Scalars['String']['input']>
  lat: Scalars['Int']['input']
  lng: Scalars['Int']['input']
  lotSize: Scalars['Int']['input']
  plan: Scalars['Int']['input']
  price: Scalars['Int']['input']
  priceSqft?: InputMaybe<Scalars['Int']['input']>
  published: Scalars['Boolean']['input']
  sellerUid: Scalars['String']['input']
  sqft: Scalars['Int']['input']
  state: Scalars['String']['input']
  style?: InputMaybe<Style>
  yearBuilt: Scalars['Int']['input']
  zipcode: Scalars['String']['input']
}

export type CreateSellerInput = {
  uid: Scalars['String']['input']
}

export type CreateUserHomeInput = {
  buyerUid: Scalars['String']['input']
  propertyId: Scalars['Int']['input']
  type: UserHomeType
}

export type CreateViewInput = {
  buyerUid: Scalars['String']['input']
  propertyId: Scalars['Int']['input']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type EnumStyleFilter = {
  equals?: InputMaybe<Style>
  in?: InputMaybe<Array<Style>>
  not?: InputMaybe<Style>
  notIn?: InputMaybe<Array<Style>>
}

export type GroupedMessages = {
  __typename?: 'GroupedMessages'
  messages: Array<Message>
  propertyId: Scalars['Int']['output']
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Scalars['Int']['input']>
}

export type LocationStats = {
  __typename?: 'LocationStats'
  id: Scalars['Int']['output']
  lat: Scalars['Int']['output']
  lng: Scalars['Int']['output']
  priceSqft: Scalars['Int']['output']
  totalHomes: Scalars['Int']['output']
  type?: Maybe<LocationStatsType>
}

export type LocationStatsOrderByWithRelationInput = {
  bedsPrice?: InputMaybe<BedPriceOrderByRelationAggregateInput>
  id?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  priceSqft?: InputMaybe<SortOrder>
  totalHomes?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
}

export type LocationStatsRelationFilter = {
  is?: InputMaybe<LocationStatsWhereInput>
  isNot?: InputMaybe<LocationStatsWhereInput>
}

export enum LocationStatsScalarFieldEnum {
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  PriceSqft = 'priceSqft',
  TotalHomes = 'totalHomes',
  Type = 'type',
}

export enum LocationStatsType {
  City = 'city',
  State = 'state',
}

export type LocationStatsWhereInput = {
  AND?: InputMaybe<Array<LocationStatsWhereInput>>
  NOT?: InputMaybe<Array<LocationStatsWhereInput>>
  OR?: InputMaybe<Array<LocationStatsWhereInput>>
  bedsPrice?: InputMaybe<BedPriceListRelationFilter>
  id?: InputMaybe<IntFilter>
  lat?: InputMaybe<IntFilter>
  lng?: InputMaybe<IntFilter>
  priceSqft?: InputMaybe<IntFilter>
  totalHomes?: InputMaybe<IntFilter>
  type?: InputMaybe<LocationStatsType>
}

export type LocationStatsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type LoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  displayName: Scalars['String']['output']
  email: Scalars['String']['output']
  expiresIn: Scalars['String']['output']
  idToken: Scalars['String']['output']
  kind: Scalars['String']['output']
  localId: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
}

export type Message = {
  __typename?: 'Message'
  agent?: Maybe<Agent>
  agentUid?: Maybe<Scalars['String']['output']>
  buyer?: Maybe<Buyer>
  buyerUid?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  message: Scalars['String']['output']
  property?: Maybe<Property>
  propertyId: Scalars['Int']['output']
  seller?: Maybe<Seller>
  sellerUid?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>
  none?: InputMaybe<MessageWhereInput>
  some?: InputMaybe<MessageWhereInput>
}

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type MessageOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>
  agentUid?: InputMaybe<SortOrder>
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>
  buyerUid?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  message?: InputMaybe<SortOrder>
  property?: InputMaybe<PropertyOrderByWithRelationInput>
  propertyId?: InputMaybe<SortOrder>
  seller?: InputMaybe<SellerOrderByWithRelationInput>
  sellerUid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum MessageScalarFieldEnum {
  AgentUid = 'agentUid',
  BuyerUid = 'buyerUid',
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  PropertyId = 'propertyId',
  SellerUid = 'sellerUid',
  UpdatedAt = 'updatedAt',
}

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>
  NOT?: InputMaybe<Array<MessageWhereInput>>
  OR?: InputMaybe<Array<MessageWhereInput>>
  agent?: InputMaybe<AgentRelationFilter>
  agentUid?: InputMaybe<StringFilter>
  buyer?: InputMaybe<BuyerRelationFilter>
  buyerUid?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  message?: InputMaybe<StringFilter>
  property?: InputMaybe<PropertyRelationFilter>
  propertyId?: InputMaybe<IntFilter>
  seller?: InputMaybe<SellerRelationFilter>
  sellerUid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAgent: Agent
  createBedPrice: BedPrice
  createBuyer: Buyer
  createLocationStats: LocationStats
  createMessage: Message
  createProperty: Property
  createSeller: Seller
  createUserHome: UserHome
  createView: View
  login: LoginOutput
  logout: Scalars['Boolean']['output']
  refreshToken: RefreshTokenOutput
  register: RegisterOutput
  removeAgent: Agent
  removeBedPrice: BedPrice
  removeBuyer: Buyer
  removeLocationStats: LocationStats
  removeMessage: Message
  removeProperty: Property
  removeSeller: Seller
  removeUserHome: UserHome
  removeView: View
  setAdmin: Scalars['Boolean']['output']
  setRole: Scalars['Boolean']['output']
  updateAgent: Agent
  updateBedPrice: BedPrice
  updateBuyer: Buyer
  updateLocationStats: LocationStats
  updateProperty: Property
  updateSeller: Seller
  updateUserHome: UserHome
  updateView: View
}

export type MutationCreateAgentArgs = {
  createAgentInput: CreateAgentInput
}

export type MutationCreateBedPriceArgs = {
  createBedPriceInput: CreateBedPriceInput
}

export type MutationCreateBuyerArgs = {
  createBuyerInput: CreateBuyerInput
}

export type MutationCreateLocationStatsArgs = {
  createLocationStatsInput: CreateLocationStatsInput
}

export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput
}

export type MutationCreatePropertyArgs = {
  createPropertyInput: CreatePropertyInput
}

export type MutationCreateSellerArgs = {
  createSellerInput: CreateSellerInput
}

export type MutationCreateUserHomeArgs = {
  createUserHomeInput: CreateUserHomeInput
}

export type MutationCreateViewArgs = {
  createViewInput: CreateViewInput
}

export type MutationLoginArgs = {
  credentials: LoginInput
}

export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput
}

export type MutationRegisterArgs = {
  credentials: RegisterInput
}

export type MutationRemoveAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>
}

export type MutationRemoveBedPriceArgs = {
  where?: InputMaybe<BedPriceWhereUniqueInput>
}

export type MutationRemoveBuyerArgs = {
  where?: InputMaybe<BuyerWhereUniqueInput>
}

export type MutationRemoveLocationStatsArgs = {
  where?: InputMaybe<LocationStatsWhereUniqueInput>
}

export type MutationRemoveMessageArgs = {
  where?: InputMaybe<MessageWhereUniqueInput>
}

export type MutationRemovePropertyArgs = {
  where?: InputMaybe<PropertyWhereUniqueInput>
}

export type MutationRemoveSellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>
}

export type MutationRemoveUserHomeArgs = {
  where?: InputMaybe<UserHomeWhereUniqueInput>
}

export type MutationRemoveViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>
}

export type MutationSetAdminArgs = {
  uid: Scalars['String']['input']
}

export type MutationSetRoleArgs = {
  setRoleInput: SetRoleInput
}

export type MutationUpdateAgentArgs = {
  updateAgentInput: UpdateAgentInput
}

export type MutationUpdateBedPriceArgs = {
  updateBedPriceInput: UpdateBedPriceInput
}

export type MutationUpdateBuyerArgs = {
  updateBuyerInput: UpdateBuyerInput
}

export type MutationUpdateLocationStatsArgs = {
  updateLocationStatsInput: UpdateLocationStatsInput
}

export type MutationUpdatePropertyArgs = {
  updatePropertyInput: UpdatePropertyInput
}

export type MutationUpdateSellerArgs = {
  updateSellerInput: UpdateSellerInput
}

export type MutationUpdateUserHomeArgs = {
  updateUserHomeInput: UpdateUserHomeInput
}

export type MutationUpdateViewArgs = {
  updateViewInput: UpdateViewInput
}

export type Property = {
  __typename?: 'Property'
  address: Scalars['String']['output']
  agents?: Maybe<Array<Agent>>
  bath?: Maybe<Scalars['Int']['output']>
  beds?: Maybe<Scalars['Int']['output']>
  city: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  facts?: Maybe<Scalars['String']['output']>
  features?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  imgs: Array<Scalars['String']['output']>
  lat: Scalars['Int']['output']
  lng: Scalars['Int']['output']
  lotSize: Scalars['Int']['output']
  messages?: Maybe<Array<Message>>
  plan: Scalars['Int']['output']
  price: Scalars['Int']['output']
  priceSqft?: Maybe<Scalars['Int']['output']>
  published: Scalars['Boolean']['output']
  seller?: Maybe<Seller>
  sellerUid: Scalars['String']['output']
  sqft: Scalars['Int']['output']
  state: Scalars['String']['output']
  style?: Maybe<Style>
  updatedAt: Scalars['DateTime']['output']
  userHomes?: Maybe<Array<UserHome>>
  views?: Maybe<Array<View>>
  yearBuilt: Scalars['Int']['output']
  zipcode: Scalars['String']['output']
}

export type PropertyListRelationFilter = {
  every?: InputMaybe<PropertyWhereInput>
  none?: InputMaybe<PropertyWhereInput>
  some?: InputMaybe<PropertyWhereInput>
}

export type PropertyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type PropertyOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>
  agents?: InputMaybe<AgentOrderByRelationAggregateInput>
  bath?: InputMaybe<SortOrder>
  beds?: InputMaybe<SortOrder>
  city?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  facts?: InputMaybe<SortOrder>
  features?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  imgs?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  lotSize?: InputMaybe<SortOrder>
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>
  plan?: InputMaybe<SortOrder>
  price?: InputMaybe<SortOrder>
  priceSqft?: InputMaybe<SortOrder>
  published?: InputMaybe<SortOrder>
  seller?: InputMaybe<SortOrder>
  sellerUid?: InputMaybe<SortOrder>
  sqft?: InputMaybe<SortOrder>
  state?: InputMaybe<SortOrder>
  style?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  userHomes?: InputMaybe<UserHomeOrderByRelationAggregateInput>
  views?: InputMaybe<ViewOrderByRelationAggregateInput>
  yearBuilt?: InputMaybe<SortOrder>
  zipcode?: InputMaybe<SortOrder>
}

export type PropertyRelationFilter = {
  is?: InputMaybe<PropertyWhereInput>
  isNot?: InputMaybe<PropertyWhereInput>
}

export enum PropertyScalarFieldEnum {
  Address = 'address',
  Bath = 'bath',
  Beds = 'beds',
  City = 'city',
  CreatedAt = 'createdAt',
  Description = 'description',
  Facts = 'facts',
  Features = 'features',
  Id = 'id',
  Imgs = 'imgs',
  Lat = 'lat',
  Lng = 'lng',
  LotSize = 'lotSize',
  Plan = 'plan',
  Price = 'price',
  PriceSqft = 'priceSqft',
  Published = 'published',
  SellerUid = 'sellerUid',
  Sqft = 'sqft',
  State = 'state',
  Style = 'style',
  UpdatedAt = 'updatedAt',
  YearBuilt = 'yearBuilt',
  Zipcode = 'zipcode',
}

export type PropertyWhereInput = {
  AND?: InputMaybe<Array<PropertyWhereInput>>
  NOT?: InputMaybe<Array<PropertyWhereInput>>
  OR?: InputMaybe<Array<PropertyWhereInput>>
  address?: InputMaybe<StringFilter>
  agents?: InputMaybe<AgentListRelationFilter>
  bath?: InputMaybe<IntFilter>
  beds?: InputMaybe<IntFilter>
  city?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  facts?: InputMaybe<StringFilter>
  features?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  imgs?: InputMaybe<StringListFilter>
  lat?: InputMaybe<IntFilter>
  lng?: InputMaybe<IntFilter>
  lotSize?: InputMaybe<IntFilter>
  messages?: InputMaybe<MessageListRelationFilter>
  plan?: InputMaybe<IntFilter>
  price?: InputMaybe<IntFilter>
  priceSqft?: InputMaybe<IntFilter>
  published?: InputMaybe<BoolFilter>
  seller?: InputMaybe<SellerRelationFilter>
  sellerUid?: InputMaybe<StringFilter>
  sqft?: InputMaybe<IntFilter>
  state?: InputMaybe<StringFilter>
  style?: InputMaybe<EnumStyleFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  userHomes?: InputMaybe<UserHomeListRelationFilter>
  views?: InputMaybe<ViewListRelationFilter>
  yearBuilt?: InputMaybe<IntFilter>
  zipcode?: InputMaybe<StringFilter>
}

export type PropertyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type Query = {
  __typename?: 'Query'
  agent: Agent
  agents: Array<Agent>
  bedPrice: BedPrice
  bedPrices: Array<BedPrice>
  buyer: Buyer
  buyers: Array<Buyer>
  locationStat: LocationStats
  locationStats: Array<LocationStats>
  message: Message
  messages: Array<Message>
  properties: Array<Property>
  property: Property
  seller: Seller
  sellers: Array<Seller>
  userHome: UserHome
  userHomes: Array<UserHome>
  view: View
  views: Array<View>
}

export type QueryAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>
}

export type QueryAgentsArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<AgentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AgentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AgentWhereInput>
}

export type QueryBedPriceArgs = {
  where?: InputMaybe<BedPriceWhereUniqueInput>
}

export type QueryBedPricesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BedPriceScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BedPriceOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BedPriceWhereInput>
}

export type QueryBuyerArgs = {
  where?: InputMaybe<BuyerWhereUniqueInput>
}

export type QueryBuyersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<BuyerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BuyerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BuyerWhereInput>
}

export type QueryLocationStatArgs = {
  where?: InputMaybe<LocationStatsWhereUniqueInput>
}

export type QueryLocationStatsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<LocationStatsScalarFieldEnum>>
  orderBy?: InputMaybe<Array<LocationStatsOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LocationStatsWhereInput>
}

export type QueryMessageArgs = {
  where?: InputMaybe<MessageWhereUniqueInput>
}

export type QueryMessagesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MessageWhereInput>
}

export type QueryPropertiesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<PropertyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<PropertyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PropertyWhereInput>
}

export type QueryPropertyArgs = {
  where?: InputMaybe<PropertyWhereUniqueInput>
}

export type QuerySellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>
}

export type QuerySellersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<SellerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SellerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SellerWhereInput>
}

export type QueryUserHomeArgs = {
  where?: InputMaybe<UserHomeWhereUniqueInput>
}

export type QueryUserHomesArgs = {
  cursor?: InputMaybe<UserHomeWhereUniqueInput>
  distinct?: InputMaybe<Array<UserHomeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserHomeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserHomeWhereInput>
}

export type QueryViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>
}

export type QueryViewsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<ViewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ViewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ViewWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RefreshTokenInput = {
  refresh_token: Scalars['String']['input']
}

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput'
  access_token: Scalars['String']['output']
  expires_in: Scalars['String']['output']
  id_token: Scalars['String']['output']
  project_id: Scalars['String']['output']
  refresh_token: Scalars['String']['output']
  token_type: Scalars['String']['output']
  user_id: Scalars['String']['output']
}

export type RegisterInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type RegisterOutput = {
  __typename?: 'RegisterOutput'
  displayName: Scalars['String']['output']
  email: Scalars['String']['output']
  expiresIn: Scalars['String']['output']
  idToken: Scalars['String']['output']
  kind: Scalars['String']['output']
  localId: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
}

/** Enum for roles */
export enum RoleEnum {
  Admin = 'admin',
  Manager = 'manager',
}

export type Seller = {
  __typename?: 'Seller'
  createdAt: Scalars['DateTime']['output']
  messages?: Maybe<Array<GroupedMessages>>
  properties?: Maybe<Array<Property>>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type SellerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>
  properties?: InputMaybe<PropertyOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type SellerRelationFilter = {
  is?: InputMaybe<SellerWhereInput>
  isNot?: InputMaybe<SellerWhereInput>
}

export enum SellerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type SellerWhereInput = {
  AND?: InputMaybe<Array<SellerWhereInput>>
  NOT?: InputMaybe<Array<SellerWhereInput>>
  OR?: InputMaybe<Array<SellerWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  messages?: InputMaybe<MessageListRelationFilter>
  properties?: InputMaybe<PropertyListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type SellerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']['input']>
}

export type SetRoleInput = {
  role: RoleEnum
  uid: Scalars['String']['input']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>
  has?: InputMaybe<Scalars['String']['input']>
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>
}

export enum Style {
  Apartment = 'Apartment',
  Condo = 'Condo',
  Coop = 'Coop',
  FarmRanch = 'FarmRanch',
  LotLand = 'LotLand',
  MobileManufactured = 'MobileManufactured',
  MultiFamily = 'MultiFamily',
  SingleFamilyHome = 'SingleFamilyHome',
  Townhouse = 'Townhouse',
  Unknown = 'Unknown',
}

export type UpdateAgentInput = {
  uid: Scalars['String']['input']
}

export type UpdateBedPriceInput = {
  avg?: InputMaybe<Scalars['Int']['input']>
  beds?: InputMaybe<Scalars['String']['input']>
  count?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  locationStatsId?: InputMaybe<Scalars['Int']['input']>
  sqftAvg?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateBuyerInput = {
  uid: Scalars['String']['input']
}

export type UpdateLocationStatsInput = {
  id: Scalars['Int']['input']
  lat?: InputMaybe<Scalars['Int']['input']>
  lng?: InputMaybe<Scalars['Int']['input']>
  priceSqft?: InputMaybe<Scalars['Int']['input']>
  totalHomes?: InputMaybe<Scalars['Int']['input']>
  type?: InputMaybe<LocationStatsType>
}

export type UpdatePropertyInput = {
  address?: InputMaybe<Scalars['String']['input']>
  bath?: InputMaybe<Scalars['Int']['input']>
  beds?: InputMaybe<Scalars['Int']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  facts?: InputMaybe<Scalars['String']['input']>
  features?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  imgs?: InputMaybe<Array<Scalars['String']['input']>>
  lat?: InputMaybe<Scalars['Int']['input']>
  lng?: InputMaybe<Scalars['Int']['input']>
  lotSize?: InputMaybe<Scalars['Int']['input']>
  plan?: InputMaybe<Scalars['Int']['input']>
  price?: InputMaybe<Scalars['Int']['input']>
  priceSqft?: InputMaybe<Scalars['Int']['input']>
  published?: InputMaybe<Scalars['Boolean']['input']>
  sellerUid?: InputMaybe<Scalars['String']['input']>
  sqft?: InputMaybe<Scalars['Int']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  style?: InputMaybe<Style>
  yearBuilt?: InputMaybe<Scalars['Int']['input']>
  zipcode?: InputMaybe<Scalars['String']['input']>
}

export type UpdateSellerInput = {
  uid: Scalars['String']['input']
}

export type UpdateUserHomeInput = {
  buyerUid?: InputMaybe<Scalars['String']['input']>
  buyerUid_propertyId?: InputMaybe<UserHomeBuyerUidPropertyIdCompoundUniqueInput>
  propertyId?: InputMaybe<Scalars['Int']['input']>
  type?: InputMaybe<UserHomeType>
}

export type UpdateViewInput = {
  buyerUid?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  propertyId?: InputMaybe<Scalars['Int']['input']>
}

export type UserHome = {
  __typename?: 'UserHome'
  buyer?: Maybe<Property>
  buyerUid: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  property?: Maybe<Property>
  propertyId: Scalars['Int']['output']
  type: UserHomeType
  updatedAt: Scalars['DateTime']['output']
}

export type UserHomeBuyerUidPropertyIdCompoundUniqueInput = {
  buyerUid?: InputMaybe<Scalars['String']['input']>
  propertyId?: InputMaybe<Scalars['Int']['input']>
}

export type UserHomeListRelationFilter = {
  every?: InputMaybe<UserHomeWhereInput>
  none?: InputMaybe<UserHomeWhereInput>
  some?: InputMaybe<UserHomeWhereInput>
}

export type UserHomeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type UserHomeOrderByWithRelationInput = {
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>
  buyerUid?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  property?: InputMaybe<PropertyOrderByWithRelationInput>
  propertyId?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum UserHomeScalarFieldEnum {
  BuyerUid = 'buyerUid',
  CreatedAt = 'createdAt',
  PropertyId = 'propertyId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
}

export enum UserHomeType {
  RemovedFromWishlist = 'REMOVED_FROM_WISHLIST',
  Wishlisted = 'WISHLISTED',
}

export type UserHomeWhereInput = {
  AND?: InputMaybe<Array<UserHomeWhereInput>>
  NOT?: InputMaybe<Array<UserHomeWhereInput>>
  OR?: InputMaybe<Array<UserHomeWhereInput>>
  buyer?: InputMaybe<BuyerRelationFilter>
  buyerUid?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  property?: InputMaybe<PropertyRelationFilter>
  propertyId?: InputMaybe<IntFilter>
  type?: InputMaybe<UserHomeType>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserHomeWhereUniqueInput = {
  buyerUid_propertyId?: InputMaybe<UserHomeBuyerUidPropertyIdCompoundUniqueInput>
}

export type View = {
  __typename?: 'View'
  buyer?: Maybe<Property>
  buyerUid: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  property?: Maybe<Property>
  propertyId: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ViewListRelationFilter = {
  every?: InputMaybe<ViewWhereInput>
  none?: InputMaybe<ViewWhereInput>
  some?: InputMaybe<ViewWhereInput>
}

export type ViewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ViewOrderByWithRelationInput = {
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>
  buyerUid?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  property?: InputMaybe<PropertyOrderByWithRelationInput>
  propertyId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ViewScalarFieldEnum {
  BuyerUid = 'buyerUid',
  CreatedAt = 'createdAt',
  Id = 'id',
  PropertyId = 'propertyId',
  UpdatedAt = 'updatedAt',
}

export type ViewWhereInput = {
  AND?: InputMaybe<Array<ViewWhereInput>>
  NOT?: InputMaybe<Array<ViewWhereInput>>
  OR?: InputMaybe<Array<ViewWhereInput>>
  buyer?: InputMaybe<BuyerRelationFilter>
  buyerUid?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  property?: InputMaybe<PropertyRelationFilter>
  propertyId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ViewWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type WhereUniqueInputNumber = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type WhereUniqueInputUid = {
  uid?: InputMaybe<Scalars['String']['input']>
}

export type MyQueryQueryVariables = Exact<{ [key: string]: never }>

export type MyQueryQuery = {
  __typename?: 'Query'
  properties: Array<{
    __typename?: 'Property'
    address: string
    description?: string | null
  }>
}

export type SearchHomesByLocationQueryVariables = Exact<{
  distinct?: InputMaybe<
    Array<PropertyScalarFieldEnum> | PropertyScalarFieldEnum
  >
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<WhereUniqueInputNumber>
  orderBy?: InputMaybe<
    Array<PropertyOrderByWithRelationInput> | PropertyOrderByWithRelationInput
  >
  where?: InputMaybe<PropertyWhereInput>
}>

export type SearchHomesByLocationQuery = {
  __typename?: 'Query'
  properties: Array<{
    __typename?: 'Property'
    id: number
    lat: number
    lng: number
    style?: Style | null
  }>
}

export type SearchHomesByLocationDetailedQueryVariables = Exact<{
  distinct?: InputMaybe<
    Array<PropertyScalarFieldEnum> | PropertyScalarFieldEnum
  >
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<WhereUniqueInputNumber>
  orderBy?: InputMaybe<
    Array<PropertyOrderByWithRelationInput> | PropertyOrderByWithRelationInput
  >
  where?: InputMaybe<PropertyWhereInput>
}>

export type SearchHomesByLocationDetailedQuery = {
  __typename?: 'Query'
  properties: Array<{
    __typename?: 'Property'
    id: number
    address: string
    bath?: number | null
    beds?: number | null
    price: number
    sqft: number
    plan: number
    imgs: Array<string>
    style?: Style | null
    yearBuilt: number
    lat: number
    lng: number
    city: string
  }>
}

export type GetMyHomesQueryVariables = Exact<{
  distinct?: InputMaybe<
    Array<PropertyScalarFieldEnum> | PropertyScalarFieldEnum
  >
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<WhereUniqueInputNumber>
  orderBy?: InputMaybe<
    Array<PropertyOrderByWithRelationInput> | PropertyOrderByWithRelationInput
  >
  where?: InputMaybe<PropertyWhereInput>
}>

export type GetMyHomesQuery = {
  __typename?: 'Query'
  properties: Array<{
    __typename?: 'Property'
    id: number
    address: string
    bath?: number | null
    beds?: number | null
    price: number
    sqft: number
    plan: number
    imgs: Array<string>
    published: boolean
  }>
}

export type GetHomeByIdQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereUniqueInput>
}>

export type GetHomeByIdQuery = {
  __typename?: 'Query'
  property: {
    __typename?: 'Property'
    price: number
    id: number
    sqft: number
    bath?: number | null
    beds?: number | null
    address: string
    style?: Style | null
    imgs: Array<string>
  }
}

export type GetRegionByIdQueryVariables = Exact<{
  where?: InputMaybe<LocationStatsWhereUniqueInput>
}>

export type GetRegionByIdQuery = {
  __typename?: 'Query'
  locationStat: {
    __typename?: 'LocationStats'
    id: number
    totalHomes: number
    priceSqft: number
  }
}

export type GetWishlistedHomesQueryVariables = Exact<{
  uid: Scalars['String']['input']
}>

export type GetWishlistedHomesQuery = {
  __typename?: 'Query'
  wishlisted: Array<{ __typename?: 'UserHome'; id: number; propertyId: number }>
}

export type GetWishlistedHomesDetailedQueryVariables = Exact<{
  uid: Scalars['String']['input']
}>

export type GetWishlistedHomesDetailedQuery = {
  __typename?: 'Query'
  wishlisted: Array<{
    __typename?: 'UserHome'
    id: number
    propertyId: number
    property?: {
      __typename?: 'Property'
      address: string
      price: number
      imgs: Array<string>
    } | null
  }>
}

export type GetHomeQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereUniqueInput>
}>

export type GetHomeQuery = {
  __typename?: 'Query'
  property: {
    __typename?: 'Property'
    address: string
    bath?: number | null
    beds?: number | null
    city: string
    createdAt: any
    description?: string | null
    facts?: string | null
    features?: string | null
    id: number
    lat: number
    lng: number
    lotSize: number
    price: number
    priceSqft?: number | null
    sqft: number
    state: string
    style?: Style | null
    updatedAt: any
    yearBuilt: number
    zipcode: string
    imgs: Array<string>
  }
}

export type GetMessagesQueryVariables = Exact<{
  uid: Scalars['String']['input']
}>

export type GetMessagesQuery = {
  __typename?: 'Query'
  messages: Array<{
    __typename?: 'Message'
    id: number
    message: string
    createdAt: any
    property?: {
      __typename?: 'Property'
      id: number
      address: string
      price: number
      imgs: Array<string>
    } | null
  }>
}

export type GetEnquiriesQueryVariables = Exact<{
  uid: Scalars['String']['input']
}>

export type GetEnquiriesQuery = {
  __typename?: 'Query'
  messages: Array<{
    __typename?: 'Message'
    id: number
    message: string
    createdAt: any
    property?: {
      __typename?: 'Property'
      id: number
      address: string
      price: number
      imgs: Array<string>
    } | null
  }>
}

export type SetHomePlanMutationVariables = Exact<{
  id: Scalars['Int']['input']
  plan?: InputMaybe<Scalars['Int']['input']>
}>

export type SetHomePlanMutation = {
  __typename?: 'Mutation'
  updateProperty: { __typename?: 'Property'; plan: number }
}

export type SetHomePublishedMutationVariables = Exact<{
  id: Scalars['Int']['input']
  published?: InputMaybe<Scalars['Boolean']['input']>
}>

export type SetHomePublishedMutation = {
  __typename?: 'Mutation'
  updateProperty: { __typename?: 'Property'; plan: number }
}

export type InsertUserHomeMutationVariables = Exact<{
  createUserHomeInput: CreateUserHomeInput
}>

export type InsertUserHomeMutation = {
  __typename?: 'Mutation'
  createUserHome: {
    __typename?: 'UserHome'
    id: number
    propertyId: number
    type: UserHomeType
    buyerUid: string
  }
}

export type CreateMessageMutationVariables = Exact<{
  createMessageInput: CreateMessageInput
}>

export type CreateMessageMutation = {
  __typename?: 'Mutation'
  createMessage: {
    __typename?: 'Message'
    id: number
    propertyId: number
    updatedAt: any
    createdAt: any
    buyer?: { __typename?: 'Buyer'; uid: string } | null
    seller?: { __typename?: 'Seller'; uid: string } | null
    agent?: { __typename?: 'Agent'; uid: string } | null
  }
}

export type CreatePropertyMutationVariables = Exact<{
  createPropertyInput: CreatePropertyInput
}>

export type CreatePropertyMutation = {
  __typename?: 'Mutation'
  createProperty: {
    __typename?: 'Property'
    address: string
    bath?: number | null
    beds?: number | null
    city: string
    createdAt: any
    description?: string | null
    facts?: string | null
    features?: string | null
    id: number
    lat: number
    lng: number
    lotSize: number
    price: number
    priceSqft?: number | null
    sqft: number
    state: string
    style?: Style | null
    updatedAt: any
    yearBuilt: number
    zipcode: string
  }
}

export type UpdateUserHomeMutationVariables = Exact<{
  updateUserHomeInput: UpdateUserHomeInput
}>

export type UpdateUserHomeMutation = {
  __typename?: 'Mutation'
  updateUserHome: {
    __typename?: 'UserHome'
    id: number
    type: UserHomeType
    propertyId: number
  }
}

export const namedOperations = {
  Query: {
    MyQuery: 'MyQuery',
    SearchHomesByLocation: 'SearchHomesByLocation',
    SearchHomesByLocationDetailed: 'SearchHomesByLocationDetailed',
    GetMyHomes: 'GetMyHomes',
    GetHomeById: 'GetHomeById',
    GetRegionById: 'GetRegionById',
    GetWishlistedHomes: 'GetWishlistedHomes',
    GetWishlistedHomesDetailed: 'GetWishlistedHomesDetailed',
    GetHome: 'GetHome',
    GetMessages: 'GetMessages',
    GetEnquiries: 'GetEnquiries',
  },
  Mutation: {
    SetHomePlan: 'SetHomePlan',
    SetHomePublished: 'SetHomePublished',
    InsertUserHome: 'InsertUserHome',
    CreateMessage: 'CreateMessage',
    CreateProperty: 'CreateProperty',
    UpdateUserHome: 'UpdateUserHome',
  },
}

export const MyQueryDocument = /*#__PURE__*/ gql`
  query MyQuery {
    properties(take: 10) {
      address
      description
    }
  }
`

export function useMyQueryQuery(
  options?: Omit<Urql.UseQueryArgs<MyQueryQueryVariables>, 'query'>
) {
  return Urql.useQuery<MyQueryQuery, MyQueryQueryVariables>({
    query: MyQueryDocument,
    ...options,
  })
}
export const SearchHomesByLocationDocument = /*#__PURE__*/ gql`
  query SearchHomesByLocation(
    $distinct: [PropertyScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: WhereUniqueInputNumber
    $orderBy: [PropertyOrderByWithRelationInput!]
    $where: PropertyWhereInput
  ) {
    properties(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      id
      lat
      lng
      style
    }
  }
`

export function useSearchHomesByLocationQuery(
  options?: Omit<
    Urql.UseQueryArgs<SearchHomesByLocationQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    SearchHomesByLocationQuery,
    SearchHomesByLocationQueryVariables
  >({ query: SearchHomesByLocationDocument, ...options })
}
export const SearchHomesByLocationDetailedDocument = /*#__PURE__*/ gql`
  query SearchHomesByLocationDetailed(
    $distinct: [PropertyScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: WhereUniqueInputNumber
    $orderBy: [PropertyOrderByWithRelationInput!]
    $where: PropertyWhereInput
  ) {
    properties(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      id
      address
      bath
      beds
      price
      sqft
      plan
      imgs
      style
      yearBuilt
      lat
      lng
      city
    }
  }
`

export function useSearchHomesByLocationDetailedQuery(
  options?: Omit<
    Urql.UseQueryArgs<SearchHomesByLocationDetailedQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    SearchHomesByLocationDetailedQuery,
    SearchHomesByLocationDetailedQueryVariables
  >({ query: SearchHomesByLocationDetailedDocument, ...options })
}
export const GetMyHomesDocument = /*#__PURE__*/ gql`
  query GetMyHomes(
    $distinct: [PropertyScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: WhereUniqueInputNumber
    $orderBy: [PropertyOrderByWithRelationInput!]
    $where: PropertyWhereInput
  ) {
    properties(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      id
      address
      bath
      beds
      price
      sqft
      plan
      imgs
      plan
      published
    }
  }
`

export function useGetMyHomesQuery(
  options?: Omit<Urql.UseQueryArgs<GetMyHomesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetMyHomesQuery, GetMyHomesQueryVariables>({
    query: GetMyHomesDocument,
    ...options,
  })
}
export const GetHomeByIdDocument = /*#__PURE__*/ gql`
  query GetHomeById($where: PropertyWhereUniqueInput) {
    property(where: $where) {
      price
      id
      sqft
      bath
      beds
      address
      style
      imgs
    }
  }
`

export function useGetHomeByIdQuery(
  options?: Omit<Urql.UseQueryArgs<GetHomeByIdQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetHomeByIdQuery, GetHomeByIdQueryVariables>({
    query: GetHomeByIdDocument,
    ...options,
  })
}
export const GetRegionByIdDocument = /*#__PURE__*/ gql`
  query GetRegionById($where: LocationStatsWhereUniqueInput) {
    locationStat(where: $where) {
      id
      totalHomes
      priceSqft
    }
  }
`

export function useGetRegionByIdQuery(
  options?: Omit<Urql.UseQueryArgs<GetRegionByIdQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetRegionByIdQuery, GetRegionByIdQueryVariables>({
    query: GetRegionByIdDocument,
    ...options,
  })
}
export const GetWishlistedHomesDocument = /*#__PURE__*/ gql`
  query GetWishlistedHomes($uid: String!) {
    wishlisted: userHomes(
      where: { buyerUid: { equals: $uid }, type: WISHLISTED }
    ) {
      id
      propertyId
    }
  }
`

export function useGetWishlistedHomesQuery(
  options: Omit<Urql.UseQueryArgs<GetWishlistedHomesQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetWishlistedHomesQuery,
    GetWishlistedHomesQueryVariables
  >({ query: GetWishlistedHomesDocument, ...options })
}
export const GetWishlistedHomesDetailedDocument = /*#__PURE__*/ gql`
  query GetWishlistedHomesDetailed($uid: String!) {
    wishlisted: userHomes(
      where: { buyerUid: { equals: $uid }, type: WISHLISTED }
    ) {
      id
      propertyId
      property {
        address
        price
        imgs
      }
    }
  }
`

export function useGetWishlistedHomesDetailedQuery(
  options: Omit<
    Urql.UseQueryArgs<GetWishlistedHomesDetailedQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    GetWishlistedHomesDetailedQuery,
    GetWishlistedHomesDetailedQueryVariables
  >({ query: GetWishlistedHomesDetailedDocument, ...options })
}
export const GetHomeDocument = /*#__PURE__*/ gql`
  query GetHome($where: PropertyWhereUniqueInput) {
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

export function useGetHomeQuery(
  options?: Omit<Urql.UseQueryArgs<GetHomeQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetHomeQuery, GetHomeQueryVariables>({
    query: GetHomeDocument,
    ...options,
  })
}
export const GetMessagesDocument = /*#__PURE__*/ gql`
  query GetMessages($uid: String!) {
    messages(where: { buyerUid: { equals: $uid } }) {
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

export function useGetMessagesQuery(
  options: Omit<Urql.UseQueryArgs<GetMessagesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetMessagesQuery, GetMessagesQueryVariables>({
    query: GetMessagesDocument,
    ...options,
  })
}
export const GetEnquiriesDocument = /*#__PURE__*/ gql`
  query GetEnquiries($uid: String!) {
    messages(where: { property: { is: { sellerUid: { equals: $uid } } } }) {
      id
      message
      createdAt
      property {
        id
        address
        price
        imgs
      }
    }
  }
`

export function useGetEnquiriesQuery(
  options: Omit<Urql.UseQueryArgs<GetEnquiriesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetEnquiriesQuery, GetEnquiriesQueryVariables>({
    query: GetEnquiriesDocument,
    ...options,
  })
}
export const SetHomePlanDocument = /*#__PURE__*/ gql`
  mutation SetHomePlan($id: Int!, $plan: Int) {
    updateProperty(updatePropertyInput: { id: $id, plan: $plan }) {
      plan
    }
  }
`

export function useSetHomePlanMutation() {
  return Urql.useMutation<SetHomePlanMutation, SetHomePlanMutationVariables>(
    SetHomePlanDocument
  )
}
export const SetHomePublishedDocument = /*#__PURE__*/ gql`
  mutation SetHomePublished($id: Int!, $published: Boolean) {
    updateProperty(updatePropertyInput: { id: $id, published: $published }) {
      plan
    }
  }
`

export function useSetHomePublishedMutation() {
  return Urql.useMutation<
    SetHomePublishedMutation,
    SetHomePublishedMutationVariables
  >(SetHomePublishedDocument)
}
export const InsertUserHomeDocument = /*#__PURE__*/ gql`
  mutation InsertUserHome($createUserHomeInput: CreateUserHomeInput!) {
    createUserHome(createUserHomeInput: $createUserHomeInput) {
      id
      propertyId
      type
      buyerUid
    }
  }
`

export function useInsertUserHomeMutation() {
  return Urql.useMutation<
    InsertUserHomeMutation,
    InsertUserHomeMutationVariables
  >(InsertUserHomeDocument)
}
export const CreateMessageDocument = /*#__PURE__*/ gql`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      id
      propertyId
      updatedAt
      createdAt
      id
      buyer {
        uid
      }
      seller {
        uid
      }
      agent {
        uid
      }
    }
  }
`

export function useCreateMessageMutation() {
  return Urql.useMutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >(CreateMessageDocument)
}
export const CreatePropertyDocument = /*#__PURE__*/ gql`
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

export function useCreatePropertyMutation() {
  return Urql.useMutation<
    CreatePropertyMutation,
    CreatePropertyMutationVariables
  >(CreatePropertyDocument)
}
export const UpdateUserHomeDocument = /*#__PURE__*/ gql`
  mutation UpdateUserHome($updateUserHomeInput: UpdateUserHomeInput!) {
    updateUserHome(updateUserHomeInput: $updateUserHomeInput) {
      id
      type
      propertyId
    }
  }
`

export function useUpdateUserHomeMutation() {
  return Urql.useMutation<
    UpdateUserHomeMutation,
    UpdateUserHomeMutationVariables
  >(UpdateUserHomeDocument)
}
