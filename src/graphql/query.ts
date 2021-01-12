import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
	query Characters($page: Int!, $search: String) {
		characters(page: $page, filter: { name: $search }) {
			info {
				count
				pages
			}
			results {
				id
				name
				status
				image
				species
			}
		}
	}
`;
