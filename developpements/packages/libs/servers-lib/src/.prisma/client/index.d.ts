
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Partenaire
 * 
 */
export type Partenaire = {
  code: string
  libelle: string
}

/**
 * Model Produit
 * 
 */
export type Produit = {
  code: string
  libelle: string
}

/**
 * Model Offre
 * 
 */
export type Offre = {
  code: string
  libelle: string
  codeProduit: string
  dateDerniereModification: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Partenaires
 * const partenaires = await prisma.partenaire.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Partenaires
   * const partenaires = await prisma.partenaire.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.partenaire`: Exposes CRUD operations for the **Partenaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partenaires
    * const partenaires = await prisma.partenaire.findMany()
    * ```
    */
  get partenaire(): Prisma.PartenaireDelegate<GlobalReject>;

  /**
   * `prisma.produit`: Exposes CRUD operations for the **Produit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produits
    * const produits = await prisma.produit.findMany()
    * ```
    */
  get produit(): Prisma.ProduitDelegate<GlobalReject>;

  /**
   * `prisma.offre`: Exposes CRUD operations for the **Offre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offres
    * const offres = await prisma.offre.findMany()
    * ```
    */
  get offre(): Prisma.OffreDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Partenaire: 'Partenaire',
    Produit: 'Produit',
    Offre: 'Offre'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProduitCountOutputType
   */


  export type ProduitCountOutputType = {
    offres: number
  }

  export type ProduitCountOutputTypeSelect = {
    offres?: boolean
  }

  export type ProduitCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProduitCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProduitCountOutputType
    : S extends undefined
    ? never
    : S extends ProduitCountOutputTypeArgs
    ?'include' extends U
    ? ProduitCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProduitCountOutputType ? ProduitCountOutputType[P] : never
  } 
    : ProduitCountOutputType
  : ProduitCountOutputType




  // Custom InputTypes

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProduitCountOutputType
     * 
    **/
    select?: ProduitCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Partenaire
   */


  export type AggregatePartenaire = {
    _count: PartenaireCountAggregateOutputType | null
    _min: PartenaireMinAggregateOutputType | null
    _max: PartenaireMaxAggregateOutputType | null
  }

  export type PartenaireMinAggregateOutputType = {
    code: string | null
    libelle: string | null
  }

  export type PartenaireMaxAggregateOutputType = {
    code: string | null
    libelle: string | null
  }

  export type PartenaireCountAggregateOutputType = {
    code: number
    libelle: number
    _all: number
  }


  export type PartenaireMinAggregateInputType = {
    code?: true
    libelle?: true
  }

  export type PartenaireMaxAggregateInputType = {
    code?: true
    libelle?: true
  }

  export type PartenaireCountAggregateInputType = {
    code?: true
    libelle?: true
    _all?: true
  }

  export type PartenaireAggregateArgs = {
    /**
     * Filter which Partenaire to aggregate.
     * 
    **/
    where?: PartenaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partenaires to fetch.
     * 
    **/
    orderBy?: Enumerable<PartenaireOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PartenaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partenaires from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partenaires.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partenaires
    **/
    _count?: true | PartenaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartenaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartenaireMaxAggregateInputType
  }

  export type GetPartenaireAggregateType<T extends PartenaireAggregateArgs> = {
        [P in keyof T & keyof AggregatePartenaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartenaire[P]>
      : GetScalarType<T[P], AggregatePartenaire[P]>
  }




  export type PartenaireGroupByArgs = {
    where?: PartenaireWhereInput
    orderBy?: Enumerable<PartenaireOrderByWithAggregationInput>
    by: Array<PartenaireScalarFieldEnum>
    having?: PartenaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartenaireCountAggregateInputType | true
    _min?: PartenaireMinAggregateInputType
    _max?: PartenaireMaxAggregateInputType
  }


  export type PartenaireGroupByOutputType = {
    code: string
    libelle: string
    _count: PartenaireCountAggregateOutputType | null
    _min: PartenaireMinAggregateOutputType | null
    _max: PartenaireMaxAggregateOutputType | null
  }

  type GetPartenaireGroupByPayload<T extends PartenaireGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PartenaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartenaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartenaireGroupByOutputType[P]>
            : GetScalarType<T[P], PartenaireGroupByOutputType[P]>
        }
      >
    >


  export type PartenaireSelect = {
    code?: boolean
    libelle?: boolean
  }

  export type PartenaireGetPayload<
    S extends boolean | null | undefined | PartenaireArgs,
    U = keyof S
      > = S extends true
        ? Partenaire
    : S extends undefined
    ? never
    : S extends PartenaireArgs | PartenaireFindManyArgs
    ?'include' extends U
    ? Partenaire 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Partenaire ? Partenaire[P] : never
  } 
    : Partenaire
  : Partenaire


  type PartenaireCountArgs = Merge<
    Omit<PartenaireFindManyArgs, 'select' | 'include'> & {
      select?: PartenaireCountAggregateInputType | true
    }
  >

  export interface PartenaireDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Partenaire that matches the filter.
     * @param {PartenaireFindUniqueArgs} args - Arguments to find a Partenaire
     * @example
     * // Get one Partenaire
     * const partenaire = await prisma.partenaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PartenaireFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PartenaireFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Partenaire'> extends True ? CheckSelect<T, Prisma__PartenaireClient<Partenaire>, Prisma__PartenaireClient<PartenaireGetPayload<T>>> : CheckSelect<T, Prisma__PartenaireClient<Partenaire | null >, Prisma__PartenaireClient<PartenaireGetPayload<T> | null >>

    /**
     * Find the first Partenaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartenaireFindFirstArgs} args - Arguments to find a Partenaire
     * @example
     * // Get one Partenaire
     * const partenaire = await prisma.partenaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PartenaireFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PartenaireFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Partenaire'> extends True ? CheckSelect<T, Prisma__PartenaireClient<Partenaire>, Prisma__PartenaireClient<PartenaireGetPayload<T>>> : CheckSelect<T, Prisma__PartenaireClient<Partenaire | null >, Prisma__PartenaireClient<PartenaireGetPayload<T> | null >>

    /**
     * Find zero or more Partenaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartenaireFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partenaires
     * const partenaires = await prisma.partenaire.findMany()
     * 
     * // Get first 10 Partenaires
     * const partenaires = await prisma.partenaire.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const partenaireWithCodeOnly = await prisma.partenaire.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends PartenaireFindManyArgs>(
      args?: SelectSubset<T, PartenaireFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Partenaire>>, PrismaPromise<Array<PartenaireGetPayload<T>>>>

    /**
     * Create a Partenaire.
     * @param {PartenaireCreateArgs} args - Arguments to create a Partenaire.
     * @example
     * // Create one Partenaire
     * const Partenaire = await prisma.partenaire.create({
     *   data: {
     *     // ... data to create a Partenaire
     *   }
     * })
     * 
    **/
    create<T extends PartenaireCreateArgs>(
      args: SelectSubset<T, PartenaireCreateArgs>
    ): CheckSelect<T, Prisma__PartenaireClient<Partenaire>, Prisma__PartenaireClient<PartenaireGetPayload<T>>>

    /**
     * Create many Partenaires.
     *     @param {PartenaireCreateManyArgs} args - Arguments to create many Partenaires.
     *     @example
     *     // Create many Partenaires
     *     const partenaire = await prisma.partenaire.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PartenaireCreateManyArgs>(
      args?: SelectSubset<T, PartenaireCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Partenaire.
     * @param {PartenaireDeleteArgs} args - Arguments to delete one Partenaire.
     * @example
     * // Delete one Partenaire
     * const Partenaire = await prisma.partenaire.delete({
     *   where: {
     *     // ... filter to delete one Partenaire
     *   }
     * })
     * 
    **/
    delete<T extends PartenaireDeleteArgs>(
      args: SelectSubset<T, PartenaireDeleteArgs>
    ): CheckSelect<T, Prisma__PartenaireClient<Partenaire>, Prisma__PartenaireClient<PartenaireGetPayload<T>>>

    /**
     * Update one Partenaire.
     * @param {PartenaireUpdateArgs} args - Arguments to update one Partenaire.
     * @example
     * // Update one Partenaire
     * const partenaire = await prisma.partenaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PartenaireUpdateArgs>(
      args: SelectSubset<T, PartenaireUpdateArgs>
    ): CheckSelect<T, Prisma__PartenaireClient<Partenaire>, Prisma__PartenaireClient<PartenaireGetPayload<T>>>

    /**
     * Delete zero or more Partenaires.
     * @param {PartenaireDeleteManyArgs} args - Arguments to filter Partenaires to delete.
     * @example
     * // Delete a few Partenaires
     * const { count } = await prisma.partenaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PartenaireDeleteManyArgs>(
      args?: SelectSubset<T, PartenaireDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partenaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartenaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partenaires
     * const partenaire = await prisma.partenaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PartenaireUpdateManyArgs>(
      args: SelectSubset<T, PartenaireUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Partenaire.
     * @param {PartenaireUpsertArgs} args - Arguments to update or create a Partenaire.
     * @example
     * // Update or create a Partenaire
     * const partenaire = await prisma.partenaire.upsert({
     *   create: {
     *     // ... data to create a Partenaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partenaire we want to update
     *   }
     * })
    **/
    upsert<T extends PartenaireUpsertArgs>(
      args: SelectSubset<T, PartenaireUpsertArgs>
    ): CheckSelect<T, Prisma__PartenaireClient<Partenaire>, Prisma__PartenaireClient<PartenaireGetPayload<T>>>

    /**
     * Count the number of Partenaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartenaireCountArgs} args - Arguments to filter Partenaires to count.
     * @example
     * // Count the number of Partenaires
     * const count = await prisma.partenaire.count({
     *   where: {
     *     // ... the filter for the Partenaires we want to count
     *   }
     * })
    **/
    count<T extends PartenaireCountArgs>(
      args?: Subset<T, PartenaireCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartenaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partenaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartenaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartenaireAggregateArgs>(args: Subset<T, PartenaireAggregateArgs>): PrismaPromise<GetPartenaireAggregateType<T>>

    /**
     * Group by Partenaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartenaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartenaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartenaireGroupByArgs['orderBy'] }
        : { orderBy?: PartenaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartenaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartenaireGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partenaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PartenaireClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Partenaire findUnique
   */
  export type PartenaireFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Partenaire
     * 
    **/
    select?: PartenaireSelect | null
    /**
     * Throw an Error if a Partenaire can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Partenaire to fetch.
     * 
    **/
    where: PartenaireWhereUniqueInput
  }


  /**
   * Partenaire findFirst
   */
  export type PartenaireFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Partenaire
     * 
    **/
    select?: PartenaireSelect | null
    /**
     * Throw an Error if a Partenaire can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Partenaire to fetch.
     * 
    **/
    where?: PartenaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partenaires to fetch.
     * 
    **/
    orderBy?: Enumerable<PartenaireOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partenaires.
     * 
    **/
    cursor?: PartenaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partenaires from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partenaires.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partenaires.
     * 
    **/
    distinct?: Enumerable<PartenaireScalarFieldEnum>
  }


  /**
   * Partenaire findMany
   */
  export type PartenaireFindManyArgs = {
    /**
     * Select specific fields to fetch from the Partenaire
     * 
    **/
    select?: PartenaireSelect | null
    /**
     * Filter, which Partenaires to fetch.
     * 
    **/
    where?: PartenaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partenaires to fetch.
     * 
    **/
    orderBy?: Enumerable<PartenaireOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partenaires.
     * 
    **/
    cursor?: PartenaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partenaires from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partenaires.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PartenaireScalarFieldEnum>
  }


  /**
   * Partenaire create
   */
  export type PartenaireCreateArgs = {
    /**
     * Select specific fields to fetch from the Partenaire
     * 
    **/
    select?: PartenaireSelect | null
    /**
     * The data needed to create a Partenaire.
     * 
    **/
    data: XOR<PartenaireCreateInput, PartenaireUncheckedCreateInput>
  }


  /**
   * Partenaire createMany
   */
  export type PartenaireCreateManyArgs = {
    /**
     * The data used to create many Partenaires.
     * 
    **/
    data: Enumerable<PartenaireCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Partenaire update
   */
  export type PartenaireUpdateArgs = {
    /**
     * Select specific fields to fetch from the Partenaire
     * 
    **/
    select?: PartenaireSelect | null
    /**
     * The data needed to update a Partenaire.
     * 
    **/
    data: XOR<PartenaireUpdateInput, PartenaireUncheckedUpdateInput>
    /**
     * Choose, which Partenaire to update.
     * 
    **/
    where: PartenaireWhereUniqueInput
  }


  /**
   * Partenaire updateMany
   */
  export type PartenaireUpdateManyArgs = {
    /**
     * The data used to update Partenaires.
     * 
    **/
    data: XOR<PartenaireUpdateManyMutationInput, PartenaireUncheckedUpdateManyInput>
    /**
     * Filter which Partenaires to update
     * 
    **/
    where?: PartenaireWhereInput
  }


  /**
   * Partenaire upsert
   */
  export type PartenaireUpsertArgs = {
    /**
     * Select specific fields to fetch from the Partenaire
     * 
    **/
    select?: PartenaireSelect | null
    /**
     * The filter to search for the Partenaire to update in case it exists.
     * 
    **/
    where: PartenaireWhereUniqueInput
    /**
     * In case the Partenaire found by the `where` argument doesn't exist, create a new Partenaire with this data.
     * 
    **/
    create: XOR<PartenaireCreateInput, PartenaireUncheckedCreateInput>
    /**
     * In case the Partenaire was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PartenaireUpdateInput, PartenaireUncheckedUpdateInput>
  }


  /**
   * Partenaire delete
   */
  export type PartenaireDeleteArgs = {
    /**
     * Select specific fields to fetch from the Partenaire
     * 
    **/
    select?: PartenaireSelect | null
    /**
     * Filter which Partenaire to delete.
     * 
    **/
    where: PartenaireWhereUniqueInput
  }


  /**
   * Partenaire deleteMany
   */
  export type PartenaireDeleteManyArgs = {
    /**
     * Filter which Partenaires to delete
     * 
    **/
    where?: PartenaireWhereInput
  }


  /**
   * Partenaire without action
   */
  export type PartenaireArgs = {
    /**
     * Select specific fields to fetch from the Partenaire
     * 
    **/
    select?: PartenaireSelect | null
  }



  /**
   * Model Produit
   */


  export type AggregateProduit = {
    _count: ProduitCountAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  export type ProduitMinAggregateOutputType = {
    code: string | null
    libelle: string | null
  }

  export type ProduitMaxAggregateOutputType = {
    code: string | null
    libelle: string | null
  }

  export type ProduitCountAggregateOutputType = {
    code: number
    libelle: number
    _all: number
  }


  export type ProduitMinAggregateInputType = {
    code?: true
    libelle?: true
  }

  export type ProduitMaxAggregateInputType = {
    code?: true
    libelle?: true
  }

  export type ProduitCountAggregateInputType = {
    code?: true
    libelle?: true
    _all?: true
  }

  export type ProduitAggregateArgs = {
    /**
     * Filter which Produit to aggregate.
     * 
    **/
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     * 
    **/
    orderBy?: Enumerable<ProduitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produits
    **/
    _count?: true | ProduitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduitMaxAggregateInputType
  }

  export type GetProduitAggregateType<T extends ProduitAggregateArgs> = {
        [P in keyof T & keyof AggregateProduit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduit[P]>
      : GetScalarType<T[P], AggregateProduit[P]>
  }




  export type ProduitGroupByArgs = {
    where?: ProduitWhereInput
    orderBy?: Enumerable<ProduitOrderByWithAggregationInput>
    by: Array<ProduitScalarFieldEnum>
    having?: ProduitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduitCountAggregateInputType | true
    _min?: ProduitMinAggregateInputType
    _max?: ProduitMaxAggregateInputType
  }


  export type ProduitGroupByOutputType = {
    code: string
    libelle: string
    _count: ProduitCountAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  type GetProduitGroupByPayload<T extends ProduitGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProduitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduitGroupByOutputType[P]>
            : GetScalarType<T[P], ProduitGroupByOutputType[P]>
        }
      >
    >


  export type ProduitSelect = {
    code?: boolean
    libelle?: boolean
    offres?: boolean | OffreFindManyArgs
    _count?: boolean | ProduitCountOutputTypeArgs
  }

  export type ProduitInclude = {
    offres?: boolean | OffreFindManyArgs
    _count?: boolean | ProduitCountOutputTypeArgs
  }

  export type ProduitGetPayload<
    S extends boolean | null | undefined | ProduitArgs,
    U = keyof S
      > = S extends true
        ? Produit
    : S extends undefined
    ? never
    : S extends ProduitArgs | ProduitFindManyArgs
    ?'include' extends U
    ? Produit  & {
    [P in TrueKeys<S['include']>]:
        P extends 'offres' ? Array < OffreGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProduitCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'offres' ? Array < OffreGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProduitCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Produit ? Produit[P] : never
  } 
    : Produit
  : Produit


  type ProduitCountArgs = Merge<
    Omit<ProduitFindManyArgs, 'select' | 'include'> & {
      select?: ProduitCountAggregateInputType | true
    }
  >

  export interface ProduitDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Produit that matches the filter.
     * @param {ProduitFindUniqueArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProduitFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProduitFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Produit'> extends True ? CheckSelect<T, Prisma__ProduitClient<Produit>, Prisma__ProduitClient<ProduitGetPayload<T>>> : CheckSelect<T, Prisma__ProduitClient<Produit | null >, Prisma__ProduitClient<ProduitGetPayload<T> | null >>

    /**
     * Find the first Produit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProduitFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProduitFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Produit'> extends True ? CheckSelect<T, Prisma__ProduitClient<Produit>, Prisma__ProduitClient<ProduitGetPayload<T>>> : CheckSelect<T, Prisma__ProduitClient<Produit | null >, Prisma__ProduitClient<ProduitGetPayload<T> | null >>

    /**
     * Find zero or more Produits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produits
     * const produits = await prisma.produit.findMany()
     * 
     * // Get first 10 Produits
     * const produits = await prisma.produit.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const produitWithCodeOnly = await prisma.produit.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends ProduitFindManyArgs>(
      args?: SelectSubset<T, ProduitFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Produit>>, PrismaPromise<Array<ProduitGetPayload<T>>>>

    /**
     * Create a Produit.
     * @param {ProduitCreateArgs} args - Arguments to create a Produit.
     * @example
     * // Create one Produit
     * const Produit = await prisma.produit.create({
     *   data: {
     *     // ... data to create a Produit
     *   }
     * })
     * 
    **/
    create<T extends ProduitCreateArgs>(
      args: SelectSubset<T, ProduitCreateArgs>
    ): CheckSelect<T, Prisma__ProduitClient<Produit>, Prisma__ProduitClient<ProduitGetPayload<T>>>

    /**
     * Create many Produits.
     *     @param {ProduitCreateManyArgs} args - Arguments to create many Produits.
     *     @example
     *     // Create many Produits
     *     const produit = await prisma.produit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProduitCreateManyArgs>(
      args?: SelectSubset<T, ProduitCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Produit.
     * @param {ProduitDeleteArgs} args - Arguments to delete one Produit.
     * @example
     * // Delete one Produit
     * const Produit = await prisma.produit.delete({
     *   where: {
     *     // ... filter to delete one Produit
     *   }
     * })
     * 
    **/
    delete<T extends ProduitDeleteArgs>(
      args: SelectSubset<T, ProduitDeleteArgs>
    ): CheckSelect<T, Prisma__ProduitClient<Produit>, Prisma__ProduitClient<ProduitGetPayload<T>>>

    /**
     * Update one Produit.
     * @param {ProduitUpdateArgs} args - Arguments to update one Produit.
     * @example
     * // Update one Produit
     * const produit = await prisma.produit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProduitUpdateArgs>(
      args: SelectSubset<T, ProduitUpdateArgs>
    ): CheckSelect<T, Prisma__ProduitClient<Produit>, Prisma__ProduitClient<ProduitGetPayload<T>>>

    /**
     * Delete zero or more Produits.
     * @param {ProduitDeleteManyArgs} args - Arguments to filter Produits to delete.
     * @example
     * // Delete a few Produits
     * const { count } = await prisma.produit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProduitDeleteManyArgs>(
      args?: SelectSubset<T, ProduitDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProduitUpdateManyArgs>(
      args: SelectSubset<T, ProduitUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Produit.
     * @param {ProduitUpsertArgs} args - Arguments to update or create a Produit.
     * @example
     * // Update or create a Produit
     * const produit = await prisma.produit.upsert({
     *   create: {
     *     // ... data to create a Produit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produit we want to update
     *   }
     * })
    **/
    upsert<T extends ProduitUpsertArgs>(
      args: SelectSubset<T, ProduitUpsertArgs>
    ): CheckSelect<T, Prisma__ProduitClient<Produit>, Prisma__ProduitClient<ProduitGetPayload<T>>>

    /**
     * Count the number of Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitCountArgs} args - Arguments to filter Produits to count.
     * @example
     * // Count the number of Produits
     * const count = await prisma.produit.count({
     *   where: {
     *     // ... the filter for the Produits we want to count
     *   }
     * })
    **/
    count<T extends ProduitCountArgs>(
      args?: Subset<T, ProduitCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProduitAggregateArgs>(args: Subset<T, ProduitAggregateArgs>): PrismaPromise<GetProduitAggregateType<T>>

    /**
     * Group by Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProduitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduitGroupByArgs['orderBy'] }
        : { orderBy?: ProduitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduitGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProduitClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    offres<T extends OffreFindManyArgs = {}>(args?: Subset<T, OffreFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Offre>>, PrismaPromise<Array<OffreGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Produit findUnique
   */
  export type ProduitFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Produit
     * 
    **/
    select?: ProduitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProduitInclude | null
    /**
     * Throw an Error if a Produit can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Produit to fetch.
     * 
    **/
    where: ProduitWhereUniqueInput
  }


  /**
   * Produit findFirst
   */
  export type ProduitFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Produit
     * 
    **/
    select?: ProduitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProduitInclude | null
    /**
     * Throw an Error if a Produit can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Produit to fetch.
     * 
    **/
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     * 
    **/
    orderBy?: Enumerable<ProduitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     * 
    **/
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     * 
    **/
    distinct?: Enumerable<ProduitScalarFieldEnum>
  }


  /**
   * Produit findMany
   */
  export type ProduitFindManyArgs = {
    /**
     * Select specific fields to fetch from the Produit
     * 
    **/
    select?: ProduitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProduitInclude | null
    /**
     * Filter, which Produits to fetch.
     * 
    **/
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     * 
    **/
    orderBy?: Enumerable<ProduitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produits.
     * 
    **/
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProduitScalarFieldEnum>
  }


  /**
   * Produit create
   */
  export type ProduitCreateArgs = {
    /**
     * Select specific fields to fetch from the Produit
     * 
    **/
    select?: ProduitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProduitInclude | null
    /**
     * The data needed to create a Produit.
     * 
    **/
    data: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
  }


  /**
   * Produit createMany
   */
  export type ProduitCreateManyArgs = {
    /**
     * The data used to create many Produits.
     * 
    **/
    data: Enumerable<ProduitCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Produit update
   */
  export type ProduitUpdateArgs = {
    /**
     * Select specific fields to fetch from the Produit
     * 
    **/
    select?: ProduitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProduitInclude | null
    /**
     * The data needed to update a Produit.
     * 
    **/
    data: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
    /**
     * Choose, which Produit to update.
     * 
    **/
    where: ProduitWhereUniqueInput
  }


  /**
   * Produit updateMany
   */
  export type ProduitUpdateManyArgs = {
    /**
     * The data used to update Produits.
     * 
    **/
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     * 
    **/
    where?: ProduitWhereInput
  }


  /**
   * Produit upsert
   */
  export type ProduitUpsertArgs = {
    /**
     * Select specific fields to fetch from the Produit
     * 
    **/
    select?: ProduitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProduitInclude | null
    /**
     * The filter to search for the Produit to update in case it exists.
     * 
    **/
    where: ProduitWhereUniqueInput
    /**
     * In case the Produit found by the `where` argument doesn't exist, create a new Produit with this data.
     * 
    **/
    create: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
    /**
     * In case the Produit was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
  }


  /**
   * Produit delete
   */
  export type ProduitDeleteArgs = {
    /**
     * Select specific fields to fetch from the Produit
     * 
    **/
    select?: ProduitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProduitInclude | null
    /**
     * Filter which Produit to delete.
     * 
    **/
    where: ProduitWhereUniqueInput
  }


  /**
   * Produit deleteMany
   */
  export type ProduitDeleteManyArgs = {
    /**
     * Filter which Produits to delete
     * 
    **/
    where?: ProduitWhereInput
  }


  /**
   * Produit without action
   */
  export type ProduitArgs = {
    /**
     * Select specific fields to fetch from the Produit
     * 
    **/
    select?: ProduitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProduitInclude | null
  }



  /**
   * Model Offre
   */


  export type AggregateOffre = {
    _count: OffreCountAggregateOutputType | null
    _min: OffreMinAggregateOutputType | null
    _max: OffreMaxAggregateOutputType | null
  }

  export type OffreMinAggregateOutputType = {
    code: string | null
    libelle: string | null
    codeProduit: string | null
    dateDerniereModification: Date | null
  }

  export type OffreMaxAggregateOutputType = {
    code: string | null
    libelle: string | null
    codeProduit: string | null
    dateDerniereModification: Date | null
  }

  export type OffreCountAggregateOutputType = {
    code: number
    libelle: number
    codeProduit: number
    dateDerniereModification: number
    _all: number
  }


  export type OffreMinAggregateInputType = {
    code?: true
    libelle?: true
    codeProduit?: true
    dateDerniereModification?: true
  }

  export type OffreMaxAggregateInputType = {
    code?: true
    libelle?: true
    codeProduit?: true
    dateDerniereModification?: true
  }

  export type OffreCountAggregateInputType = {
    code?: true
    libelle?: true
    codeProduit?: true
    dateDerniereModification?: true
    _all?: true
  }

  export type OffreAggregateArgs = {
    /**
     * Filter which Offre to aggregate.
     * 
    **/
    where?: OffreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offres to fetch.
     * 
    **/
    orderBy?: Enumerable<OffreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OffreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offres
    **/
    _count?: true | OffreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OffreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OffreMaxAggregateInputType
  }

  export type GetOffreAggregateType<T extends OffreAggregateArgs> = {
        [P in keyof T & keyof AggregateOffre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffre[P]>
      : GetScalarType<T[P], AggregateOffre[P]>
  }




  export type OffreGroupByArgs = {
    where?: OffreWhereInput
    orderBy?: Enumerable<OffreOrderByWithAggregationInput>
    by: Array<OffreScalarFieldEnum>
    having?: OffreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OffreCountAggregateInputType | true
    _min?: OffreMinAggregateInputType
    _max?: OffreMaxAggregateInputType
  }


  export type OffreGroupByOutputType = {
    code: string
    libelle: string
    codeProduit: string
    dateDerniereModification: Date | null
    _count: OffreCountAggregateOutputType | null
    _min: OffreMinAggregateOutputType | null
    _max: OffreMaxAggregateOutputType | null
  }

  type GetOffreGroupByPayload<T extends OffreGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OffreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OffreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OffreGroupByOutputType[P]>
            : GetScalarType<T[P], OffreGroupByOutputType[P]>
        }
      >
    >


  export type OffreSelect = {
    code?: boolean
    libelle?: boolean
    codeProduit?: boolean
    produit?: boolean | ProduitArgs
    dateDerniereModification?: boolean
  }

  export type OffreInclude = {
    produit?: boolean | ProduitArgs
  }

  export type OffreGetPayload<
    S extends boolean | null | undefined | OffreArgs,
    U = keyof S
      > = S extends true
        ? Offre
    : S extends undefined
    ? never
    : S extends OffreArgs | OffreFindManyArgs
    ?'include' extends U
    ? Offre  & {
    [P in TrueKeys<S['include']>]:
        P extends 'produit' ? ProduitGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'produit' ? ProduitGetPayload<S['select'][P]> :  P extends keyof Offre ? Offre[P] : never
  } 
    : Offre
  : Offre


  type OffreCountArgs = Merge<
    Omit<OffreFindManyArgs, 'select' | 'include'> & {
      select?: OffreCountAggregateInputType | true
    }
  >

  export interface OffreDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Offre that matches the filter.
     * @param {OffreFindUniqueArgs} args - Arguments to find a Offre
     * @example
     * // Get one Offre
     * const offre = await prisma.offre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OffreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OffreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Offre'> extends True ? CheckSelect<T, Prisma__OffreClient<Offre>, Prisma__OffreClient<OffreGetPayload<T>>> : CheckSelect<T, Prisma__OffreClient<Offre | null >, Prisma__OffreClient<OffreGetPayload<T> | null >>

    /**
     * Find the first Offre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreFindFirstArgs} args - Arguments to find a Offre
     * @example
     * // Get one Offre
     * const offre = await prisma.offre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OffreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OffreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Offre'> extends True ? CheckSelect<T, Prisma__OffreClient<Offre>, Prisma__OffreClient<OffreGetPayload<T>>> : CheckSelect<T, Prisma__OffreClient<Offre | null >, Prisma__OffreClient<OffreGetPayload<T> | null >>

    /**
     * Find zero or more Offres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offres
     * const offres = await prisma.offre.findMany()
     * 
     * // Get first 10 Offres
     * const offres = await prisma.offre.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const offreWithCodeOnly = await prisma.offre.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends OffreFindManyArgs>(
      args?: SelectSubset<T, OffreFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Offre>>, PrismaPromise<Array<OffreGetPayload<T>>>>

    /**
     * Create a Offre.
     * @param {OffreCreateArgs} args - Arguments to create a Offre.
     * @example
     * // Create one Offre
     * const Offre = await prisma.offre.create({
     *   data: {
     *     // ... data to create a Offre
     *   }
     * })
     * 
    **/
    create<T extends OffreCreateArgs>(
      args: SelectSubset<T, OffreCreateArgs>
    ): CheckSelect<T, Prisma__OffreClient<Offre>, Prisma__OffreClient<OffreGetPayload<T>>>

    /**
     * Create many Offres.
     *     @param {OffreCreateManyArgs} args - Arguments to create many Offres.
     *     @example
     *     // Create many Offres
     *     const offre = await prisma.offre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OffreCreateManyArgs>(
      args?: SelectSubset<T, OffreCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Offre.
     * @param {OffreDeleteArgs} args - Arguments to delete one Offre.
     * @example
     * // Delete one Offre
     * const Offre = await prisma.offre.delete({
     *   where: {
     *     // ... filter to delete one Offre
     *   }
     * })
     * 
    **/
    delete<T extends OffreDeleteArgs>(
      args: SelectSubset<T, OffreDeleteArgs>
    ): CheckSelect<T, Prisma__OffreClient<Offre>, Prisma__OffreClient<OffreGetPayload<T>>>

    /**
     * Update one Offre.
     * @param {OffreUpdateArgs} args - Arguments to update one Offre.
     * @example
     * // Update one Offre
     * const offre = await prisma.offre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OffreUpdateArgs>(
      args: SelectSubset<T, OffreUpdateArgs>
    ): CheckSelect<T, Prisma__OffreClient<Offre>, Prisma__OffreClient<OffreGetPayload<T>>>

    /**
     * Delete zero or more Offres.
     * @param {OffreDeleteManyArgs} args - Arguments to filter Offres to delete.
     * @example
     * // Delete a few Offres
     * const { count } = await prisma.offre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OffreDeleteManyArgs>(
      args?: SelectSubset<T, OffreDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offres
     * const offre = await prisma.offre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OffreUpdateManyArgs>(
      args: SelectSubset<T, OffreUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Offre.
     * @param {OffreUpsertArgs} args - Arguments to update or create a Offre.
     * @example
     * // Update or create a Offre
     * const offre = await prisma.offre.upsert({
     *   create: {
     *     // ... data to create a Offre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offre we want to update
     *   }
     * })
    **/
    upsert<T extends OffreUpsertArgs>(
      args: SelectSubset<T, OffreUpsertArgs>
    ): CheckSelect<T, Prisma__OffreClient<Offre>, Prisma__OffreClient<OffreGetPayload<T>>>

    /**
     * Count the number of Offres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreCountArgs} args - Arguments to filter Offres to count.
     * @example
     * // Count the number of Offres
     * const count = await prisma.offre.count({
     *   where: {
     *     // ... the filter for the Offres we want to count
     *   }
     * })
    **/
    count<T extends OffreCountArgs>(
      args?: Subset<T, OffreCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OffreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OffreAggregateArgs>(args: Subset<T, OffreAggregateArgs>): PrismaPromise<GetOffreAggregateType<T>>

    /**
     * Group by Offre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OffreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OffreGroupByArgs['orderBy'] }
        : { orderBy?: OffreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OffreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOffreGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OffreClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    produit<T extends ProduitArgs = {}>(args?: Subset<T, ProduitArgs>): CheckSelect<T, Prisma__ProduitClient<Produit | null >, Prisma__ProduitClient<ProduitGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Offre findUnique
   */
  export type OffreFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Offre
     * 
    **/
    select?: OffreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OffreInclude | null
    /**
     * Throw an Error if a Offre can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Offre to fetch.
     * 
    **/
    where: OffreWhereUniqueInput
  }


  /**
   * Offre findFirst
   */
  export type OffreFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Offre
     * 
    **/
    select?: OffreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OffreInclude | null
    /**
     * Throw an Error if a Offre can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Offre to fetch.
     * 
    **/
    where?: OffreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offres to fetch.
     * 
    **/
    orderBy?: Enumerable<OffreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offres.
     * 
    **/
    cursor?: OffreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offres.
     * 
    **/
    distinct?: Enumerable<OffreScalarFieldEnum>
  }


  /**
   * Offre findMany
   */
  export type OffreFindManyArgs = {
    /**
     * Select specific fields to fetch from the Offre
     * 
    **/
    select?: OffreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OffreInclude | null
    /**
     * Filter, which Offres to fetch.
     * 
    **/
    where?: OffreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offres to fetch.
     * 
    **/
    orderBy?: Enumerable<OffreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offres.
     * 
    **/
    cursor?: OffreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offres.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OffreScalarFieldEnum>
  }


  /**
   * Offre create
   */
  export type OffreCreateArgs = {
    /**
     * Select specific fields to fetch from the Offre
     * 
    **/
    select?: OffreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OffreInclude | null
    /**
     * The data needed to create a Offre.
     * 
    **/
    data: XOR<OffreCreateInput, OffreUncheckedCreateInput>
  }


  /**
   * Offre createMany
   */
  export type OffreCreateManyArgs = {
    /**
     * The data used to create many Offres.
     * 
    **/
    data: Enumerable<OffreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Offre update
   */
  export type OffreUpdateArgs = {
    /**
     * Select specific fields to fetch from the Offre
     * 
    **/
    select?: OffreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OffreInclude | null
    /**
     * The data needed to update a Offre.
     * 
    **/
    data: XOR<OffreUpdateInput, OffreUncheckedUpdateInput>
    /**
     * Choose, which Offre to update.
     * 
    **/
    where: OffreWhereUniqueInput
  }


  /**
   * Offre updateMany
   */
  export type OffreUpdateManyArgs = {
    /**
     * The data used to update Offres.
     * 
    **/
    data: XOR<OffreUpdateManyMutationInput, OffreUncheckedUpdateManyInput>
    /**
     * Filter which Offres to update
     * 
    **/
    where?: OffreWhereInput
  }


  /**
   * Offre upsert
   */
  export type OffreUpsertArgs = {
    /**
     * Select specific fields to fetch from the Offre
     * 
    **/
    select?: OffreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OffreInclude | null
    /**
     * The filter to search for the Offre to update in case it exists.
     * 
    **/
    where: OffreWhereUniqueInput
    /**
     * In case the Offre found by the `where` argument doesn't exist, create a new Offre with this data.
     * 
    **/
    create: XOR<OffreCreateInput, OffreUncheckedCreateInput>
    /**
     * In case the Offre was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OffreUpdateInput, OffreUncheckedUpdateInput>
  }


  /**
   * Offre delete
   */
  export type OffreDeleteArgs = {
    /**
     * Select specific fields to fetch from the Offre
     * 
    **/
    select?: OffreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OffreInclude | null
    /**
     * Filter which Offre to delete.
     * 
    **/
    where: OffreWhereUniqueInput
  }


  /**
   * Offre deleteMany
   */
  export type OffreDeleteManyArgs = {
    /**
     * Filter which Offres to delete
     * 
    **/
    where?: OffreWhereInput
  }


  /**
   * Offre without action
   */
  export type OffreArgs = {
    /**
     * Select specific fields to fetch from the Offre
     * 
    **/
    select?: OffreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OffreInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PartenaireScalarFieldEnum: {
    code: 'code',
    libelle: 'libelle'
  };

  export type PartenaireScalarFieldEnum = (typeof PartenaireScalarFieldEnum)[keyof typeof PartenaireScalarFieldEnum]


  export const ProduitScalarFieldEnum: {
    code: 'code',
    libelle: 'libelle'
  };

  export type ProduitScalarFieldEnum = (typeof ProduitScalarFieldEnum)[keyof typeof ProduitScalarFieldEnum]


  export const OffreScalarFieldEnum: {
    code: 'code',
    libelle: 'libelle',
    codeProduit: 'codeProduit',
    dateDerniereModification: 'dateDerniereModification'
  };

  export type OffreScalarFieldEnum = (typeof OffreScalarFieldEnum)[keyof typeof OffreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type PartenaireWhereInput = {
    AND?: Enumerable<PartenaireWhereInput>
    OR?: Enumerable<PartenaireWhereInput>
    NOT?: Enumerable<PartenaireWhereInput>
    code?: StringFilter | string
    libelle?: StringFilter | string
  }

  export type PartenaireOrderByWithRelationInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type PartenaireWhereUniqueInput = {
    code?: string
  }

  export type PartenaireOrderByWithAggregationInput = {
    code?: SortOrder
    libelle?: SortOrder
    _count?: PartenaireCountOrderByAggregateInput
    _max?: PartenaireMaxOrderByAggregateInput
    _min?: PartenaireMinOrderByAggregateInput
  }

  export type PartenaireScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PartenaireScalarWhereWithAggregatesInput>
    OR?: Enumerable<PartenaireScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PartenaireScalarWhereWithAggregatesInput>
    code?: StringWithAggregatesFilter | string
    libelle?: StringWithAggregatesFilter | string
  }

  export type ProduitWhereInput = {
    AND?: Enumerable<ProduitWhereInput>
    OR?: Enumerable<ProduitWhereInput>
    NOT?: Enumerable<ProduitWhereInput>
    code?: StringFilter | string
    libelle?: StringFilter | string
    offres?: OffreListRelationFilter
  }

  export type ProduitOrderByWithRelationInput = {
    code?: SortOrder
    libelle?: SortOrder
    offres?: OffreOrderByRelationAggregateInput
  }

  export type ProduitWhereUniqueInput = {
    code?: string
  }

  export type ProduitOrderByWithAggregationInput = {
    code?: SortOrder
    libelle?: SortOrder
    _count?: ProduitCountOrderByAggregateInput
    _max?: ProduitMaxOrderByAggregateInput
    _min?: ProduitMinOrderByAggregateInput
  }

  export type ProduitScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProduitScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProduitScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProduitScalarWhereWithAggregatesInput>
    code?: StringWithAggregatesFilter | string
    libelle?: StringWithAggregatesFilter | string
  }

  export type OffreWhereInput = {
    AND?: Enumerable<OffreWhereInput>
    OR?: Enumerable<OffreWhereInput>
    NOT?: Enumerable<OffreWhereInput>
    code?: StringFilter | string
    libelle?: StringFilter | string
    codeProduit?: StringFilter | string
    produit?: XOR<ProduitRelationFilter, ProduitWhereInput>
    dateDerniereModification?: DateTimeNullableFilter | Date | string | null
  }

  export type OffreOrderByWithRelationInput = {
    code?: SortOrder
    libelle?: SortOrder
    codeProduit?: SortOrder
    produit?: ProduitOrderByWithRelationInput
    dateDerniereModification?: SortOrder
  }

  export type OffreWhereUniqueInput = {
    code?: string
  }

  export type OffreOrderByWithAggregationInput = {
    code?: SortOrder
    libelle?: SortOrder
    codeProduit?: SortOrder
    dateDerniereModification?: SortOrder
    _count?: OffreCountOrderByAggregateInput
    _max?: OffreMaxOrderByAggregateInput
    _min?: OffreMinOrderByAggregateInput
  }

  export type OffreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OffreScalarWhereWithAggregatesInput>
    OR?: Enumerable<OffreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OffreScalarWhereWithAggregatesInput>
    code?: StringWithAggregatesFilter | string
    libelle?: StringWithAggregatesFilter | string
    codeProduit?: StringWithAggregatesFilter | string
    dateDerniereModification?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type PartenaireCreateInput = {
    code: string
    libelle: string
  }

  export type PartenaireUncheckedCreateInput = {
    code: string
    libelle: string
  }

  export type PartenaireUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type PartenaireUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type PartenaireCreateManyInput = {
    code: string
    libelle: string
  }

  export type PartenaireUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type PartenaireUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type ProduitCreateInput = {
    code: string
    libelle: string
    offres?: OffreCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateInput = {
    code: string
    libelle: string
    offres?: OffreUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    offres?: OffreUpdateManyWithoutProduitInput
  }

  export type ProduitUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    offres?: OffreUncheckedUpdateManyWithoutProduitInput
  }

  export type ProduitCreateManyInput = {
    code: string
    libelle: string
  }

  export type ProduitUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type ProduitUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type OffreCreateInput = {
    code: string
    libelle: string
    produit: ProduitCreateNestedOneWithoutOffresInput
    dateDerniereModification?: Date | string | null
  }

  export type OffreUncheckedCreateInput = {
    code: string
    libelle: string
    codeProduit: string
    dateDerniereModification?: Date | string | null
  }

  export type OffreUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    produit?: ProduitUpdateOneRequiredWithoutOffresInput
    dateDerniereModification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OffreUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    codeProduit?: StringFieldUpdateOperationsInput | string
    dateDerniereModification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OffreCreateManyInput = {
    code: string
    libelle: string
    codeProduit: string
    dateDerniereModification?: Date | string | null
  }

  export type OffreUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    dateDerniereModification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OffreUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    codeProduit?: StringFieldUpdateOperationsInput | string
    dateDerniereModification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type PartenaireCountOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type PartenaireMaxOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type PartenaireMinOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type OffreListRelationFilter = {
    every?: OffreWhereInput
    some?: OffreWhereInput
    none?: OffreWhereInput
  }

  export type OffreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProduitCountOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type ProduitMaxOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type ProduitMinOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type ProduitRelationFilter = {
    is?: ProduitWhereInput
    isNot?: ProduitWhereInput
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type OffreCountOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
    codeProduit?: SortOrder
    dateDerniereModification?: SortOrder
  }

  export type OffreMaxOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
    codeProduit?: SortOrder
    dateDerniereModification?: SortOrder
  }

  export type OffreMinOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
    codeProduit?: SortOrder
    dateDerniereModification?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type OffreCreateNestedManyWithoutProduitInput = {
    create?: XOR<Enumerable<OffreCreateWithoutProduitInput>, Enumerable<OffreUncheckedCreateWithoutProduitInput>>
    connectOrCreate?: Enumerable<OffreCreateOrConnectWithoutProduitInput>
    createMany?: OffreCreateManyProduitInputEnvelope
    connect?: Enumerable<OffreWhereUniqueInput>
  }

  export type OffreUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<Enumerable<OffreCreateWithoutProduitInput>, Enumerable<OffreUncheckedCreateWithoutProduitInput>>
    connectOrCreate?: Enumerable<OffreCreateOrConnectWithoutProduitInput>
    createMany?: OffreCreateManyProduitInputEnvelope
    connect?: Enumerable<OffreWhereUniqueInput>
  }

  export type OffreUpdateManyWithoutProduitInput = {
    create?: XOR<Enumerable<OffreCreateWithoutProduitInput>, Enumerable<OffreUncheckedCreateWithoutProduitInput>>
    connectOrCreate?: Enumerable<OffreCreateOrConnectWithoutProduitInput>
    upsert?: Enumerable<OffreUpsertWithWhereUniqueWithoutProduitInput>
    createMany?: OffreCreateManyProduitInputEnvelope
    set?: Enumerable<OffreWhereUniqueInput>
    disconnect?: Enumerable<OffreWhereUniqueInput>
    delete?: Enumerable<OffreWhereUniqueInput>
    connect?: Enumerable<OffreWhereUniqueInput>
    update?: Enumerable<OffreUpdateWithWhereUniqueWithoutProduitInput>
    updateMany?: Enumerable<OffreUpdateManyWithWhereWithoutProduitInput>
    deleteMany?: Enumerable<OffreScalarWhereInput>
  }

  export type OffreUncheckedUpdateManyWithoutProduitInput = {
    create?: XOR<Enumerable<OffreCreateWithoutProduitInput>, Enumerable<OffreUncheckedCreateWithoutProduitInput>>
    connectOrCreate?: Enumerable<OffreCreateOrConnectWithoutProduitInput>
    upsert?: Enumerable<OffreUpsertWithWhereUniqueWithoutProduitInput>
    createMany?: OffreCreateManyProduitInputEnvelope
    set?: Enumerable<OffreWhereUniqueInput>
    disconnect?: Enumerable<OffreWhereUniqueInput>
    delete?: Enumerable<OffreWhereUniqueInput>
    connect?: Enumerable<OffreWhereUniqueInput>
    update?: Enumerable<OffreUpdateWithWhereUniqueWithoutProduitInput>
    updateMany?: Enumerable<OffreUpdateManyWithWhereWithoutProduitInput>
    deleteMany?: Enumerable<OffreScalarWhereInput>
  }

  export type ProduitCreateNestedOneWithoutOffresInput = {
    create?: XOR<ProduitCreateWithoutOffresInput, ProduitUncheckedCreateWithoutOffresInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutOffresInput
    connect?: ProduitWhereUniqueInput
  }

  export type ProduitUpdateOneRequiredWithoutOffresInput = {
    create?: XOR<ProduitCreateWithoutOffresInput, ProduitUncheckedCreateWithoutOffresInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutOffresInput
    upsert?: ProduitUpsertWithoutOffresInput
    connect?: ProduitWhereUniqueInput
    update?: XOR<ProduitUpdateWithoutOffresInput, ProduitUncheckedUpdateWithoutOffresInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type OffreCreateWithoutProduitInput = {
    code: string
    libelle: string
    dateDerniereModification?: Date | string | null
  }

  export type OffreUncheckedCreateWithoutProduitInput = {
    code: string
    libelle: string
    dateDerniereModification?: Date | string | null
  }

  export type OffreCreateOrConnectWithoutProduitInput = {
    where: OffreWhereUniqueInput
    create: XOR<OffreCreateWithoutProduitInput, OffreUncheckedCreateWithoutProduitInput>
  }

  export type OffreCreateManyProduitInputEnvelope = {
    data: Enumerable<OffreCreateManyProduitInput>
    skipDuplicates?: boolean
  }

  export type OffreUpsertWithWhereUniqueWithoutProduitInput = {
    where: OffreWhereUniqueInput
    update: XOR<OffreUpdateWithoutProduitInput, OffreUncheckedUpdateWithoutProduitInput>
    create: XOR<OffreCreateWithoutProduitInput, OffreUncheckedCreateWithoutProduitInput>
  }

  export type OffreUpdateWithWhereUniqueWithoutProduitInput = {
    where: OffreWhereUniqueInput
    data: XOR<OffreUpdateWithoutProduitInput, OffreUncheckedUpdateWithoutProduitInput>
  }

  export type OffreUpdateManyWithWhereWithoutProduitInput = {
    where: OffreScalarWhereInput
    data: XOR<OffreUpdateManyMutationInput, OffreUncheckedUpdateManyWithoutOffresInput>
  }

  export type OffreScalarWhereInput = {
    AND?: Enumerable<OffreScalarWhereInput>
    OR?: Enumerable<OffreScalarWhereInput>
    NOT?: Enumerable<OffreScalarWhereInput>
    code?: StringFilter | string
    libelle?: StringFilter | string
    codeProduit?: StringFilter | string
    dateDerniereModification?: DateTimeNullableFilter | Date | string | null
  }

  export type ProduitCreateWithoutOffresInput = {
    code: string
    libelle: string
  }

  export type ProduitUncheckedCreateWithoutOffresInput = {
    code: string
    libelle: string
  }

  export type ProduitCreateOrConnectWithoutOffresInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutOffresInput, ProduitUncheckedCreateWithoutOffresInput>
  }

  export type ProduitUpsertWithoutOffresInput = {
    update: XOR<ProduitUpdateWithoutOffresInput, ProduitUncheckedUpdateWithoutOffresInput>
    create: XOR<ProduitCreateWithoutOffresInput, ProduitUncheckedCreateWithoutOffresInput>
  }

  export type ProduitUpdateWithoutOffresInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type ProduitUncheckedUpdateWithoutOffresInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type OffreCreateManyProduitInput = {
    code: string
    libelle: string
    dateDerniereModification?: Date | string | null
  }

  export type OffreUpdateWithoutProduitInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    dateDerniereModification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OffreUncheckedUpdateWithoutProduitInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    dateDerniereModification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OffreUncheckedUpdateManyWithoutOffresInput = {
    code?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    dateDerniereModification?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}