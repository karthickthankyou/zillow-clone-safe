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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Agent = {
  __typename?: 'Agent'
  createdAt: Scalars['DateTime']
  messages: Array<GroupedMessages>
  properties: Array<Property>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
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
  uid?: InputMaybe<Scalars['String']>
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<Scalars['Boolean']>
}

export type Buyer = {
  __typename?: 'Buyer'
  createdAt: Scalars['DateTime']
  interests: Array<UserHome>
  messages: Array<GroupedMessages>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
  views: Array<View>
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
  uid?: InputMaybe<Scalars['String']>
}

export type CreateAgentInput = {
  uid: Scalars['String']
}

export type CreateBuyerInput = {
  uid: Scalars['String']
}

export type CreateMessageInput = {
  message: Scalars['String']
  propertyId: Scalars['Int']
  uid: Scalars['String']
}

export type CreatePropertyInput = {
  address: Scalars['String']
  bath?: InputMaybe<Scalars['Int']>
  beds?: InputMaybe<Scalars['Int']>
  city: Scalars['String']
  description?: InputMaybe<Scalars['String']>
  facts?: InputMaybe<Scalars['String']>
  features?: InputMaybe<Scalars['String']>
  imgs: Array<Scalars['String']>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  lotSize: Scalars['Int']
  plan: Scalars['Int']
  price: Scalars['Int']
  priceSqft?: InputMaybe<Scalars['Int']>
  published: Scalars['Boolean']
  sellerUid: Scalars['String']
  sqft: Scalars['Int']
  state: Scalars['String']
  style?: InputMaybe<Style>
  yearBuilt: Scalars['Int']
  zipcode: Scalars['String']
}

export type CreateSellerInput = {
  uid: Scalars['String']
}

export type CreateUserHomeInput = {
  buyerUid: Scalars['String']
  propertyId: Scalars['Int']
  type: UserHomeType
}

export type CreateViewInput = {
  buyerUid: Scalars['String']
  propertyId: Scalars['Int']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
}

export type GroupedMessages = {
  __typename?: 'GroupedMessages'
  messages: Array<Message>
  propertyId: Scalars['Int']
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Scalars['Int']>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  displayName: Scalars['String']
  email: Scalars['String']
  expiresIn: Scalars['String']
  idToken: Scalars['String']
  kind: Scalars['String']
  localId: Scalars['String']
  refreshToken: Scalars['String']
}

export type Message = {
  __typename?: 'Message'
  agent?: Maybe<Agent>
  buyer?: Maybe<Buyer>
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  message: Scalars['String']
  property: Property
  propertyId: Scalars['Int']
  seller?: Maybe<Seller>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
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
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  message?: InputMaybe<SortOrder>
  property?: InputMaybe<PropertyOrderByWithRelationInput>
  propertyId?: InputMaybe<SortOrder>
  seller?: InputMaybe<SellerOrderByWithRelationInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum MessageScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  PropertyId = 'propertyId',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>
  NOT?: InputMaybe<Array<MessageWhereInput>>
  OR?: InputMaybe<Array<MessageWhereInput>>
  agent?: InputMaybe<AgentRelationFilter>
  buyer?: InputMaybe<BuyerRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  message?: InputMaybe<StringFilter>
  property?: InputMaybe<PropertyRelationFilter>
  propertyId?: InputMaybe<IntFilter>
  seller?: InputMaybe<SellerRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAgent: Agent
  createBuyer: Buyer
  createMessage: Message
  createProperty: Property
  createSeller: Seller
  createUserHome: UserHome
  createView: View
  login: LoginOutput
  refreshToken: RefreshTokenOutput
  register: RegisterOutput
  removeAgent: Agent
  removeBuyer: Buyer
  removeMessage: Message
  removeProperty: Property
  removeSeller: Seller
  removeUserHome: UserHome
  removeView: View
  setAdmin: Scalars['Boolean']
  setRole: Scalars['Boolean']
  updateAgent: Agent
  updateBuyer: Buyer
  updateProperty: Property
  updateSeller: Seller
  updateUserHome: UserHome
  updateView: View
}

export type MutationCreateAgentArgs = {
  createAgentInput: CreateAgentInput
}

