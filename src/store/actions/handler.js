export const fetchingRequest = type => ({type});
export const fetchingRequestWithParams = (type, payload) => ({type, payload});
export const fetchingSuccess = (type, json) => ({type, payload: json});
export const fetchingFailure = (type, error) => ({type, payload: error});
