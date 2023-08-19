import { useEffect, useState } from 'react'
import { decodeString } from './utils'

export const Option = ({ option, isCorrect }) => {
	const defaultClass = 'border-white/60'
	const [indicatorClass, setIndicatorClass] = useState(defaultClass)

	const handleClick = () => {
		const indicator = isCorrect ? 'border-green-400' : 'border-red-400'
		setIndicatorClass(indicator)
	}

	useEffect(() => setIndicatorClass(defaultClass), [option])

	return (
		<li
			className={`p-2 border ${indicatorClass} rounded-lg cursor-pointer`}
			onClick={handleClick}>
			{decodeString(option)}
		</li>
	)
}
