export const RECEIVE_FAV = 'RECEIVE_FAV';
export const RESET_STORE = 'RESET_STORE';


export function receiveFav(favorites){
	const action = {
		type: RECEIVE_FAV,
		favorites
	};
	return action;
}

export const resetStore = () => ({
    type: RESET_STORE
});