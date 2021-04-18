import React, { useState } from 'react';
import AnimationComponent from './Animation';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = () => {
	const [items, setItems] = useState([{
		"image": "https://wallpapercave.com/wp/wp1929358.jpg",
		"name": "burger",
		"price": "100",
		"category": "food",
	}, {
		"image": "https://cdn.shopify.com/s/files/1/0266/6220/7675/products/4070-F_ec6ff250-22b6-4032-a7d4-f1150b6e83db_1024x1024@2x.jpg?v=1609309569",
		"name": "peach dress",
		"price": "899",
		"category": "clothing",
	}, {
		"image": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		"name": "pav bhaji",
		"price": "150",
		"category": "food",
	}, {
		"image": "https://images7.alphacoders.com/596/596343.jpg",
		"name": "pizza",
		"price": "400",
		"category": "food",
	}, {
		"image": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-960,/pub/media/catalog/product/9/5/9548onnteal_1.jpg?rnd=20200526195200",
		"name": "paneled dress",
		"price": "1539",
		"category": "clothing",
	}, {
		"image": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-960,/pub/media/catalog/product/l/b/lbl_1-1.jpg?rnd=20200526195200",
		"name": "anarkali dress",
		"price": "2900",
		"category": "clothing",
	}, {
		"image": "https://img3.junaroad.com/uiproducts/15852316/zoom_0-1546082618.jpg",
		"name": "floral dress",
		"price": "768",
		"category": "clothing",
	}, {
		"image": "https://wallpaperaccess.com/full/1400917.jpg",
		"name": "momos",
		"price": "300",
		"category": "food",
	}, {
		"image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11549638/2020/3/4/9f8eb2c5-cfc1-45b0-ad14-4ca24e65f6761583302153471-Women-White-Conversational-Printed-Round-Neck-Cotton-Fit-and-1.jpg",
		"name": "a-line dress",
		"price": "799",
		"category": "clothing",
	}, {
		"image": "https://cdn.shopclues.com/images1/thumbnails/104548/640/1/148839517-104548355-1579257964.jpg",
		"name": "flair dress",
		"price": "489",
		"category": "clothing",
	}, {
		"image": "https://livenewtab.com/wp-content/uploads/SearchFX2_5b229dafac40a9f608232bc8-e1534189919644.jpeg",
		"name": "brownie",
		"price": "349",
		"category": "food",
	}, {
		"image": "https://cdn.shopify.com/s/files/1/0376/9309/5980/products/image_685a2cca-1446-467a-9787-47f4748eb65d_1200x.jpg?v=1603624559",
		"name": "puff sleeve dress",
		"price": "1799",
		"category": "clothing",
	}, {
		"image": "https://images6.alphacoders.com/439/439410.jpg",
		"name": "hot & spicy chicken",
		"price": "450",
		"category": "food",
	}, {
		"image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8643281/2019/2/1/563a4cec-e24f-42bd-ae3f-8ad877b40c051549024712622-SASSAFRAS-Women-Off-White-Printed-Maxi-Dress-750154902471183-1.jpg",
		"name": "maxi dress",
		"price": "854",
		"category": "clothing",
	}, {
		"image": "https://triedntes2ed.com/wp-content/uploads/2020/05/24-1.png",
		"name": "chicken biryani",
		"price": "350",
		"category": "food",
	}]);

	const filters = [{
		name: "All",
		value: "",
	}, {
		name: "Food",
		value: "food",
	}, {
		name: "Clothing",
		value: "clothing",
	}];

	const [currentItemIdx, setCurrentItemIdx] = useState(0);
	const [isPrev, setIsPrev] = useState(false);

	const prevSlide = () => {
		const resetToVeryBack = currentItemIdx === 0;
		const index = resetToVeryBack ? items.length - 1 : currentItemIdx - 1;
		setCurrentItemIdx(index);
		setIsPrev(true);
	};

	const nextSlide = () => {
		const resetIndex = currentItemIdx === items.length - 1;
		const index = resetIndex ? 0 : currentItemIdx + 1;
		setCurrentItemIdx(index);
		setIsPrev(false);
	}

	const [selectedFilter, setFilter] = useState("");
	const onFilterSelect = value => {
		setFilter(value);
	}

	const allItems = selectedFilter == "" ? items : items.filter(value => value.category == selectedFilter);
	const activeItem = allItems.slice(currentItemIdx, currentItemIdx + 3);

	const itemsToDisplay = activeItem.length < 3
		? [...activeItem, ...allItems.slice(0, 3 - activeItem.length)]
		: activeItem;

	return (
		<div className="carouselContainer">
			<ul>
				{filters.map((filter) => 
					<li className={selectedFilter == filter.value ? 'active' : ''} key={filter.name} onClick={() => onFilterSelect(filter.value)}>{filter.name}</li>	
				)}
			</ul>
			<div className="carousel">
				<button onClick={prevSlide}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
				<AnimationComponent isPrev={isPrev}>
					{itemsToDisplay.map((item, index) =>
						<div className={index == 1 ? 'sliderContent active': 'sliderContent'}>
							<img key={index} src={item.image} alt="" />
							<p>{item.name}</p>
							<p>&#8377; {item.price}</p>
						</div>
					)}
				</AnimationComponent>
				<button onClick={nextSlide}>
					<FontAwesomeIcon icon={faAngleRight} />
				</button>
			</div>
		</div>
	);
};

export default Carousel;