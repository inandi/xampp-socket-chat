const connection = new WebSocket('ws://localhost:8080');

connection.onopen = () => {
    console.log('succesfully connected');
}

connection.onerror = (error) => {
    console.log('failed to connect',error);
}

connection.onmessage = (event) => {
    let li = document.createElement('li');
    li.innerText = JSON.parse(event.data).msg;
    document.querySelector('#chat').append(li);
};

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let message = document.querySelector('#message').value;
    let gt = {
      "msg":message,
      "target":12
      };
    connection.send(JSON.stringify(gt));
    document.querySelector('#message').value = '';
});