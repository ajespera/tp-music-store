const albumList = document.querySelector('#album-list');
const albumsList = document.querySelector('#albums-list');
const songsList = document.querySelector('#songs-list');

// index.html

function renderAlbum(doc){
	let li = document.createElement('li');
	let albumName = document.createElement('span');
	let artist = document.createElement('span');

	li.setAttribute('data-id', doc.id);
	albumName.textContent = doc.data().albumName;
	artist.textContent = doc.data().artist;

	li.appendChild(albumName);
	li.appendChild(artist);
	
	albumList.appendChild(li);
}

db.collection('albums').orderBy("rank").limit(10).get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderAlbum(doc);
	})
})

function renderSongs(doc){
	let li = document.createElement('li');
	let song = document.createElement('span');
	let artist = document.createElement('span');
	let albumName = document.createElement('span');

	li.setAttribute('data-id', doc.id);
	song.textContent = doc.data().song;
	artist.textContent = doc.data().artist;
	albumName.textContent = doc.data().albumName;

	li.appendChild(song);
	li.appendChild(artist);
	li.appendChild(albumName);
	
	songsList.appendChild(li);
}

db.collection('songs').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderSongs(doc);
	})
})

// albums.html

function renderAlbums(doc){
	let li = document.createElement('li');
	let albumName = document.createElement('span');
	let artist = document.createElement('span');
	let price = document.createElement('span');
	let tracklist = document.createElement('span');

	li.setAttribute('data-id', doc.id);
	albumName.textContent = doc.data().albumName;
	artist.textContent = doc.data().artist;
	price.textContent = doc.data().price;
	tracklist.textContent = doc.data().tracklist;

	li.appendChild(albumName);
	li.appendChild(artist);
	li.appendChild(tracklist);
	li.appendChild(price);
	

	
	albumsList.appendChild(li);
}

db.collection('albums').orderBy("albumName").get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderAlbums(doc);
	})
})