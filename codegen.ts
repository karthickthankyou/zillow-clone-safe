import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://zillow-clone-nest-next-monorepo-production.up.railway.app/graphql',
  watch: true,
  generates: {
    './src/generated/graphql.ts': {
      documents: './src/**/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'named-operations-object',
        'typescript-urql',
      ],
      config: {
        pureMagicComment: true,
        exposeFetcher: true,
        exposeQueryKeys: true,
        withHooks: true,
        avoidOptionals: false,
        fetcher: {
          endpoint: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
        },
      },
    },
  },
}

export default config
