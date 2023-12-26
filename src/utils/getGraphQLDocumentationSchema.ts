const schemaQuery: string = `
query IntrospectionQuery {
  __schema {
      queryType {
          name
      }
      mutationType {
          name
      }
      subscriptionType {
          name
      }
      types {
          ...FullType
      }
      directives {
          name
          description

          locations
          args {
              ...InputValue
          }
      }
  }
}

fragment FullType on __Type {
  kind
  name
  description

  fields(includeDeprecated: true) {
      name
      description
      args {
          ...InputValue
      }
      type {
          ...TypeRef
      }
      isDeprecated
      deprecationReason
  }
  inputFields {
      ...InputValue
  }
  interfaces {
      ...TypeRef
  }
  enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
  }
  possibleTypes {
      ...TypeRef
  }
}

fragment InputValue on __InputValue {
  name
  description
  type {
      ...TypeRef
  }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
      kind
      name
      ofType {
          kind
          name
          ofType {
              kind
              name
              ofType {
                  kind
                  name
                  ofType {
                      kind
                      name
                      ofType {
                          kind
                          name
                          ofType {
                              kind
                              name
                          }
                      }
                  }
              }
          }
      }
  }
}
`;

export const schemaParts: Array<Record<string, string>> = [
  { name: 'queryType', title: 'Query Type' },
  { name: 'mutationType', title: 'Mutation Type' },
  { name: 'subscriptionType', title: 'Subscription Type' },
  { name: 'types', title: 'Types' },
  { name: 'directives', title: 'Directives' },
];

const getGraphQLDocumentationSchema = (): string => schemaQuery;

export default getGraphQLDocumentationSchema;