export type MutationCreateBuyerArgs = {
  createBuyerInput: CreateBuyerInput
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

export type MutationRemoveBuyerArgs = {
  where?: InputMaybe<BuyerWhereUniqueInput>
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
  uid: Scalars['String']
}

export type MutationSetRoleArgs = {
  setRoleInput: SetRoleInput
}

export type MutationUpdateAgentArgs = {
  updateAgentInput: UpdateAgentInput
}

export type MutationUpdateBuyerArgs = {
  updateBuyerInput: UpdateBuyerInput
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
  address: Scalars['String']
  agents: Array<Agent>
  bath?: Maybe<Scalars['Int']>
  beds?: Maybe<Scalars['Int']>
  city: Scalars['String']
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  facts?: Maybe<Scalars['String']>
  features?: Maybe<Scalars['String']>
  id: Scalars['Int']
  imgs: Array<Scalars['String']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  lotSize: Scalars['Int']
  messages: Array<Message>
  plan: Scalars['Int']
  price: Scalars['Int']
  priceSqft?: Maybe<Scalars['Int']>
  published: Scalars['Boolean']
  seller: Seller
  sellerUid: Scalars['String']
  sqft: Scalars['Int']
  state: Scalars['String']
  style?: Maybe<Style>
  updatedAt: Scalars['DateTime']
  userHomes: Array<UserHome>
  views: Array<View>
  yearBuilt: Scalars['Int']
  zipcode: Scalars['String']
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
  style?: InputMaybe<Style>
  updatedAt?: InputMaybe<DateTimeFilter>
  userHomes?: InputMaybe<UserHomeListRelationFilter>
  views?: InputMaybe<ViewListRelationFilter>
  yearBuilt?: InputMaybe<IntFilter>
  zipcode?: InputMaybe<StringFilter>
}

export type PropertyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  agent: Agent
  agents: Array<Agent>
  buyer: Buyer
  buyers: Array<Buyer>
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
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AgentWhereInput>
}

export type QueryBuyerArgs = {
  where?: InputMaybe<BuyerWhereUniqueInput>
}

export type QueryBuyersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<BuyerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BuyerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BuyerWhereInput>
}

export type QueryMessageArgs = {
  where?: InputMaybe<MessageWhereUniqueInput>
}

export type QueryMessagesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<MessageWhereInput>
}

export type QueryPropertiesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<PropertyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<PropertyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
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
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SellerWhereInput>
}

export type QueryUserHomeArgs = {
  where?: InputMaybe<UserHomeWhereUniqueInput>
}

export type QueryUserHomesArgs = {
  cursor?: InputMaybe<UserHomeWhereUniqueInput>
  distinct?: InputMaybe<Array<UserHomeScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserHomeOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserHomeWhereInput>
}

export type QueryViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>
}

export type QueryViewsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<ViewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ViewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ViewWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RefreshTokenInput = {
  refresh_token: Scalars['String']
}

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput'
  access_token: Scalars['String']
  expires_in: Scalars['String']
  id_token: Scalars['String']
  project_id: Scalars['String']
  refresh_token: Scalars['String']
  token_type: Scalars['String']
  user_id: Scalars['String']
}

export type RegisterInput = {
  displayName?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  password: Scalars['String']
}

export type RegisterOutput = {
  __typename?: 'RegisterOutput'
  displayName: Scalars['String']
  email: Scalars['String']
  expiresIn: Scalars['String']
  idToken: Scalars['String']
  kind: Scalars['String']
  localId: Scalars['String']
  refreshToken: Scalars['String']
}

/** Enum for roles */
export enum RoleEnum {
  Admin = 'admin',
  Moderator = 'moderator',
}

export type Seller = {
  __typename?: 'Seller'
  createdAt: Scalars['DateTime']
  messages: Array<GroupedMessages>
  properties: Array<Property>
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
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
  uid?: InputMaybe<Scalars['String']>
}

export type SetRoleInput = {
  role: RoleEnum
  uid: Scalars['String']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>
  has?: InputMaybe<Scalars['String']>
  hasEvery?: InputMaybe<Array<Scalars['String']>>
  hasSome?: InputMaybe<Array<Scalars['String']>>
  isEmpty?: InputMaybe<Scalars['Boolean']>
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
  uid: Scalars['String']
}

export type UpdateBuyerInput = {
  uid: Scalars['String']
}

