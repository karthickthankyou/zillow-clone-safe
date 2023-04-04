import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Agent = {
  __typename?: 'Agent';
  createdAt: Scalars['DateTime'];
  messages: Array<GroupedMessages>;
  properties: Array<Property>;
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AgentListRelationFilter = {
  every?: InputMaybe<AgentWhereInput>;
  none?: InputMaybe<AgentWhereInput>;
  some?: InputMaybe<AgentWhereInput>;
};

export type AgentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AgentOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  properties?: InputMaybe<PropertyOrderByRelationAggregateInput>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AgentRelationFilter = {
  is?: InputMaybe<AgentWhereInput>;
  isNot?: InputMaybe<AgentWhereInput>;
};

export enum AgentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type AgentWhereInput = {
  AND?: InputMaybe<Array<AgentWhereInput>>;
  NOT?: InputMaybe<Array<AgentWhereInput>>;
  OR?: InputMaybe<Array<AgentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  properties?: InputMaybe<PropertyListRelationFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AgentWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>;
};

export type BedPrice = {
  __typename?: 'BedPrice';
  avg: Scalars['Int'];
  beds: Scalars['String'];
  count: Scalars['Int'];
  id: Scalars['Int'];
  locationStatsId: Scalars['Int'];
  sqftAvg: Scalars['Int'];
};

export type BedPriceListRelationFilter = {
  every?: InputMaybe<BedPriceWhereInput>;
  none?: InputMaybe<BedPriceWhereInput>;
  some?: InputMaybe<BedPriceWhereInput>;
};

export type BedPriceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BedPriceOrderByWithRelationInput = {
  avg?: InputMaybe<SortOrder>;
  beds?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locationStats?: InputMaybe<LocationStatsOrderByWithRelationInput>;
  locationStatsId?: InputMaybe<SortOrder>;
  sqftAvg?: InputMaybe<SortOrder>;
};

export enum BedPriceScalarFieldEnum {
  Avg = 'avg',
  Beds = 'beds',
  Count = 'count',
  Id = 'id',
  LocationStatsId = 'locationStatsId',
  SqftAvg = 'sqftAvg'
}

export type BedPriceWhereInput = {
  AND?: InputMaybe<Array<BedPriceWhereInput>>;
  NOT?: InputMaybe<Array<BedPriceWhereInput>>;
  OR?: InputMaybe<Array<BedPriceWhereInput>>;
  avg?: InputMaybe<IntFilter>;
  beds?: InputMaybe<StringFilter>;
  count?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  locationStats?: InputMaybe<LocationStatsRelationFilter>;
  locationStatsId?: InputMaybe<IntFilter>;
  sqftAvg?: InputMaybe<IntFilter>;
};

export type BedPriceWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<Scalars['Boolean']>;
};

export type Buyer = {
  __typename?: 'Buyer';
  createdAt: Scalars['DateTime'];
  interests: Array<UserHome>;
  messages: Array<GroupedMessages>;
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  views: Array<View>;
};

export type BuyerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  interests?: InputMaybe<UserHomeOrderByRelationAggregateInput>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<ViewOrderByRelationAggregateInput>;
};

export type BuyerRelationFilter = {
  is?: InputMaybe<BuyerWhereInput>;
  isNot?: InputMaybe<BuyerWhereInput>;
};

export enum BuyerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type BuyerWhereInput = {
  AND?: InputMaybe<Array<BuyerWhereInput>>;
  NOT?: InputMaybe<Array<BuyerWhereInput>>;
  OR?: InputMaybe<Array<BuyerWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  interests?: InputMaybe<UserHomeListRelationFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<ViewListRelationFilter>;
};

export type BuyerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>;
};

export type CreateAgentInput = {
  uid: Scalars['String'];
};

export type CreateBedPriceInput = {
  avg: Scalars['Int'];
  beds: Scalars['String'];
  count: Scalars['Int'];
  locationStatsId: Scalars['Int'];
  sqftAvg: Scalars['Int'];
};

export type CreateBedPriceInputWithoutLocationId = {
  avg: Scalars['Int'];
  beds: Scalars['String'];
  count: Scalars['Int'];
  sqftAvg: Scalars['Int'];
};

export type CreateBuyerInput = {
  uid: Scalars['String'];
};

export type CreateLocationStatsInput = {
  bedPrices: Array<CreateBedPriceInputWithoutLocationId>;
  lat: Scalars['Int'];
  lng: Scalars['Int'];
  name: Scalars['String'];
  priceSqft: Scalars['Int'];
  totalHomes: Scalars['Int'];
  type?: InputMaybe<LocationStatsType>;
};

export type CreateMessageInput = {
  message: Scalars['String'];
  propertyId: Scalars['Int'];
  uid: Scalars['String'];
};

export type CreatePropertyInput = {
  address: Scalars['String'];
  bath?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['Int']>;
  city: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  facts?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Scalars['String']>;
  imgs: Array<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  lotSize: Scalars['Int'];
  plan: Scalars['Int'];
  price: Scalars['Int'];
  priceSqft?: InputMaybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  sellerUid: Scalars['String'];
  sqft: Scalars['Int'];
  state: Scalars['String'];
  style?: InputMaybe<Style>;
  yearBuilt: Scalars['Int'];
  zipcode: Scalars['String'];
};

export type CreateSellerInput = {
  uid: Scalars['String'];
};

export type CreateUserHomeInput = {
  buyerUid: Scalars['String'];
  propertyId: Scalars['Int'];
  type: UserHomeType;
};

