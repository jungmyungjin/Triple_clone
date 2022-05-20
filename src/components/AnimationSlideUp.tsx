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

export const AnimationShowDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-100%);
	}
	to {
		opacity: 1;
	}
`;

export const AnimationCloseUp = keyframes`
	from {
		opacity: 1;
	}
	to {
		transform: translateY(-100%);
		opacity: 0;
	}
`;