export type UpdatePropertyInput = {
  address?: InputMaybe<Scalars['String']>
  bath?: InputMaybe<Scalars['Int']>
  beds?: InputMaybe<Scalars['Int']>
  city?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  facts?: InputMaybe<Scalars['String']>
  features?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  imgs?: InputMaybe<Array<Scalars['String']>>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  lotSize?: InputMaybe<Scalars['Int']>
  plan?: InputMaybe<Scalars['Int']>
  price?: InputMaybe<Scalars['Int']>
  priceSqft?: InputMaybe<Scalars['Int']>
  published?: InputMaybe<Scalars['Boolean']>
  sellerUid?: InputMaybe<Scalars['String']>
  sqft?: InputMaybe<Scalars['Int']>
  state?: InputMaybe<Scalars['String']>
  style?: InputMaybe<Style>
  yearBuilt?: InputMaybe<Scalars['Int']>
  zipcode?: InputMaybe<Scalars['String']>
}

export type UpdateSellerInput = {
  uid: Scalars['String']
}

export type UpdateUserHomeInput = {
  buyerUid?: InputMaybe<Scalars['String']>
  buyerUid_propertyId?: InputMaybe<UserHomeBuyerUidPropertyIdCompoundUniqueInput>
  propertyId?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<UserHomeType>
}

export type UpdateViewInput = {
  buyerUid?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  propertyId?: InputMaybe<Scalars['Int']>
}

export type UserHome = {
  __typename?: 'UserHome'
  buyer: Property
  buyerUid: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  property: Property
  propertyId: Scalars['Int']
  type: UserHomeType
  updatedAt: Scalars['DateTime']
}

export type UserHomeBuyerUidPropertyIdCompoundUniqueInput = {
  buyerUid?: InputMaybe<Scalars['String']>
  propertyId?: InputMaybe<Scalars['Int']>
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
  buyer: Property
  buyerUid: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  property: Property
  propertyId: Scalars['Int']
  updatedAt: Scalars['DateTime']
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
  id?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputNumber = {
  id?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputUid = {
  uid?: InputMaybe<Scalars['String']>
}

export type PropertiesQueryVariables = Exact<{ [key: string]: never }>

export type PropertiesQuery = {
  __typename?: 'Query'
  properties: Array<{
    __typename?: 'Property'
    address: string
    description?: string | null | undefined
  }>
}

export type SearchPropertiesQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereInput>
  orderBy?: InputMaybe<
    Array<PropertyOrderByWithRelationInput> | PropertyOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<
    Array<PropertyScalarFieldEnum> | PropertyScalarFieldEnum
  >
}>

export type SearchPropertiesQuery = {
  __typename?: 'Query'
  properties: Array<{
    __typename?: 'Property'
    id: number
    lat?: number | null | undefined
    lng?: number | null | undefined
    style?: Style | null | undefined
  }>
}

export type SearchPropertiesDetailedQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereInput>
  orderBy?: InputMaybe<
    Array<PropertyOrderByWithRelationInput> | PropertyOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<
    Array<PropertyScalarFieldEnum> | PropertyScalarFieldEnum
  >
}>

export type SearchPropertiesDetailedQuery = {
  __typename?: 'Query'
  properties: Array<{
    __typename?: 'Property'
    id: number
    address: string
    bath?: number | null | undefined
    beds?: number | null | undefined
    price: number
    sqft: number
    plan: number
    imgs: Array<string>
    published: boolean
  }>
}

export type PropertyQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereUniqueInput>
}>

export type PropertyQuery = {
  __typename?: 'Query'
  property: {
    __typename?: 'Property'
    price: number
    id: number
    sqft: number
    bath?: number | null | undefined
    beds?: number | null | undefined
    address: string
    style?: Style | null | undefined
    imgs: Array<string>
    lotSize: number
    lat?: number | null | undefined
    lng?: number | null | undefined
  }
}

export type PropertyDetailedQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereUniqueInput>
}>

export type PropertyDetailedQuery = {
  __typename?: 'Query'
  property: {
    __typename?: 'Property'
    address: string
    bath?: number | null | undefined
    beds?: number | null | undefined
    city: string
    createdAt: any
    description?: string | null | undefined
    facts?: string | null | undefined
    features?: string | null | undefined
    id: number
    lat?: number | null | undefined
    lng?: number | null | undefined
    lotSize: number
    price: number
    priceSqft?: number | null | undefined
    sqft: number
    state: string
    style?: Style | null | undefined
    updatedAt: any
    yearBuilt: number
    zipcode: string
    imgs: Array<string>
  }
}

