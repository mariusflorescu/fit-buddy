import Head from 'next/head'
import { PropsWithChildren } from 'react'

const MainLayout = ({
  children,
  title
}: PropsWithChildren<{ title?: string }>) => {
  return (
    <>
      <Head>
        <title>FitBuddy - {title}</title>
      </Head>
      <div className="relative min-h-full w-full">
        <div>{children}</div>
        <nav className="fixed inset-x-0 bottom-0 flex justify-center bg-gray-200 p-6">
          <ul className="flex items-center space-x-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default MainLayout
