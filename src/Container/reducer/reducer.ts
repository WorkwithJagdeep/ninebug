export const initialState = {
  currentUser: null,
  siteLoading: false,
};

export const reducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "currentUser":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "site_loading":
      return {
        ...state,
        siteLoading: action.payload,
      };
    default:
      return state;
  }
};
