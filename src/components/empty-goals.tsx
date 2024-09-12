import { Plus } from 'lucide-react'
import letStart from '../assets/lets-start-illustration.svg'
import logo from '../assets/logo-in-orbit.svg'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
export function EmptyGoals() {
	return (
		<div className='flex flex-col items-center justify-center gap-8 h-screen w-full'>
			<img src={logo} alt='in.orbit' />
			<img src={letStart} alt='Lets start illustration' />
			<p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
				Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
			</p>

			<DialogTrigger asChild>
				<Button>
					<Plus className='size-4' /> Cadastrar meta
				</Button>
			</DialogTrigger>
		</div>
	)
}
