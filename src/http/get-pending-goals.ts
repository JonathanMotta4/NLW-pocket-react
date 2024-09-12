export interface GetPendingGoalsResponse {
	pendingGoals: {
		id: string
		title: string
		desiredWeeklyFrequency: number
		completionCount: number
	}[]
}

export async function getPendingGoalsRoute(): Promise<GetPendingGoalsResponse> {
	const response = await fetch('http://localhost:3333/pending-goals')
	const data = await response.json()

	return data
}
