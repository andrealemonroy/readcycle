import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import { Header } from 'semantic-ui-react'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      {/* <section>
        <Link href="/yes-or-no">
          <a>Todos nuestros libros</a>
        </Link>
      </section> */}
      <Header size="huge" as="h1" textAlign="center">
        Los más vendidos
      </Header>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
