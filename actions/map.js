import constants from '../constants/map'

export function selectStation(station) {
    return {
        type: constants.STATION_CHANGE,
        payload: { station }
    }
}

export function updateMapRegion(region) {
    return {
        type: constants.MAP_REGION_CHANGE,
        payload: { region }
    }
}

export function updatePinSize(pinSize) {
    return {
        type: constants.PIN_SIZE_CHANGE,
        payload: { pinSize }
    }
}

export function updateAnnotationType(annotationType) {
    return {
        type: constants.ANNOTATION_TYPE_CHANGE,
        payload: { annotationType }
    }
}