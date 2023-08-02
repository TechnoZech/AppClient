import React from "react";
import Timeline from "../../components/Timeline";
import PhaseHero from "../../components/PhaseHero";
import "./style.css";
import PhaseData from "../../data/PhaseData";
import JoinCard from "../../components/JoinCard";

const Phase2 = (props) => {
	const {theme} = props;
	const {phase2} = PhaseData;
    const phase = phase2;


    const cardData = {
		title: 'Enroll Now',
		para: 'and learn from the best',
		btn: 'BUY FOR 699₹',
        btnLink: '/',
        bgColors:'bg-blue3 dark:bg-dark2',
	}
	return (
		<>
			<PhaseHero theme={theme} phase={phase}/>
			<Timeline timelineElements={phase.timeline}/>
            <JoinCard cardData={cardData}/>
		</>
	);
};

export default Phase2;