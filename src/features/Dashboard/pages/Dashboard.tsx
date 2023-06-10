import { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { FlightsTicketsContainer } from '@components/index'
import Navbar from '@layouts/Navbar/Navbar'

const queryClient = new QueryClient()

const Dashboard = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen">
        <Navbar />
        <FlightsTicketsContainer />
      </div>
    </QueryClientProvider>
  )
}

export default Dashboard