export type CreateViewInput = {
  buyerUid: Scalars['String'];
  propertyId: Scalars['Int'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type EnumStyleFilter = {
  equals?: InputMaybe<Style>;
  in?: InputMaybe<Array<Style>>;
  not?: InputMaybe<Style>;
  notIn?: InputMaybe<Array<Style>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Scalars['Float']>;
};

export type GroupedMessages = {
  __typename?: 'GroupedMessages';
  messages: Array<Message>;
  propertyId: Scalars['Int'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Scalars['Int']>;
};

export type LocationStats = {
  __typename?: 'LocationStats';
  bedPrices?: Maybe<Array<BedPrice>>;
  id: Scalars['Int'];
  images: Array<Scalars['String']>;
  lat: Scalars['Int'];
  lng: Scalars['Int'];
  name: Scalars['String'];
  priceSqft: Scalars['Int'];
  totalHomes: Scalars['Int'];
  type?: Maybe<LocationStatsType>;
};

export type LocationStatsOrderByWithRelationInput = {
  bedsPrice?: InputMaybe<BedPriceOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priceSqft?: InputMaybe<SortOrder>;
  totalHomes?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type LocationStatsRelationFilter = {
  is?: InputMaybe<LocationStatsWhereInput>;
  isNot?: InputMaybe<LocationStatsWhereInput>;
};

export enum LocationStatsScalarFieldEnum {
  Id = 'id',
  Images = 'images',
  Lat = 'lat',
  Lng = 'lng',
  Name = 'name',
  PriceSqft = 'priceSqft',
  TotalHomes = 'totalHomes',
  Type = 'type'
}

export enum LocationStatsType {
  City = 'city',
  State = 'state'
}

export type LocationStatsWhereInput = {
  AND?: InputMaybe<Array<LocationStatsWhereInput>>;
  NOT?: InputMaybe<Array<LocationStatsWhereInput>>;
  OR?: InputMaybe<Array<LocationStatsWhereInput>>;
  bedsPrice?: InputMaybe<BedPriceListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  images?: InputMaybe<StringFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  priceSqft?: InputMaybe<IntFilter>;
  totalHomes?: InputMaybe<IntFilter>;
  type?: InputMaybe<LocationStatsType>;
};

export type LocationStatsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  displayName: Scalars['String'];
  email: Scalars['String'];
  expiresIn: Scalars['String'];
  idToken: Scalars['String'];
  kind: Scalars['String'];
  localId: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  agent?: Maybe<Agent>;
  buyer?: Maybe<Buyer>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  message: Scalars['String'];
  property: Property;
  propertyId: Scalars['Int'];
  seller?: Maybe<Seller>;
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>;
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  property?: InputMaybe<PropertyOrderByWithRelationInput>;
  propertyId?: InputMaybe<SortOrder>;
  seller?: InputMaybe<SellerOrderByWithRelationInput>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  PropertyId = 'propertyId',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  agent?: InputMaybe<AgentRelationFilter>;
  buyer?: InputMaybe<BuyerRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<IntFilter>;
  seller?: InputMaybe<SellerRelationFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAgent: Agent;
  createBedPrice: BedPrice;
  createBuyer: Buyer;
  createLocationStats: LocationStats;
  createMessage: Message;
  createProperty: Property;
  createSeller: Seller;
  createUserHome: UserHome;
  createView: View;
  login: LoginOutput;
  refreshToken: RefreshTokenOutput;
  register: RegisterOutput;
  removeAgent: Agent;
  removeBedPrice: BedPrice;
  removeBuyer: Buyer;
  removeLocationStats: LocationStats;
  removeMessage: Message;
  removeProperty: Property;
  removeSeller: Seller;
  removeUserHome: UserHome;
  removeView: View;
  setAdmin: Scalars['Boolean'];
  setRole: Scalars['Boolean'];
  updateAgent: Agent;
  updateBedPrice: BedPrice;
  updateBuyer: Buyer;
  updateLocationStats: LocationStats;
  updateProperty: Property;
  updateSeller: Seller;
  updateUserHome: UserHome;
  updateView: View;
};


export type MutationCreateAgentArgs = {
  createAgentInput: CreateAgentInput;
};


export type MutationCreateBedPriceArgs = {
  createBedPriceInput: CreateBedPriceInput;
};


export type MutationCreateBuyerArgs = {
  createBuyerInput: CreateBuyerInput;
};


export type MutationCreateLocationStatsArgs = {
  createLocationStatsInput: CreateLocationStatsInput;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationCreatePropertyArgs = {
  createPropertyInput: CreatePropertyInput;
};


export type MutationCreateSellerArgs = {
  createSellerInput: CreateSellerInput;
};


export type MutationCreateUserHomeArgs = {
  createUserHomeInput: CreateUserHomeInput;
};


export type MutationCreateViewArgs = {
  createViewInput: CreateViewInput;
};


export type MutationLoginArgs = {
  credentials: LoginInput;
};


export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput;
};


export type MutationRegisterArgs = {
  credentials: RegisterInput;
};


export type MutationRemoveAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>;
};


export type MutationRemoveBedPriceArgs = {
  where?: InputMaybe<BedPriceWhereUniqueInput>;
};


export type MutationRemoveBuyerArgs = {
  where?: InputMaybe<BuyerWhereUniqueInput>;
};


export type MutationRemoveLocationStatsArgs = {
  where?: InputMaybe<LocationStatsWhereUniqueInput>;
};


export type MutationRemoveMessageArgs = {
  where?: InputMaybe<MessageWhereUniqueInput>;
};


export type MutationRemovePropertyArgs = {
  where?: InputMaybe<PropertyWhereUniqueInput>;
};


export type MutationRemoveSellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>;
};


export type MutationRemoveUserHomeArgs = {
  where?: InputMaybe<UserHomeWhereUniqueInput>;
};


export type MutationRemoveViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>;
};


export type MutationSetAdminArgs = {
  uid: Scalars['String'];
};


export type MutationSetRoleArgs = {
  setRoleInput: SetRoleInput;
};


export type MutationUpdateAgentArgs = {
  updateAgentInput: UpdateAgentInput;
};


export type MutationUpdateBedPriceArgs = {
  updateBedPriceInput: UpdateBedPriceInput;
};


export type MutationUpdateBuyerArgs = {
  updateBuyerInput: UpdateBuyerInput;
};


export type MutationUpdateLocationStatsArgs = {
  updateLocationStatsInput: UpdateLocationStatsInput;
};


export type MutationUpdatePropertyArgs = {
  updatePropertyInput: UpdatePropertyInput;
};


export type MutationUpdateSellerArgs = {
  updateSellerInput: UpdateSellerInput;
};


export type MutationUpdateUserHomeArgs = {
  updateUserHomeInput: UpdateUserHomeInput;
};


export type MutationUpdateViewArgs = {
  updateViewInput: UpdateViewInput;
};

