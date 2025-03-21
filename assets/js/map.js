if (document.getElementById('map')){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZnVmdTc3NTUiLCJhIjoiY203djZrbTh5MDhmaDJxcHNvMTV3aTJ3dyJ9.IEAilOiJyMn3cG3FZhburA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-0.131532, 51.553267],
        zoom: 12
    });

    const geojson = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-0.14166561287145382, 51.59097668916141]
                },
                properties: {
                    title: 'Akatuki Muswell Hill'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-0.12139841658087784, 51.51555725675136]
                },
                properties: {
                    title: 'Akatuki Covent Garden'
                }
            }
        ]
    };

    for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

        // add text to each marker
        const text = document.createElement('span');
        text.innerHTML = feature.properties.title; 
        el.appendChild(text);

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .addTo(map);
    }
}

if (document.getElementById('map1')) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZnVmdTc3NTUiLCJhIjoiY203djZrbTh5MDhmaDJxcHNvMTV3aTJ3dyJ9.IEAilOiJyMn3cG3FZhburA';
        const map1 = new mapboxgl.Map({
        container: 'map1',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-0.14166561287145382, 51.59097668916141],
        zoom: 14
    });
    
    const geojson1 = {
        type: 'FeatureCollection',
        features: [
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-0.14166561287145382, 51.59097668916141]
            },
            properties: {
                title: 'Akatuki Muswell Hill'
            }
            }
        ]
        };
    
        for (const feature of geojson1.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

        // add text to each marker
        const text = document.createElement('span');
        text.innerHTML = feature.properties.title; 
        el.appendChild(text);
    
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map1);
    }
}

if (document.getElementById('map2')) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZnVmdTc3NTUiLCJhIjoiY203djZrbTh5MDhmaDJxcHNvMTV3aTJ3dyJ9.IEAilOiJyMn3cG3FZhburA';
        const map2 = new mapboxgl.Map({
        container: 'map2',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-0.12139841658087784, 51.51555725675136],
        zoom: 14
    });
    
    const geojson2 = {
        type: 'FeatureCollection',
        features: [
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-0.12139841658087784, 51.51555725675136]
            },
            properties: {
                title: 'Akatuki Covent Garden'
            }
            }
        ]
        };
    
        for (const feature of geojson2.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

        // add text to each marker
        const text = document.createElement('span');
        text.innerHTML = feature.properties.title; 
        el.appendChild(text);
    
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map2);
    }
}