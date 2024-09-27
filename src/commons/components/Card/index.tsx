import { ReactNode } from "react"

import StyledCard from "./styles"

export default (({ children }: CardProps) => {
	return <StyledCard>
		{children}
	</StyledCard>
})

interface CardProps {
	children: ReactNode;
}