export type Property = {
  __typename?: 'Property';
  address: Scalars['String'];
  agents: Array<Agent>;
  bath?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  city: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  facts?: Maybe<Scalars['String']>;
  features?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imgs: Array<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize: Scalars['Int'];
  messages: Array<Message>;
  plan: Scalars['Int'];
  price: Scalars['Int'];
  priceSqft?: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  seller: Seller;
  sellerUid: Scalars['String'];
  sqft: Scalars['Int'];
  state: Scalars['String'];
  style?: Maybe<Style>;
  updatedAt: Scalars['DateTime'];
  userHomes: Array<UserHome>;
  views: Array<View>;
  wishlisted?: Maybe<UserHome>;
  yearBuilt: Scalars['Int'];
  zipcode: Scalars['String'];
};

export type PropertyListRelationFilter = {
  every?: InputMaybe<PropertyWhereInput>;
  none?: InputMaybe<PropertyWhereInput>;
  some?: InputMaybe<PropertyWhereInput>;
};

export type PropertyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PropertyOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  agents?: InputMaybe<AgentOrderByRelationAggregateInput>;
  bath?: InputMaybe<SortOrder>;
  beds?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  facts?: InputMaybe<SortOrder>;
  features?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imgs?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  lotSize?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  plan?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceSqft?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  seller?: InputMaybe<SortOrder>;
  sellerUid?: InputMaybe<SortOrder>;
  sqft?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  style?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userHomes?: InputMaybe<UserHomeOrderByRelationAggregateInput>;
  views?: InputMaybe<ViewOrderByRelationAggregateInput>;
  yearBuilt?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type PropertyRelationFilter = {
  is?: InputMaybe<PropertyWhereInput>;
  isNot?: InputMaybe<PropertyWhereInput>;
};

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
  Zipcode = 'zipcode'
}

export type PropertyWhereInput = {
  AND?: InputMaybe<Array<PropertyWhereInput>>;
  NOT?: InputMaybe<Array<PropertyWhereInput>>;
  OR?: InputMaybe<Array<PropertyWhereInput>>;
  address?: InputMaybe<StringFilter>;
  agents?: InputMaybe<AgentListRelationFilter>;
  bath?: InputMaybe<IntFilter>;
  beds?: InputMaybe<IntFilter>;
  city?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  facts?: InputMaybe<StringFilter>;
  features?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  imgs?: InputMaybe<StringListFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  lotSize?: InputMaybe<IntFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  plan?: InputMaybe<IntFilter>;
  price?: InputMaybe<IntFilter>;
  priceSqft?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  seller?: InputMaybe<SellerRelationFilter>;
  sellerUid?: InputMaybe<StringFilter>;
  sqft?: InputMaybe<IntFilter>;
  state?: InputMaybe<StringFilter>;
  style?: InputMaybe<EnumStyleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userHomes?: InputMaybe<UserHomeListRelationFilter>;
  views?: InputMaybe<ViewListRelationFilter>;
  yearBuilt?: InputMaybe<IntFilter>;
  zipcode?: InputMaybe<StringFilter>;
};

export type PropertyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  agent: Agent;
  agents: Array<Agent>;
  bedPrice: BedPrice;
  bedPrices: Array<BedPrice>;
  buyer: Buyer;
  buyers: Array<Buyer>;
  locationStat: LocationStats;
  locationStats: Array<LocationStats>;
  message: Message;
  messages: Array<Message>;
  myHomes: Array<UserHome>;
  myProperties: Array<Property>;
  properties: Array<Property>;
  property?: Maybe<Property>;
  seller: Seller;
  sellers: Array<Seller>;
  userHome: UserHome;
  userHomes: Array<UserHome>;
  view: View;
  views: Array<View>;
};


export type QueryAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>;
};


export type QueryAgentsArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>;
  distinct?: InputMaybe<Array<AgentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AgentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AgentWhereInput>;
};


export type QueryBedPriceArgs = {
  where?: InputMaybe<BedPriceWhereUniqueInput>;
};


export type QueryBedPricesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  distinct?: InputMaybe<Array<BedPriceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BedPriceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BedPriceWhereInput>;
};


export type QueryBuyerArgs = {
  where?: InputMaybe<BuyerWhereUniqueInput>;
};


export type QueryBuyersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>;
  distinct?: InputMaybe<Array<BuyerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BuyerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BuyerWhereInput>;
};


export type QueryLocationStatArgs = {
  where?: InputMaybe<LocationStatsWhereUniqueInput>;
};


export type QueryLocationStatsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  distinct?: InputMaybe<Array<LocationStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LocationStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LocationStatsWhereInput>;
};


export type QueryMessageArgs = {
  where?: InputMaybe<MessageWhereUniqueInput>;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryMyHomesArgs = {
  cursor?: InputMaybe<UserHomeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserHomeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserHomeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserHomeWhereInput>;
};


export type QueryMyPropertiesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  distinct?: InputMaybe<Array<PropertyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PropertyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PropertyWhereInput>;
};


export type QueryPropertiesArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  distinct?: InputMaybe<Array<PropertyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PropertyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PropertyWhereInput>;
};


export type QueryPropertyArgs = {
  where?: InputMaybe<PropertyWhereUniqueInput>;
};


export type QuerySellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>;
};


export type QuerySellersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>;
  distinct?: InputMaybe<Array<SellerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SellerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SellerWhereInput>;
};


export type QueryUserHomeArgs = {
  where?: InputMaybe<UserHomeWhereUniqueInput>;
};


export type QueryUserHomesArgs = {
  cursor?: InputMaybe<UserHomeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserHomeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserHomeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserHomeWhereInput>;
};


export type QueryViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>;
};


export type QueryViewsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  distinct?: InputMaybe<Array<ViewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ViewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ViewWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshTokenInput = {
  refresh_token: Scalars['String'];
};

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput';
  access_token: Scalars['String'];
  expires_in: Scalars['String'];
  id_token: Scalars['String'];
  project_id: Scalars['String'];
  refresh_token: Scalars['String'];
  token_type: Scalars['String'];
  user_id: Scalars['String'];
};

export type RegisterInput = {
  displayName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  displayName: Scalars['String'];
  email: Scalars['String'];
  expiresIn: Scalars['String'];
  idToken: Scalars['String'];
  kind: Scalars['String'];
  localId: Scalars['String'];
  refreshToken: Scalars['String'];
};

