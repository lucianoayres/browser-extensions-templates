console.log('This is a popup')

dummyDataURL = 'https://raw.githubusercontent.com/lucianoayres/browser-extensions-templates/dbfaa41c3d5e143076cf3fed034f4e91a40ca506/templates/fetch-example/dummy-data/data.json'

fetch(dummyDataURL)
    .then(response => response.json())
    .then(json => console.log(json))