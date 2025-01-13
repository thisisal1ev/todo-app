export interface TodoProps {
	id: number
	title: string
	completed: boolean
}

export type Filter = 'all' | 'completed' | 'uncompleted'