function explodeHearts() {
      const quantity = 100; // número de corações por clique

      for (let i = 0; i < quantity; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';

        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${Math.random() * window.innerHeight}px`;

        document.body.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 2000);
      }
    }

    document.addEventListener('click', explodeHearts);
