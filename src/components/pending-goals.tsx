import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'

import { CreateGoalCompletionRoute } from '../http/create-goal-completion'
import { getPendingGoalsRoute } from '../http/get-pending-goals'
import { OutlineButton } from './ui/outline-button'

export function PendingGoals() {
	const queryClient = useQueryClient()
	const { data } = useQuery({
		queryKey: ['pending-goals'],
		queryFn: getPendingGoalsRoute,
		staleTime: 1000 * 60, //60s
	})

	if (!data) return null

	async function handleCompleteGoal(goalId: string) {
		await CreateGoalCompletionRoute(goalId)
		queryClient.invalidateQueries({ queryKey: ['summary'] })
		queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
	}

	return (
		<div className='flex flex-wrap gap-3'>
			{data.pendingGoals.map(goal => {
				return (
					<OutlineButton
						key={goal.id}
						disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
						onClick={() => handleCompleteGoal(goal.id)}
					>
						<Plus className='size-4 text-zinc-600' />
						{goal.title}
					</OutlineButton>
				)
			})}
		</div>
	)
}
