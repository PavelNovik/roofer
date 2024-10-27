import { Header } from '@/components/layout/header/header'
import { Container } from '@/components/ui/container/container'
import { About } from '@/components/layout/about/about'
import { Partners } from '@/components/layout/partners/partners'
import { Customers } from '@/components/layout/customers/customers'
import { Service } from '@/components/layout/service/service'

export function App() {
  return (
    <Container>
      <Header />
      <About />
      <Partners />
      <Customers />
      <Service />
    </Container>
  )
}
