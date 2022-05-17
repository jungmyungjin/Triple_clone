import styled, { keyframes } from "styled-components";

export const AnimationSlideUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(15px);
	}
	to {
		opacity: 1;
	}
`;

export const AnimationSlideDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
	}
`;

export const AnimationShow = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

// function AnimationSlideUp() {
//   return <></>;
// }