export type CreateUserHomeMutationVariables = Exact<{
  createUserHomeInput: CreateUserHomeInput
}>

export type CreateUserHomeMutation = {
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
    message: string
    propertyId: number
    uid: string
  }
}

export type UserHomesQueryVariables = Exact<{
  distinct?: InputMaybe<
    Array<UserHomeScalarFieldEnum> | UserHomeScalarFieldEnum
  >
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<UserHomeWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<UserHomeOrderByWithRelationInput> | UserHomeOrderByWithRelationInput
  >
  where?: InputMaybe<UserHomeWhereInput>
}>

export type UserHomesQuery = {
  __typename?: 'Query'
  userHomes: Array<{
    __typename?: 'UserHome'
    id: number
    propertyId: number
    type: UserHomeType
  }>
}

export type UserHomesDetailedQueryVariables = Exact<{
  distinct?: InputMaybe<
    Array<UserHomeScalarFieldEnum> | UserHomeScalarFieldEnum
  >
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  cursor?: InputMaybe<UserHomeWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<UserHomeOrderByWithRelationInput> | UserHomeOrderByWithRelationInput
  >
  where?: InputMaybe<UserHomeWhereInput>
}>

export type UserHomesDetailedQuery = {
  __typename?: 'Query'
  userHomes: Array<{
    __typename?: 'UserHome'
    id: number
    propertyId: number
    type: UserHomeType
    property: {
      __typename?: 'Property'
      address: string
      price: number
      imgs: Array<string>
    }
  }>
}

export type RemoveUserHomeMutationVariables = Exact<{ [key: string]: never }>

export type RemoveUserHomeMutation = {
  __typename?: 'Mutation'
  removeUserHome: { __typename?: 'UserHome'; id: number }
}

export type CreatePropertyMutationVariables = Exact<{
  createPropertyInput: CreatePropertyInput
}>

export type CreatePropertyMutation = {
  __typename?: 'Mutation'
  createProperty: {
    __typename?: 'Property'
    address: string
    bath?: number | null | undefined
    beds?: number | null | undefined
    city: string
    createdAt: any
    description?: string | null | undefined
    facts?: string | null | undefined
    features?: string | null | undefined
    id: number
    lat?: number | null | undefined
    lng?: number | null | undefined
    lotSize: number
    price: number
    priceSqft?: number | null | undefined
    sqft: number
    state: string
    style?: Style | null | undefined
    updatedAt: any
    yearBuilt: number
    zipcode: string
  }
}

export type MessagesQueryVariables = Exact<{
  where?: InputMaybe<MessageWhereInput>
  orderBy?: InputMaybe<
    Array<MessageOrderByWithRelationInput> | MessageOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<Array<MessageScalarFieldEnum> | MessageScalarFieldEnum>
}>

export type MessagesQuery = {
  __typename?: 'Query'
  messages: Array<{
    __typename?: 'Message'
    id: number
    message: string
    createdAt: any
    property: {
      __typename?: 'Property'
      id: number
      address: string
      price: number
      imgs: Array<string>
    }
  }>
}

export type UpdatePropertyMutationVariables = Exact<{
  updatePropertyInput: UpdatePropertyInput
}>

export type UpdatePropertyMutation = {
  __typename?: 'Mutation'
  updateProperty: {
    __typename?: 'Property'
    id: number
    plan: number
    published: boolean
  }
}

export const namedOperations = {
  Query: {
    Properties: 'Properties',
    SearchProperties: 'SearchProperties',
    SearchPropertiesDetailed: 'SearchPropertiesDetailed',
    Property: 'Property',
    PropertyDetailed: 'PropertyDetailed',
    UserHomes: 'UserHomes',
    UserHomesDetailed: 'UserHomesDetailed',
    Messages: 'Messages',
  },
  Mutation: {
    CreateUserHome: 'CreateUserHome',
    CreateMessage: 'CreateMessage',
    RemoveUserHome: 'RemoveUserHome',
    CreateProperty: 'CreateProperty',
    UpdateProperty: 'UpdateProperty',
  },
}

export const PropertiesDocument = /*#__PURE__*/ gql`
  query Properties {
    properties(take: 10) {
      address
      description
    }
  }
`

