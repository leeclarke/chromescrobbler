//Code for scrobbling Amazon Cloud Player
//TODO: build out code for grabbing the  track info.
//TODO: figure out how to run each time it changes.
//TODO: Add page identifyer to let people know its running.





function azcloudSendNowPlaying()
{
	var validationURL = "http://ws.audioscrobbler.com/2.0/?" +
		"method=track.getinfo" +
		"&api_key=44c7aeb27b91eb0e4e913098a9dc2378" +
		"&artist="+ g_artist + "&track=" + g_song;
	
	chrome.extension.sendRequest({type: "xhr", url: validationURL},
			function(response) {
				if (response.text != "You must supply either an artist and track name OR a musicbrainz id.") {
					LogD('pandoraSendNowPlaying(): send nowPlaying.');
					chrome.extension.sendRequest({type: "nowPlaying",
						artist: g_artist, track: g_song, duration: 0,
						source: "R"});
				};
			});
	
}

function azcloudSendPlayed()
{
	
	chrome.extension.sendRequest({type: "submit"},
			function(r) {
				LogD('pandoraSendPlayed(): submitted.');
			});
}





/**
 * Add listeners to catch track changes.
 */
function initializeAZListener(){
	//div for player nowPlayingSection
	// div currentSongDetails contains song info
	//span title and span.after contains artist but has no tag, look for "by '.
	//song duration in .timer
	//song album info located in <tbody class="songTrackHover songTracks"><tr class="selectable 
	// indicates playing <td class="playCell "><a href="#play/song=/idx=0" class="nowPlaying">Play</a></td><td class="titleCell" text="Adagio For Tron" title="Adagio For Tron">Adagio For Tron</td><td class="optionCell"><td class="albumCell" text="Tron: Legacy (Amazon MP3 Exclusive Version) [+Digital Booklet]" title="Tron: Legacy (Amazon MP3 Exclusive Version) [+Digital Booklet]"> ....
	//might be easier to just grab data in the playlist body? need to explore this though cuz the state can change and not have needed data.
}

initializeAZListener();