document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DEL DOM ---
    const enterBtn = document.getElementById('enterUniverse');
    const introSection = document.getElementById('intro');
    const music = document.getElementById('music');
    const canvas = document.getElementById('spaceCanvas');
    const ctx = canvas.getContext('2d');
    const folders = document.querySelectorAll('.folder');
    const modal = document.getElementById('letterModal');
    const closeLetterBtn = document.getElementById('closeLetter');
    const letterTitle = document.getElementById('letterTitle');
    const letterText = document.getElementById('letterText');
    const finalScreen = document.getElementById('finalScreen');

    // --- MENSAJES DE LAS 10 CARTAS ---
    const lettersData = {
        1: { 
            title: "Mi Futuro Solo Contigo", 
            text: "Cuando imagino los próximos años, no puedo ver nada si no estás a mi lado. Eres la razón de mis metas y mi mayor ilusión. 💖" 
        },
        2: { 
            title: "Eres Mi Mundo", 
            text: "En este vasto universo lleno de estrellas y galaxias, la luz que más me guía y deslumbrante es la tuya. ✨" 
        },
        3: { 
            title: "Lo Que Siento Por Ti", 
            text: "Cada día a tu lado me doy cuenta de que este amor sigue creciendo sin límites, llenándome de una felicidad inexplicable. 🌹" 
        },
        4: { 
            title: "Una Carta Para Tu Corazón", 
            text: "Prometo cuidar cada momento juntos, escucharte, apoyarte y recordarte siempre lo valiosa e importante que eres para mí. 💌" 
        },
        5: { 
            title: "Nuestros Sueños", 
            text: "Tenemos un camino hermoso por recorrer juntas/os y miles de recuerdos esperando ser creados. ¡Vamos a descubrirlos! 🌙" 
        },
        6: { 
            title: "Momentos Inolvidables", 
            text: "Cada risa compartida, cada mirada y cada abrazo se han quedado guardados para siempre en el mejor rincón de mi memoria. ✨" 
        },
        7: { 
            title: "Más Allá de las Estrellas", 
            text: "Mi cariño por ti trasciende distancias y tiempos. No hay rincón en el cosmos que borre lo que siento. 🪐" 
        },
        8: { 
            title: "Mis Secretos Más Dulces", 
            text: "A veces me quedo mirándote en silencio y solo me sale sonreír, agradeciendo a la vida por haberte cruzado en mi camino. 🔒" 
        },
        9: { 
            title: "Un Amor Infinito", 
            text: "Si contara cada estrella del cielo, aún faltarían números para expresar todas las razones por las que te amo. 🌌" 
        },
        10: { 
            title: "El Final de Nuestro Viaje", 
            text: "Has llegado al centro de nuestro universo... Prepárate para ver lo que hemos construido juntos. ❤️" 
        }
    };

    // --- ENTRADA AL UNIVERSO Y MÚSICA ---
    enterBtn.addEventListener('click', () => {
        introSection.style.opacity = '0';
        setTimeout(() => {
            introSection.style.display = 'none';
        }, 1000);

        if (music) {
            music.play().catch(() => console.log("Audio autostart restringido por el navegador."));
        }
    });

    // --- CANVAS: MÁS DE 1000 ESTRELLAS Y MOVIMIENTO SUAVE ---
    let stars = [];
    const numStars = 1200;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function initStars() {
        stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                alpha: Math.random(),
                speed: Math.random() * 0.02 + 0.005
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();

            // Parpadeo de las estrellas
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) {
                star.speed = -star.speed;
            }
        });

        requestAnimationFrame(drawStars);
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        initStars();
    });

    resizeCanvas();
    initStars();
    drawStars();

    // --- ABRIR Y ESCRIBIR CARTAS (Efecto Typewriter) ---
    let typewriterTimeout;

    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            const letterId = folder.getAttribute('data-letter');
            
            if (letterId === "10") {
                // Carpeta 10 activa la secuencia especial final
                triggerFinalSequence();
            } else {
                openLetter(letterId);
            }
        });
    });

    function openLetter(id) {
        const data = lettersData[id];
        if (!data) return;

        letterTitle.textContent = data.title;
        letterText.textContent = "";
        modal.classList.remove('hidden');

        // Efecto Mecanografía poco a poco
        let index = 0;
        clearTimeout(typewriterTimeout);

        function typeWriter() {
            if (index < data.text.length) {
                letterText.textContent += data.text.charAt(index);
                index++;
                typewriterTimeout = setTimeout(typeWriter, 35);
            }
        }
        typeWriter();
    }

    // Cerrar modal de la carta
    closeLetterBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        clearTimeout(typewriterTimeout);
    });

    // Clic fuera del papel para cerrar
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            clearTimeout(typewriterTimeout);
        }
    });

    // --- ETAPA 6: SECUENCIA Y PANTALLA FINAL ---
    function triggerFinalSequence() {
        finalScreen.classList.remove('hidden');
    }
});