export function usePropertiesQuery(
  options?: Omit<Urql.UseQueryArgs<PropertiesQueryVariables>, 'query'>
) {
  return Urql.useQuery<PropertiesQuery, PropertiesQueryVariables>({
    query: PropertiesDocument,
    ...options,
  })
}
export const SearchPropertiesDocument = /*#__PURE__*/ gql`
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
    }
  }
`

export function useSearchPropertiesQuery(
  options?: Omit<Urql.UseQueryArgs<SearchPropertiesQueryVariables>, 'query'>
) {
  return Urql.useQuery<SearchPropertiesQuery, SearchPropertiesQueryVariables>({
    query: SearchPropertiesDocument,
    ...options,
  })
}
export const SearchPropertiesDetailedDocument = /*#__PURE__*/ gql`
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
    }
  }
`

export function useSearchPropertiesDetailedQuery(
  options?: Omit<
    Urql.UseQueryArgs<SearchPropertiesDetailedQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    SearchPropertiesDetailedQuery,
    SearchPropertiesDetailedQueryVariables
  >({ query: SearchPropertiesDetailedDocument, ...options })
}
export const PropertyDocument = /*#__PURE__*/ gql`
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

export function usePropertyQuery(
  options?: Omit<Urql.UseQueryArgs<PropertyQueryVariables>, 'query'>
) {
  return Urql.useQuery<PropertyQuery, PropertyQueryVariables>({
    query: PropertyDocument,
    ...options,
  })
}
export const PropertyDetailedDocument = /*#__PURE__*/ gql`
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

export function usePropertyDetailedQuery(
  options?: Omit<Urql.UseQueryArgs<PropertyDetailedQueryVariables>, 'query'>
) {
  return Urql.useQuery<PropertyDetailedQuery, PropertyDetailedQueryVariables>({
    query: PropertyDetailedDocument,
    ...options,
  })
}
export const CreateUserHomeDocument = /*#__PURE__*/ gql`
  mutation CreateUserHome($createUserHomeInput: CreateUserHomeInput!) {
    createUserHome(createUserHomeInput: $createUserHomeInput) {
      id
      propertyId
      type
      buyerUid
    }
  }
`

export function useCreateUserHomeMutation() {
  return Urql.useMutation<
    CreateUserHomeMutation,
    CreateUserHomeMutationVariables
  >(CreateUserHomeDocument)
}
export const CreateMessageDocument = /*#__PURE__*/ gql`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      id
      message
      propertyId
      uid
    }
  }
`

export function useCreateMessageMutation() {
  return Urql.useMutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >(CreateMessageDocument)
}
export const UserHomesDocument = /*#__PURE__*/ gql`
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

export function useUserHomesQuery(
  options?: Omit<Urql.UseQueryArgs<UserHomesQueryVariables>, 'query'>
) {
  return Urql.useQuery<UserHomesQuery, UserHomesQueryVariables>({
    query: UserHomesDocument,
    ...options,
  })
}
export const UserHomesDetailedDocument = /*#__PURE__*/ gql`
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

export function useUserHomesDetailedQuery(
  options?: Omit<Urql.UseQueryArgs<UserHomesDetailedQueryVariables>, 'query'>
) {
  return Urql.useQuery<UserHomesDetailedQuery, UserHomesDetailedQueryVariables>(
    { query: UserHomesDetailedDocument, ...options }
  )
}
export const RemoveUserHomeDocument = /*#__PURE__*/ gql`
  mutation RemoveUserHome {
    removeUserHome {
      id
    }
  }
`

export function useRemoveUserHomeMutation() {
  return Urql.useMutation<
    RemoveUserHomeMutation,
    RemoveUserHomeMutationVariables
  >(RemoveUserHomeDocument)
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
export const MessagesDocument = /*#__PURE__*/ gql`
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

export function useMessagesQuery(
  options?: Omit<Urql.UseQueryArgs<MessagesQueryVariables>, 'query'>
) {
  return Urql.useQuery<MessagesQuery, MessagesQueryVariables>({
    query: MessagesDocument,
    ...options,
  })
}
export const UpdatePropertyDocument = /*#__PURE__*/ gql`
  mutation UpdateProperty($updatePropertyInput: UpdatePropertyInput!) {
    updateProperty(updatePropertyInput: $updatePropertyInput) {
      id
      plan
      published
    }
  }
`

export function useUpdatePropertyMutation() {
  return Urql.useMutation<
    UpdatePropertyMutation,
    UpdatePropertyMutationVariables
  >(UpdatePropertyDocument)
}
