// Health Tracker logic
const trackerForm = document.getElementById('tracker-form');
const trackerList = document.getElementById('tracker-list');

trackerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mood = document.getElementById('mood').value;
    const note = document.getElementById('note').value;
    const entry = document.createElement('li');
    entry.textContent = `Mood: ${mood}${note ? ' | Note: ' + note : ''}`;
    trackerList.appendChild(entry);
    trackerForm.reset();
});

// Community Board logic
const postForm = document.getElementById('post-form');
const postsList = document.getElementById('posts-list');

postForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    const post = document.createElement('li');
    post.textContent = message;
    postsList.appendChild(post);
    postForm.reset();
});
