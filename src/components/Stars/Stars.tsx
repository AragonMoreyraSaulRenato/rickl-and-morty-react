import React from "react";
import Particles from 'react-particles-js';
import Parametrers from './ParamsStars.json';
import "./Stars.css";



const Stars = () => {
	const params: object = Parametrers;
	return <Particles params={params} />;
};

export default Stars;
