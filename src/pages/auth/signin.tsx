import Button from '@components/button'
import AuthLayout from '@layout/auth'
import { NextPageWithLayout } from '@pages/_app'
import { GetServerSidePropsContext, NextPage } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { ReactElement } from 'react'

type Provider = {
  name: string
  id: string
}

type Props = {
  providers: Provider[]
}

const SignIn: NextPageWithLayout<Props> = ({ providers }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Welcome!</h2>
      <span className="h-[1px] w-full bg-gray-100" />
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <Button
              variant="secondary"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              }
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: `${window.location.origin}/app/overview`
                })
              }
            >
              Sign in with {provider.name}
            </Button>
          </div>
        )
      })}
    </>
  )
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout title="Sign In">{page}</AuthLayout>
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}

export default SignIn
