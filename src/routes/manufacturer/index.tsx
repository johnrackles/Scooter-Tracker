import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/manufacturer/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/manufacturer/"!</div>
}