/** Enum for roles */
export enum RoleEnum {
  Admin = 'admin',
  Moderator = 'moderator'
}

export type Seller = {
  __typename?: 'Seller';
  createdAt: Scalars['DateTime'];
  messages: Array<GroupedMessages>;
  properties: Array<Property>;
  uid: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SellerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  properties?: InputMaybe<PropertyOrderByRelationAggregateInput>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SellerRelationFilter = {
  is?: InputMaybe<SellerWhereInput>;
  isNot?: InputMaybe<SellerWhereInput>;
};

export enum SellerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type SellerWhereInput = {
  AND?: InputMaybe<Array<SellerWhereInput>>;
  NOT?: InputMaybe<Array<SellerWhereInput>>;
  OR?: InputMaybe<Array<SellerWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  properties?: InputMaybe<PropertyListRelationFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SellerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>;
};

export type SetRoleInput = {
  role: RoleEnum;
  uid: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

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
  Unknown = 'Unknown'
}

export type UpdateAgentInput = {
  uid: Scalars['String'];
};

export type UpdateBedPriceInput = {
  avg?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  locationStatsId?: InputMaybe<Scalars['Int']>;
  sqftAvg?: InputMaybe<Scalars['Int']>;
};

export type UpdateBuyerInput = {
  uid: Scalars['String'];
};

export type UpdateLocationStatsInput = {
  bedPrices?: InputMaybe<Array<CreateBedPriceInputWithoutLocationId>>;
  id: Scalars['Int'];
  lat?: InputMaybe<Scalars['Int']>;
  lng?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  priceSqft?: InputMaybe<Scalars['Int']>;
  totalHomes?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<LocationStatsType>;
};

export type UpdatePropertyInput = {
  address?: InputMaybe<Scalars['String']>;
  bath?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  facts?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  imgs?: InputMaybe<Array<Scalars['String']>>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  lotSize?: InputMaybe<Scalars['Int']>;
  plan?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  priceSqft?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  sellerUid?: InputMaybe<Scalars['String']>;
  sqft?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Style>;
  yearBuilt?: InputMaybe<Scalars['Int']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type UpdateSellerInput = {
  uid: Scalars['String'];
};

export type UpdateUserHomeInput = {
  buyerUid?: InputMaybe<Scalars['String']>;
  buyerUid_propertyId?: InputMaybe<UserHomeBuyerUidPropertyIdCompoundUniqueInput>;
  propertyId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<UserHomeType>;
};

export type UpdateViewInput = {
  buyerUid?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  propertyId?: InputMaybe<Scalars['Int']>;
};

export type UserHome = {
  __typename?: 'UserHome';
  buyer: Property;
  buyerUid: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  property: Property;
  propertyId: Scalars['Int'];
  type: UserHomeType;
  updatedAt: Scalars['DateTime'];
};

export type UserHomeBuyerUidPropertyIdCompoundUniqueInput = {
  buyerUid?: InputMaybe<Scalars['String']>;
  propertyId?: InputMaybe<Scalars['Int']>;
};

export type UserHomeListRelationFilter = {
  every?: InputMaybe<UserHomeWhereInput>;
  none?: InputMaybe<UserHomeWhereInput>;
  some?: InputMaybe<UserHomeWhereInput>;
};

export type UserHomeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserHomeOrderByWithRelationInput = {
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>;
  buyerUid?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  property?: InputMaybe<PropertyOrderByWithRelationInput>;
  propertyId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserHomeScalarFieldEnum {
  BuyerUid = 'buyerUid',
  CreatedAt = 'createdAt',
  PropertyId = 'propertyId',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export enum UserHomeType {
  RemovedFromWishlist = 'REMOVED_FROM_WISHLIST',
  Wishlisted = 'WISHLISTED'
}

export type UserHomeWhereInput = {
  AND?: InputMaybe<Array<UserHomeWhereInput>>;
  NOT?: InputMaybe<Array<UserHomeWhereInput>>;
  OR?: InputMaybe<Array<UserHomeWhereInput>>;
  buyer?: InputMaybe<BuyerRelationFilter>;
  buyerUid?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<IntFilter>;
  type?: InputMaybe<UserHomeType>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserHomeWhereUniqueInput = {
  buyerUid_propertyId?: InputMaybe<UserHomeBuyerUidPropertyIdCompoundUniqueInput>;
};

export type View = {
  __typename?: 'View';
  buyer: Property;
  buyerUid: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  property: Property;
  propertyId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ViewListRelationFilter = {
  every?: InputMaybe<ViewWhereInput>;
  none?: InputMaybe<ViewWhereInput>;
  some?: InputMaybe<ViewWhereInput>;
};

export type ViewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ViewOrderByWithRelationInput = {
  buyer?: InputMaybe<BuyerOrderByWithRelationInput>;
  buyerUid?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  property?: InputMaybe<PropertyOrderByWithRelationInput>;
  propertyId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ViewScalarFieldEnum {
  BuyerUid = 'buyerUid',
  CreatedAt = 'createdAt',
  Id = 'id',
  PropertyId = 'propertyId',
  UpdatedAt = 'updatedAt'
}

export type ViewWhereInput = {
  AND?: InputMaybe<Array<ViewWhereInput>>;
  NOT?: InputMaybe<Array<ViewWhereInput>>;
  OR?: InputMaybe<Array<ViewWhereInput>>;
  buyer?: InputMaybe<BuyerRelationFilter>;
  buyerUid?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  property?: InputMaybe<PropertyRelationFilter>;
  propertyId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ViewWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type WhereUniqueInputNumber = {
  id?: InputMaybe<Scalars['Int']>;
};

export type WhereUniqueInputUid = {
  uid?: InputMaybe<Scalars['String']>;
};

export type SearchPropertiesQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereInput>;
  orderBy?: InputMaybe<Array<PropertyOrderByWithRelationInput> | PropertyOrderByWithRelationInput>;
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<PropertyScalarFieldEnum> | PropertyScalarFieldEnum>;
}>;


export type SearchPropertiesQuery = { __typename?: 'Query', properties: Array<{ __typename?: 'Property', id: number, lat?: number | null | undefined, lng?: number | null | undefined, style?: Style | null | undefined, wishlisted?: { __typename?: 'UserHome', buyerUid: string, type: UserHomeType } | null | undefined }> };

export type SearchPropertiesDetailedQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereInput>;
  orderBy?: InputMaybe<Array<PropertyOrderByWithRelationInput> | PropertyOrderByWithRelationInput>;
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<PropertyScalarFieldEnum> | PropertyScalarFieldEnum>;
}>;


export type SearchPropertiesDetailedQuery = { __typename?: 'Query', properties: Array<{ __typename?: 'Property', id: number, address: string, bath?: number | null | undefined, beds?: number | null | undefined, price: number, sqft: number, plan: number, imgs: Array<string>, published: boolean, wishlisted?: { __typename?: 'UserHome', buyerUid: string, type: UserHomeType } | null | undefined }> };

export type PropertyQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereUniqueInput>;
}>;


export type PropertyQuery = { __typename?: 'Query', property?: { __typename?: 'Property', price: number, id: number, sqft: number, bath?: number | null | undefined, beds?: number | null | undefined, address: string, style?: Style | null | undefined, imgs: Array<string>, lotSize: number, lat?: number | null | undefined, lng?: number | null | undefined } | null | undefined };

export type MyPropertiesQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereInput>;
}>;


export type MyPropertiesQuery = { __typename?: 'Query', myProperties: Array<{ __typename?: 'Property', price: number, id: number, sqft: number, bath?: number | null | undefined, beds?: number | null | undefined, address: string, style?: Style | null | undefined, imgs: Array<string>, lotSize: number, lat?: number | null | undefined, lng?: number | null | undefined, published: boolean, plan: number }> };

export type PropertyDetailedQueryVariables = Exact<{
  where?: InputMaybe<PropertyWhereUniqueInput>;
}>;


export type PropertyDetailedQuery = { __typename?: 'Query', property?: { __typename?: 'Property', address: string, bath?: number | null | undefined, beds?: number | null | undefined, city: string, createdAt: any, description?: string | null | undefined, facts?: string | null | undefined, features?: string | null | undefined, id: number, lat?: number | null | undefined, lng?: number | null | undefined, lotSize: number, price: number, priceSqft?: number | null | undefined, sqft: number, state: string, style?: Style | null | undefined, updatedAt: any, yearBuilt: number, zipcode: string, imgs: Array<string> } | null | undefined };

export type CreateUserHomeMutationVariables = Exact<{
  createUserHomeInput: CreateUserHomeInput;
}>;


export type CreateUserHomeMutation = { __typename?: 'Mutation', createUserHome: { __typename?: 'UserHome', propertyId: number, type: UserHomeType, buyerUid: string } };

export type CreateMessageMutationVariables = Exact<{
  createMessageInput: CreateMessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: number, message: string, propertyId: number, uid: string } };

export type UserHomesQueryVariables = Exact<{
  distinct?: InputMaybe<Array<UserHomeScalarFieldEnum> | UserHomeScalarFieldEnum>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<UserHomeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserHomeOrderByWithRelationInput> | UserHomeOrderByWithRelationInput>;
  where?: InputMaybe<UserHomeWhereInput>;
}>;


export type UserHomesQuery = { __typename?: 'Query', userHomes: Array<{ __typename?: 'UserHome', propertyId: number, type: UserHomeType }> };

export type MyHomesQueryVariables = Exact<{
  distinct?: InputMaybe<Array<UserHomeScalarFieldEnum> | UserHomeScalarFieldEnum>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<UserHomeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserHomeOrderByWithRelationInput> | UserHomeOrderByWithRelationInput>;
  where?: InputMaybe<UserHomeWhereInput>;
}>;


export type MyHomesQuery = { __typename?: 'Query', myHomes: Array<{ __typename?: 'UserHome', propertyId: number, type: UserHomeType }> };

export type UserHomesDetailedQueryVariables = Exact<{
  distinct?: InputMaybe<Array<UserHomeScalarFieldEnum> | UserHomeScalarFieldEnum>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<UserHomeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserHomeOrderByWithRelationInput> | UserHomeOrderByWithRelationInput>;
  where?: InputMaybe<UserHomeWhereInput>;
}>;


export type UserHomesDetailedQuery = { __typename?: 'Query', userHomes: Array<{ __typename?: 'UserHome', id: number, propertyId: number, type: UserHomeType, property: { __typename?: 'Property', address: string, price: number, imgs: Array<string> } }> };

export type RemoveUserHomeMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveUserHomeMutation = { __typename?: 'Mutation', removeUserHome: { __typename?: 'UserHome', id: number } };

export type CreatePropertyMutationVariables = Exact<{
  createPropertyInput: CreatePropertyInput;
}>;


export type CreatePropertyMutation = { __typename?: 'Mutation', createProperty: { __typename?: 'Property', address: string, bath?: number | null | undefined, beds?: number | null | undefined, city: string, createdAt: any, description?: string | null | undefined, facts?: string | null | undefined, features?: string | null | undefined, id: number, lat?: number | null | undefined, lng?: number | null | undefined, lotSize: number, price: number, priceSqft?: number | null | undefined, sqft: number, state: string, style?: Style | null | undefined, updatedAt: any, yearBuilt: number, zipcode: string } };

export type MessagesQueryVariables = Exact<{
  where?: InputMaybe<MessageWhereInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput> | MessageOrderByWithRelationInput>;
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum> | MessageScalarFieldEnum>;
}>;


export type MessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: number, message: string, createdAt: any, property: { __typename?: 'Property', id: number, address: string, price: number, imgs: Array<string> } }> };

export type UpdatePropertyMutationVariables = Exact<{
  updatePropertyInput: UpdatePropertyInput;
}>;


export type UpdatePropertyMutation = { __typename?: 'Mutation', updateProperty: { __typename?: 'Property', id: number, plan: number, published: boolean } };

export type LocationStatsQueryVariables = Exact<{
  where?: InputMaybe<LocationStatsWhereInput>;
  orderBy?: InputMaybe<Array<LocationStatsOrderByWithRelationInput> | LocationStatsOrderByWithRelationInput>;
  cursor?: InputMaybe<WhereUniqueInputNumber>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  distinct?: InputMaybe<Array<LocationStatsScalarFieldEnum> | LocationStatsScalarFieldEnum>;
}>;


export type LocationStatsQuery = { __typename?: 'Query', locationStats: Array<{ __typename?: 'LocationStats', id: number, name: string, images: Array<string>, lat: number, lng: number, priceSqft: number, totalHomes: number, type?: LocationStatsType | null | undefined, bedPrices?: Array<{ __typename?: 'BedPrice', id: number, sqftAvg: number, beds: string, avg: number, count: number }> | null | undefined }> };

export type LocationStatQueryVariables = Exact<{
  where?: InputMaybe<LocationStatsWhereUniqueInput>;
}>;


export type LocationStatQuery = { __typename?: 'Query', locationStat: { __typename?: 'LocationStats', id: number, name: string, images: Array<string>, lat: number, lng: number, priceSqft: number, totalHomes: number, type?: LocationStatsType | null | undefined, bedPrices?: Array<{ __typename?: 'BedPrice', id: number, sqftAvg: number, beds: string, avg: number, count: number }> | null | undefined } };

export const namedOperations = {
  Query: {
    SearchProperties: 'SearchProperties',
    SearchPropertiesDetailed: 'SearchPropertiesDetailed',
    Property: 'Property',
    MyProperties: 'MyProperties',
    PropertyDetailed: 'PropertyDetailed',
    UserHomes: 'UserHomes',
    MyHomes: 'MyHomes',
    UserHomesDetailed: 'UserHomesDetailed',
    Messages: 'Messages',
    LocationStats: 'LocationStats',
    LocationStat: 'LocationStat'
  },
  Mutation: {
    CreateUserHome: 'CreateUserHome',
    CreateMessage: 'CreateMessage',
    RemoveUserHome: 'RemoveUserHome',
    CreateProperty: 'CreateProperty',
    UpdateProperty: 'UpdateProperty'
  }
}

export const SearchPropertiesDocument = /*#__PURE__*/ gql`
    query SearchProperties($where: PropertyWhereInput, $orderBy: [PropertyOrderByWithRelationInput!], $cursor: WhereUniqueInputNumber, $take: Int, $skip: Int, $distinct: [PropertyScalarFieldEnum!]) {
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
    `;

/**
 * __useSearchPropertiesQuery__
 *
 * To run a query within a React component, call `useSearchPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPropertiesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useSearchPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<SearchPropertiesQuery, SearchPropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPropertiesQuery, SearchPropertiesQueryVariables>(SearchPropertiesDocument, options);
      }
export function useSearchPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPropertiesQuery, SearchPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPropertiesQuery, SearchPropertiesQueryVariables>(SearchPropertiesDocument, options);
        }
export type SearchPropertiesQueryHookResult = ReturnType<typeof useSearchPropertiesQuery>;
export type SearchPropertiesLazyQueryHookResult = ReturnType<typeof useSearchPropertiesLazyQuery>;
export type SearchPropertiesQueryResult = Apollo.QueryResult<SearchPropertiesQuery, SearchPropertiesQueryVariables>;
export const SearchPropertiesDetailedDocument = /*#__PURE__*/ gql`
    query SearchPropertiesDetailed($where: PropertyWhereInput, $orderBy: [PropertyOrderByWithRelationInput!], $cursor: WhereUniqueInputNumber, $take: Int, $skip: Int, $distinct: [PropertyScalarFieldEnum!]) {
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
    `;

/**
 * __useSearchPropertiesDetailedQuery__
 *
 * To run a query within a React component, call `useSearchPropertiesDetailedQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPropertiesDetailedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPropertiesDetailedQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useSearchPropertiesDetailedQuery(baseOptions?: Apollo.QueryHookOptions<SearchPropertiesDetailedQuery, SearchPropertiesDetailedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPropertiesDetailedQuery, SearchPropertiesDetailedQueryVariables>(SearchPropertiesDetailedDocument, options);
      }
export function useSearchPropertiesDetailedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPropertiesDetailedQuery, SearchPropertiesDetailedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPropertiesDetailedQuery, SearchPropertiesDetailedQueryVariables>(SearchPropertiesDetailedDocument, options);
        }
export type SearchPropertiesDetailedQueryHookResult = ReturnType<typeof useSearchPropertiesDetailedQuery>;
export type SearchPropertiesDetailedLazyQueryHookResult = ReturnType<typeof useSearchPropertiesDetailedLazyQuery>;
export type SearchPropertiesDetailedQueryResult = Apollo.QueryResult<SearchPropertiesDetailedQuery, SearchPropertiesDetailedQueryVariables>;
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
    `;

/**
 * __usePropertyQuery__
 *
 * To run a query within a React component, call `usePropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePropertyQuery(baseOptions?: Apollo.QueryHookOptions<PropertyQuery, PropertyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PropertyQuery, PropertyQueryVariables>(PropertyDocument, options);
      }
export function usePropertyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PropertyQuery, PropertyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PropertyQuery, PropertyQueryVariables>(PropertyDocument, options);
        }
export type PropertyQueryHookResult = ReturnType<typeof usePropertyQuery>;
export type PropertyLazyQueryHookResult = ReturnType<typeof usePropertyLazyQuery>;
export type PropertyQueryResult = Apollo.QueryResult<PropertyQuery, PropertyQueryVariables>;
export const MyPropertiesDocument = /*#__PURE__*/ gql`
    query MyProperties($where: PropertyWhereInput) {
  myProperties(where: $where) {
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
    published
    plan
  }
}
    `;

/**
 * __useMyPropertiesQuery__
 *
 * To run a query within a React component, call `useMyPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPropertiesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMyPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<MyPropertiesQuery, MyPropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyPropertiesQuery, MyPropertiesQueryVariables>(MyPropertiesDocument, options);
      }
export function useMyPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPropertiesQuery, MyPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyPropertiesQuery, MyPropertiesQueryVariables>(MyPropertiesDocument, options);
        }
export type MyPropertiesQueryHookResult = ReturnType<typeof useMyPropertiesQuery>;
export type MyPropertiesLazyQueryHookResult = ReturnType<typeof useMyPropertiesLazyQuery>;
export type MyPropertiesQueryResult = Apollo.QueryResult<MyPropertiesQuery, MyPropertiesQueryVariables>;
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
    `;

/**
 * __usePropertyDetailedQuery__
 *
 * To run a query within a React component, call `usePropertyDetailedQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyDetailedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyDetailedQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePropertyDetailedQuery(baseOptions?: Apollo.QueryHookOptions<PropertyDetailedQuery, PropertyDetailedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PropertyDetailedQuery, PropertyDetailedQueryVariables>(PropertyDetailedDocument, options);
      }
export function usePropertyDetailedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PropertyDetailedQuery, PropertyDetailedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PropertyDetailedQuery, PropertyDetailedQueryVariables>(PropertyDetailedDocument, options);
        }
export type PropertyDetailedQueryHookResult = ReturnType<typeof usePropertyDetailedQuery>;
export type PropertyDetailedLazyQueryHookResult = ReturnType<typeof usePropertyDetailedLazyQuery>;
export type PropertyDetailedQueryResult = Apollo.QueryResult<PropertyDetailedQuery, PropertyDetailedQueryVariables>;
export const CreateUserHomeDocument = /*#__PURE__*/ gql`
    mutation CreateUserHome($createUserHomeInput: CreateUserHomeInput!) {
  createUserHome(createUserHomeInput: $createUserHomeInput) {
    propertyId
    type
    buyerUid
  }
}
    `;
export type CreateUserHomeMutationFn = Apollo.MutationFunction<CreateUserHomeMutation, CreateUserHomeMutationVariables>;

/**
 * __useCreateUserHomeMutation__
 *
 * To run a mutation, you first call `useCreateUserHomeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserHomeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserHomeMutation, { data, loading, error }] = useCreateUserHomeMutation({
 *   variables: {
 *      createUserHomeInput: // value for 'createUserHomeInput'
 *   },
 * });
 */
export function useCreateUserHomeMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserHomeMutation, CreateUserHomeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserHomeMutation, CreateUserHomeMutationVariables>(CreateUserHomeDocument, options);
      }
