import React, { useState, useEffect, useRef } from 'react';

function useAnimationState({isPrev, children}) {
    let [animatedItems, setItems] = useState(null);
	const itemRef = useRef(animatedItems)
	const setAnimatedItems = (newState) => {
        itemRef.current = newState;
		return setItems(newState);
	}
	const priorItem = useRef();

	function animationEnd() {
		setAnimatedItems(itemRef.current.slice(1));
	}

	useEffect(() => {
		var key = `${children.key}_animated`;

		if (animatedItems == null) {
			setAnimatedItems([<div className="sliderContainer" key={key}>{children}</div>]);
			priorItem.current = children;
		} else {
            priorItem.current = children[0];
            var priorItemKey = `${priorItem.current.key}_animated`;
			setAnimatedItems([<div key={priorItemKey.current} className={isPrev ? "slideIn" : "slideOut"} onAnimationEnd={animationEnd}>{priorItem.current}</div>].concat([<div key={key} className={isPrev ? "fadeOut" : "fadeIn"}>{children}</div>]));
		}
	}, [children])

	return animatedItems;
}

function AnimationComponent(props) {
	var animatedItems = useAnimationState(props);

	return <div className={"animatedContainer"}>
		{animatedItems}
	</div>
}

export default AnimationComponent;