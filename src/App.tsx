import { lazy } from 'react'
import Container from '@/components/layout/container'

const CommentsSection = lazy(() => import('@/components/layout/commentsSection'))

function App() {

  return (
    <Container>
      <CommentsSection />
    </Container>
  )
}

export default App
