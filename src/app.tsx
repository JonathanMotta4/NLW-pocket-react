import { useQuery } from '@tanstack/react-query'
import {} from 'react'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'
import { getSummaryRoute } from './http/get-summary'

export function App() {
	const { data } = useQuery({
		queryKey: ['summary'],
		queryFn: getSummaryRoute,
		staleTime: 60 * 1000, //60s
	})
	return (
		<Dialog>
			{data?.total && data?.total > 0 ? <Summary /> : <EmptyGoals />}

			<CreateGoal />
		</Dialog>
	)
}
