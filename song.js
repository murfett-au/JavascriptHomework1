/*
 * Hotel California is a song written and perfomed by The Eagles.
 * This file defines a set of variables describing some attributes of the song
 * It was written by John Murfett (jm@epicom.com.au) as part of the ES6 Javascript Course Assesment.
 *
 * I predict this code will, over the next few lessons, morph into object oriented code manipuating
 * the song properies as an objecct. This will allow us to output the key and value like:
 * title: Hotel California
 * instead of just 
 * Hotel California
 */
var tempoBpm = 128; //beats per minute tempo
var title = "Hotel California";
var artist = "The Eagles";
var albumn = "Hotel California";//Which albulm was the song first release on
var year = 1977;//year of inital release (in any country)
var guitaristsArray = [ // Names (first and last) of people who played guitar on this song
	"Don Felder",
	"Glenn Frey",
];
var digitalReleaseOnly = false; // if the song was never release as a physical cd or record or other physical media, set this to true
var weeklyChartPeakPositionByCountry = { //object key is the name of a country and value is the highest position obtain on that country's chart b the song.
	'Austria':13,
	'Belgium':24,
	'Canada':1,
	'France':2,
	'Netherlands':6,
	'New Zealand':5,
	'Norway':5,
	'Spain':3,
	'Switzerland':2,
};
var key = {
	'tonicNote': 'B',
	'keyType': 'Minor',
}

console.log(tempoBpm);
console.log(title);
console.log(artist);
console.log(albumn);
console.log(year);
console.log(guitaristsArray);
console.log(digitalReleaseOnly);
console.log(weeklyChartPeakPositionByCountry);
console.log(key);
