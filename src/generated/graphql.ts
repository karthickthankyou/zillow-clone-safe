import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  geography: any;
  geometry: any;
  jsonb: any;
  smallint: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/**
 * City listed here along with the stats.
 *
 *
 * columns and relationships of "cities"
 *
 */
export type Cities = {
  __typename?: 'cities';
  createdAt: Scalars['timestamptz'];
  displayName: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  lat: Scalars['float8'];
  lng: Scalars['float8'];
  propertiesCount: Scalars['Int'];
  searches?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "cities" */
export type Cities_Aggregate = {
  __typename?: 'cities_aggregate';
  aggregate?: Maybe<Cities_Aggregate_Fields>;
  nodes: Array<Cities>;
};

/** aggregate fields of "cities" */
export type Cities_Aggregate_Fields = {
  __typename?: 'cities_aggregate_fields';
  avg?: Maybe<Cities_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cities_Max_Fields>;
  min?: Maybe<Cities_Min_Fields>;
  stddev?: Maybe<Cities_Stddev_Fields>;
  stddev_pop?: Maybe<Cities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cities_Stddev_Samp_Fields>;
  sum?: Maybe<Cities_Sum_Fields>;
  var_pop?: Maybe<Cities_Var_Pop_Fields>;
  var_samp?: Maybe<Cities_Var_Samp_Fields>;
  variance?: Maybe<Cities_Variance_Fields>;
};


/** aggregate fields of "cities" */
export type Cities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cities_Avg_Fields = {
  __typename?: 'cities_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  propertiesCount?: Maybe<Scalars['Float']>;
  searches?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
  _and?: InputMaybe<Array<Cities_Bool_Exp>>;
  _not?: InputMaybe<Cities_Bool_Exp>;
  _or?: InputMaybe<Array<Cities_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  lat?: InputMaybe<Float8_Comparison_Exp>;
  lng?: InputMaybe<Float8_Comparison_Exp>;
  propertiesCount?: InputMaybe<Int_Comparison_Exp>;
  searches?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
  /** unique or primary key constraint */
  CitiesDisplayNameKey = 'cities_displayName_key',
  /** unique or primary key constraint */
  CitiesPkey = 'cities_pkey'
}

/** input type for incrementing numeric columns in table "cities" */
export type Cities_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  propertiesCount?: InputMaybe<Scalars['Int']>;
  searches?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  displayName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  propertiesCount?: InputMaybe<Scalars['Int']>;
  searches?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Cities_Max_Fields = {
  __typename?: 'cities_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  propertiesCount?: Maybe<Scalars['Int']>;
  searches?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Cities_Min_Fields = {
  __typename?: 'cities_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  propertiesCount?: Maybe<Scalars['Int']>;
  searches?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
  __typename?: 'cities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cities>;
};

/** on conflict condition type for table "cities" */
export type Cities_On_Conflict = {
  constraint: Cities_Constraint;
  update_columns?: Array<Cities_Update_Column>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

/** Ordering options when selecting data from "cities". */
export type Cities_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  propertiesCount?: InputMaybe<Order_By>;
  searches?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cities */
export type Cities_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cities" */
export enum Cities_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  PropertiesCount = 'propertiesCount',
  /** column name */
  Searches = 'searches',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "cities" */
export type Cities_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  displayName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  propertiesCount?: InputMaybe<Scalars['Int']>;
  searches?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Cities_Stddev_Fields = {
  __typename?: 'cities_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  propertiesCount?: Maybe<Scalars['Float']>;
  searches?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cities_Stddev_Pop_Fields = {
  __typename?: 'cities_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  propertiesCount?: Maybe<Scalars['Float']>;
  searches?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cities_Stddev_Samp_Fields = {
  __typename?: 'cities_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  propertiesCount?: Maybe<Scalars['Float']>;
  searches?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cities_Sum_Fields = {
  __typename?: 'cities_sum_fields';
  id?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  propertiesCount?: Maybe<Scalars['Int']>;
  searches?: Maybe<Scalars['Int']>;
};

/** update columns of table "cities" */
export enum Cities_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  PropertiesCount = 'propertiesCount',
  /** column name */
  Searches = 'searches',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Cities_Var_Pop_Fields = {
  __typename?: 'cities_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  propertiesCount?: Maybe<Scalars['Float']>;
  searches?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cities_Var_Samp_Fields = {
  __typename?: 'cities_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  propertiesCount?: Maybe<Scalars['Float']>;
  searches?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cities_Variance_Fields = {
  __typename?: 'cities_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  propertiesCount?: Maybe<Scalars['Float']>;
  searches?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

export type Geography_Cast_Exp = {
  geometry?: InputMaybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: InputMaybe<Geography_Cast_Exp>;
  _eq?: InputMaybe<Scalars['geography']>;
  _gt?: InputMaybe<Scalars['geography']>;
  _gte?: InputMaybe<Scalars['geography']>;
  _in?: InputMaybe<Array<Scalars['geography']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['geography']>;
  _lte?: InputMaybe<Scalars['geography']>;
  _neq?: InputMaybe<Scalars['geography']>;
  _nin?: InputMaybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: InputMaybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: InputMaybe<Scalars['geography']>;
};

export type Geometry_Cast_Exp = {
  geography?: InputMaybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: InputMaybe<Geometry_Cast_Exp>;
  _eq?: InputMaybe<Scalars['geometry']>;
  _gt?: InputMaybe<Scalars['geometry']>;
  _gte?: InputMaybe<Scalars['geometry']>;
  _in?: InputMaybe<Array<Scalars['geometry']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['geometry']>;
  _lte?: InputMaybe<Scalars['geometry']>;
  _neq?: InputMaybe<Scalars['geometry']>;
  _nin?: InputMaybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: InputMaybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: InputMaybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains?: InputMaybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses?: InputMaybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: InputMaybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: InputMaybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: InputMaybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: InputMaybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: InputMaybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: InputMaybe<Scalars['geometry']>;
};

/**
 * Contains all homes.
 *
 *
 * columns and relationships of "homes"
 *
 */
export type Homes = {
  __typename?: 'homes';
  address: Scalars['String'];
  bath: Scalars['Int'];
  beds: Scalars['Int'];
  city: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  facts: Scalars['String'];
  features: Scalars['String'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  lotSize: Scalars['Int'];
  price: Scalars['Int'];
  priceSqft: Scalars['Int'];
  sqft: Scalars['Int'];
  state: Scalars['String'];
  style: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  yearBuilt: Scalars['smallint'];
  zipcode: Scalars['String'];
};

/** aggregated selection of "homes" */
export type Homes_Aggregate = {
  __typename?: 'homes_aggregate';
  aggregate?: Maybe<Homes_Aggregate_Fields>;
  nodes: Array<Homes>;
};

/** aggregate fields of "homes" */
export type Homes_Aggregate_Fields = {
  __typename?: 'homes_aggregate_fields';
  avg?: Maybe<Homes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Homes_Max_Fields>;
  min?: Maybe<Homes_Min_Fields>;
  stddev?: Maybe<Homes_Stddev_Fields>;
  stddev_pop?: Maybe<Homes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Homes_Stddev_Samp_Fields>;
  sum?: Maybe<Homes_Sum_Fields>;
  var_pop?: Maybe<Homes_Var_Pop_Fields>;
  var_samp?: Maybe<Homes_Var_Samp_Fields>;
  variance?: Maybe<Homes_Variance_Fields>;
};


/** aggregate fields of "homes" */
export type Homes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Homes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Homes_Avg_Fields = {
  __typename?: 'homes_avg_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
  yearBuilt?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "homes". All fields are combined with a logical 'AND'. */
export type Homes_Bool_Exp = {
  _and?: InputMaybe<Array<Homes_Bool_Exp>>;
  _not?: InputMaybe<Homes_Bool_Exp>;
  _or?: InputMaybe<Array<Homes_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  bath?: InputMaybe<Int_Comparison_Exp>;
  beds?: InputMaybe<Int_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  facts?: InputMaybe<String_Comparison_Exp>;
  features?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lat?: InputMaybe<Float_Comparison_Exp>;
  lng?: InputMaybe<Float_Comparison_Exp>;
  lotSize?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  priceSqft?: InputMaybe<Int_Comparison_Exp>;
  sqft?: InputMaybe<Int_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  style?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  yearBuilt?: InputMaybe<Smallint_Comparison_Exp>;
  zipcode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "homes" */
export enum Homes_Constraint {
  /** unique or primary key constraint */
  HomesPkey = 'homes_pkey'
}

/** input type for incrementing numeric columns in table "homes" */
export type Homes_Inc_Input = {
  bath?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  lotSize?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  priceSqft?: InputMaybe<Scalars['Int']>;
  sqft?: InputMaybe<Scalars['Int']>;
  yearBuilt?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "homes" */
export type Homes_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  bath?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  facts?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  lotSize?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  priceSqft?: InputMaybe<Scalars['Int']>;
  sqft?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  yearBuilt?: InputMaybe<Scalars['smallint']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Homes_Max_Fields = {
  __typename?: 'homes_max_fields';
  address?: Maybe<Scalars['String']>;
  bath?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  facts?: Maybe<Scalars['String']>;
  features?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  priceSqft?: Maybe<Scalars['Int']>;
  sqft?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  yearBuilt?: Maybe<Scalars['smallint']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Homes_Min_Fields = {
  __typename?: 'homes_min_fields';
  address?: Maybe<Scalars['String']>;
  bath?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  facts?: Maybe<Scalars['String']>;
  features?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  priceSqft?: Maybe<Scalars['Int']>;
  sqft?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  yearBuilt?: Maybe<Scalars['smallint']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "homes" */
export type Homes_Mutation_Response = {
  __typename?: 'homes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Homes>;
};

/** input type for inserting object relation for remote table "homes" */
export type Homes_Obj_Rel_Insert_Input = {
  data: Homes_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Homes_On_Conflict>;
};

/** on conflict condition type for table "homes" */
export type Homes_On_Conflict = {
  constraint: Homes_Constraint;
  update_columns?: Array<Homes_Update_Column>;
  where?: InputMaybe<Homes_Bool_Exp>;
};

/** Ordering options when selecting data from "homes". */
export type Homes_Order_By = {
  address?: InputMaybe<Order_By>;
  bath?: InputMaybe<Order_By>;
  beds?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  facts?: InputMaybe<Order_By>;
  features?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  lotSize?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceSqft?: InputMaybe<Order_By>;
  sqft?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  style?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  yearBuilt?: InputMaybe<Order_By>;
  zipcode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: homes */
export type Homes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "homes" */
export enum Homes_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Bath = 'bath',
  /** column name */
  Beds = 'beds',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Facts = 'facts',
  /** column name */
  Features = 'features',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  LotSize = 'lotSize',
  /** column name */
  Price = 'price',
  /** column name */
  PriceSqft = 'priceSqft',
  /** column name */
  Sqft = 'sqft',
  /** column name */
  State = 'state',
  /** column name */
  Style = 'style',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  YearBuilt = 'yearBuilt',
  /** column name */
  Zipcode = 'zipcode'
}

/** input type for updating data in table "homes" */
export type Homes_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  bath?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  facts?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  lotSize?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  priceSqft?: InputMaybe<Scalars['Int']>;
  sqft?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  yearBuilt?: InputMaybe<Scalars['smallint']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Homes_Stddev_Fields = {
  __typename?: 'homes_stddev_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
  yearBuilt?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Homes_Stddev_Pop_Fields = {
  __typename?: 'homes_stddev_pop_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
  yearBuilt?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Homes_Stddev_Samp_Fields = {
  __typename?: 'homes_stddev_samp_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
  yearBuilt?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Homes_Sum_Fields = {
  __typename?: 'homes_sum_fields';
  bath?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  priceSqft?: Maybe<Scalars['Int']>;
  sqft?: Maybe<Scalars['Int']>;
  yearBuilt?: Maybe<Scalars['smallint']>;
};

/** update columns of table "homes" */
export enum Homes_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Bath = 'bath',
  /** column name */
  Beds = 'beds',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Facts = 'facts',
  /** column name */
  Features = 'features',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  LotSize = 'lotSize',
  /** column name */
  Price = 'price',
  /** column name */
  PriceSqft = 'priceSqft',
  /** column name */
  Sqft = 'sqft',
  /** column name */
  State = 'state',
  /** column name */
  Style = 'style',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  YearBuilt = 'yearBuilt',
  /** column name */
  Zipcode = 'zipcode'
}

/** aggregate var_pop on columns */
export type Homes_Var_Pop_Fields = {
  __typename?: 'homes_var_pop_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
  yearBuilt?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Homes_Var_Samp_Fields = {
  __typename?: 'homes_var_samp_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
  yearBuilt?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Homes_Variance_Fields = {
  __typename?: 'homes_variance_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  lotSize?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
  yearBuilt?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/**
 * Stats for states and cities.
 *
 *
 * columns and relationships of "location_stats"
 *
 */
export type Location_Stats = {
  __typename?: 'location_stats';
  bedsPrice: Scalars['jsonb'];
  id: Scalars['String'];
  lat: Scalars['float8'];
  lng: Scalars['float8'];
  priceSqft: Scalars['smallint'];
  totalHomes: Scalars['smallint'];
  type: Scalars['String'];
};


/**
 * Stats for states and cities.
 *
 *
 * columns and relationships of "location_stats"
 *
 */
export type Location_StatsBedsPriceArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "location_stats" */
export type Location_Stats_Aggregate = {
  __typename?: 'location_stats_aggregate';
  aggregate?: Maybe<Location_Stats_Aggregate_Fields>;
  nodes: Array<Location_Stats>;
};

/** aggregate fields of "location_stats" */
export type Location_Stats_Aggregate_Fields = {
  __typename?: 'location_stats_aggregate_fields';
  avg?: Maybe<Location_Stats_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Location_Stats_Max_Fields>;
  min?: Maybe<Location_Stats_Min_Fields>;
  stddev?: Maybe<Location_Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Location_Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Location_Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Location_Stats_Sum_Fields>;
  var_pop?: Maybe<Location_Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Location_Stats_Var_Samp_Fields>;
  variance?: Maybe<Location_Stats_Variance_Fields>;
};


/** aggregate fields of "location_stats" */
export type Location_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Location_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Location_Stats_Append_Input = {
  bedsPrice?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Location_Stats_Avg_Fields = {
  __typename?: 'location_stats_avg_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  totalHomes?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "location_stats". All fields are combined with a logical 'AND'. */
export type Location_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Stats_Bool_Exp>>;
  _not?: InputMaybe<Location_Stats_Bool_Exp>;
  _or?: InputMaybe<Array<Location_Stats_Bool_Exp>>;
  bedsPrice?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lat?: InputMaybe<Float8_Comparison_Exp>;
  lng?: InputMaybe<Float8_Comparison_Exp>;
  priceSqft?: InputMaybe<Smallint_Comparison_Exp>;
  totalHomes?: InputMaybe<Smallint_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "location_stats" */
export enum Location_Stats_Constraint {
  /** unique or primary key constraint */
  LocationStatsPkey = 'location_stats_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Location_Stats_Delete_At_Path_Input = {
  bedsPrice?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Location_Stats_Delete_Elem_Input = {
  bedsPrice?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Location_Stats_Delete_Key_Input = {
  bedsPrice?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "location_stats" */
export type Location_Stats_Inc_Input = {
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  priceSqft?: InputMaybe<Scalars['smallint']>;
  totalHomes?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "location_stats" */
export type Location_Stats_Insert_Input = {
  bedsPrice?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  priceSqft?: InputMaybe<Scalars['smallint']>;
  totalHomes?: InputMaybe<Scalars['smallint']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Location_Stats_Max_Fields = {
  __typename?: 'location_stats_max_fields';
  id?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  priceSqft?: Maybe<Scalars['smallint']>;
  totalHomes?: Maybe<Scalars['smallint']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Location_Stats_Min_Fields = {
  __typename?: 'location_stats_min_fields';
  id?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  priceSqft?: Maybe<Scalars['smallint']>;
  totalHomes?: Maybe<Scalars['smallint']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "location_stats" */
export type Location_Stats_Mutation_Response = {
  __typename?: 'location_stats_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Location_Stats>;
};

/** on conflict condition type for table "location_stats" */
export type Location_Stats_On_Conflict = {
  constraint: Location_Stats_Constraint;
  update_columns?: Array<Location_Stats_Update_Column>;
  where?: InputMaybe<Location_Stats_Bool_Exp>;
};

/** Ordering options when selecting data from "location_stats". */
export type Location_Stats_Order_By = {
  bedsPrice?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  priceSqft?: InputMaybe<Order_By>;
  totalHomes?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: location_stats */
export type Location_Stats_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Location_Stats_Prepend_Input = {
  bedsPrice?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "location_stats" */
export enum Location_Stats_Select_Column {
  /** column name */
  BedsPrice = 'bedsPrice',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  PriceSqft = 'priceSqft',
  /** column name */
  TotalHomes = 'totalHomes',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "location_stats" */
export type Location_Stats_Set_Input = {
  bedsPrice?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  priceSqft?: InputMaybe<Scalars['smallint']>;
  totalHomes?: InputMaybe<Scalars['smallint']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Location_Stats_Stddev_Fields = {
  __typename?: 'location_stats_stddev_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  totalHomes?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Location_Stats_Stddev_Pop_Fields = {
  __typename?: 'location_stats_stddev_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  totalHomes?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Location_Stats_Stddev_Samp_Fields = {
  __typename?: 'location_stats_stddev_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  totalHomes?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Location_Stats_Sum_Fields = {
  __typename?: 'location_stats_sum_fields';
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  priceSqft?: Maybe<Scalars['smallint']>;
  totalHomes?: Maybe<Scalars['smallint']>;
};

/** update columns of table "location_stats" */
export enum Location_Stats_Update_Column {
  /** column name */
  BedsPrice = 'bedsPrice',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  PriceSqft = 'priceSqft',
  /** column name */
  TotalHomes = 'totalHomes',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Location_Stats_Var_Pop_Fields = {
  __typename?: 'location_stats_var_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  totalHomes?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Location_Stats_Var_Samp_Fields = {
  __typename?: 'location_stats_var_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  totalHomes?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Location_Stats_Variance_Fields = {
  __typename?: 'location_stats_variance_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  priceSqft?: Maybe<Scalars['Float']>;
  totalHomes?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cities" */
  delete_cities?: Maybe<Cities_Mutation_Response>;
  /** delete single row from the table: "cities" */
  delete_cities_by_pk?: Maybe<Cities>;
  /** delete data from the table: "homes" */
  delete_homes?: Maybe<Homes_Mutation_Response>;
  /** delete single row from the table: "homes" */
  delete_homes_by_pk?: Maybe<Homes>;
  /** delete data from the table: "location_stats" */
  delete_location_stats?: Maybe<Location_Stats_Mutation_Response>;
  /** delete single row from the table: "location_stats" */
  delete_location_stats_by_pk?: Maybe<Location_Stats>;
  /** delete data from the table: "properties" */
  delete_properties?: Maybe<Properties_Mutation_Response>;
  /** delete single row from the table: "properties" */
  delete_properties_by_pk?: Maybe<Properties>;
  /** delete data from the table: "styles" */
  delete_styles?: Maybe<Styles_Mutation_Response>;
  /** delete single row from the table: "styles" */
  delete_styles_by_pk?: Maybe<Styles>;
  /** delete data from the table: "user_homes" */
  delete_user_homes?: Maybe<User_Homes_Mutation_Response>;
  /** delete single row from the table: "user_homes" */
  delete_user_homes_by_pk?: Maybe<User_Homes>;
  /** delete data from the table: "user_homes_types" */
  delete_user_homes_types?: Maybe<User_Homes_Types_Mutation_Response>;
  /** delete single row from the table: "user_homes_types" */
  delete_user_homes_types_by_pk?: Maybe<User_Homes_Types>;
  /** insert data into the table: "cities" */
  insert_cities?: Maybe<Cities_Mutation_Response>;
  /** insert a single row into the table: "cities" */
  insert_cities_one?: Maybe<Cities>;
  /** insert data into the table: "homes" */
  insert_homes?: Maybe<Homes_Mutation_Response>;
  /** insert a single row into the table: "homes" */
  insert_homes_one?: Maybe<Homes>;
  /** insert data into the table: "location_stats" */
  insert_location_stats?: Maybe<Location_Stats_Mutation_Response>;
  /** insert a single row into the table: "location_stats" */
  insert_location_stats_one?: Maybe<Location_Stats>;
  /** insert data into the table: "properties" */
  insert_properties?: Maybe<Properties_Mutation_Response>;
  /** insert a single row into the table: "properties" */
  insert_properties_one?: Maybe<Properties>;
  /** insert data into the table: "styles" */
  insert_styles?: Maybe<Styles_Mutation_Response>;
  /** insert a single row into the table: "styles" */
  insert_styles_one?: Maybe<Styles>;
  /** insert data into the table: "user_homes" */
  insert_user_homes?: Maybe<User_Homes_Mutation_Response>;
  /** insert a single row into the table: "user_homes" */
  insert_user_homes_one?: Maybe<User_Homes>;
  /** insert data into the table: "user_homes_types" */
  insert_user_homes_types?: Maybe<User_Homes_Types_Mutation_Response>;
  /** insert a single row into the table: "user_homes_types" */
  insert_user_homes_types_one?: Maybe<User_Homes_Types>;
  /** update data of the table: "cities" */
  update_cities?: Maybe<Cities_Mutation_Response>;
  /** update single row of the table: "cities" */
  update_cities_by_pk?: Maybe<Cities>;
  /** update data of the table: "homes" */
  update_homes?: Maybe<Homes_Mutation_Response>;
  /** update single row of the table: "homes" */
  update_homes_by_pk?: Maybe<Homes>;
  /** update data of the table: "location_stats" */
  update_location_stats?: Maybe<Location_Stats_Mutation_Response>;
  /** update single row of the table: "location_stats" */
  update_location_stats_by_pk?: Maybe<Location_Stats>;
  /** update data of the table: "properties" */
  update_properties?: Maybe<Properties_Mutation_Response>;
  /** update single row of the table: "properties" */
  update_properties_by_pk?: Maybe<Properties>;
  /** update data of the table: "styles" */
  update_styles?: Maybe<Styles_Mutation_Response>;
  /** update single row of the table: "styles" */
  update_styles_by_pk?: Maybe<Styles>;
  /** update data of the table: "user_homes" */
  update_user_homes?: Maybe<User_Homes_Mutation_Response>;
  /** update single row of the table: "user_homes" */
  update_user_homes_by_pk?: Maybe<User_Homes>;
  /** update data of the table: "user_homes_types" */
  update_user_homes_types?: Maybe<User_Homes_Types_Mutation_Response>;
  /** update single row of the table: "user_homes_types" */
  update_user_homes_types_by_pk?: Maybe<User_Homes_Types>;
};


/** mutation root */
export type Mutation_RootDelete_CitiesArgs = {
  where: Cities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cities_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_HomesArgs = {
  where: Homes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Homes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Location_StatsArgs = {
  where: Location_Stats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Location_Stats_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PropertiesArgs = {
  where: Properties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Properties_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StylesArgs = {
  where: Styles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Styles_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_HomesArgs = {
  where: User_Homes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Homes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_Homes_TypesArgs = {
  where: User_Homes_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Homes_Types_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CitiesArgs = {
  objects: Array<Cities_Insert_Input>;
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
  object: Cities_Insert_Input;
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HomesArgs = {
  objects: Array<Homes_Insert_Input>;
  on_conflict?: InputMaybe<Homes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Homes_OneArgs = {
  object: Homes_Insert_Input;
  on_conflict?: InputMaybe<Homes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_StatsArgs = {
  objects: Array<Location_Stats_Insert_Input>;
  on_conflict?: InputMaybe<Location_Stats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_Stats_OneArgs = {
  object: Location_Stats_Insert_Input;
  on_conflict?: InputMaybe<Location_Stats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PropertiesArgs = {
  objects: Array<Properties_Insert_Input>;
  on_conflict?: InputMaybe<Properties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Properties_OneArgs = {
  object: Properties_Insert_Input;
  on_conflict?: InputMaybe<Properties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StylesArgs = {
  objects: Array<Styles_Insert_Input>;
  on_conflict?: InputMaybe<Styles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Styles_OneArgs = {
  object: Styles_Insert_Input;
  on_conflict?: InputMaybe<Styles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_HomesArgs = {
  objects: Array<User_Homes_Insert_Input>;
  on_conflict?: InputMaybe<User_Homes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Homes_OneArgs = {
  object: User_Homes_Insert_Input;
  on_conflict?: InputMaybe<User_Homes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Homes_TypesArgs = {
  objects: Array<User_Homes_Types_Insert_Input>;
  on_conflict?: InputMaybe<User_Homes_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Homes_Types_OneArgs = {
  object: User_Homes_Types_Insert_Input;
  on_conflict?: InputMaybe<User_Homes_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
  _inc?: InputMaybe<Cities_Inc_Input>;
  _set?: InputMaybe<Cities_Set_Input>;
  where: Cities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
  _inc?: InputMaybe<Cities_Inc_Input>;
  _set?: InputMaybe<Cities_Set_Input>;
  pk_columns: Cities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HomesArgs = {
  _inc?: InputMaybe<Homes_Inc_Input>;
  _set?: InputMaybe<Homes_Set_Input>;
  where: Homes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Homes_By_PkArgs = {
  _inc?: InputMaybe<Homes_Inc_Input>;
  _set?: InputMaybe<Homes_Set_Input>;
  pk_columns: Homes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Location_StatsArgs = {
  _append?: InputMaybe<Location_Stats_Append_Input>;
  _delete_at_path?: InputMaybe<Location_Stats_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Location_Stats_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Location_Stats_Delete_Key_Input>;
  _inc?: InputMaybe<Location_Stats_Inc_Input>;
  _prepend?: InputMaybe<Location_Stats_Prepend_Input>;
  _set?: InputMaybe<Location_Stats_Set_Input>;
  where: Location_Stats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Location_Stats_By_PkArgs = {
  _append?: InputMaybe<Location_Stats_Append_Input>;
  _delete_at_path?: InputMaybe<Location_Stats_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Location_Stats_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Location_Stats_Delete_Key_Input>;
  _inc?: InputMaybe<Location_Stats_Inc_Input>;
  _prepend?: InputMaybe<Location_Stats_Prepend_Input>;
  _set?: InputMaybe<Location_Stats_Set_Input>;
  pk_columns: Location_Stats_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PropertiesArgs = {
  _inc?: InputMaybe<Properties_Inc_Input>;
  _set?: InputMaybe<Properties_Set_Input>;
  where: Properties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Properties_By_PkArgs = {
  _inc?: InputMaybe<Properties_Inc_Input>;
  _set?: InputMaybe<Properties_Set_Input>;
  pk_columns: Properties_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StylesArgs = {
  _set?: InputMaybe<Styles_Set_Input>;
  where: Styles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Styles_By_PkArgs = {
  _set?: InputMaybe<Styles_Set_Input>;
  pk_columns: Styles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_HomesArgs = {
  _inc?: InputMaybe<User_Homes_Inc_Input>;
  _set?: InputMaybe<User_Homes_Set_Input>;
  where: User_Homes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Homes_By_PkArgs = {
  _inc?: InputMaybe<User_Homes_Inc_Input>;
  _set?: InputMaybe<User_Homes_Set_Input>;
  pk_columns: User_Homes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Homes_TypesArgs = {
  _set?: InputMaybe<User_Homes_Types_Set_Input>;
  where: User_Homes_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Homes_Types_By_PkArgs = {
  _set?: InputMaybe<User_Homes_Types_Set_Input>;
  pk_columns: User_Homes_Types_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "properties" */
export type Properties = {
  __typename?: 'properties';
  address: Scalars['String'];
  bath: Scalars['Int'];
  beds: Scalars['Int'];
  city: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  facts: Scalars['String'];
  features: Scalars['String'];
  id: Scalars['Int'];
  location: Scalars['geography'];
  lot_size: Scalars['String'];
  price: Scalars['Int'];
  price_sqft: Scalars['Int'];
  sqft: Scalars['Int'];
  state: Scalars['String'];
  style: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  year_built: Scalars['String'];
  zipcode: Scalars['String'];
};

/** aggregated selection of "properties" */
export type Properties_Aggregate = {
  __typename?: 'properties_aggregate';
  aggregate?: Maybe<Properties_Aggregate_Fields>;
  nodes: Array<Properties>;
};

/** aggregate fields of "properties" */
export type Properties_Aggregate_Fields = {
  __typename?: 'properties_aggregate_fields';
  avg?: Maybe<Properties_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Properties_Max_Fields>;
  min?: Maybe<Properties_Min_Fields>;
  stddev?: Maybe<Properties_Stddev_Fields>;
  stddev_pop?: Maybe<Properties_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Properties_Stddev_Samp_Fields>;
  sum?: Maybe<Properties_Sum_Fields>;
  var_pop?: Maybe<Properties_Var_Pop_Fields>;
  var_samp?: Maybe<Properties_Var_Samp_Fields>;
  variance?: Maybe<Properties_Variance_Fields>;
};


/** aggregate fields of "properties" */
export type Properties_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Properties_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Properties_Avg_Fields = {
  __typename?: 'properties_avg_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_sqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "properties". All fields are combined with a logical 'AND'. */
export type Properties_Bool_Exp = {
  _and?: InputMaybe<Array<Properties_Bool_Exp>>;
  _not?: InputMaybe<Properties_Bool_Exp>;
  _or?: InputMaybe<Array<Properties_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  bath?: InputMaybe<Int_Comparison_Exp>;
  beds?: InputMaybe<Int_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  facts?: InputMaybe<String_Comparison_Exp>;
  features?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  location?: InputMaybe<Geography_Comparison_Exp>;
  lot_size?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  price_sqft?: InputMaybe<Int_Comparison_Exp>;
  sqft?: InputMaybe<Int_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  style?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  year_built?: InputMaybe<String_Comparison_Exp>;
  zipcode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "properties" */
export enum Properties_Constraint {
  /** unique or primary key constraint */
  PropertiesPkey = 'properties_pkey'
}

/** input type for incrementing numeric columns in table "properties" */
export type Properties_Inc_Input = {
  bath?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  price_sqft?: InputMaybe<Scalars['Int']>;
  sqft?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "properties" */
export type Properties_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  bath?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  facts?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['geography']>;
  lot_size?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  price_sqft?: InputMaybe<Scalars['Int']>;
  sqft?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  year_built?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Properties_Max_Fields = {
  __typename?: 'properties_max_fields';
  address?: Maybe<Scalars['String']>;
  bath?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  facts?: Maybe<Scalars['String']>;
  features?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lot_size?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  price_sqft?: Maybe<Scalars['Int']>;
  sqft?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year_built?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Properties_Min_Fields = {
  __typename?: 'properties_min_fields';
  address?: Maybe<Scalars['String']>;
  bath?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  facts?: Maybe<Scalars['String']>;
  features?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lot_size?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  price_sqft?: Maybe<Scalars['Int']>;
  sqft?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year_built?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "properties" */
export type Properties_Mutation_Response = {
  __typename?: 'properties_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Properties>;
};

/** on conflict condition type for table "properties" */
export type Properties_On_Conflict = {
  constraint: Properties_Constraint;
  update_columns?: Array<Properties_Update_Column>;
  where?: InputMaybe<Properties_Bool_Exp>;
};

/** Ordering options when selecting data from "properties". */
export type Properties_Order_By = {
  address?: InputMaybe<Order_By>;
  bath?: InputMaybe<Order_By>;
  beds?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  facts?: InputMaybe<Order_By>;
  features?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  lot_size?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  price_sqft?: InputMaybe<Order_By>;
  sqft?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  style?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year_built?: InputMaybe<Order_By>;
  zipcode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: properties */
export type Properties_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "properties" */
export enum Properties_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Bath = 'bath',
  /** column name */
  Beds = 'beds',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Facts = 'facts',
  /** column name */
  Features = 'features',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  LotSize = 'lot_size',
  /** column name */
  Price = 'price',
  /** column name */
  PriceSqft = 'price_sqft',
  /** column name */
  Sqft = 'sqft',
  /** column name */
  State = 'state',
  /** column name */
  Style = 'style',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YearBuilt = 'year_built',
  /** column name */
  Zipcode = 'zipcode'
}

/** input type for updating data in table "properties" */
export type Properties_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  bath?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  facts?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['geography']>;
  lot_size?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  price_sqft?: InputMaybe<Scalars['Int']>;
  sqft?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  year_built?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Properties_Stddev_Fields = {
  __typename?: 'properties_stddev_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_sqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Properties_Stddev_Pop_Fields = {
  __typename?: 'properties_stddev_pop_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_sqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Properties_Stddev_Samp_Fields = {
  __typename?: 'properties_stddev_samp_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_sqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Properties_Sum_Fields = {
  __typename?: 'properties_sum_fields';
  bath?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  price_sqft?: Maybe<Scalars['Int']>;
  sqft?: Maybe<Scalars['Int']>;
};

/** update columns of table "properties" */
export enum Properties_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Bath = 'bath',
  /** column name */
  Beds = 'beds',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Facts = 'facts',
  /** column name */
  Features = 'features',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  LotSize = 'lot_size',
  /** column name */
  Price = 'price',
  /** column name */
  PriceSqft = 'price_sqft',
  /** column name */
  Sqft = 'sqft',
  /** column name */
  State = 'state',
  /** column name */
  Style = 'style',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YearBuilt = 'year_built',
  /** column name */
  Zipcode = 'zipcode'
}

/** aggregate var_pop on columns */
export type Properties_Var_Pop_Fields = {
  __typename?: 'properties_var_pop_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_sqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Properties_Var_Samp_Fields = {
  __typename?: 'properties_var_samp_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_sqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Properties_Variance_Fields = {
  __typename?: 'properties_variance_fields';
  bath?: Maybe<Scalars['Float']>;
  beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  price_sqft?: Maybe<Scalars['Float']>;
  sqft?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "cities" */
  cities: Array<Cities>;
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table: "homes" */
  homes: Array<Homes>;
  /** fetch aggregated fields from the table: "homes" */
  homes_aggregate: Homes_Aggregate;
  /** fetch data from the table: "homes" using primary key columns */
  homes_by_pk?: Maybe<Homes>;
  /** fetch data from the table: "location_stats" */
  location_stats: Array<Location_Stats>;
  /** fetch aggregated fields from the table: "location_stats" */
  location_stats_aggregate: Location_Stats_Aggregate;
  /** fetch data from the table: "location_stats" using primary key columns */
  location_stats_by_pk?: Maybe<Location_Stats>;
  /** fetch data from the table: "properties" */
  properties: Array<Properties>;
  /** fetch aggregated fields from the table: "properties" */
  properties_aggregate: Properties_Aggregate;
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>;
  /** execute function "search_cities" which returns "cities" */
  search_cities: Array<Cities>;
  /** execute function "search_cities" and query aggregates on result of table type "cities" */
  search_cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "styles" */
  styles: Array<Styles>;
  /** fetch aggregated fields from the table: "styles" */
  styles_aggregate: Styles_Aggregate;
  /** fetch data from the table: "styles" using primary key columns */
  styles_by_pk?: Maybe<Styles>;
  /** fetch data from the table: "user_homes" */
  user_homes: Array<User_Homes>;
  /** fetch aggregated fields from the table: "user_homes" */
  user_homes_aggregate: User_Homes_Aggregate;
  /** fetch data from the table: "user_homes" using primary key columns */
  user_homes_by_pk?: Maybe<User_Homes>;
  /** fetch data from the table: "user_homes_types" */
  user_homes_types: Array<User_Homes_Types>;
  /** fetch aggregated fields from the table: "user_homes_types" */
  user_homes_types_aggregate: User_Homes_Types_Aggregate;
  /** fetch data from the table: "user_homes_types" using primary key columns */
  user_homes_types_by_pk?: Maybe<User_Homes_Types>;
};


export type Query_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Query_RootCities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Query_RootCities_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootHomesArgs = {
  distinct_on?: InputMaybe<Array<Homes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Homes_Order_By>>;
  where?: InputMaybe<Homes_Bool_Exp>;
};


export type Query_RootHomes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Homes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Homes_Order_By>>;
  where?: InputMaybe<Homes_Bool_Exp>;
};


export type Query_RootHomes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLocation_StatsArgs = {
  distinct_on?: InputMaybe<Array<Location_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Stats_Order_By>>;
  where?: InputMaybe<Location_Stats_Bool_Exp>;
};


export type Query_RootLocation_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Stats_Order_By>>;
  where?: InputMaybe<Location_Stats_Bool_Exp>;
};


export type Query_RootLocation_Stats_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootPropertiesArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};


export type Query_RootProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};


export type Query_RootProperties_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSearch_CitiesArgs = {
  args: Search_Cities_Args;
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Query_RootSearch_Cities_AggregateArgs = {
  args: Search_Cities_Args;
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Query_RootStylesArgs = {
  distinct_on?: InputMaybe<Array<Styles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Styles_Order_By>>;
  where?: InputMaybe<Styles_Bool_Exp>;
};


export type Query_RootStyles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Styles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Styles_Order_By>>;
  where?: InputMaybe<Styles_Bool_Exp>;
};


export type Query_RootStyles_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUser_HomesArgs = {
  distinct_on?: InputMaybe<Array<User_Homes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Homes_Order_By>>;
  where?: InputMaybe<User_Homes_Bool_Exp>;
};


export type Query_RootUser_Homes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Homes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Homes_Order_By>>;
  where?: InputMaybe<User_Homes_Bool_Exp>;
};


export type Query_RootUser_Homes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_Homes_TypesArgs = {
  distinct_on?: InputMaybe<Array<User_Homes_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Homes_Types_Order_By>>;
  where?: InputMaybe<User_Homes_Types_Bool_Exp>;
};


export type Query_RootUser_Homes_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Homes_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Homes_Types_Order_By>>;
  where?: InputMaybe<User_Homes_Types_Bool_Exp>;
};


export type Query_RootUser_Homes_Types_By_PkArgs = {
  id: Scalars['String'];
};

export type Search_Cities_Args = {
  search?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: InputMaybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

/**
 * All styles of houses are listed here.
 *
 *
 * columns and relationships of "styles"
 *
 */
export type Styles = {
  __typename?: 'styles';
  id: Scalars['String'];
};

/** aggregated selection of "styles" */
export type Styles_Aggregate = {
  __typename?: 'styles_aggregate';
  aggregate?: Maybe<Styles_Aggregate_Fields>;
  nodes: Array<Styles>;
};

/** aggregate fields of "styles" */
export type Styles_Aggregate_Fields = {
  __typename?: 'styles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Styles_Max_Fields>;
  min?: Maybe<Styles_Min_Fields>;
};


/** aggregate fields of "styles" */
export type Styles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Styles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "styles". All fields are combined with a logical 'AND'. */
export type Styles_Bool_Exp = {
  _and?: InputMaybe<Array<Styles_Bool_Exp>>;
  _not?: InputMaybe<Styles_Bool_Exp>;
  _or?: InputMaybe<Array<Styles_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "styles" */
export enum Styles_Constraint {
  /** unique or primary key constraint */
  StylesPkey = 'styles_pkey'
}

/** input type for inserting data into table "styles" */
export type Styles_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Styles_Max_Fields = {
  __typename?: 'styles_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Styles_Min_Fields = {
  __typename?: 'styles_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "styles" */
export type Styles_Mutation_Response = {
  __typename?: 'styles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Styles>;
};

/** on conflict condition type for table "styles" */
export type Styles_On_Conflict = {
  constraint: Styles_Constraint;
  update_columns?: Array<Styles_Update_Column>;
  where?: InputMaybe<Styles_Bool_Exp>;
};

/** Ordering options when selecting data from "styles". */
export type Styles_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: styles */
export type Styles_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "styles" */
export enum Styles_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "styles" */
export type Styles_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "styles" */
export enum Styles_Update_Column {
  /** column name */
  Id = 'id'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "cities" */
  cities: Array<Cities>;
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table: "homes" */
  homes: Array<Homes>;
  /** fetch aggregated fields from the table: "homes" */
  homes_aggregate: Homes_Aggregate;
  /** fetch data from the table: "homes" using primary key columns */
  homes_by_pk?: Maybe<Homes>;
  /** fetch data from the table: "location_stats" */
  location_stats: Array<Location_Stats>;
  /** fetch aggregated fields from the table: "location_stats" */
  location_stats_aggregate: Location_Stats_Aggregate;
  /** fetch data from the table: "location_stats" using primary key columns */
  location_stats_by_pk?: Maybe<Location_Stats>;
  /** fetch data from the table: "properties" */
  properties: Array<Properties>;
  /** fetch aggregated fields from the table: "properties" */
  properties_aggregate: Properties_Aggregate;
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>;
  /** execute function "search_cities" which returns "cities" */
  search_cities: Array<Cities>;
  /** execute function "search_cities" and query aggregates on result of table type "cities" */
  search_cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "styles" */
  styles: Array<Styles>;
  /** fetch aggregated fields from the table: "styles" */
  styles_aggregate: Styles_Aggregate;
  /** fetch data from the table: "styles" using primary key columns */
  styles_by_pk?: Maybe<Styles>;
  /** fetch data from the table: "user_homes" */
  user_homes: Array<User_Homes>;
  /** fetch aggregated fields from the table: "user_homes" */
  user_homes_aggregate: User_Homes_Aggregate;
  /** fetch data from the table: "user_homes" using primary key columns */
  user_homes_by_pk?: Maybe<User_Homes>;
  /** fetch data from the table: "user_homes_types" */
  user_homes_types: Array<User_Homes_Types>;
  /** fetch aggregated fields from the table: "user_homes_types" */
  user_homes_types_aggregate: User_Homes_Types_Aggregate;
  /** fetch data from the table: "user_homes_types" using primary key columns */
  user_homes_types_by_pk?: Maybe<User_Homes_Types>;
};


export type Subscription_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Subscription_RootCities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Subscription_RootCities_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootHomesArgs = {
  distinct_on?: InputMaybe<Array<Homes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Homes_Order_By>>;
  where?: InputMaybe<Homes_Bool_Exp>;
};


export type Subscription_RootHomes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Homes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Homes_Order_By>>;
  where?: InputMaybe<Homes_Bool_Exp>;
};


export type Subscription_RootHomes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLocation_StatsArgs = {
  distinct_on?: InputMaybe<Array<Location_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Stats_Order_By>>;
  where?: InputMaybe<Location_Stats_Bool_Exp>;
};


export type Subscription_RootLocation_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Stats_Order_By>>;
  where?: InputMaybe<Location_Stats_Bool_Exp>;
};


export type Subscription_RootLocation_Stats_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootPropertiesArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};


export type Subscription_RootProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};


export type Subscription_RootProperties_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSearch_CitiesArgs = {
  args: Search_Cities_Args;
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Subscription_RootSearch_Cities_AggregateArgs = {
  args: Search_Cities_Args;
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Subscription_RootStylesArgs = {
  distinct_on?: InputMaybe<Array<Styles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Styles_Order_By>>;
  where?: InputMaybe<Styles_Bool_Exp>;
};


export type Subscription_RootStyles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Styles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Styles_Order_By>>;
  where?: InputMaybe<Styles_Bool_Exp>;
};


export type Subscription_RootStyles_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUser_HomesArgs = {
  distinct_on?: InputMaybe<Array<User_Homes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Homes_Order_By>>;
  where?: InputMaybe<User_Homes_Bool_Exp>;
};


export type Subscription_RootUser_Homes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Homes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Homes_Order_By>>;
  where?: InputMaybe<User_Homes_Bool_Exp>;
};


export type Subscription_RootUser_Homes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Homes_TypesArgs = {
  distinct_on?: InputMaybe<Array<User_Homes_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Homes_Types_Order_By>>;
  where?: InputMaybe<User_Homes_Types_Bool_Exp>;
};


export type Subscription_RootUser_Homes_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Homes_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Homes_Types_Order_By>>;
  where?: InputMaybe<User_Homes_Types_Bool_Exp>;
};


export type Subscription_RootUser_Homes_Types_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/**
 * The homes that the user interacted with.
 *
 *
 * columns and relationships of "user_homes"
 *
 */
export type User_Homes = {
  __typename?: 'user_homes';
  createdAt: Scalars['timestamptz'];
  hId: Scalars['Int'];
  /** An object relationship */
  home: Homes;
  id: Scalars['Int'];
  type: User_Homes_Types_Enum;
  uid: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user_homes_type: User_Homes_Types;
};

/** aggregated selection of "user_homes" */
export type User_Homes_Aggregate = {
  __typename?: 'user_homes_aggregate';
  aggregate?: Maybe<User_Homes_Aggregate_Fields>;
  nodes: Array<User_Homes>;
};

/** aggregate fields of "user_homes" */
export type User_Homes_Aggregate_Fields = {
  __typename?: 'user_homes_aggregate_fields';
  avg?: Maybe<User_Homes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Homes_Max_Fields>;
  min?: Maybe<User_Homes_Min_Fields>;
  stddev?: Maybe<User_Homes_Stddev_Fields>;
  stddev_pop?: Maybe<User_Homes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Homes_Stddev_Samp_Fields>;
  sum?: Maybe<User_Homes_Sum_Fields>;
  var_pop?: Maybe<User_Homes_Var_Pop_Fields>;
  var_samp?: Maybe<User_Homes_Var_Samp_Fields>;
  variance?: Maybe<User_Homes_Variance_Fields>;
};


/** aggregate fields of "user_homes" */
export type User_Homes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Homes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Homes_Avg_Fields = {
  __typename?: 'user_homes_avg_fields';
  hId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_homes". All fields are combined with a logical 'AND'. */
export type User_Homes_Bool_Exp = {
  _and?: InputMaybe<Array<User_Homes_Bool_Exp>>;
  _not?: InputMaybe<User_Homes_Bool_Exp>;
  _or?: InputMaybe<Array<User_Homes_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hId?: InputMaybe<Int_Comparison_Exp>;
  home?: InputMaybe<Homes_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<User_Homes_Types_Enum_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_homes_type?: InputMaybe<User_Homes_Types_Bool_Exp>;
};

/** unique or primary key constraints on table "user_homes" */
export enum User_Homes_Constraint {
  /** unique or primary key constraint */
  UserHomesHomeIdUidKey = 'user_homes_home_id_uid_key',
  /** unique or primary key constraint */
  UserHomesPkey = 'user_homes_pkey'
}

/** input type for incrementing numeric columns in table "user_homes" */
export type User_Homes_Inc_Input = {
  hId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_homes" */
export type User_Homes_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  hId?: InputMaybe<Scalars['Int']>;
  home?: InputMaybe<Homes_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<User_Homes_Types_Enum>;
  uid?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user_homes_type?: InputMaybe<User_Homes_Types_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Homes_Max_Fields = {
  __typename?: 'user_homes_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  hId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Homes_Min_Fields = {
  __typename?: 'user_homes_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  hId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user_homes" */
export type User_Homes_Mutation_Response = {
  __typename?: 'user_homes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Homes>;
};

/** on conflict condition type for table "user_homes" */
export type User_Homes_On_Conflict = {
  constraint: User_Homes_Constraint;
  update_columns?: Array<User_Homes_Update_Column>;
  where?: InputMaybe<User_Homes_Bool_Exp>;
};

/** Ordering options when selecting data from "user_homes". */
export type User_Homes_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  hId?: InputMaybe<Order_By>;
  home?: InputMaybe<Homes_Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_homes_type?: InputMaybe<User_Homes_Types_Order_By>;
};

/** primary key columns input for table: user_homes */
export type User_Homes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_homes" */
export enum User_Homes_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HId = 'hId',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user_homes" */
export type User_Homes_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  hId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<User_Homes_Types_Enum>;
  uid?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Homes_Stddev_Fields = {
  __typename?: 'user_homes_stddev_fields';
  hId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Homes_Stddev_Pop_Fields = {
  __typename?: 'user_homes_stddev_pop_fields';
  hId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Homes_Stddev_Samp_Fields = {
  __typename?: 'user_homes_stddev_samp_fields';
  hId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Homes_Sum_Fields = {
  __typename?: 'user_homes_sum_fields';
  hId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/**
 * Types of interactions the user can make with homes
 *
 *
 * columns and relationships of "user_homes_types"
 *
 */
export type User_Homes_Types = {
  __typename?: 'user_homes_types';
  id: Scalars['String'];
};

/** aggregated selection of "user_homes_types" */
export type User_Homes_Types_Aggregate = {
  __typename?: 'user_homes_types_aggregate';
  aggregate?: Maybe<User_Homes_Types_Aggregate_Fields>;
  nodes: Array<User_Homes_Types>;
};

/** aggregate fields of "user_homes_types" */
export type User_Homes_Types_Aggregate_Fields = {
  __typename?: 'user_homes_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Homes_Types_Max_Fields>;
  min?: Maybe<User_Homes_Types_Min_Fields>;
};


/** aggregate fields of "user_homes_types" */
export type User_Homes_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Homes_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_homes_types". All fields are combined with a logical 'AND'. */
export type User_Homes_Types_Bool_Exp = {
  _and?: InputMaybe<Array<User_Homes_Types_Bool_Exp>>;
  _not?: InputMaybe<User_Homes_Types_Bool_Exp>;
  _or?: InputMaybe<Array<User_Homes_Types_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_homes_types" */
export enum User_Homes_Types_Constraint {
  /** unique or primary key constraint */
  UserHomesTypesPkey = 'user_homes_types_pkey'
}

export enum User_Homes_Types_Enum {
  Contacted = 'CONTACTED',
  RemovedFromWishlist = 'REMOVED_FROM_WISHLIST',
  Viewed = 'VIEWED',
  Wishlisted = 'WISHLISTED'
}

/** Boolean expression to compare columns of type "user_homes_types_enum". All fields are combined with logical 'AND'. */
export type User_Homes_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Homes_Types_Enum>;
  _in?: InputMaybe<Array<User_Homes_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<User_Homes_Types_Enum>;
  _nin?: InputMaybe<Array<User_Homes_Types_Enum>>;
};

/** input type for inserting data into table "user_homes_types" */
export type User_Homes_Types_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Homes_Types_Max_Fields = {
  __typename?: 'user_homes_types_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Homes_Types_Min_Fields = {
  __typename?: 'user_homes_types_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_homes_types" */
export type User_Homes_Types_Mutation_Response = {
  __typename?: 'user_homes_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Homes_Types>;
};

/** input type for inserting object relation for remote table "user_homes_types" */
export type User_Homes_Types_Obj_Rel_Insert_Input = {
  data: User_Homes_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_Homes_Types_On_Conflict>;
};

/** on conflict condition type for table "user_homes_types" */
export type User_Homes_Types_On_Conflict = {
  constraint: User_Homes_Types_Constraint;
  update_columns?: Array<User_Homes_Types_Update_Column>;
  where?: InputMaybe<User_Homes_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "user_homes_types". */
export type User_Homes_Types_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_homes_types */
export type User_Homes_Types_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "user_homes_types" */
export enum User_Homes_Types_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "user_homes_types" */
export type User_Homes_Types_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_homes_types" */
export enum User_Homes_Types_Update_Column {
  /** column name */
  Id = 'id'
}

/** update columns of table "user_homes" */
export enum User_Homes_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HId = 'hId',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type User_Homes_Var_Pop_Fields = {
  __typename?: 'user_homes_var_pop_fields';
  hId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Homes_Var_Samp_Fields = {
  __typename?: 'user_homes_var_samp_fields';
  hId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Homes_Variance_Fields = {
  __typename?: 'user_homes_variance_fields';
  hId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', properties: Array<{ __typename?: 'properties', address: string, description: string }> };

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'query_root', cities: Array<{ __typename?: 'cities', displayName: string, lat: any, lng: any, image?: string | null | undefined, propertiesCount: number }> };

export type SearchHomesByLocationQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Homes_Select_Column> | Homes_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Homes_Order_By> | Homes_Order_By>;
  where?: InputMaybe<Homes_Bool_Exp>;
}>;


export type SearchHomesByLocationQuery = { __typename?: 'query_root', homes: Array<{ __typename?: 'homes', id: number, lat: number, lng: number, style: string }> };

export type SearchCitiesByLocationQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Location_Stats_Bool_Exp>;
}>;


export type SearchCitiesByLocationQuery = { __typename?: 'query_root', cities: Array<{ __typename?: 'location_stats', id: string, lat: any, lng: any, totalHomes: any }> };

export type SearchStatesByLocationQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Location_Stats_Bool_Exp>;
}>;


export type SearchStatesByLocationQuery = { __typename?: 'query_root', states: Array<{ __typename?: 'location_stats', id: string, lat: any, lng: any, totalHomes: any }> };

export type SearchHomesByLocationDetailedQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Homes_Select_Column> | Homes_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Homes_Order_By> | Homes_Order_By>;
  where?: InputMaybe<Homes_Bool_Exp>;
}>;


export type SearchHomesByLocationDetailedQuery = { __typename?: 'query_root', homes: Array<{ __typename?: 'homes', id: number, address: string, bath: number, beds: number, price: number, sqft: number }> };

export type GetHomeByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetHomeByIdQuery = { __typename?: 'query_root', homes_by_pk?: { __typename?: 'homes', price: number, id: number, sqft: number, bath: number, beds: number } | null | undefined };

export type GetRegionByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetRegionByIdQuery = { __typename?: 'query_root', location_stats_by_pk?: { __typename?: 'location_stats', id: string, totalHomes: any, bedsPrice: any } | null | undefined };

export type InsertUserHomeMutationVariables = Exact<{
  hId: Scalars['Int'];
  uid: Scalars['String'];
  type: User_Homes_Types_Enum;
}>;


export type InsertUserHomeMutation = { __typename?: 'mutation_root', insert_user_homes_one?: { __typename?: 'user_homes', id: number, type: User_Homes_Types_Enum, uid: string, hId: number } | null | undefined };

export type GetWishlistedHomesQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetWishlistedHomesQuery = { __typename?: 'query_root', wishlisted: Array<{ __typename?: 'user_homes', id: number, hId: number }> };

export type RemoveWishlistMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveWishlistMutation = { __typename?: 'mutation_root', update_user_homes_by_pk?: { __typename?: 'user_homes', type: User_Homes_Types_Enum, id: number, hId: number } | null | undefined };

export const namedOperations = {
  Query: {
    MyQuery: 'MyQuery',
    getCities: 'getCities',
    SearchHomesByLocation: 'SearchHomesByLocation',
    SearchCitiesByLocation: 'SearchCitiesByLocation',
    SearchStatesByLocation: 'SearchStatesByLocation',
    SearchHomesByLocationDetailed: 'SearchHomesByLocationDetailed',
    GetHomeById: 'GetHomeById',
    GetRegionById: 'GetRegionById',
    GetWishlistedHomes: 'GetWishlistedHomes'
  },
  Mutation: {
    InsertUserHome: 'InsertUserHome',
    RemoveWishlist: 'RemoveWishlist'
  }
}

export const MyQueryDocument = /*#__PURE__*/ gql`
    query MyQuery {
  properties(limit: 10) {
    address
    description
  }
}
    `;

export function useMyQueryQuery(options: Omit<Urql.UseQueryArgs<MyQueryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MyQueryQuery>({ query: MyQueryDocument, ...options });
};
export const GetCitiesDocument = /*#__PURE__*/ gql`
    query getCities {
  cities(limit: 10) {
    displayName
    lat
    lng
    image
    propertiesCount
  }
}
    `;

export function useGetCitiesQuery(options: Omit<Urql.UseQueryArgs<GetCitiesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCitiesQuery>({ query: GetCitiesDocument, ...options });
};
export const SearchHomesByLocationDocument = /*#__PURE__*/ gql`
    query SearchHomesByLocation($distinct_on: [homes_select_column!], $limit: Int, $offset: Int, $order_by: [homes_order_by!], $where: homes_bool_exp) {
  homes(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    id
    lat
    lng
    style
  }
}
    `;

export function useSearchHomesByLocationQuery(options: Omit<Urql.UseQueryArgs<SearchHomesByLocationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SearchHomesByLocationQuery>({ query: SearchHomesByLocationDocument, ...options });
};
export const SearchCitiesByLocationDocument = /*#__PURE__*/ gql`
    query SearchCitiesByLocation($limit: Int, $where: location_stats_bool_exp) {
  cities: location_stats(limit: $limit, where: $where) {
    id
    lat
    lng
    totalHomes
  }
}
    `;

export function useSearchCitiesByLocationQuery(options: Omit<Urql.UseQueryArgs<SearchCitiesByLocationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SearchCitiesByLocationQuery>({ query: SearchCitiesByLocationDocument, ...options });
};
export const SearchStatesByLocationDocument = /*#__PURE__*/ gql`
    query SearchStatesByLocation($limit: Int, $where: location_stats_bool_exp) {
  states: location_stats(limit: $limit, where: $where) {
    id
    lat
    lng
    totalHomes
  }
}
    `;

export function useSearchStatesByLocationQuery(options: Omit<Urql.UseQueryArgs<SearchStatesByLocationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SearchStatesByLocationQuery>({ query: SearchStatesByLocationDocument, ...options });
};
export const SearchHomesByLocationDetailedDocument = /*#__PURE__*/ gql`
    query SearchHomesByLocationDetailed($distinct_on: [homes_select_column!], $limit: Int, $offset: Int, $order_by: [homes_order_by!], $where: homes_bool_exp) {
  homes(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    id
    address
    bath
    beds
    price
    sqft
  }
}
    `;

export function useSearchHomesByLocationDetailedQuery(options: Omit<Urql.UseQueryArgs<SearchHomesByLocationDetailedQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SearchHomesByLocationDetailedQuery>({ query: SearchHomesByLocationDetailedDocument, ...options });
};
export const GetHomeByIdDocument = /*#__PURE__*/ gql`
    query GetHomeById($id: Int!) {
  homes_by_pk(id: $id) {
    price
    id
    sqft
    bath
    beds
  }
}
    `;

export function useGetHomeByIdQuery(options: Omit<Urql.UseQueryArgs<GetHomeByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetHomeByIdQuery>({ query: GetHomeByIdDocument, ...options });
};
export const GetRegionByIdDocument = /*#__PURE__*/ gql`
    query GetRegionById($id: String!) {
  location_stats_by_pk(id: $id) {
    id
    totalHomes
    bedsPrice
  }
}
    `;

export function useGetRegionByIdQuery(options: Omit<Urql.UseQueryArgs<GetRegionByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRegionByIdQuery>({ query: GetRegionByIdDocument, ...options });
};
export const InsertUserHomeDocument = /*#__PURE__*/ gql`
    mutation InsertUserHome($hId: Int!, $uid: String!, $type: user_homes_types_enum!) {
  insert_user_homes_one(
    object: {hId: $hId, uid: $uid, type: $type}
    on_conflict: {constraint: user_homes_home_id_uid_key, update_columns: [hId, type]}
  ) {
    id
    type
    uid
    hId
  }
}
    `;

export function useInsertUserHomeMutation() {
  return Urql.useMutation<InsertUserHomeMutation, InsertUserHomeMutationVariables>(InsertUserHomeDocument);
};
export const GetWishlistedHomesDocument = /*#__PURE__*/ gql`
    query GetWishlistedHomes($uid: String!) {
  wishlisted: user_homes(where: {uid: {_eq: $uid}, type: {_eq: WISHLISTED}}) {
    id
    hId
  }
}
    `;

export function useGetWishlistedHomesQuery(options: Omit<Urql.UseQueryArgs<GetWishlistedHomesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetWishlistedHomesQuery>({ query: GetWishlistedHomesDocument, ...options });
};
export const RemoveWishlistDocument = /*#__PURE__*/ gql`
    mutation RemoveWishlist($id: Int!) {
  update_user_homes_by_pk(
    pk_columns: {id: $id}
    _set: {type: REMOVED_FROM_WISHLIST}
  ) {
    type
    id
    hId
  }
}
    `;

export function useRemoveWishlistMutation() {
  return Urql.useMutation<RemoveWishlistMutation, RemoveWishlistMutationVariables>(RemoveWishlistDocument);
};