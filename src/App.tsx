import { Header } from '@/components/layout/header/header'
import { Container } from '@/components/ui/container/container'
import { About } from '@/components/layout/about/about'
import { Partners } from '@/components/layout/partners/partners'

export function App() {
  return (
    <Container>
      <Header />
      <About />
      <Partners />
    </Container>
  )
}