export type CreateUserHomeMutationHookResult = ReturnType<typeof useCreateUserHomeMutation>;
export type CreateUserHomeMutationResult = Apollo.MutationResult<CreateUserHomeMutation>;
export type CreateUserHomeMutationOptions = Apollo.BaseMutationOptions<CreateUserHomeMutation, CreateUserHomeMutationVariables>;
export const CreateMessageDocument = /*#__PURE__*/ gql`
    mutation CreateMessage($createMessageInput: CreateMessageInput!) {
  createMessage(createMessageInput: $createMessageInput) {
    id
    message
    propertyId
    uid
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      createMessageInput: // value for 'createMessageInput'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const UserHomesDocument = /*#__PURE__*/ gql`
    query UserHomes($distinct: [UserHomeScalarFieldEnum!], $skip: Int, $take: Int, $cursor: UserHomeWhereUniqueInput, $orderBy: [UserHomeOrderByWithRelationInput!], $where: UserHomeWhereInput) {
  userHomes(
    distinct: $distinct
    skip: $skip
    take: $take
    cursor: $cursor
    orderBy: $orderBy
    where: $where
  ) {
    propertyId
    type
  }
}
    `;

/**
 * __useUserHomesQuery__
 *
 * To run a query within a React component, call `useUserHomesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserHomesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserHomesQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserHomesQuery(baseOptions?: Apollo.QueryHookOptions<UserHomesQuery, UserHomesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserHomesQuery, UserHomesQueryVariables>(UserHomesDocument, options);
      }
