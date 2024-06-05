var numberOfKeys = document.querySelectorAll(".keys").length;

for (i = 0; i<numberOfKeys; i++) {
    document.querySelectorAll(".keys")[i].addEventListener("click", function() {
        var keyInnerHTMl = this.innerHTML;

        makeSound(keyInnerHTMl);
    });
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

});

function makeSound(key) {
    const soundMap = {
        w: './Audio/key01.mp3',
        a: './Audio/key02.mp3',
        s: './Audio/key03.mp3',
        d: './Audio/key04.mp3',
        j: './Audio/key05.mp3',
        k: './Audio/key06.mp3',
        l: './Audio/key07.mp3',
        q: './Audio/key08.mp3',
        e: './Audio/key09.mp3',
        r: './Audio/key10.mp3',
        t: './Audio/key11.mp3',
        u: './Audio/key12.mp3',
        i: './Audio/key13.mp3',
        o: './Audio/key14.mp3',
        p: './Audio/key15.mp3',
        f: './Audio/key16.mp3',
        g: './Audio/key17.mp3',
        h: './Audio/key18.mp3',
        "[": './Audio/key20.mp3',
        ";": './Audio/key21.mp3',
        b: './Audio/key22.mp3',
        n: './Audio/key23.mp3',
        m: './Audio/key24.mp3'
    };

    const audio = new Audio(soundMap[key]);
    if (audio) {
        audio.play();
    } else {
        console.log(`No sound mapped for key: ${key}`);
    }
}