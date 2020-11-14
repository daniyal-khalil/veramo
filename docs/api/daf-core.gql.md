<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [daf-core](./daf-core.md) &gt; [Gql](./daf-core.gql.md)

## Gql variable

<b>Signature:</b>

```typescript
Gql: {
    baseTypeDefs: string;
    Core: {
        resolvers: {
            Mutation: {
                handleMessage: (_: any, args: {
                    raw: string;
                    metaData?: [{
                        type: string;
                        value?: string;
                    }];
                    save: boolean;
                }, ctx: import("./graphql-core").Context) => Promise<import("..").Message>;
            };
            Query: {
                identity: (_: any, { did }: {
                    did: any;
                }, ctx: import("./graphql-core").Context) => Promise<import("..").Identity>;
                identities: (_: any, { input }: {
                    input: any;
                }, ctx: import("./graphql-core").Context) => Promise<import("..").Identity[]>;
                message: (_: any, { id }: {
                    id: any;
                }, ctx: import("./graphql-core").Context) => Promise<import("..").Message>;
                messages: (_: any, args: import("./graphql-core").FindArgs, ctx: import("./graphql-core").Context) => Promise<import("..").Message[]>;
                messagesCount: (_: any, args: import("./graphql-core").FindArgs, ctx: import("./graphql-core").Context) => Promise<number>;
                presentation: (_: any, { hash }: {
                    hash: any;
                }, ctx: import("./graphql-core").Context) => Promise<import("..").Presentation>;
                presentations: (_: any, args: import("./graphql-core").FindArgs, ctx: import("./graphql-core").Context) => Promise<import("..").Presentation[]>;
                presentationsCount: (_: any, args: import("./graphql-core").FindArgs, ctx: import("./graphql-core").Context) => Promise<number>;
                credential: (_: any, { hash }: {
                    hash: any;
                }, ctx: import("./graphql-core").Context) => Promise<import("..").Credential>;
                credentials: (_: any, args: import("./graphql-core").FindArgs, ctx: import("./graphql-core").Context) => Promise<import("..").Credential[]>;
                credentialsCount: (_: any, args: import("./graphql-core").FindArgs, ctx: import("./graphql-core").Context) => Promise<number>;
                claim: (_: any, { hash }: {
                    hash: any;
                }, ctx: import("./graphql-core").Context) => Promise<import("..").Claim>;
                claims: (_: any, args: import("./graphql-core").FindArgs, ctx: import("./graphql-core").Context) => Promise<import("..").Claim[]>;
                claimsCount: (_: any, args: import("./graphql-core").FindArgs, ctx: import("./graphql-core").Context) => Promise<number>;
            };
            Identity: {
                shortDid: (identity: import("..").Identity, args: any, ctx: import("./graphql-core").Context) => Promise<string>;
                latestClaimValue: (identity: import("..").Identity, args: {
                    type: string;
                }, ctx: import("./graphql-core").Context) => Promise<String>;
            };
            Credential: {
                claims: (credential: import("..").Credential, args: any, ctx: import("./graphql-core").Context) => Promise<import("..").Claim[]>;
                messages: (credential: import("..").Credential, args: any, ctx: import("./graphql-core").Context) => Promise<import("..").Message[]>;
                presentations: (credential: import("..").Credential, args: any, ctx: import("./graphql-core").Context) => Promise<import("..").Presentation[]>;
            };
            Presentation: {
                credentials: (presentation: import("..").Presentation, args: any, ctx: import("./graphql-core").Context) => Promise<import("..").Credential[]>;
                messages: (presentation: import("..").Presentation, args: any, ctx: import("./graphql-core").Context) => Promise<import("..").Message[]>;
            };
            Message: {
                presentations: (message: import("..").Message, args: any, ctx: import("./graphql-core").Context) => Promise<import("..").Presentation[]>;
                credentials: (message: import("..").Message, args: any, ctx: import("./graphql-core").Context) => Promise<import("..").Credential[]>;
            };
        };
        typeDefs: string;
    };
    IdentityManager: {
        resolvers: {
            Identity: {
                isManaged: (identity: any, args: any, ctx: import("./graphql-identity-manager").Context) => Promise<boolean>;
            };
            Query: {
                identityProviders: (_: any, args: any, ctx: import("./graphql-identity-manager").Context) => Promise<import("..").AbstractIdentityProvider[]>;
                managedIdentities: (_: any, args: any, ctx: import("./graphql-identity-manager").Context) => Promise<{
                    did: string;
                    provider: string;
                    __typename: string;
                }[]>;
                managedIdentitySecret: (_: any, args: {
                    type: string;
                    did: string;
                }, ctx: import("./graphql-identity-manager").Context) => Promise<string>;
            };
            Mutation: {
                createIdentity: (_: any, args: {
                    type: string;
                }, ctx: import("./graphql-identity-manager").Context) => Promise<{
                    did: string;
                    provider: string;
                    __typename: string;
                }>;
                deleteIdentity: (_: any, args: {
                    type: string;
                    did: string;
                }, ctx: import("./graphql-identity-manager").Context) => Promise<boolean>;
                importIdentity: (_: any, args: {
                    type: string;
                    secret: string;
                }, ctx: import("./graphql-identity-manager").Context) => Promise<{
                    did: string;
                    provider: string;
                    __typename: string;
                }>;
            };
        };
        typeDefs: string;
    };
}
```