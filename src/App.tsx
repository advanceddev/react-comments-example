import { lazy, Suspense } from 'react'
import Container from '@/components/layout/container'

const CommentsSection = lazy(() => import('@/components/layout/commentsSection'))

function App() {

  return (
    <Container>
      <Suspense fallback={<>Загружаем комментарии...</>}>
        <CommentsSection />
      </Suspense>
    </Container>
  )
}

export default App
