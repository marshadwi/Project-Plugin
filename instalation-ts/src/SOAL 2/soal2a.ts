interface LyricsData {
    artist: string;
    songTitle: string;
    songLyrics: string;
    songLyricsArr: string[];
}

interface LyricsResponse {
    status: boolean;
    data: LyricsData;
}

let lirik_lagu: LyricsResponse = {
    status: true,
    data: {
        artist: "Avenged Sevenfold",
        songTitle: "Little Piece of Heaven",
        songLyrics: "Before the story begins, is it such a sin\nFor me to take what's mine, until the end of time?\nWe were more than friends, before the story ends\nAnd I will take what's mine, create what God would never design\nOur love had been so strong for far too long",
        songLyricsArr: [
            "Before the story begins, is it such a sin",
            "For me to take what's mine, until the end of time?",
            "We were more than friends, before the story ends",
            "And I will take what's mine, create what God would never design",
            "Our love had been so strong for far too long",
            // lirik selanjutnya...
        ]
    }
};

let Ubahdata: LyricsResponse = {
    ...lirik_lagu,
    data: {
        ...lirik_lagu.data,
        artist: "Marsha Dwi Lucyana",
        songTitle: "Data Analyst"
    }
};

console.log(Ubahdata);