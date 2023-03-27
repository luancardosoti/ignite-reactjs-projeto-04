import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from '@/lib/stripe'
import { rgbDataURL } from '@/utils/rgb-data-url'
import { HomeContainer, ProductCard } from '@/styles/pages/home'
import { useState } from 'react'

import { Arrow } from '@/components/Arrow'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 640px)': {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer>
        <div ref={sliderRef} className="keen-slider">
          {products.map((product, index) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <ProductCard
                className={`keen-slider__slide number-slide${index + 1}`}
              >
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt=""
                  placeholder="blur"
                  blurDataURL={rgbDataURL(135, 231, 241)}
                />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </ProductCard>
            </Link>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={() => instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={() => instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount ?? 100) / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
