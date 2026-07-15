"use client"

import { StoreProvider } from "@/lib/store-context"
import { SiteHeader } from "@/components/store/site-header"
import { Hero } from "@/components/store/hero"
import { Categories } from "@/components/store/categories"
import { SiteFooter } from "@/components/store/site-footer"
import { CheckoutModal } from "@/components/store/checkout-modal"

export default function Page() {
  return (
    <StoreProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <Categories />
        </main>
        <SiteFooter />
      </div>
      <CheckoutModal />
    </StoreProvider>
  )
}