export function useUserHomesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserHomesQuery, UserHomesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserHomesQuery, UserHomesQueryVariables>(UserHomesDocument, options);
        }
export type UserHomesQueryHookResult = ReturnType<typeof useUserHomesQuery>;
export type UserHomesLazyQueryHookResult = ReturnType<typeof useUserHomesLazyQuery>;
export type UserHomesQueryResult = Apollo.QueryResult<UserHomesQuery, UserHomesQueryVariables>;
export const MyHomesDocument = /*#__PURE__*/ gql`
    query MyHomes($distinct: [UserHomeScalarFieldEnum!], $skip: Int, $take: Int, $cursor: UserHomeWhereUniqueInput, $orderBy: [UserHomeOrderByWithRelationInput!], $where: UserHomeWhereInput) {
  myHomes(
    distinct: $distinct
    skip: $skip
    take: $take
    cursor: $cursor
    orderBy: $orderBy
    where: $where
  ) {
    propertyId
    type
  }
}
    `;

/**
 * __useMyHomesQuery__
 *
 * To run a query within a React component, call `useMyHomesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyHomesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyHomesQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMyHomesQuery(baseOptions?: Apollo.QueryHookOptions<MyHomesQuery, MyHomesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyHomesQuery, MyHomesQueryVariables>(MyHomesDocument, options);
      }
export function useMyHomesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyHomesQuery, MyHomesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyHomesQuery, MyHomesQueryVariables>(MyHomesDocument, options);
        }
export type MyHomesQueryHookResult = ReturnType<typeof useMyHomesQuery>;
export type MyHomesLazyQueryHookResult = ReturnType<typeof useMyHomesLazyQuery>;
export type MyHomesQueryResult = Apollo.QueryResult<MyHomesQuery, MyHomesQueryVariables>;
export const UserHomesDetailedDocument = /*#__PURE__*/ gql`
    query UserHomesDetailed($distinct: [UserHomeScalarFieldEnum!], $skip: Int, $take: Int, $cursor: UserHomeWhereUniqueInput, $orderBy: [UserHomeOrderByWithRelationInput!], $where: UserHomeWhereInput) {
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
    `;

