import React from "react";
import "./Home.css";
import { ReactComponent as IconFacebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as IconTwitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as IconLinkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as IconGitHub } from "../../assets/svg/github.svg";
import CustomIcon from "../../components/CustomIcon";

function Home() {
	return (
		<main className="container Home">
			<div className="Home-Info Home-Item">
				<p className="Typography h2">Hello!</p>
				<p className="Typography h3 Home-Title">I'm Saul</p>
				<p className="Typography h2">
					This is a small application that use TypeScript, React Hooks & GraphQL
        		</p>
				<div className="container Home-Icon-Container">
					<CustomIcon ><IconFacebook /></CustomIcon>
					<CustomIcon ><IconTwitter /></CustomIcon>
					<CustomIcon ><IconLinkedin /></CustomIcon>
					<CustomIcon ><IconGitHub /></CustomIcon>
				</div>
			</div>
			<div className="Home-Img Home-Item">
				<h2>Hello</h2>
				<h2>Hello</h2>
				<h2>Hello</h2>
				<h2>Hello</h2>
			</div>
		</main>
	);
}

export default Home;
