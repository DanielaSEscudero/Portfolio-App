import React from 'react'
import '../../Scss/cardProyect.scss';

export const CardP = () => {
    
    const cards = document.querySelectorAll('.cards');

    const setClasses = () => {
        const classes = ['left', 'active', 'right'];
        cards.forEach((card, index) => card.classList.add(classes[index]))
    }


    const changePositions = (e) => {
	const clickedCard = e.currentTarget
	const activeCard = document.querySelector('.cards.active')
	if(clickedCard.classList.contains('active')) return;
	const classesFrom = e.currentTarget.className
	const classesTo = activeCard.className
	clickedCard.className = classesTo
	activeCard.className = classesFrom	
}

    cards.forEach((card) => {
        card
            .addEventListener('click', changePositions)
    })

    setClasses();

    return(
        <>
        <div className="container containerCard">
	<div className="cards" style={{backgroundImage: "url('https://images.pexels.com/photos/11199295/pexels-photo-11199295.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200')"}}>
		<div className="cards__inner"></div>
	</div>
	<div className="cards" style={{backgroundImage: "url('https://images.pexels.com/photos/9969874/pexels-photo-9969874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200')"}}>
		<div className="cards__inner"></div>
	</div>
	<div className="cards" style={{backgroundImage: "url('https://images.pexels.com/photos/8864330/pexels-photo-8864330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200')"}}>
		<div className="cards__inner"></div>
	</div>
</div>
        </>
    )
}