/**
 * __useUserHomesDetailedQuery__
 *
 * To run a query within a React component, call `useUserHomesDetailedQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserHomesDetailedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserHomesDetailedQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserHomesDetailedQuery(baseOptions?: Apollo.QueryHookOptions<UserHomesDetailedQuery, UserHomesDetailedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserHomesDetailedQuery, UserHomesDetailedQueryVariables>(UserHomesDetailedDocument, options);
      }
export function useUserHomesDetailedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserHomesDetailedQuery, UserHomesDetailedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserHomesDetailedQuery, UserHomesDetailedQueryVariables>(UserHomesDetailedDocument, options);
        }
export type UserHomesDetailedQueryHookResult = ReturnType<typeof useUserHomesDetailedQuery>;
export type UserHomesDetailedLazyQueryHookResult = ReturnType<typeof useUserHomesDetailedLazyQuery>;
export type UserHomesDetailedQueryResult = Apollo.QueryResult<UserHomesDetailedQuery, UserHomesDetailedQueryVariables>;
export const RemoveUserHomeDocument = /*#__PURE__*/ gql`
    mutation RemoveUserHome {
  removeUserHome {
    id
  }
}
    `;
export type RemoveUserHomeMutationFn = Apollo.MutationFunction<RemoveUserHomeMutation, RemoveUserHomeMutationVariables>;

