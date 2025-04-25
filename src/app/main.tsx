import { createRoot } from 'react-dom/client'
import { HeroUIProvider, ReactQueryProvider, router } from '../core'

import { RouterProvider } from 'react-router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <HeroUIProvider>
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  </HeroUIProvider>,
)
