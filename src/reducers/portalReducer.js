export const portalReduce = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const adding = {
                id: action.name + state.patients.length,
                name: action.name
            }
            const newPatient = [...state.patients, adding]
            return {
                ...state,
                patients: newPatient
            };
        case 'REMOVE_PATIENT':
            const remaining = state.patients.filter(patient => patient.id !== action.id)

            return {
                ...state,
                patients: remaining
            };
        default:
            return state;
    }
}