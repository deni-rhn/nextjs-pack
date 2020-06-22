import Link from 'next/link'
import { Fragment } from 'react'

const IndexPage = () => (
  <Fragment>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/statistic">
        <a>Statistic</a>
      </Link>
    </p>
  </Fragment>
);

export default IndexPage
