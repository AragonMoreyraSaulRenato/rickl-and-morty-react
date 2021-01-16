import React from "react";
import "./Home.css";
import { ReactComponent as IconFacebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as IconTwitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as IconLinkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as IconGitHub } from "../../assets/svg/github.svg";
import RickAndMortyImg from "../../assets/img/image.png";
import CustomIcon from "../../components/CustomIcon";
import MainContainer from "../../container/MainContainer";
import { Grid } from "@material-ui/core";

function Home(): JSX.Element {
	return (
		<MainContainer>
			<Grid container>
				<Grid
					item
					sm={12}
					lg={6}
					container
					direction="column"
					justify="center"
					alignItems="flex-start"
				>
					<p className="Typography h2">Hello!</p>
					<p className="Typography h3 Home-Title">I'm Saul Moreyra</p>
					<p className="Typography h2">
						This is a small application that use TypeScript, React Hooks &
						GraphQL
					</p>
					<div className="container Home-Icon-Container">
						<CustomIcon to="https://www.facebook.com/saulrmoreyra/">
							<IconFacebook />
						</CustomIcon>
						<CustomIcon to="https://twitter.com/saulrmoreyra">
							<IconTwitter />
						</CustomIcon>
						<CustomIcon to="https://www.linkedin.com/in/saulrmoreyra/">
							<IconLinkedin />
						</CustomIcon>
						<CustomIcon to="https://github.com/AragonMoreyraSaulRenato">
							<IconGitHub />
						</CustomIcon>
					</div>
				</Grid>
				<Grid
					item
					sm={12}
					lg={6}
					container
					direction="column"
					justify="center"
					alignItems="center"
				>
					<img
						src={RickAndMortyImg}
						alt="RickAndNorty"
						className={"image-responsive"}
					/>
				</Grid>
			</Grid>
		</MainContainer>
	);
}

export default Home;
