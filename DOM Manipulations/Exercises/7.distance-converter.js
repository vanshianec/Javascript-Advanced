function attachEventsListeners() {
    document.getElementById("convert").addEventListener('click', () => {
        let fromValue = document.getElementById("inputDistance").value;
        let fromDistanceType = document.getElementById("inputUnits").value;
        let toDistanceType = document.getElementById("outputUnits").value;
        document.getElementById('outputDistance').removeAttribute('disabled');
        let result = 0;
        let meters = 0;
        switch (fromDistanceType) {
            case 'km':
                meters = fromValue * 1000;
                switch (toDistanceType) {
                    case 'km':
                        result = fromValue;
                        break;
                    case 'm':
                        result = meters;
                        break;
                    case 'cm':
                        result = fromValue * 100;
                        break;
                    case 'mm':
                        result = fromValue * 1000;
                        break;
                    case 'mi':
                        result = meters / 1609.34;
                        break;
                    case 'yrd':
                        result = meters / 0.9144;
                        break;
                    case 'ft':
                        result = meters / 0.3048;
                        break;
                    case 'in':
                        result = meters / 0.0254;
                        break;
                    default:
                        return;
                }

                break;
            case 'm':
                meters = fromValue;
                switch (toDistanceType) {
                    case 'km':
                        result = meters / 1000;
                        break;
                    case 'm':
                        result = meters / 1;
                        break;
                    case 'cm':
                        result = meters / 0.01;
                        break;
                    case 'mm':
                        result = meters / 0.001;
                        break;
                    case 'mi':
                        result = meters / 1609.34;
                        break;
                    case 'yrd':
                        result = meters / 0.9144;
                        break;
                    case 'ft':
                        result = meters / 0.3048;
                        break;
                    case 'in':
                        result = meters / 0.0254;
                        break;
                    default:
                        return;
                }
                break;

            case 'cm':
                meters = fromValue * 0.01;
                switch (toDistanceType) {
                    case 'km':
                        result = meters / 1000;
                        break;
                    case 'm':
                        result = meters;
                        break;
                    case 'cm':
                        result = meters / 0.01;
                        break;
                    case 'mm':
                        result = meters / 0.001;
                        break;
                    case 'mi':
                        result = meters / 1609.34;
                        break;
                    case 'yrd':
                        result = meters / 0.9144;
                        break;
                    case 'ft':
                        result = meters / 0.3048;
                        break;
                    case 'in':
                        result = meters / 0.0254;
                        break;
                    default:
                        return;
                }
                break;

            case 'mm':
                meters = fromValue * 0.001;
                switch (toDistanceType) {
                    case 'km':
                        result = meters / 1000;
                        break;
                    case 'm':
                        result = meters;
                        break;
                    case 'cm':
                        result = meters / 0.01;
                        break;
                    case 'mm':
                        result = meters / 0.001;
                        break;
                    case 'mi':
                        result = meters / 1609.34;
                        break;
                    case 'yrd':
                        result = meters / 0.9144;
                        break;
                    case 'ft':
                        result = meters / 0.3048;
                        break;
                    case 'in':
                        result = meters / 0.0254;
                        break;
                    default:
                        return;
                }
                break;

            case 'mi':
                meters = fromValue * 1609.34;
                switch (toDistanceType) {
                    case 'km':
                        result = meters / 1000;
                        break;
                    case 'm':
                        result = meters;
                        break;
                    case 'cm':
                        result = meters / 0.01;
                        break;
                    case 'mm':
                        result = meters / 0.001;
                        break;
                    case 'mi':
                        result = meters / 1609.34;
                        break;
                    case 'yrd':
                        result = meters / 0.9144;
                        break;
                    case 'ft':
                        result = meters / 0.3048;
                        break;
                    case 'in':
                        result = meters / 0.0254;
                        break;
                    default:
                        return;
                }
                break;

            case 'yrd':
                meters = fromValue * 0.9144;
                switch (toDistanceType) {
                    case 'km':
                        result = meters / 1000;
                        break;
                    case 'm':
                        result = meters;
                        break;
                    case 'cm':
                        result = meters / 0.01;
                        break;
                    case 'mm':
                        result = meters / 0.001;
                        break;
                    case 'mi':
                        result = meters / 1609.34;
                        break;
                    case 'yrd':
                        result = meters / 0.9144;
                        break;
                    case 'ft':
                        result = meters / 0.3048;
                        break;
                    case 'in':
                        result = meters / 0.0254;
                        break;
                    default:
                        return;
                }
                break;
            case 'ft':
                meters = fromValue * 0.3048;
                switch (toDistanceType) {
                    case 'km':
                        result = meters / 1000;
                        break;
                    case 'm':
                        result = meters;
                        break;
                    case 'cm':
                        result = meters / 0.01;
                        break;
                    case 'mm':
                        result = meters / 0.001;
                        break;
                    case 'mi':
                        result = meters / 1609.34;
                        break;
                    case 'yrd':
                        result = meters / 0.9144;
                        break;
                    case 'ft':
                        result = meters / 0.3048;
                        break;
                    case 'in':
                        result = meters / 0.0254;
                        break;
                    default:
                        return;
                }
                break;

            case 'in':
                meters = fromValue * 0.0254;
                switch (toDistanceType) {
                    case 'km':
                        result = meters / 1000;
                        break;
                    case 'm':
                        result = meters;
                        break;
                    case 'cm':
                        result = meters / 0.01;
                        break;
                    case 'mm':
                        result = meters / 0.001;
                        break;
                    case 'mi':
                        result = meters / 1609.34;
                        break;
                    case 'yrd':
                        result = meters / 0.9144;
                        break;
                    case 'ft':
                        result = meters / 0.3048;
                        break;
                    case 'in':
                        result = meters / 0.0254;
                        break;
                    default:
                        return;
                }
                break;
            default:
                return;
        }
        document.getElementById('outputDistance').value = result;
    });


}