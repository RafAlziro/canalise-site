const botao = document.querySelector('input');
const lista_video = document.getElementById('lista');
var videos = [
"media/1_1.mp4",
"media/2_1.mp4",
"media/3_1.mp4",
"media/4_1.mp4",
"media/5_1.mp4",
"media/6_1.mp4",
"media/7_1.mp4",
"media/8_1.mp4",
"media/9_1.mp4",
"media/10_1.mp4"]

function escolher_video() {
    var n = videos.length;
    if (n == 0) {
        return null;
    }
    var n_sorteio = Math.random() * (n) - 1;
    var elemento = n_sorteio.toFixed()
    return videos.splice(elemento, 1);;
}

botao.addEventListener('click', updateButton);

function updateButton() {
    var video = document.createElement('video');
    var caminho = document.createElement('source');
    var nome = escolher_video();
    video.width = "300";
    video.height ="225";
    video.controls = true;
    caminho.src = nome;
    caminho.type = "video/mp4";

    if (nome != null) {
        video.appendChild(caminho);
        lista_video.appendChild(video);
    }
}
