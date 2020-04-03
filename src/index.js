const music = [
    {
        name: 'Pink FLoyd',
        genre: 'rock',
        year: 1960
    },
    {
        name: 'David Bowie',
        genre: 'rock',
        year: 1970
    },
    {
        name: 'Sex Pistols',
        genre: 'punk',
        year: 1975
    },
    {
        name: 'The Prodigy',
        genre: 'electronic',
        year: 1995
    },
    {
        name: 'Chemical Brothers',
        genre: 'electronic',
        year: 2000
    },
    {
        name: 'Massive Attack',
        genre: 'electronic',
        year: 1998
    },
];

function convertObjectFromArray(array) {
    const convertedObject = array.reduce((prev, {name, genre, year}) => {
        if (prev[genre]) {
            prev[genre] = [...prev[genre], {name, year}];
        } else {
            prev[genre] = [{name, year}];
        }
        return prev;
    },{});

    return convertedObject;
}

const musicByGenres = convertObjectFromArray(music);

musicByGenres[Symbol.iterator] = () => {
    const genres = Object.values(musicByGenres);
    let musicIndex = 0;
    let genresIndex = 0;
    const toZeroIndex = 0;

    return {
        next() {
            if (musicIndex === genres[genresIndex].length) {
                genresIndex++;
                musicIndex = toZeroIndex;
            }

            if(genresIndex === genres.length) {
                return {done: true};
            }

            return {
                done: false,
                value: `I dont watch films and like music more. For example, ${genres[genresIndex][musicIndex++].name}`
            };
        }
    };
};

// for (let item of musicByGenres) {
//     console.log(item);
// }

// console.log(musicByGenres);