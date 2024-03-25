
var wines = [
    { _id: '59a740b8aa06e549918b1fda',
      wineryName: 'Some Winery',
      wineName: 'Pinot Noir',
      wineColor: 'Red',
      imageLink: '/img/FortBerensPN.png' },
    { _id: '59a7410aaa06e549918b1fdb',
      wineryName: 'Some Winery',
      wineName: 'Pinot Gris',
      wineColor: 'White',
      imageLink: '/img/FortBerensPG.png' },
    { _id: '59a74125aa06e549918b1fdc',
      wineryName: 'Some Winery',
      wineName: 'Rose',
      wineColor: 'Rose',
      imageLink: '/img/FortBerensRose.png' },
    { _id: '59a74159aa06e549918b1fdd',
      wineryName: 'Some other Winery',
      wineName: 'Rose',
      wineColor: 'Rose',
      imageLink: '/img/FortBerensRose.png' },
    { _id: '59a7417aaa06e549918b1fde',
      wineryName: 'Some other Winery',
      wineName: 'Pinot Gris',
      wineColor: 'White',
      imageLink: '/img/FortBerensPG.png' },
    { _id: '59a8721f4fd43b676a1f5f0d',
      wineryName: 'Some other Winery',
      wineName: 'Pinot Gris',
      wineColor: 'White',
      imageLink: '/img/FortBerensPG.png' },
    { _id: '59a872244fd43b676a1f5f0e',
      wineryName: 'Winery 3',
      wineName: 'Pinot Noir',
      wineColor: 'Red',
      imageLink: '/img/FortBerensPN.png' } ]

let filteredWines = function (search) {
    var lowSearch = search.toLowerCase();
    return wines.filter(wine =>
        Object.values(wine).some(val => 
            String(val).toLowerCase().includes(lowSearch) 
        )
    );
}

console.log(filteredWines("Gri"))