/**
 * __useRemoveUserHomeMutation__
 *
 * To run a mutation, you first call `useRemoveUserHomeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserHomeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserHomeMutation, { data, loading, error }] = useRemoveUserHomeMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveUserHomeMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserHomeMutation, RemoveUserHomeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserHomeMutation, RemoveUserHomeMutationVariables>(RemoveUserHomeDocument, options);
      }
export type RemoveUserHomeMutationHookResult = ReturnType<typeof useRemoveUserHomeMutation>;
export type RemoveUserHomeMutationResult = Apollo.MutationResult<RemoveUserHomeMutation>;
export type RemoveUserHomeMutationOptions = Apollo.BaseMutationOptions<RemoveUserHomeMutation, RemoveUserHomeMutationVariables>;
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
    `;
export type CreatePropertyMutationFn = Apollo.MutationFunction<CreatePropertyMutation, CreatePropertyMutationVariables>;

/**
 * __useCreatePropertyMutation__
 *
 * To run a mutation, you first call `useCreatePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPropertyMutation, { data, loading, error }] = useCreatePropertyMutation({
 *   variables: {
 *      createPropertyInput: // value for 'createPropertyInput'
 *   },
 * });
 */
export function useCreatePropertyMutation(baseOptions?: Apollo.MutationHookOptions<CreatePropertyMutation, CreatePropertyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePropertyMutation, CreatePropertyMutationVariables>(CreatePropertyDocument, options);
      }
export type CreatePropertyMutationHookResult = ReturnType<typeof useCreatePropertyMutation>;
export type CreatePropertyMutationResult = Apollo.MutationResult<CreatePropertyMutation>;
export type CreatePropertyMutationOptions = Apollo.BaseMutationOptions<CreatePropertyMutation, CreatePropertyMutationVariables>;
export const MessagesDocument = /*#__PURE__*/ gql`
    query Messages($where: MessageWhereInput, $orderBy: [MessageOrderByWithRelationInput!], $cursor: WhereUniqueInputNumber, $take: Int, $skip: Int, $distinct: [MessageScalarFieldEnum!]) {
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
    `;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions?: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const UpdatePropertyDocument = /*#__PURE__*/ gql`
    mutation UpdateProperty($updatePropertyInput: UpdatePropertyInput!) {
  updateProperty(updatePropertyInput: $updatePropertyInput) {
    id
    plan
    published
  }
}
    `;
export type UpdatePropertyMutationFn = Apollo.MutationFunction<UpdatePropertyMutation, UpdatePropertyMutationVariables>;

/**
 * __useUpdatePropertyMutation__
 *
 * To run a mutation, you first call `useUpdatePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePropertyMutation, { data, loading, error }] = useUpdatePropertyMutation({
 *   variables: {
 *      updatePropertyInput: // value for 'updatePropertyInput'
 *   },
 * });
 */
export function useUpdatePropertyMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePropertyMutation, UpdatePropertyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePropertyMutation, UpdatePropertyMutationVariables>(UpdatePropertyDocument, options);
      }
export type UpdatePropertyMutationHookResult = ReturnType<typeof useUpdatePropertyMutation>;
export type UpdatePropertyMutationResult = Apollo.MutationResult<UpdatePropertyMutation>;
export type UpdatePropertyMutationOptions = Apollo.BaseMutationOptions<UpdatePropertyMutation, UpdatePropertyMutationVariables>;
export const LocationStatsDocument = /*#__PURE__*/ gql`
    query LocationStats($where: LocationStatsWhereInput, $orderBy: [LocationStatsOrderByWithRelationInput!], $cursor: WhereUniqueInputNumber, $take: Int, $skip: Int, $distinct: [LocationStatsScalarFieldEnum!]) {
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
    `;

/**
 * __useLocationStatsQuery__
 *
 * To run a query within a React component, call `useLocationStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationStatsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useLocationStatsQuery(baseOptions?: Apollo.QueryHookOptions<LocationStatsQuery, LocationStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationStatsQuery, LocationStatsQueryVariables>(LocationStatsDocument, options);
      }
export function useLocationStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationStatsQuery, LocationStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationStatsQuery, LocationStatsQueryVariables>(LocationStatsDocument, options);
        }
export type LocationStatsQueryHookResult = ReturnType<typeof useLocationStatsQuery>;
export type LocationStatsLazyQueryHookResult = ReturnType<typeof useLocationStatsLazyQuery>;
export type LocationStatsQueryResult = Apollo.QueryResult<LocationStatsQuery, LocationStatsQueryVariables>;
export const LocationStatDocument = /*#__PURE__*/ gql`
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
    `;

/**
 * __useLocationStatQuery__
 *
 * To run a query within a React component, call `useLocationStatQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationStatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationStatQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useLocationStatQuery(baseOptions?: Apollo.QueryHookOptions<LocationStatQuery, LocationStatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationStatQuery, LocationStatQueryVariables>(LocationStatDocument, options);
      }
export function useLocationStatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationStatQuery, LocationStatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationStatQuery, LocationStatQueryVariables>(LocationStatDocument, options);
        }
export type LocationStatQueryHookResult = ReturnType<typeof useLocationStatQuery>;
export type LocationStatLazyQueryHookResult = ReturnType<typeof useLocationStatLazyQuery>;
export type LocationStatQueryResult = Apollo.QueryResult<LocationStatQuery, LocationStatQueryVariables>;